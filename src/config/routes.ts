import * as Router from "koa-router";
import * as accessService from '../service/swapi';

export const router = new Router({
    prefix: '/api'
});

router.get("/ping", async (ctx, next) => {
    ctx.body = { msg: "Pong"}

    await next();
});

router.get("/char/:num", async (ctx, next) => {
    const findNum = ctx.params.get('num');
    if (!(accessService.validateReturns(findNum))) {
        ctx.status = 400;
        await next();
    } else {
        ctx.body = accessService.getCharacters(findNum);
        ctx.status = 200;
        await next();
    }
})

router.get("/planet/:num", async (ctx, next) => {
    const findNum = ctx.params.get('num');
    if (!(accessService.validateReturns(findNum))) {
        ctx.status = 400;
        await next();
    } else {
        ctx.body = accessService.getPlanet(findNum);
        ctx.status = 200;
        await next();
    }
})

router.get("/starship/:num", async (ctx, next) => {
    const findNum = ctx.params.get('num');
    if (!(accessService.validateReturns(findNum))) {
        ctx.status = 400;
        await next();
    } else {
        ctx.body = accessService.getStarship(findNum);
        ctx.status = 200;
        await next();
    }
});