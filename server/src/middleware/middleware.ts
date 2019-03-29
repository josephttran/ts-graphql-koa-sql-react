import Koa from 'koa';
import compose from 'koa-compose';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import logger from 'koa-logger';

async function handleError(ctx: Koa.Context, next: Function){
  try {
    await next();
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      message: err.message
    };
    ctx.app.emit('error', err, ctx);    
  }
}

function middleware() {
  return compose([
    handleError,
    logger(),
    cors(),
    helmet()
  ]);
}

export default middleware;

