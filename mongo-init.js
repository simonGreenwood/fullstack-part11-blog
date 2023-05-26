// add a new owner user to the mongodb

// https://docs.mongodb.com/manual/reference/method/db.createUser/
db.createUser({
  name: "root",
  pwd: "password",
  roles: [
    {
      role: "dbOwner",
      db: "bloglist",
    },
  ],
})
db.createCollection("blogs")
db.createCollection("users")
