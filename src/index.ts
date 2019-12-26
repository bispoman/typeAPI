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

//Routes
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log("Koa server started");
})