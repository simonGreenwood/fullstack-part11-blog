const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const blogRouter = require("./controllers/blog")
const usersRouter = require("./controllers/users")
const loginRouter = require("./controllers/login")
const testingRouter = require("./controllers/testing")
const config = require("./utils/config")
const middleware = require("./utils/middleware")

mongoose.connect(config.MONGODB_URI)

app.use(express.static("frontend/build"))

app.use(cors())
app.use(express.json())
app.use(middleware.userExtractor)
app.use("/api/login", loginRouter)
app.use("/api/blogs", blogRouter)
app.use("/api/users", usersRouter)
if (process.env.NODE_ENV === "test") {
  app.use("/api/testing", testingRouter)
}
app.get("/health", (req, res) => {
  res.send("ok")
})

module.exports = app
