//load .env file
require("dotenv").config()

const MONGODB_URI =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGODB_URI
    : process.env.NODE_ENV === "development"
    ? process.env.DEV_MONGODB_URI
    : process.env.MONGODB_URI

console.log(MONGODB_URI)
const PORT = process.env.PORT || process.env.BACKEND_PORT
module.exports = { PORT, MONGODB_URI }

