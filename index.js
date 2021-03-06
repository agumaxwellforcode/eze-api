const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes/routes") //import routes
const cors = require('cors')

mongoose
    .connect('mongodb+srv://cTs0vMm2mkhB8V4M:cTs0vMm2mkhB8V4M@cluster0.jcmy4.mongodb.net/eze-phone-shop?retryWrites=true&w=majority', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log("Connected")
		const app = express()
		app.use(express.json())
		app.use(cors(), routes)
		app.use("/api", routes)
		

		const PORT = process.env.PORT || 443
		app.listen(PORT, () => console.info(`server has started on ${PORT}`))
	})
	