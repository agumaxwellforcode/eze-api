const express = require("express")
const buyRequests = require("../models/buyRequest") 
const sellRequests = require("../models/sellRequest") 
const base = require("../controllers/import") // new
const trigger = require("../controllers/loadData") 
const router = express.Router()



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


 router.get("/iphones/data/trigger333", paginatedResults(sellRequests), (req, res) => {
	res.json(res.paginatedResults)
  })

  router.get("/iphones/", paginatedResults(sellRequests), (req, res) => {
	res.json(res.paginatedResults)
  })

  

  router.get("/iphones/query", paginatedResults(sellRequests), (req, res) => {
	res.json(res.paginatedResults)
  })

  router.get('/phoness', function(req, res, next) {

	let userQueryRequest = {};
	for (var propName in req.query) {
		if (req.query.hasOwnProperty(propName)) {
			userQueryRequest[propName]=(req.query[propName])	
		}
		
	}
	res.send(userQueryRequest);
  });

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