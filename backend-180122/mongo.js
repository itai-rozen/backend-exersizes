const mongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'


mongoClient.connect(url, (err,client) => {
    if (err) return console.log('error occured! ',err)
    const blogDb = client.db('blog')
    const createUser = (name,age) => {
        return {
            name: name,
            age: age,
            posts: []
        }
    }

    const createPost = (post, userId) => {
        return {
            author: ObjectId(userId),
            post: post
        }
    }

    const users = blogDb.collection('users')
    const posts = blogDb.collection('posts')
    users.insertOne(createUser('Gitai Gozen', 34),(err,res) => {
        if (err) return console.log('error while inserting: ',err)
        client.close()
    })
    posts.insertOne(createPost('this is my post'))





})