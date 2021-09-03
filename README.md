# 模擬目錄遍歷 Path Traversal 攻擊

利用 `..%2f` 原理，進行 api 路由的攻擊。

## 安裝套件

```
npm install
```

## 執行中介伺服器

```
npm run server
```

## 執行內部伺服器

```
npm run secure-server
```

## 問題

當我在網址輸入 `http://127.0.0.1:3000/api/posts/..%2fsysteminfo`

中介伺服器接受到之後會先 encoded 成 `http://127.0.0.1:3000/api/posts/../systeminfo`
但是當我要跟內部伺服器要資料時，因為 axois 的 url 傳的是 `http://127.0.0.1:3000/api/posts/../systeminfo`，並沒有像瀏覽一樣轉成 `http://127.0.0.1:3000/api/systeminfo`，導致我無法模擬出來。

## 目前猜想

是不是 axios 套件有針對 '../' 做調整，但是我找不到相關文獻內容。
