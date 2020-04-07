const { Router } = require('express');
const Article = require('./article-model');
const router = Router();

router.get('/', async (req, res) => {
  const articles = await Article.find({});
  if (articles) {
    res.json(articles)
  }
})

router.post('/add', async (req, res) => {
  const { title, text, author } = req.body;
  const newArticle = new Article({ title, text, author });
  await newArticle.save()
  res.status(201).json({ success: true })
})

module.exports = router
