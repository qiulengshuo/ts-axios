const Koa = require("koa")
const app = new Koa()
const router = require("koa-router")()

app.use(require('koa-static')(__dirname + '/'))

router.get("/base/get", async (ctx, next) => {
  ctx.body = "base/get"
})

router.get("/url/get", async (ctx, next) => {
  // 获取 query 参数并返回到 body
  // body 会 JSON 化
  ctx.body = ctx.query
})

app.use(router.routes())

app.listen(3000, () => {
  console.log("监听3000端口")
})