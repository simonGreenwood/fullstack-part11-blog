const supertest = require("supertest")
const app = require("../app")
const api = supertest(app)
const User = require("../models/user")
const bcrypt = require("bcrypt")
beforeEach(async () => {
  await User.deleteMany({})

  const passwordHash = await bcrypt.hash("sekret", 10)
  const user = new User({
    username: "root",
    name: "root",
    passwordHash: passwordHash,
  })
  await user.save()
})

test("login as user", async () => {
  const response = await api
    .post("/api/login")
    .send({
      username: "root",
      name: "root",
      password: "sekret",
    })
    .expect(200)
    .expect("Content-Type", /application\/json/)
  expect(response.body.username).toBe("root")
  expect(response.body.name).toBe("root")
  expect(response.body.passwordHash).toBe(undefined)
  const user = await User.findOne({ username: "root" })
  const passwordCorrect =
    user === null ? false : await bcrypt.compare("sekret", user.passwordHash)
  expect(passwordCorrect).toBe(true)
})
/*
test('create a blog with token', async () => {
  const response = await api.post('/api/login')
    .send({
        username: 'root',
        name: "root",
        password: 'sekret'
    })
    .expect(200)
    .expect('Content-Type', /application\/json/)

  const token = response.body.token
  const decodedToken = jwt.verify(token, process.env.SECRET)
  console.log(decodedToken)
  const blog = {
    title: 'test blog',
    author: "simon",
    url: "www.exampleee.com",
    likes: 1   
  }
  await api.post('/api/blogs')
    .set('Authorization', `bearer ${token}`)
    .send(blog)
    .expect(201)
    .expect('Content-Type', /application\/json/)
  const blogsAtEnd = await Blog.find({})
  expect(blogsAtEnd.length).toBe(helper.initialBlogs.length + 1)
})*/
