import * as Router from "koa-router";
import * as accessService from '../service/swapi';

export const router = new Router({
    prefix: '/api'
});

router.get("/ping", async (ctx, next) => {
    ctx.body = { msg: "Pong"}
});

router.get("/char/:num", async (ctx, next) => {
    const findNum = ctx.params.get('num');
    
    return ctx.finish(accessService.getCharacters(findNum));
})

router.get("/planet/:num", async (ctx, next) => {
    const findNum = ctx.params.get('num');

    return ctx.finish(accessService.getPlanet(findNum));
});

router.get("/starship/:num", async (ctx, next) => {
    const findNum = ctx.params.get('num');
    
    return ctx.finish(accessService.getStarship(findNum));
});