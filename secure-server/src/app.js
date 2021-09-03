import express from 'express';
// 路由
import systeminfo from './route/systeminfo';
import posts from './route/posts';
const app = express();
// res body 的解析
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 載入路由
app.use('/systeminfo', systeminfo);
app.use('/posts', posts);
app.use((req, res, next) => {
  console.log(req.originalUrl);
  res.status(404).send('<h1>Page not found on the server</h1>');
});

// 開啟轉案
const port = 80;
console.log('run on 80');
app.listen(port);
