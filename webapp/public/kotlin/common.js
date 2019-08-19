(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'common'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'common'.");
    }
    root.common = factory(typeof common === 'undefined' ? {} : common, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var Random = Kotlin.kotlin.random.Random;
  var numberToInt = Kotlin.numberToInt;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Math_0 = Math;
  function TodoEventEmitter() {
    this.events_0 = LinkedHashMap_init();
  }
  TodoEventEmitter.prototype.on_8yg5sx$ = function (eventName, callback) {
    var tmp$;
    if (this.events_0.containsKey_11rb$(eventName)) {
      (tmp$ = this.events_0.get_11rb$(eventName)) != null ? tmp$.add_11rb$(callback) : null;
    }
     else {
      var $receiver = this.events_0;
      var value = arrayListOf([callback]);
      $receiver.put_xwzc9p$(eventName, value);
    }
  };
  TodoEventEmitter.prototype.trigger_9wwc8o$ = function (eventName, task) {
    var tmp$;
    if (this.events_0.containsKey_11rb$(eventName)) {
      if ((tmp$ = this.events_0.get_11rb$(eventName)) != null) {
        var tmp$_0;
        tmp$_0 = tmp$.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          element(task);
        }
      }
    }
  };
  TodoEventEmitter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TodoEventEmitter',
    interfaces: []
  };
  function Task(id, text) {
    this.id = id;
    this.text = text;
    this.isArchived = false;
    this.isDone = false;
  }
  Task.prototype.markAsDone = function () {
    this.isDone = true;
  };
  Task.prototype.archive = function () {
    this.isArchived = true;
  };
  Task.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Task',
    interfaces: []
  };
  Task.prototype.component1 = function () {
    return this.id;
  };
  Task.prototype.component2 = function () {
    return this.text;
  };
  Task.prototype.copy_puj7f4$ = function (id, text) {
    return new Task(id === void 0 ? this.id : id, text === void 0 ? this.text : text);
  };
  Task.prototype.toString = function () {
    return 'Task(id=' + Kotlin.toString(this.id) + (', text=' + Kotlin.toString(this.text)) + ')';
  };
  Task.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    return result;
  };
  Task.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.text, other.text)))));
  };
  function Utils() {
    Utils_instance = this;
  }
  Utils.prototype.randomId = function () {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i <= 4; i++) {
      var tmp$ = String;
      var tmp$_0 = tmp$.fromCharCode;
      var x = Random.Default.nextDouble() * possible.length;
      text += tmp$_0.call(tmp$, possible.charCodeAt(numberToInt(Math_0.floor(x))));
    }
    return text;
  };
  Utils.prototype.normalizePort_za3lpa$ = function (arg) {
    if (arg >= 0) {
      return arg;
    }
    return 3000;
  };
  Utils.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Utils',
    interfaces: []
  };
  var Utils_instance = null;
  function Utils_getInstance() {
    if (Utils_instance === null) {
      new Utils();
    }
    return Utils_instance;
  }
  var package$events = _.events || (_.events = {});
  package$events.TodoEventEmitter = TodoEventEmitter;
  var package$model = _.model || (_.model = {});
  package$model.Task = Task;
  var package$utils = _.utils || (_.utils = {});
  Object.defineProperty(package$utils, 'Utils', {
    get: Utils_getInstance
  });
  Kotlin.defineModule('common', _);
  return _;
}));

//# sourceMappingURL=common.js.map
