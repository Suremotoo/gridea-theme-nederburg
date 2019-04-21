const express = require('express')
const ejs = require('ejs')
const path = require('path')
const axios = require('axios')
const fs = require("fs")

const app = express()

app.use(express.static(__dirname))

app.set('views', path.join(__dirname, '/templates'));
app.set('view engine', 'ejs');

/**
 * Home Page & Post List Page
 */
app.get('/', async (req, res) => {
  const dataPath =  path.join(__dirname, '/mock/list.json').replace(/\\/g, "\/");
  let listData = JSON.parse(fs.readFileSync(dataPath));
  res.render('index', listData)
})

/**
 * Post Page
 */
app.get('/post/:postName', async (req, res) => {
  const dataPath =  path.join(__dirname, '/mock/post2.json').replace(/\\/g, "\/");
  let listData = JSON.parse(fs.readFileSync(dataPath));
  res.render('post', listData)
})

/**
 * Archives Page
 */
app.get('/archives', async (req, res) => {
  const dataPath =  path.join(__dirname, '/mock/archives.json').replace(/\\/g, "\/");
  let listData = JSON.parse(fs.readFileSync(dataPath));
  res.render('archives', listData)
})

/**
 * tags Page
 */
app.get('/tags', async (req, res) => {
  const dataPath =  path.join(__dirname, '/mock/tags.json').replace(/\\/g, "\/");
  let listData = JSON.parse(fs.readFileSync(dataPath));
  res.render('tags', listData)
})

/**
 * tag Page
 */
app.get('/tag/:tagName', async (req, res) => {
  const dataPath =  path.join(__dirname, '/mock/tag.json').replace(/\\/g, "\/");
  let listData = JSON.parse(fs.readFileSync(dataPath));
  res.render('tag', listData)
})

//使用8080端口
app.listen(3001)
console.log("The server is running on 3001")
