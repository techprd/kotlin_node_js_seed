if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'main'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'main'.");
}
var main = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var LinkedHashMap = Kotlin.kotlin.collections.LinkedHashMap;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
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
  StorageService.prototype = Object.create(LinkedHashMap.prototype);
  StorageService.prototype.constructor = StorageService;
  function TodoEventEmitter() {
    this.events_0 = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$();
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
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TodoEventEmitter',
    interfaces: []
  };
  function main(args) {
    var tmp$;
    var formContainer = Kotlin.isType(tmp$ = document.getElementById('formContainer'), HTMLDivElement) ? tmp$ : Kotlin.throwCCE();
    (new Todo(formContainer)).render();
  }
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
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Task',
    interfaces: []
  };
  function StorageService(eventEmitter) {
    LinkedHashMap_init(this);
    this.eventEmitter = eventEmitter;
    this.addEvent = 'addTask';
    this.doneEvent = 'doneEvent';
    this.undoneEvent = 'undoneEvent';
    this.eventEmitter.on_8yg5sx$(this.addEvent, StorageService_init$lambda);
    this.eventEmitter.on_8yg5sx$(this.doneEvent, StorageService_init$lambda_0);
    this.eventEmitter.on_8yg5sx$(this.undoneEvent, StorageService_init$lambda_1);
  }
  StorageService.prototype.put_xwzc9p$ = function (key, value) {
    this.eventEmitter.trigger_9wwc8o$(this.addEvent, value);
    return LinkedHashMap.prototype.put_xwzc9p$.call(this, key, value);
  };
  function StorageService_init$lambda(it) {
    console.log('added task: %s', it.text);
  }
  function StorageService_init$lambda_0(it) {
    console.log('marked task: %s as done', it.text);
  }
  function StorageService_init$lambda_1(it) {
    console.log('marked task: %s as undone', it.text);
  }
  StorageService.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'StorageService',
    interfaces: [LinkedHashMap]
  };
  function Todo(formContainer) {
    this.formContainer = formContainer;
    this.inputVal = '';
    this.eventEmitter_0 = new TodoEventEmitter();
    this.storage_0 = new StorageService(this.eventEmitter_0);
    var $receiver = ['Buy Milk', 'Check Post office', 'Call John'];
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var id = randomId();
      this.storage_0.put_xwzc9p$(id, new Task(id, element));
    }
  }
  Todo.prototype.registerEvents_0 = function () {
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
  function Todo$onSubmit$lambda$lambda(this$Todo, closure$task) {
    return function ($receiver) {
      todoItem($receiver, this$Todo.storage_0, closure$task, Todo$onSubmit$lambda$lambda$lambda);
    };
  }
  function Todo$onSubmit$lambda(this$Todo) {
    return function (it) {
      var tmp$;
      it.preventDefault();
      var id = randomId();
      var task = new Task(id, this$Todo.inputVal);
      this$Todo.storage_0.put_xwzc9p$(id, task);
      (tmp$ = document.getElementById('task-collection')) != null ? tmp$.append(li(get_create(document), 'collection-item avatar dismissable', Todo$onSubmit$lambda$lambda(this$Todo, task))) : null;
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
    $receiver.unaryPlus_pdl1vz$('add a new task');
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
      listView($receiver, this$Todo.storage_0, Todo$getForm$lambda$lambda$lambda$lambda$lambda_1);
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
      div($receiver, 'col l12 m12 s12', Todo$getForm$lambda$lambda(this$Todo));
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
  function listView$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('List of Tasks');
  }
  function listView$lambda$lambda($receiver) {
    h5($receiver, void 0, listView$lambda$lambda$lambda);
  }
  function listView$lambda$lambda$lambda$lambda($receiver) {
  }
  function listView$lambda$lambda$lambda_0(closure$storage, closure$task) {
    return function ($receiver) {
      todoItem($receiver, closure$storage, closure$task, listView$lambda$lambda$lambda$lambda);
    };
  }
  function listView$lambda(closure$storage, closure$block) {
    return function ($receiver) {
      set_classes($receiver, setOf('collection with-header'));
      li_0($receiver, 'collection-header cyan', listView$lambda$lambda);
      var $receiver_0 = closure$storage;
      var tmp$;
      tmp$ = $receiver_0.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var closure$storage_0 = closure$storage;
        var task = element.value;
        li_0($receiver, 'collection-item avatar dismissable', listView$lambda$lambda$lambda_0(closure$storage_0, task));
      }
      closure$block($receiver);
    };
  }
  function listView($receiver, storage, block) {
    ul($receiver, void 0, listView$lambda(storage, block));
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
  function todoItem$lambda$lambda$lambda(closure$inputId) {
    return function ($receiver) {
      set_id($receiver, closure$inputId);
      set_classes($receiver, setOf('filled-in'));
      $receiver.type = InputType.checkBox;
    };
  }
  function todoItem$lambda$lambda$lambda_0(closure$inputId, closure$storage, closure$task) {
    return function ($receiver) {
      $receiver.for_ = closure$inputId;
      $receiver.unaryPlus_pdl1vz$('Done');
      set_onClickFunction($receiver, markAsDone(closure$storage, closure$task));
    };
  }
  function todoItem$lambda$lambda_2(closure$inputId, closure$storage, closure$task) {
    return function ($receiver) {
      input($receiver, void 0, void 0, void 0, void 0, void 0, todoItem$lambda$lambda$lambda(closure$inputId));
      label($receiver, void 0, todoItem$lambda$lambda$lambda_0(closure$inputId, closure$storage, closure$task));
    };
  }
  function todoItem$lambda(closure$task, closure$inputId, closure$storage, closure$block) {
    return function ($receiver) {
      set_id($receiver, closure$task.id);
      i($receiver, 'material-icons circle green', todoItem$lambda$lambda);
      span($receiver, 'title left-align', todoItem$lambda$lambda_0(closure$task));
      p($receiver, void 0, todoItem$lambda$lambda_1);
      div($receiver, 'secondary-content', todoItem$lambda$lambda_2(closure$inputId, closure$storage, closure$task));
      closure$block($receiver);
    };
  }
  function todoItem($receiver, storage, task, block) {
    var inputId = randomId();
    div($receiver, void 0, todoItem$lambda(task, inputId, storage, block));
  }
  function markAsDone$lambda(closure$task, closure$storage) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      var todoItem = Kotlin.isType(tmp$ = document.getElementById(closure$task.id), HTMLDivElement) ? tmp$ : Kotlin.throwCCE();
      var checkbox = Kotlin.isType(tmp$_0 = todoItem.getElementsByTagName('input')[0], HTMLInputElement) ? tmp$_0 : Kotlin.throwCCE();
      var title = Kotlin.isType(tmp$_1 = todoItem.getElementsByClassName('title')[0], HTMLSpanElement) ? tmp$_1 : Kotlin.throwCCE();
      if (!checkbox.checked) {
        closure$task.isDone = true;
        title.style.textDecoration = 'line-through';
        closure$storage.eventEmitter.trigger_9wwc8o$(closure$storage.doneEvent, closure$task);
      }
       else {
        closure$task.isDone = false;
        title.style.textDecoration = 'none';
        closure$storage.eventEmitter.trigger_9wwc8o$(closure$storage.undoneEvent, closure$task);
      }
    };
  }
  function markAsDone(storage, task) {
    return markAsDone$lambda(task, storage);
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
  var package$events = _.events || (_.events = {});
  package$events.TodoEventEmitter = TodoEventEmitter;
  _.main_kand9s$ = main;
  var package$model = _.model || (_.model = {});
  package$model.Task = Task;
  var package$services = _.services || (_.services = {});
  package$services.StorageService = StorageService;
  var package$views = _.views || (_.views = {});
  package$views.Todo = Todo;
  package$views.listView_4ufz7e$ = listView;
  package$views.todoItem_bpveso$ = todoItem;
  package$views.markAsDone_qjuv9o$ = markAsDone;
  package$views.randomId = randomId;
  package$views.inputView_q9xvdb$ = inputView;
  package$views.onInputViewKeyPress = onInputViewKeyPress;
  main([]);
  Kotlin.defineModule('main', _);
  return _;
}(typeof main === 'undefined' ? {} : main, kotlin, this['kotlinx-html-js']);

//# sourceMappingURL=main.js.map
