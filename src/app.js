import express, {Router} from 'express';
import bodyParser from 'body-parser';

var app = express();
var router = Router();

// app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

router.get('/', (req, res, next) => {
	res.send('Hello World!');
});

router.get('/user', (req, res) => {
	res.send('this is user page.');
});

app.use('/', router);

app.listen(3000, () => {
	console.log('server running at 3000.');
});