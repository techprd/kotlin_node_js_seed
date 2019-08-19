(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'common'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('common'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'app'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'app'.");
    }
    if (typeof common === 'undefined') {
      throw new Error("Error loading module 'app'. Its dependency 'common' was not found. Please, check whether 'common' is loaded prior to 'app'.");
    }
    root.app = factory(typeof app === 'undefined' ? {} : app, kotlin, common);
  }
}(this, function (_, Kotlin, $module$common) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var utils = $module$common.utils;
  var Unit = Kotlin.kotlin.Unit;
  var Task = $module$common.model.Task;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  function main$lambda(closure$port) {
    return function () {
      println('Example app listening on port ' + closure$port + '!');
      return Unit;
    };
  }
  function main(args) {
    println('Server Starting!');
    var express = require('express');
    var app = express();
    var path = require('path');
    var bodyParser = require('body-parser');
    var http = require('http');
    var port = utils.Utils.normalizePort_za3lpa$(process.env.PORT);
    app.use(bodyParser.json());
    app.set('port', port);
    app.set('views', path.join(__dirname, '../../webapp/public'));
    app.set('view engine', 'ejs');
    app.use(express.static('webapp/public'));
    http.createServer(app);
    app.listen(port, main$lambda(port));
    app.use('/', router());
  }
  function router$lambda(f, res) {
    return res.render('index');
  }
  function router$lambda_0(closure$db) {
    return function (f, res) {
      return res.send(toList(closure$db.values));
    };
  }
  function router$lambda_1(closure$db) {
    return function (req, res) {
      return res.json(closure$db.get_11rb$(req.params.id));
    };
  }
  function router$lambda_2(closure$db) {
    return function (req, res) {
      var task = JSON.parse(JSON.stringify(req.body));
      var $receiver = closure$db;
      var key = task.id;
      $receiver.put_xwzc9p$(key, task);
      return res.json(task);
    };
  }
  function router() {
    var express = require('express');
    var router = express.Router();
    var db = HashMap_init();
    var $receiver = ['Kotlin is Awesome!', 'Buy Milk', 'Check Post office', 'Call John'];
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var id = utils.Utils.randomId();
      var value = new Task(id, element);
      db.put_xwzc9p$(id, value);
    }
    router.get('/', router$lambda);
    router.get('/tasks', router$lambda_0(db));
    router.get('/task/:id', router$lambda_1(db));
    router.post('/task/:id', router$lambda_2(db));
    return router;
  }
  _.main_kand9s$ = main;
  _.router = router;
  main([]);
  Kotlin.defineModule('app', _);
  return _;
}));

//# sourceMappingURL=app.js.map
