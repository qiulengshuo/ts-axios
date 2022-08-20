const Koa = require("koa")
const bodyParser = require("koa-bodyparser")
const app = new Koa()
const router = require("koa-router")()

app.use(bodyParser())
app.use(require('koa-static')(__dirname + '/'))

router.get("/base/get", async (ctx, next) => {
  ctx.body = "base/get"
})

router.get("/url/get", async (ctx, next) => {
  // 获取 query 参数并返回到 body
  // body 会 JSON 化
  ctx.body = ctx.query
})

router.post("/url/post", async (ctx, next) => {
  // 通过中间件 koa-bodyparser 解析 request 中的 body 
  console.log(ctx.request.body)
  ctx.body = ctx.request.body
})

app.use(router.routes())

app.listen(3000, () => {
  console.log("监听3000端口")
})