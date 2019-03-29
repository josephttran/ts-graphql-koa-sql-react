import Koa from 'koa';
import Router from 'koa-router';

const router = new Router();

router.get('/', (ctx: Koa.Context) => {
  ctx.status = 200;
  ctx.body = {
    message: 'hello'
  }
})

export default router;