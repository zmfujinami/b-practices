import * as express from "express";
import {Post} from './models/Post'
import {Author} from './models/Author'
import {Category} from './models/Category'

const cors = require('cors')

const app = express()
app.use(cors());

app.get('/post', async (req, res) => {
  const result: Post[] = [
    {
      id: 1,
      url: 'url1',
      title: 'タイトル1',
      body: '中身です。',
      category_id: [1],
      is_published: false,
      author_id: 1,
      price: 1000
    },
    {
      id: 2,
      url: 'url2',
      title: 'タイトル2',
      body: '中身です。',
      category_id: [1],
      is_published: false,
      author_id: 1,
      price: 1000
    },
    {
      id: 3,
      url: 'url3',
      title: 'タイトル3',
      body: '中身です。',
      category_id: [1],
      is_published: false,
      author_id: 1,
      price: 1000
    }
  ]
  res.send(result)
})

app.get('/post/:id', async (req, res) => {
  const result: Post = {
    id: 1,
    url: 'url1',
    title: 'タイトル1',
    body: '中身です。',
    category_id: [1],
    is_published: false,
    author_id: 1,
    price: 1000
  }
  res.send(result)
})

app.post('/post', async (req, res) => {
  res.send()
})

app.put('/post/:id', async (req, res) => {
  res.send()
})

app.delete('/post/:id', async (req, res) => {
  res.send()
})

app.get('/author', async (req, res) => {
  const result: Author[] = [
    {
      id: 1,
      name: '著者1'
    },
    {
      id: 2,
      name: '著者2'
    },
    {
      id: 3,
      name: '著者3'
    }
  ]
  res.send(result)
})

app.get('/category', async (req, res) => {
  const result: Category[] = [
    {
      id: 1,
      name: 'カテゴリ1'
    },
    {
      id: 2,
      name: 'カテゴリ2'
    },
    {
      id: 3,
      name: 'カテゴリ3'
    }
  ]
  res.send(result)
})

app.listen(8081, () => console.log(`Example app listening on port 8081`));