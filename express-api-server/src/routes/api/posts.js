const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find().toArray());
});

router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        title: req.body.title,
        body: req.body.body,
        createdOn: new Date()
    });
    res.status(201).send();
});

router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

const MONGO_USERNAME = 'scott';
const MONGO_PASSWORD = 'tiger';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'twb';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
console.log(url);

async function loadPostsCollection() {
    const client = await mongodb.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

    return client.db('twb').collection('posts');
}

module.exports = router;