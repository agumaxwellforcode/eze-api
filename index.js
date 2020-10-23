const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes/routes") // new
// const base = require("./controllers/import") // new

mongoose
    .connect('mongodb+srv://cTs0vMm2mkhB8V4M:cTs0vMm2mkhB8V4M@cluster0.jcmy4.mongodb.net/eze-phone-shop?retryWrites=true&w=majority', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log("Connected")
		const app = express()
		app.use(express.json()) // new
		app.use("/api", routes)
		

		const PORT = process.env.PORT || 5000
		app.listen(PORT, () => console.info(`server has started on ${PORT}`))
	})
	