var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
console.log("here")
  res.render('index', { title: 'Express' });
});


router.get('/login', function(req, res, next) {
	console.log("tank you for lgoin :D")
  //TODO your code starts here
  res.render('signin', { title: 'login'} );
});

router.get('/signup', function(req, res, next) {
  //TODO your code starts here
  console.log("tan u for sgin up :>")
  res.render('signup', { title: 'login'} );
});

router.post('/authenticateUser', function(req, res, next) {
  //TODO your code starts here
  const db = req.con;
    user = req.body.user
    password = req.body.password
    sql = "SELECT * FROM Users WHERE User = '"+user+"'"
    db.query(sql, function(err, result){
        if (err) throw err;
        console.log(result)
        if (result.length != 0) {
            if (result[0].Password == password) {
                console.log("succedodededad");
                res.end('omega big brain monke dude, u are moar smort than monke');
            }
        }
        else {
            res.end('you have been banished to the land of the nerds. LOL')
        }
	});
    
});

router.post('/registerUser', function(req, res, next) {
  console.log("hehe funni")
  //TODO your code starts here
    const db = req.con;
    user = req.body.user
    password = req.body.password
    repassword = req.body.Repassword

    if (password == repassword){
        sql = "INSERT INTO Users (User, Password) VALUES ('"+user+"', '"+password+"')"
        db.query(sql, function (err, result){
            if (err) throw err;
            console.log("succedodededad");
          res.render("index", {title: 'u are moar smort than monke'});
	    });
	}
    else{
     console.log("NO U BAD NO SAEM PASSWORD");
     res.render("signup", {title: 'funni haha'});
	}
});
module.exports = router;
