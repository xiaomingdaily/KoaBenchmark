
// https://www.tutorialspoint.com/koajs/koajs_hello_world.htm
// 假如说路由写的是'/user/:name/:pwd',koa2会自动把属性写到context的params里面去，取得时候写context.params.name就可以取到name的值，同理pwd也一样
const Koa = require('koa')
const Router = require('koa-router');

const app = new Koa()
const router = new Router()
router.get('/package/:aid',async (ctx)=>{
    //获取动态路由的传值
    console.log(ctx.params.aid);  //{ aid: '123', cid: '456' }
    console.log(ctx.params);  //{ aid: '123', cid: '456' }
    ctx.body="详情";
})

  
  app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3008,()=>{
    console.log('server is starting at port 3005');
})