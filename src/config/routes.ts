import * as Router from "koa-router";

export const router = new Router({
    prefix: '/api'
});

router.get("/ping", async (ctx, next) => {
    ctx.body = { msg: "Pong"}

    await next()
});

router.get("/char/:num", async (ctx, next) => {
    const findNum = ctx.params.get('num');
    //mandar pro service de busca na swapi
})

router.get("/planet/:num", async (ctx, next) => {
    const findNum = ctx.params.get('num');
    //mandar pro service de busca na swapi
})

router.get("/starship/:num", async (ctx, next) => {
    const findNum = ctx.params.get('num');
    //mandar pro service de busca na swapi
});

router.get("/vehicle/:num", async (ctx, next) => {
    const findNum = ctx.params.get('num');
    //mandar pro service de busca na swapi
})