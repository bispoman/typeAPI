import * as Koa from "koa";
import * as Router from "koa-router";

import * as logger from "koa-logger";
import * as json from "koa-json";
import * as bodyParser from "koa-bodyparser";

const app = new Koa();
const router = new Router();

//Ping endpoint
router.get("/ping", async (ctx, next) => {
    ctx.body = { msg: "Pong" };

    await next();
});

router.post("/posting", async (ctx, next) => {
    const data = ctx.request.body;
    ctx.body = data;
    await next();
})

//Middlewares
app.use(json());
app.use(logger());
app.use(bodyParser());

//Routes
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log("Koa server started");
})