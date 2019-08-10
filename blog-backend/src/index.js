require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const mongoose = require('mongoose');
const api = require('./api');
const session = require('koa-session');
const app = new Koa();
const router = new Router();
const ssr = require('./ssr');
const path = require('path');
const serve = require('koa-static');

const staticPath = path.join(__dirname, '../../blog-frontend/build');

const {
    PORT: port = 4000,
    MONGO_URI: mongoURI,
    COOKIE_SIGN_KEY: signKey
} = process.env;

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.connect(mongoURI, { useNewUrlParser: true }).then(() => {
    console.log('connected to mongodb');
}).catch((e) => {
    console.error(e);
});


app.use(bodyParser());
const sessionConfig = {
    maxAge: 86400000,
}
app.use(session(sessionConfig, app));
app.keys = [signKey];

router.use('/api', api.routes());
router.get('/',ssr);
app.use(router.routes()).use(router.allowedMethods());

app.use(serve(staticPath));
app.use(ssr);
app.listen(port, () => {
    console.log('listening to port', port);
});
