if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'main'.");
}
var main = function (_, Kotlin) {
  'use strict';
  function main(args) {
    var tmp$;
    console.info('main function');
    var header = Kotlin.isType(tmp$ = document.getElementById('message'), HTMLHeadingElement) ? tmp$ : Kotlin.throwCCE();
    header.innerText = 'Customer Information';
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('main', _);
  return _;
}(typeof main === 'undefined' ? {} : main, kotlin);

//# sourceMappingURL=main.js.map
