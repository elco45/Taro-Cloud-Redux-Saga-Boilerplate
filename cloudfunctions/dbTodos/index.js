const cloud = require('wx-server-sdk');
const TcbRouter = require('tcb-router');

cloud.init();
const db = cloud.database();

exports.main = event => {
  const wxContext = cloud.getWXContext();
  const app = new TcbRouter({ event });

  app.router('addTodo', async ctx => {
    try {
      const { description } = event;

      const res = await db.collection('todos').add({
        data: {
          openId: wxContext.OPENID,
          createdAt: db.serverDate(),
          description,
        },
      });

      ctx.body = res.data;
    } catch (error) {
      ctx.body = {
        code: -1,
        err: error.errMsg,
      };
    }
  });

  app.router('getTodos', async ctx => {
    try {
      const res = await db.collection('todos').get();

      ctx.body = res.data;
    } catch (error) {
      ctx.body = {
        code: -1,
        err: error.errMsg,
      };
    }
  });

  app.router('getTodo', async ctx => {
    try {
      const { _id } = event;
      const res = await db
        .collection('todos')
        .doc(_id)
        .get();

      ctx.body = res.data;
    } catch (error) {
      ctx.body = {
        code: -1,
        err: error.errMsg,
      };
    }
  });

  app.router('deleteTodo', async ctx => {
    try {
      const { _id } = event;
      await db
        .collection('todos')
        .doc(_id)
        .remove();

      ctx.body = _id;
    } catch (error) {
      ctx.body = {
        code: -1,
        err: error.errMsg,
      };
    }
  });

  app.router('updateTodo', async ctx => {
    try {
      const { _id, description } = event;
      const res = await db
        .collection('todos')
        .doc(_id)
        .update({
          data: {
            description,
          },
        });

      ctx.body = res.data;
    } catch (error) {
      ctx.body = {
        code: -1,
        err: error.errMsg,
      };
    }
  });

  return app.serve();
};
