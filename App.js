/********************************************************/
/***** Custom Requires *****/
/********************************************************/
const config = require('./config');
config.app.enableNewrelic && require('./newrelic');
const logger = require('./logger');
/********************************************************/
/***** Node Modules *****/
/********************************************************/
const fs = require('fs');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const moment = require('moment-timezone');
const fileUpload = require('express-fileupload');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const cache = require('memory-cache');
let memCache = new cache.Cache();
const swaggerDocument = yaml.load(config.openapi.swaggerDoc);

// const session = require('express-session');
// const MySQLStore = require('express-mysql-session')(session);
const csrf = require('csurf');
/********************************************************/
/***** Require API Routes *****/
/********************************************************/
const api = require('./routes/api/index');

/********************************************************/
/***** Require APP Routes *****/
/********************************************************/

// const index = require('./routes/index');
// const users = require('./routes/users');
// const animals = require('./routes/animals');

/********************************************************/
/***** Spawn Express App *****/
/********************************************************/
const app = express();

/********************************************************/
/***** Require CORS *****/
/********************************************************/
var cors = require('cors');

/********************************************************/
/***** Production Settings *****/
/********************************************************/
if (config.app.env !== 'development') {
    var helmet = require('helmet');
    var minify = require('express-minify');
    var minifyHTML = require('express-minify-html');
    var uglifyEs = require('uglify-es');
    var compression = require('compression');
    app.use(compression());
    app.use(minify());
    app.use(minifyHTML({
        uglifyJsModule: uglifyEs,
        override: true,
        exception_url: false,
        htmlMinifier: {
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true,
            minifyJS: true
        }
    }));
    app.use(helmet());
}

/********************************************************/
/***** Set View Engine For Express. *****/
/***** '/views' folder acts as *****/
/***** theme folder *****/
/********************************************************/
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

/********************************************************/
/***** Connect MYSQL *****/
/********************************************************/
const dbCreds = {
    host: config.db.host,
    port: config.db.port,
    database: config.db.name,
    user: config.db.user,
    password: config.db.password,
}

/********************************************************/
/***** Configure Middlewares *****/
/********************************************************/
app.use(logger.express);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(cors());
// app.use(fileUpload());

/* Configure Sessions in MySQL */
// const sessionStore = new MySQLStore(dbCreds);
// const sessionSecret = fs.readFileSync('./sessionSecret').toString();
// app.use(session({
//     store: sessionStore,
//     secret: sessionSecret,
//     resave: true,
//     saveUninitialized: true
// }));

/********************************************************/
/***** Setup local functions *****/
/********************************************************/
let cacheMiddleware = (duration) => {
    return (req, res, next) => {
        let key =  '__express__' + req.originalUrl || req.url
        let cacheContent = memCache.get(key);
        if(cacheContent){
            res.send( cacheContent );
            return
        }else{
            res.sendResponse = res.send
            res.send = (body) => {
                memCache.put(key,body,duration*1000);
                res.sendResponse(body)
            }
            next()
        }
    }  
};


app.use((req, res, next) => {
        const cacheUrls = [
            '/api/v1/landing-page',
            '/api/v1/common/objectsCache/smartSearch',
            '/api/v1/common/objectsCache/pdpExclusiveOffer',
            '/api/v1/common/objectsCache/globalSearch',
            '/api/v1/common/objectsCache/static-page',
            '/api/v1/common/objectsCache/getStates',
            '/api/v1/common/objectsCache/getMegaMenuObjects',
            '/api/v1/common/objectsCache/getAllBrands',
            '/api/v1/common/objectsCache/getAllServices',
            '/api/v1/common/objectsCache/getAllProducts',
            '/api/v1/common/objectsCache/homePage',
            '/api/v1/common/objectsCache/homePageOld',
            '/api/v1/common/objectsCache/checkServiceAvailability',
            '/api/v1/common/objectsCache/getBrandList',
            '/api/v1/common/objectsCache/getMetaData',
            '/api/v1/common/objectsCache/getHeaderContent',
            '/api/v1/common/objectsCache/salonListInCities',
            '/api/v1/common/objectsCache/searchAutosuggestion',
            '/api/v1/common/objectsCache/packageById',
            '/api/v1/common/objectsCache/getMenu',
            '/api/v1/common/objectsCache/getCategoryFilters',
            '/api/v1/common/objectsCache/categoryWiseProduct',
            '/api/v1/common/objectsCache/searchResult',
            '/api/v1/common/objectsCache/searchResultPage',
            '/api/v1/common/objectsCache/productDetails',
            '/api/v1/common/objectsCache/productDetailsBySku',
            '/api/v1/common/objectsCache/getServicesAndCategory',
            '/api/v1/common/objectsCache/customerNameEmail',
            'api/v1/maps/autocomplete',
            'api/v1/maps/details',
        ]
        if(config.app.enableCache){
             req.method ==='GET' && cacheUrls.includes(req.path) && res.set('Cache-control', 'public, max-age=3600,s-maxage=21600')
        }
        req.Core = {
            Models: require('./models'),
            ErrorCodes: require('./errorCodes')
        };
    
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Credentials', true);

    next();
})
/********************************************************/
/***** Define Routes *****/
/********************************************************/
/* APP ROUTES */

