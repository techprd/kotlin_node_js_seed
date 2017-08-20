if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'main'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'main'.");
}
var main = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var i = $module$kotlinx_html_js.kotlinx.html.i_5g1p9k$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var set_classes = $module$kotlinx_html_js.kotlinx.html.set_classes_njy09m$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var set_onInputFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onInputFunction_pszlq2$;
  var input = $module$kotlinx_html_js.kotlinx.html.input_e1g74z$;
  var label = $module$kotlinx_html_js.kotlinx.html.label_yd75js$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var set_onSubmitFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onSubmitFunction_pszlq2$;
  var getForm = $module$kotlinx_html_js.kotlinx.html.getForm_mq1sio$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  View.prototype = Object.create(HTMLElement.prototype);
  View.prototype.constructor = View;
  function Task(desc) {
    this.isArchived = false;
  }
  Task.prototype.archive = function () {
    this.isArchived = true;
  };
  Task.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Task',
    interfaces: []
  };
  function Todo(inputVal, tasks) {
    if (inputVal === void 0)
      inputVal = '';
    if (tasks === void 0)
      tasks = ArrayList_init();
    this.inputVal = inputVal;
    this.tasks = tasks;
  }
  Todo.prototype.addTask_1jpnp$ = function (task) {
    this.tasks.add_11rb$(task);
  };
  Todo.prototype.getTask_za3lpa$ = function (index) {
    return this.tasks.get_za3lpa$(index);
  };
  Todo.prototype.getAllTasks = function () {
    return this.tasks;
  };
  function Todo$onInput$lambda(this$Todo) {
    return function (it) {
      var tmp$;
      var input = Kotlin.isType(tmp$ = it.currentTarget, HTMLInputElement) ? tmp$ : Kotlin.throwCCE();
      this$Todo.inputVal = input.value;
    };
  }
  Todo.prototype.onInput = function () {
    return Todo$onInput$lambda(this);
  };
  function Todo$onSubmit$lambda(it) {
    it.preventDefault();
    it.stopPropagation();
    console.log(it);
  }
  Todo.prototype.onSubmit = function () {
    return Todo$onSubmit$lambda;
  };
  function Todo$render$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('border_color');
  }
  function Todo$render$lambda$lambda$lambda$lambda$lambda_0(this$Todo) {
    return function ($receiver) {
      set_id($receiver, 'todo-input');
      set_classes($receiver, toSet(listOf('validate')));
      $receiver.type = InputType.text;
      $receiver.name = 'task_desc';
      set_onInputFunction($receiver, this$Todo.onInput());
    };
  }
  function Todo$render$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.for_ = 'icon_prefix';
    $receiver.unaryPlus_pdl1vz$('Todo Task');
  }
  function Todo$render$lambda$lambda$lambda$lambda(this$Todo) {
    return function ($receiver) {
      i($receiver, 'material-icons prefix', Todo$render$lambda$lambda$lambda$lambda$lambda);
      input($receiver, void 0, void 0, void 0, void 0, void 0, Todo$render$lambda$lambda$lambda$lambda$lambda_0(this$Todo));
      label($receiver, 'active', Todo$render$lambda$lambda$lambda$lambda$lambda_1);
    };
  }
  function Todo$render$lambda$lambda$lambda(this$Todo) {
    return function ($receiver) {
      div($receiver, 'input-field col s6', Todo$render$lambda$lambda$lambda$lambda(this$Todo));
    };
  }
  function Todo$render$lambda$lambda(this$Todo) {
    return function ($receiver) {
      div($receiver, 'row', Todo$render$lambda$lambda$lambda(this$Todo));
      set_onSubmitFunction($receiver, this$Todo.onSubmit());
    };
  }
  function Todo$render$lambda(this$Todo) {
    return function ($receiver) {
      getForm($receiver, '/', null, 'col s12', Todo$render$lambda$lambda(this$Todo));
    };
  }
  Todo.prototype.render = function () {
    return div_0(get_create(document), 'row', Todo$render$lambda(this));
  };
  Todo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Todo',
    interfaces: []
  };
  function View() {
    HTMLElement.call(this);
  }
  View.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'View',
    interfaces: []
  };
  function main(args) {
    var tmp$, tmp$_0;
    console.info('main function');
    var header = Kotlin.isType(tmp$ = document.getElementById('message'), HTMLHeadingElement) ? tmp$ : Kotlin.throwCCE();
    var formContainer = Kotlin.isType(tmp$_0 = document.getElementById('formContainer'), HTMLDivElement) ? tmp$_0 : Kotlin.throwCCE();
    header.innerText = 'ToDo Sample app';
    var form = new Todo();
    formContainer.append(form.render());
  }
  _.Task = Task;
  _.Todo = Todo;
  _.View = View;
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('main', _);
  return _;
}(typeof main === 'undefined' ? {} : main, kotlin, this['kotlinx-html-js']);

//# sourceMappingURL=main.js.map
