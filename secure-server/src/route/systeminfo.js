import express from 'express';
const router = express.Router();

const data = '機密資料 例如打版測試等';

router.get('/', (req, res) => {
  res.send(data);
});

export default router;
