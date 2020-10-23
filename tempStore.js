


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