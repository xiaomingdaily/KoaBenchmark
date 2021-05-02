const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());
app.use(router.routes());

router.get('/',async ctx => {
  let str = "";
  if(ctx.request.query.str!=null){
    str = ctx.request.query.str;//获取get提交的参数
  }
  try{
    require('fs').writeFileSync('/tmp/flag.txt','xxxxxx');//在目录中写入flag.txt
  ctx.body = `
  <!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>test</title>
</head>
<body>
<h1>在下框中输入任意文字</h1>
  <form action="/" method="get"><!--form表单，用来提交数据--!>
    <input name="str" type="text"  />
    <button type="submit">提交</button>
  </form>
  <h1>${require('child_process').execSync('echo '+str+' | xargs -dX').toString()}</h1>
  <!--执行命令: echo ${str} | xargs -dX --!>
</body>
</html>
`;
    }catch(e){
        ctx.throw(400,e.message);
    }
});

app.listen(3000)