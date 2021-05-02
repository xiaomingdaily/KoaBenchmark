
// https://www.tutorialspoint.com/koajs/koajs_hello_world.htm
// Demo2: 路由写的是'/user/:name/:pwd',koa2会自动把属性写到context的params里面去，取得时候写context.params.name就可以取到name的值，同理pwd也一样
// 可能有url跳转
const Koa = require('koa')
const Router = require('koa-router');

const app = new Koa()
const router = new Router()
router.get('/package/:url',async (ctx)=>{
    let url = "https://www.baidu.com/"
    router.url(url);
})
  
app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3009,()=>{
    console.log('server is starting at port 3005');
})