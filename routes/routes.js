const express = require("express")
const posts = require("../models/Post") 
const buyRequests = require("../models/buyRequest") 
const sellRequests = require("../models/sellRequest") 
const base = require("../controllers/import") // new
const router = express.Router()



// Get all buy  requests with pagination  [ /api/iphones/buy2?page=1&limit=5 ]
router.get('/iphones/buy2', paginatedResults(buyRequests), (req, res) => {
	res.json(res.paginatedResults)
  })

 // Get all Sell  requests with pagination  [ /api/iphones/buy2?page=1&limit=5 ]
router.get('/iphones/sell2', paginatedResults(sellRequests), (req, res) => {
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
		results.results = await model.find().limit(limit).skip(startIndex).exec()
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




// Get all buy  requests
router.get("/iphones/buy", async (req, res) => {
	 await buyRequests.find({}, (err, results) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send({
				"code":200,
				"status":"success",
				"message":"Requests returned successfully",
				"data":results,
			});
        }
	})
})



// Get all Sell  requests
router.get("/iphones/sell", async (req, res) => {
	await sellRequests.find({}, (err, results) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send({
				"code":200,
				"status":"success",
				"message":"Sell requests returned successfully",
				"data":results,
			});
        }
	})
})



router.post("/posts", async (req, res) => {
	console.log("here");
	const newPost = new posts({
		title: req.body.title,
		content: req.body.content,
	})
	await newPost.save()
	res.send(newPost)
})




router.get("/posts/:id", async (req, res) => {
	try {
		const editPost = await posts.findOne({ _id: req.params.id })
		res.send(editPost)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})

router.patch("/posts/:id", async (req, res) => {
	try {
		const editPost = await posts.findOne({ _id: req.params.id })

		if (req.body.title) {
			editPost.title = req.body.title
		}

		if (req.body.content) {
			editPost.content = req.body.content
		}

		await editPost.save()
		res.send(editPost)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})

router.delete("/posts/:id", async (req, res) => {
	try {
		await posts.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})

module.exports = router