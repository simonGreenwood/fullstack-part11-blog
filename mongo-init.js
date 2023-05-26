db.createUser({
  user: "simon",
  pwd: "simon",
  roles: [
    {
      role: "dbOwner",
      db: "the_database",
    },
  ],
})
