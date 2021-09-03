import express from 'express';
const router = express.Router();

const data = [
  {
    id: 1,
    title: '旅行週記',
    content: '寫信告訴我海是什麼顏色',
  },
  {
    id: 2,
    title: '美食紀錄',
    content: '傳說中有個廚具...',
  },
  {
    id: 3,
    title: '前端資訊安全筆記',
    content: '今天終於來告訴大家怎麼去駭別人的資料了',
  },
];

router.get('/', (req, res) => {
  res.send(data);
});

router.get('/:id', (req, res) => {
  res.send(data.filter((item) => item.id === Number(req.params.id)));
});

export default router;
