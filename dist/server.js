const Koa = require("koa")
const app = new Koa()
const router = require("koa-router")()

app.use(require('koa-static')(__dirname + '/'))

router.get("/simple/get", async (ctx, next) => {
  ctx.body = "simple/get"
})

app.use(router.routes())

app.listen(3000, () => {
  console.log("监听3000端口")
})