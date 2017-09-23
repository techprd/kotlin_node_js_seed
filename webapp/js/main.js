if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'main'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'main'.");
}
var main = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var li = $module$kotlinx_html_js.kotlinx.html.js.li_525bpd$;
  var span = $module$kotlinx_html_js.kotlinx.html.span_6djfml$;
  var i = $module$kotlinx_html_js.kotlinx.html.i_5g1p9k$;
  var set_onInputFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onInputFunction_pszlq2$;
  var label = $module$kotlinx_html_js.kotlinx.html.label_yd75js$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var set_onSubmitFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onSubmitFunction_pszlq2$;
  var form = $module$kotlinx_html_js.kotlinx.html.form_3vb3wm$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var set_classes = $module$kotlinx_html_js.kotlinx.html.set_classes_njy09m$;
  var h5 = $module$kotlinx_html_js.kotlinx.html.h5_aplb7s$;
  var li_0 = $module$kotlinx_html_js.kotlinx.html.li_yzv5uh$;
  var ul = $module$kotlinx_html_js.kotlinx.html.ul_pzlyaf$;
  var p = $module$kotlinx_html_js.kotlinx.html.p_8pggrc$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var input = $module$kotlinx_html_js.kotlinx.html.input_e1g74z$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var set_onKeyPressFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onKeyPressFunction_pszlq2$;
  function Task(desc) {
    this.isArchived = false;
    this.text = desc;
  }
  Task.prototype.archive = function () {
    this.isArchived = true;
  };
  Task.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Task',
    interfaces: []
  };
  function Todo(formContainer) {
    this.formContainer = formContainer;
    this.inputVal = '';
    this.storage = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var $receiver = ['Buy Milk', 'Check Post office', 'Call john'];
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      this.storage.add_11rb$(new Task(element));
    }
  }
  Todo.prototype.registerEvents_0 = function () {
  };
  Todo.prototype.addTask_1jpnp$ = function (task) {
    this.storage.add_11rb$(task);
  };
  Todo.prototype.getTask_za3lpa$ = function (index) {
    return this.storage.get_za3lpa$(index);
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
  function Todo$onSubmit$lambda$lambda$lambda($receiver) {
  }
  function Todo$onSubmit$lambda$lambda(closure$task) {
    return function ($receiver) {
      todoItem($receiver, closure$task, Todo$onSubmit$lambda$lambda$lambda);
    };
  }
  function Todo$onSubmit$lambda(this$Todo) {
    return function (it) {
      var tmp$;
      it.preventDefault();
      var task = new Task(this$Todo.inputVal);
      this$Todo.addTask_1jpnp$(task);
      (tmp$ = document.getElementById('task-collection')) != null ? tmp$.append(li(get_create(document), 'collection-item avatar dismissable', Todo$onSubmit$lambda$lambda(task))) : null;
    };
  }
  Todo.prototype.onSubmit = function () {
    return Todo$onSubmit$lambda(this);
  };
  Todo.prototype.render = function () {
    this.formContainer.appendChild(this.getForm());
  };
  function Todo$getForm$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('ToDo Sample app');
  }
  function Todo$getForm$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('border_color');
  }
  function Todo$getForm$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Todo) {
    return function ($receiver) {
      set_onInputFunction($receiver, this$Todo.onInput());
    };
  }
  function Todo$getForm$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.for_ = 'icon_prefix';
    $receiver.unaryPlus_pdl1vz$('Todo Task');
  }
  function Todo$getForm$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$Todo) {
    return function ($receiver) {
      i($receiver, 'material-icons prefix', Todo$getForm$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      inputView($receiver, Todo$getForm$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Todo));
      label($receiver, 'active', Todo$getForm$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1);
    };
  }
  function Todo$getForm$lambda$lambda$lambda$lambda$lambda$lambda(this$Todo) {
    return function ($receiver) {
      div($receiver, 'input-field', Todo$getForm$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$Todo));
    };
  }
  function Todo$getForm$lambda$lambda$lambda$lambda$lambda_0(this$Todo) {
    return function ($receiver) {
      div($receiver, 'row', Todo$getForm$lambda$lambda$lambda$lambda$lambda$lambda(this$Todo));
      set_onSubmitFunction($receiver, this$Todo.onSubmit());
    };
  }
  function Todo$getForm$lambda$lambda$lambda$lambda(this$Todo) {
    return function ($receiver) {
      span($receiver, 'card-title', Todo$getForm$lambda$lambda$lambda$lambda$lambda);
      form($receiver, '/', null, void 0, void 0, Todo$getForm$lambda$lambda$lambda$lambda$lambda_0(this$Todo));
    };
  }
  function Todo$getForm$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    set_id($receiver, 'task-collection');
  }
  function Todo$getForm$lambda$lambda$lambda$lambda_0(this$Todo) {
    return function ($receiver) {
      listView($receiver, this$Todo.storage, Todo$getForm$lambda$lambda$lambda$lambda$lambda_1);
    };
  }
  function Todo$getForm$lambda$lambda$lambda(this$Todo) {
    return function ($receiver) {
      div($receiver, 'card-content', Todo$getForm$lambda$lambda$lambda$lambda(this$Todo));
      div($receiver, 'card-action', Todo$getForm$lambda$lambda$lambda$lambda_0(this$Todo));
    };
  }
  function Todo$getForm$lambda$lambda(this$Todo) {
    return function ($receiver) {
      div($receiver, 'card collection', Todo$getForm$lambda$lambda$lambda(this$Todo));
    };
  }
  function Todo$getForm$lambda(this$Todo) {
    return function ($receiver) {
      div($receiver, 'col l8 m12 s12', Todo$getForm$lambda$lambda(this$Todo));
    };
  }
  Todo.prototype.getForm = function () {
    return div_0(get_create(document), 'row', Todo$getForm$lambda(this));
  };
  Todo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Todo',
    interfaces: []
  };
  function main(args) {
    var tmp$, tmp$_0;
    var header = Kotlin.isType(tmp$ = document.getElementById('message'), HTMLHeadingElement) ? tmp$ : Kotlin.throwCCE();
    var formContainer = Kotlin.isType(tmp$_0 = document.getElementById('formContainer'), HTMLDivElement) ? tmp$_0 : Kotlin.throwCCE();
    (new Todo(formContainer)).render();
  }
  function listView$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('List of Tasks');
  }
  function listView$lambda$lambda($receiver) {
    h5($receiver, void 0, listView$lambda$lambda$lambda);
  }
  function listView$lambda$lambda$lambda$lambda($receiver) {
  }
  function listView$lambda$lambda$lambda_0(closure$it) {
    return function ($receiver) {
      todoItem($receiver, closure$it, listView$lambda$lambda$lambda$lambda);
    };
  }
  function listView$lambda(closure$tasks, closure$block) {
    return function ($receiver) {
      set_classes($receiver, setOf('collection with-header'));
      li_0($receiver, 'collection-header cyan', listView$lambda$lambda);
      var tmp$;
      tmp$ = closure$tasks.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        li_0($receiver, 'collection-item avatar dismissable', listView$lambda$lambda$lambda_0(element));
      }
      closure$block($receiver);
    };
  }
  function listView($receiver, tasks, block) {
    ul($receiver, void 0, listView$lambda(tasks, block));
  }
  function todoItem$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('insert_chart');
  }
  function todoItem$lambda$lambda_0(closure$task) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$task.text);
    };
  }
  function todoItem$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Personal');
  }
  function todoItem$lambda$lambda$lambda(closure$randomId) {
    return function ($receiver) {
      set_id($receiver, closure$randomId);
      set_classes($receiver, setOf('filled-in'));
      $receiver.type = InputType.checkBox;
    };
  }
  function todoItem$lambda$lambda$lambda_0(closure$randomId, closure$task) {
    return function ($receiver) {
      $receiver.for_ = closure$randomId;
      $receiver.unaryPlus_pdl1vz$('Done');
      set_onClickFunction($receiver, markAsDone(closure$task));
    };
  }
  function todoItem$lambda$lambda_2(closure$randomId, closure$task) {
    return function ($receiver) {
      input($receiver, void 0, void 0, void 0, void 0, void 0, todoItem$lambda$lambda$lambda(closure$randomId));
      label($receiver, void 0, todoItem$lambda$lambda$lambda_0(closure$randomId, closure$task));
    };
  }
  function todoItem$lambda(closure$task, closure$randomId, closure$block) {
    return function ($receiver) {
      i($receiver, 'material-icons circle green', todoItem$lambda$lambda);
      span($receiver, 'title left-align', todoItem$lambda$lambda_0(closure$task));
      p($receiver, void 0, todoItem$lambda$lambda_1);
      div($receiver, 'secondary-content', todoItem$lambda$lambda_2(closure$randomId, closure$task));
      closure$block($receiver);
    };
  }
  function todoItem($receiver, task, block) {
    var randomId_0 = randomId();
    div($receiver, void 0, todoItem$lambda(task, randomId_0, block));
  }
  function markAsDone$lambda(it) {
    console.log(it);
  }
  function markAsDone(task) {
    return markAsDone$lambda;
  }
  function randomId() {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i <= 4; i++)
      text += String.fromCharCode(Kotlin.unboxChar(possible.charCodeAt(Math.floor(Math.random() * possible.length))));
    return text;
  }
  function inputView$lambda(closure$block) {
    return function ($receiver) {
      var tmp$;
      set_id($receiver, 'todo-input');
      set_classes($receiver, setOf('validate'));
      $receiver.type = InputType.text;
      $receiver.name = 'task_desc';
      $receiver.autoFocus = true;
      closure$block($receiver);
      set_onKeyPressFunction($receiver, typeof (tmp$ = onInputViewKeyPress()) === 'function' ? tmp$ : Kotlin.throwCCE());
    };
  }
  function inputView($receiver, block) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, inputView$lambda(block));
  }
  function onInputViewKeyPress$lambda(it) {
    var tmp$;
    if (it.which === 13) {
      var input = Kotlin.isType(tmp$ = it.currentTarget, HTMLInputElement) ? tmp$ : Kotlin.throwCCE();
      input.value = '';
    }
  }
  function onInputViewKeyPress() {
    return onInputViewKeyPress$lambda;
  }
  _.Task = Task;
  _.Todo = Todo;
  _.main_kand9s$ = main;
  _.listView_jku3xe$ = listView;
  _.todoItem_t3zc6n$ = todoItem;
  _.markAsDone_1jpnp$ = markAsDone;
  _.randomId = randomId;
  _.inputView_q9xvdb$ = inputView;
  _.onInputViewKeyPress = onInputViewKeyPress;
  main([]);
  Kotlin.defineModule('main', _);
  return _;
}(typeof main === 'undefined' ? {} : main, kotlin, this['kotlinx-html-js']);

//# sourceMappingURL=main.js.map
