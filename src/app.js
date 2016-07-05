import express, {Router} from 'express';
import bodyParser from 'body-parser';

var app = express();
var router = Router();

app.use(express.static())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

router.get('/', (req, res, next) => {
	res.send('Hello World!');
});

app.use('/', router);

app.listen(3000, () => {
	console.log('server running at 3000.');
});