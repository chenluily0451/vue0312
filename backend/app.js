/**
 * Created by chenlu on 2019/3/12.
 */
const Koa = require('koa');
const app = new Koa();

app.listen(3030,() =>{
    console.log('port 3030 has been listened...')
})