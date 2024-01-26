const Koa = require("koa");
const app = new Koa();
const static = require("koa-static");
const { historyApiFallback } = require("koa2-connect-history-api-fallback");
app.use(historyApiFallback());
app.use(static("./dist"));
app.listen(8059, () => {
    console.log("Koa本地预览服务已开启, http://localhost:8059");
});