// app.get('/api') ? app.use('/api', cacheMiddleware(3600), api) :
app.use('/api', api)
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1/clear-cache', (req, res) => {
    memCache.clear();
    
    res.send({status:true, data: 'Successfully Cleared Cache'});
}); 
// app.use((req, res, next) => {
//     req.method === "GET" ?
//     app.use('/api', cacheMiddleware(3600), api) : app.use('/api', api) 
//     next();
// })

/********************************************************/
/***** Init CSRF *****/
/********************************************************/
app.use(csrf());

/********************************************************/
/***** Setup local functions *****/
/********************************************************/
app.use((req, res, next) => {
    req.uploadDir = config.app.uploadDir;
    // res.locals.session = req.session;
    res.locals.env = config.app.env;
    res.locals._csrf = req.csrfToken();
    res.locals.csrf_html = '<input type="hidden" value="' + req.csrfToken() + '" name="_csrf" />';
    res.locals.formatDate = (date, format) => {
        let fDate = moment(date).format(format);
        return (fDate === 'Invalid date') ? '' : fDate;
    };
    res.locals.addStyle = (styles) => {
        let dep = '';
        if (typeof styles !== 'undefined') {
            styles.forEach((style) => {
                dep += '<link rel="stylesheet" href="' + style + '">'
            })
        }
        return dep;
    }
    res.locals.addScript = (script) => {
        let dep = '';
        if (typeof script !== 'undefined') {
            script.forEach((script) => {
                dep += '<script src="' + script + '"></script>'
            })
        }
        return dep;
    }
    next();
});

/********************************************************/
/******* Use this function as middleware in Route *******/
/******* to allow access to sessioned users *************/
/********************************************************/
function checkAuth(req, res, next) {
    
    if (!req.session.user) {
        res.redirect('/login');
    } else {
        next();
    }
}

/********************************************************/
/***** Define Routes *****/
/********************************************************/
/* APP ROUTES */
// app.use('/', index);
// app.use('/users', checkAuth,  users);
// app.use('/animals', checkAuth, animals);

/********************************************************/
/***** Logout and destroy all set sessions *****/
/********************************************************/
app.use('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

/********************************************************/
/***** Handle 404 Template *****/
/********************************************************/
app.use('/404', (req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/********************************************************/
/***** Handle 403 Template *****/
/********************************************************/
app.use('/403', (req, res) => {
    res.status(403)
    res.render('unauthorized', {
        title: 'Unauthorized Access'
    });
});

/********************************************************/
/***** Error Handlers *****/
/********************************************************/
if (config.app.env !== 'development') {
    app.use((err, req, res) => {
        res.status(err.status || 500);
        res.render('error', {
            title: 'Error',
            status: err.status,
            message: err.message,
            error: err
        });
    });
} else {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        logger.error.error(err.stack)
        next()
    })
}

/********************************************************/
/***** CORS options to IP Whitelist *****/
/********************************************************/
var whitelist = ['https://enrich-dev.herokuapp.com/', 'http://localhost:3000', 'https://ce3a-2405-201-c024-e079-ddc1-31c7-bded-189d.ngrok.io']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// CORS MIDDLEWARE WITH OPTIONS
//app.use(cors({origin: "*",preflightContinue: true}));

app.use(cors({
    origin: '*'
    //methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  
}));


/********************************************************/
/***** Start Node app *****/
/********************************************************/
app.set('port', process.env.PORT || process.env.APP_PORT || config.app.port);
app.listen(app.get('port'), () => {
    logger.info.info("UI started on Port " + app.get('port'));
    // logger.info.info("Config", config);

});
