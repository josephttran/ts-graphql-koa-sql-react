import Koa from 'koa';
import chalk from 'chalk';
import 'reflect-metadata';
import { createConnection} from "typeorm";

import apolloServer from './graphql/schema'
import { environment, ormConfig } from './config';
import middleware from './middleware/middleware';
import router from './routes/routes';

const app = new Koa();
const path = '/graphql';

app.use(middleware());

app.on('error', (err: Error, ctx: Koa.Context) => {
  console.log(chalk.blue('status code: '), chalk.yellow(ctx.status.toString()));
  console.log(chalk.red('error message:'), chalk.red(err.message));
});

app.use(router.routes());

apolloServer.applyMiddleware({ app, path });

(async () => {
  try {
    await createConnection(ormConfig);
    
    app.listen(environment.port, () => {
      console.log(`Server ready at http://localhost:${environment.port}${apolloServer.graphqlPath}`);
    });        
  } catch(err) {
    console.log(err)
  }
})();
