(function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main$lambda(closure$port) {
    return function () {
      println('Example app listening on port ' + Kotlin.toString(closure$port) + '!');
    };
  }
  function main(args) {
    println('Server Starting!');
    var express = require('express');
    var app = express();
    var path = require('path');
    var debug = require('debug')('kotlin_node_js:server');
    var http = require('http');
    var port = normalizePort(process.env.PORT);
    app.set('port', port);
    app.set('views', path.join(__dirname, '../../webapp'));
    app.set('view engine', 'ejs');
    app.use(express.static('webapp'));
    var server = http.createServer(app);
    app.listen(port, main$lambda(port));
    app.use('/', router());
  }
  function normalizePort(arg) {
    var port = arg;
    if (port >= 0) {
      return port;
    }
    return 3000;
  }
  function Customer(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.isPreferred = false;
  }
  Customer.prototype.makePreferred = function () {
    this.isPreferred = true;
  };
  Customer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Customer',
    interfaces: []
  };
  function router$lambda(closure$cust) {
    return function (req, res) {
      return res.render('index', closure$cust);
    };
  }
  function router() {
    var express = require('express');
    var router = express.Router();
    var cust = new Customer(1, 'John', 'john@gmail.com');
    router.get('/', router$lambda(cust));
    return router;
  }
  _.main_kand9s$ = main;
  _.normalizePort_za3lpa$ = normalizePort;
  var package$model = _.model || (_.model = {});
  package$model.Customer = Customer;
  _.router = router;
  main([]);
  Kotlin.defineModule('app', _);
  return _;
}(module.exports, require('kotlin')));

//# sourceMappingURL=app.js.map
