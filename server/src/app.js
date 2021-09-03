import express from 'express';
import axios from 'axios';
// 路由
const app = express();
// res body 的解析
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 載入路由
app.get('/api/posts/:postId', (req, res) => {
  console.log(req.params.postId);
  axios
    .get(`http://127.0.0.1:3001/posts/${req.params.postId}`)
    .then((response) => {
      return res.send(response.data);
    })
    .catch((e) => {
      return res.send('存取失敗');
    });
});

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found on the server</h1>');
});

// 開啟專案
const port = 3000;
app.listen(port, () => {
  console.log('http://127.0.0.1:3000/api/posts/1');
});
