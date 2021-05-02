var koa = require('koa');
var app = new koa();

// https://www.tutorialspoint.com/koajs/koajs_hello_world.htm
app.use(function* (){
   this.body = 'Hello world!';
});

app.listen(3000, function(){
   console.log('Server running on https://localhost:3000')
});
