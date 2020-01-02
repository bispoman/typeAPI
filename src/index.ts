import * as Koa from "koa";
import { router } from "./config/routes"

import * as logger from "koa-logger";
import * as json from "koa-json";
import * as bodyParser from "koa-bodyparser";

const app = new Koa();

//Middlewares
app.use(json());
app.use(logger());
app.use(bodyParser());

app.use(async (ctx, next) => {

    ctx.finish = (body:string, status:number) => {
        ctx.body = body;
        ctx.status = status; 
    }

    try {
        await next()
    } catch (error) {
        if (error.defaultError) {
            ctx.body = error.body;
            ctx.status = error.status;
        }
    }
});

app.use(async (ctx, next) => {
    // roda codigo maluco antes de tudo
    function validateReturns() {
        const num = ctx.params.get('num');
        if (num == null) {
            var parsedInt = Number(num);
            if (isNaN(parsedInt)) {
                return ctx.finish('bad request', 400);
            }
            return ctx.finish('bad request', 400);
        }
        //jogar isso como middleware!
    }
    validateReturns();
    await next()
});

//Routes
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log("Koa server started");
})