require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const mongoose = require('mongoose');
const api = require('./api');


const {
    PORT: port = 4000,
    MONGO_URI: mongoURI
} = process.env;

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, { useNewUrlParser: true }).then(() => {
    console.log('connected to mongodb');
}).catch((e) => {
    console.error(e);
});

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());


app.listen(port, () => {
    console.log('listening to port', port);
});
