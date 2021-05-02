
// https://www.tutorialspoint.com/koajs/koajs_hello_world.htm
// ctx.body = ctx.res.body = ctx.response.body
// ctx.url=ctx.request.url
// ctx.type=ctx.response.type

const Koa = require('koa')
const app = new Koa()
app.use(async(ctx)=>{
    let url =ctx.url
    //从request中获取GET请求
    let request =ctx.request
    let req_query = request.query
    let req_querystring = request.querystring
    //从上下文中直接获取
    let ctx_query = ctx.query
    let ctx_querystring = ctx.querystring

    console.log(ctx.url); // /?color=blue&size=small
    console.log(ctx.originalUrl); // /?color=blue&size=small
    console.log(ctx.origin); // http://localhost:3000
    console.log(ctx.querystring); // color=blue&size=small
    console.log(ctx.query); // { color: 'blue', size: 'small' }
    console.log(ctx.query.color); // { color: 'blue', size: 'small' }

    ctx.body={
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }
})

app.listen(3005,()=>{
    console.log('server is starting at port 3005');
})