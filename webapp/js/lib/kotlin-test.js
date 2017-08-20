(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-test'.");
    }
    root['kotlin-test'] = factory(typeof this['kotlin-test'] === 'undefined' ? {} : this['kotlin-test'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Throwable = Error;
  var AssertionError = Kotlin.kotlin.AssertionError;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Annotation = Kotlin.kotlin.Annotation;
  function get_asserter() {
    return _asserter != null ? _asserter : lookupAsserter();
  }
  var _asserter;
  function assertTrue(message, block) {
    if (message === void 0)
      message = null;
    assertTrue_0(block(), message);
  }
  function assertTrue_0(actual, message) {
    if (message === void 0)
      message = null;
    return get_asserter().assertTrue_4mavae$(message != null ? message : 'Expected value to be true.', actual);
  }
  function assertFalse(message, block) {
    if (message === void 0)
      message = null;
    assertFalse_0(block(), message);
  }
  function assertFalse_0(actual, message) {
    if (message === void 0)
      message = null;
    return get_asserter().assertTrue_4mavae$(message != null ? message : 'Expected value to be false.', !actual);
  }
  function assertEquals(expected, actual, message) {
    if (message === void 0)
      message = null;
    get_asserter().assertEquals_lzc6tz$(message, expected, actual);
  }
  function assertNotEquals(illegal, actual, message) {
    if (message === void 0)
      message = null;
    get_asserter().assertNotEquals_lzc6tz$(message, illegal, actual);
  }
  function assertNotNull(actual, message) {
    if (message === void 0)
      message = null;
    get_asserter().assertNotNull_67rc9h$(message, actual);
    return actual != null ? actual : Kotlin.throwNPE();
  }
  function assertNotNull_0(actual, message, block) {
    if (message === void 0)
      message = null;
    get_asserter().assertNotNull_67rc9h$(message, actual);
    if (actual != null) {
      block(actual);
    }
  }
  function assertNull(actual, message) {
    if (message === void 0)
      message = null;
    get_asserter().assertNull_67rc9h$(message, actual);
  }
  function fail(message) {
    if (message === void 0)
      message = null;
    get_asserter().fail_pdl1vj$(message);
  }
  function expect(expected, block) {
    assertEquals(expected, block());
  }
  function expect_0(expected, message, block) {
    assertEquals(expected, block(), message);
  }
  function assertFails(block) {
    return assertFails_0(null, block);
  }
  function assertFails_0(message, block) {
    try {
      block();
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        assertEquals(e.message, e.message);
        return e;
      }
       else
        throw e;
    }
    get_asserter().fail_pdl1vj$(messagePrefix(message) + 'Expected an exception to be thrown, but was completed successfully.');
  }
  var assertFailsWith = Kotlin.defineInlineFunction('kotlin-test.kotlin.test.assertFailsWith_cnau6l$', function (T_0, isT, message, block) {
    if (message === void 0)
      message = null;
    return _.kotlin.test.assertFailsWith_l9oqa2$(Kotlin.getKClass(T_0), message, block);
  });
  function assertFailsWith_0(exceptionClass, block) {
    return assertFailsWith_1(exceptionClass, null, block);
  }
  function Asserter() {
  }
  Asserter.prototype.assertTrue_o10pc4$ = function (lazyMessage, actual) {
    if (!actual) {
      this.fail_pdl1vj$(lazyMessage());
    }
  };
  function Asserter$assertTrue$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  Asserter.prototype.assertTrue_4mavae$ = function (message, actual) {
    this.assertTrue_o10pc4$(Asserter$assertTrue$lambda(message), actual);
  };
  function Asserter$assertEquals$lambda(closure$message, closure$expected, closure$actual) {
    return function () {
      return messagePrefix(closure$message) + ('Expected <' + Kotlin.toString(closure$expected) + '>, actual <' + Kotlin.toString(closure$actual) + '>.');
    };
  }
  Asserter.prototype.assertEquals_lzc6tz$ = function (message, expected, actual) {
    this.assertTrue_o10pc4$(Asserter$assertEquals$lambda(message, expected, actual), Kotlin.equals(actual, expected));
  };
  function Asserter$assertNotEquals$lambda(closure$message, closure$actual) {
    return function () {
      return messagePrefix(closure$message) + ('Illegal value: <' + Kotlin.toString(closure$actual) + '>.');
    };
  }
  Asserter.prototype.assertNotEquals_lzc6tz$ = function (message, illegal, actual) {
    this.assertTrue_o10pc4$(Asserter$assertNotEquals$lambda(message, actual), !Kotlin.equals(actual, illegal));
  };
  function Asserter$assertNull$lambda(closure$message, closure$actual) {
    return function () {
      return messagePrefix(closure$message) + ('Expected value to be null, but was: <' + Kotlin.toString(closure$actual) + '>.');
    };
  }
  Asserter.prototype.assertNull_67rc9h$ = function (message, actual) {
    this.assertTrue_o10pc4$(Asserter$assertNull$lambda(message, actual), actual == null);
  };
  function Asserter$assertNotNull$lambda(closure$message) {
    return function () {
      return messagePrefix(closure$message) + 'Expected value to be not null.';
    };
  }
  Asserter.prototype.assertNotNull_67rc9h$ = function (message, actual) {
    this.assertTrue_o10pc4$(Asserter$assertNotNull$lambda(message), actual != null);
  };
  Asserter.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Asserter',
    interfaces: []
  };
  function AsserterContributor() {
  }
  AsserterContributor.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'AsserterContributor',
    interfaces: []
  };
  function DefaultAsserter() {
  }
  DefaultAsserter.prototype.fail_pdl1vj$ = function (message) {
    if (message == null)
      throw new AssertionError();
    else
      throw new AssertionError(message);
  };
  DefaultAsserter.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DefaultAsserter',
    interfaces: [Asserter]
  };
  function messagePrefix(message) {
    return message == null ? '' : Kotlin.toString(message) + '. ';
  }
  function overrideAsserter(value) {
    var previous = _asserter;
    _asserter = value;
    return previous;
  }
  function todo(block) {
    println('TODO at ' + Kotlin.toString(block));
  }
  function assertFailsWith_1(exceptionClass, message, block) {
    var tmp$;
    var exception = assertFails_0(message, block);
    assertTrue_0(exceptionClass.isInstance_s8jyv4$(exception), messagePrefix(message) + ('Expected an exception of ' + exceptionClass + ' to be thrown, but was ' + exception));
    return Kotlin.isType(tmp$ = exception, Throwable) ? tmp$ : Kotlin.throwCCE();
  }
  function lookupAsserter() {
    return qunitAsserter;
  }
  var qunitAsserter;
  function QUnitAsserter() {
  }
  QUnitAsserter.prototype.assertTrue_o10pc4$ = function (lazyMessage, actual) {
    assertTrue_0(actual, lazyMessage());
  };
  QUnitAsserter.prototype.assertTrue_4mavae$ = function (message, actual) {
    ok(actual, message);
    if (!actual)
      this.failWithMessage_0(message);
  };
  QUnitAsserter.prototype.fail_pdl1vj$ = function (message) {
    ok(false, message);
    this.failWithMessage_0(message);
  };
  QUnitAsserter.prototype.failWithMessage_0 = function (message) {
    if (message == null)
      throw new AssertionError();
    else
      throw new AssertionError(message);
  };
  QUnitAsserter.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'QUnitAsserter',
    interfaces: [Asserter]
  };
  function Test(name) {
    if (name === void 0)
      name = '';
    this.name = name;
  }
  Test.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Test',
    interfaces: [Annotation]
  };
  var package$kotlin = _.kotlin || (_.kotlin = {});
  var package$test = package$kotlin.test || (package$kotlin.test = {});
  Object.defineProperty(package$test, 'asserter', {
    get: get_asserter
  });
  Object.defineProperty(package$test, '_asserter_8be2vx$', {
    get: function () {
      return _asserter;
    },
    set: function (value) {
      _asserter = value;
    }
  });
  package$test.assertTrue_i7pyzi$ = assertTrue;
  package$test.assertTrue_ifx8ge$ = assertTrue_0;
  package$test.assertFalse_i7pyzi$ = assertFalse;
  package$test.assertFalse_ifx8ge$ = assertFalse_0;
  package$test.assertEquals_3m0tl5$ = assertEquals;
  package$test.assertNotEquals_3m0tl5$ = assertNotEquals;
  package$test.assertNotNull_tkjle6$ = assertNotNull;
  package$test.assertNotNull_k6pbc4$ = assertNotNull_0;
  package$test.assertNull_dzvdf1$ = assertNull;
  package$test.fail_pdl1vj$ = fail;
  package$test.expect_e96eyq$ = expect;
  package$test.expect_rr7wld$ = expect_0;
  package$test.assertFails_o14v8n$ = assertFails;
  package$test.assertFails_9bodf6$ = assertFails_0;
  package$test.assertFailsWith_l9oqa2$ = assertFailsWith_1;
  package$test.assertFailsWith_jbbixx$ = assertFailsWith_0;
  package$test.Asserter = Asserter;
  package$test.AsserterContributor = AsserterContributor;
  package$test.DefaultAsserter = DefaultAsserter;
  package$test.messagePrefix_7efafy$ = messagePrefix;
  package$test.overrideAsserter_wbnzx$ = overrideAsserter;
  package$test.todo_o14v8n$ = todo;
  package$test.lookupAsserter_8be2vx$ = lookupAsserter;
  package$test.QUnitAsserter = QUnitAsserter;
  var package$org = _.org || (_.org = {});
  var package$junit = package$org.junit || (package$org.junit = {});
  package$junit.Test = Test;
  DefaultAsserter.prototype.assertTrue_o10pc4$ = Asserter.prototype.assertTrue_o10pc4$;
  DefaultAsserter.prototype.assertTrue_4mavae$ = Asserter.prototype.assertTrue_4mavae$;
  DefaultAsserter.prototype.assertEquals_lzc6tz$ = Asserter.prototype.assertEquals_lzc6tz$;
  DefaultAsserter.prototype.assertNotEquals_lzc6tz$ = Asserter.prototype.assertNotEquals_lzc6tz$;
  DefaultAsserter.prototype.assertNull_67rc9h$ = Asserter.prototype.assertNull_67rc9h$;
  DefaultAsserter.prototype.assertNotNull_67rc9h$ = Asserter.prototype.assertNotNull_67rc9h$;
  QUnitAsserter.prototype.assertEquals_lzc6tz$ = Asserter.prototype.assertEquals_lzc6tz$;
  QUnitAsserter.prototype.assertNotEquals_lzc6tz$ = Asserter.prototype.assertNotEquals_lzc6tz$;
  QUnitAsserter.prototype.assertNull_67rc9h$ = Asserter.prototype.assertNull_67rc9h$;
  QUnitAsserter.prototype.assertNotNull_67rc9h$ = Asserter.prototype.assertNotNull_67rc9h$;
  _asserter = null;
  qunitAsserter = new QUnitAsserter();
  Kotlin.defineModule('kotlin-test', _);
  return _;
}));
