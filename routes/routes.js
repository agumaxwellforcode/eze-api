const express = require("express")
const buyRequests = require("../models/buyRequest") 
const sellRequests = require("../models/sellRequest") 
const base = require("../controllers/import") // new
const trigger = require("../controllers/loadData") 
const router = express.Router()








router.get("/",  (req, res)  => {
	
	const requestType = req.query.request
	 paginateds(requestType)
	res.json(res.paginateds)
  })


 async function paginateds(model) {
	  console.log(model);
	return async (req, res, next) => {
		console.log("dhgfkh");
	  const page = parseInt(req.query.page)
	  const limit = parseInt(req.query.limit)
  
	  const startIndex = (page - 1) * limit
	  const endIndex = page * limit
  
	  const results = {}
  
	  if (endIndex < await model.countDocuments().exec()) {
		results.next = {
		  page: page + 1,
		  limit: limit
		}
	  }
	  
	  if (startIndex > 0) {
		results.previous = {
		  page: page - 1,
		  limit: limit
		}
	  }
	  try {
		let userQueryRequest = {};
		for (var propName in req.query) {
			if (req.query.hasOwnProperty(propName) && !(req.query.hasOwnProperty(page)) && !(req.query.hasOwnProperty(limit)) ) {
				userQueryRequest[propName]=(req.query[propName])	
			}
			
		}
		delete userQueryRequest.page; //Remove the pagination page parameter from the request
		delete userQueryRequest.limit; //Remove the pagination limit parameter from the request
		results.results = await model.find(userQueryRequest).limit(limit).skip(startIndex).exec()
		res.paginatedResults = {
			"code":200,
			"status":"success",
			"message":"Requests returned successfully",
			"data":results,
		}
		next()
	  } catch (e) {
		res.status(500).json({ message: e.message })
	  }
	}
  }



























// Get all buy  requests with pagination  [ /api/iphones/buy2?page=1&limit=5 ]
router.get('/iphones/buy2', paginatedResults(buyRequests), (req, res) => {
	res.json(res.paginatedResults)
  })

 // Get all Sell  requests with pagination  [ /api/iphones/buy2?page=1&limit=5 ]
router.get('/iphones/sell2', paginatedResults(sellRequests), (req, res) => {
	res.json(res.paginatedResults)
  })






 // Trigger Data Reload
 router.get('/iphones/data/trigger', trigger.triggerReload)








  router.get("/iphones/", paginatedResults(sellRequests), (req, res) => {
	res.json(res.paginatedResults)
  })

  

  router.get("/iphones/query", paginatedResults(sellRequests), (req, res) => {
	res.json(res.paginatedResults)
  })

  function paginatedResults(model) {
	return async (req, res, next) => {
	  const page = parseInt(req.query.page)
	  const limit = parseInt(req.query.limit)

	
	  const startIndex = (page - 1) * limit
	  const endIndex = page * limit
  
	  const results = {}
  
	  if (endIndex < await model.countDocuments().exec()) {
		results.next = {
		  page: page + 1,
		  limit: limit
		}
	  }
	  
	  if (startIndex > 0) {
		results.previous = {
		  page: page - 1,
		  limit: limit
		}
	  }
	  try {
		let userQueryRequest = {};
		for (var propName in req.query) {
			if (req.query.hasOwnProperty(propName) && !(req.query.hasOwnProperty(page)) && !(req.query.hasOwnProperty(limit)) ) {
				userQueryRequest[propName]=({ $regex : new RegExp(req.query[propName], "i") })	// Add Regular expression to handle sensitivity
			}
		}
	
		delete userQueryRequest.page; //Remove the pagination page parameter from the request
		delete userQueryRequest.limit; //Remove the pagination limit parameter from the request
		
		if (userQueryRequest.max && userQueryRequest.min) { // Check if price range is present (should be set to min = 0 and max = highest price on the table from the front end (client))
			const maxPrice = parseInt(req.query.max); // Assign price ranges to variables from the original request parameter to avoid regex from the loop
			const minPrice = parseInt(req.query.min); // Same

			//Clean the request parameters and send only the needed ones	
			
			delete userQueryRequest.max; //Remove the pagination max parameter from the request as there is no provision for it in the model
			delete userQueryRequest.min; //Remove the pagination min parameter from the request as there is no provision for it in the model
			
			const price = 'price';
			userQueryRequest[price]=({ $gte: minPrice, $lte: maxPrice }) // Assign the min and max values as a price range parameter
			

			results.results = await model.find(userQueryRequest).limit(limit).skip(startIndex).exec() // Query the table with the parameters supplied
			res.paginatedResults = {
				"code":200,
				"status":"success",
				"message":"Requests returned successfully",
				"data":results,
			}
			next()
		} else{
			results.results = await model.find(userQueryRequest).limit(limit).skip(startIndex).exec()
			res.paginatedResults = {
				"code":200,
				"status":"success",
				"message":"Requests returned successfully",
				"data":results,
			}
			next()
		}


	  } catch (e) {
		res.status(500).json({ message: e.message })
	  }
	}
  }


  
//   function paginatedResults(model) {
// 	return async (req, res, next) => {
// 	  const page = parseInt(req.query.page)
// 	  const limit = parseInt(req.query.limit)
  
// 	  const startIndex = (page - 1) * limit
// 	  const endIndex = page * limit
  
// 	  const results = {}
  
// 	  if (endIndex < await model.countDocuments().exec()) {
// 		results.next = {
// 		  page: page + 1,
// 		  limit: limit
// 		}
// 	  }
	  
// 	  if (startIndex > 0) {
// 		results.previous = {
// 		  page: page - 1,
// 		  limit: limit
// 		}
// 	  }
// 	  try {
// 		  userRequest = {}
// 		results.results = await model.find().limit(limit).skip(startIndex).exec()
// 		res.paginatedResults = {
// 			"code":200,
// 			"status":"success",
// 			"message":"Requests returned successfully",
// 			"data":results,
// 		}
// 		next()
// 	  } catch (e) {
// 		res.status(500).json({ message: e.message })
// 	  }
// 	}
//   }


module.exports = router