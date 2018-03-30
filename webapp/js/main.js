if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'main'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'main'.");
}
var main = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwCCE = Kotlin.throwCCE;
  var LinkedHashMap = Kotlin.kotlin.collections.LinkedHashMap;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var li = $module$kotlinx_html_js.kotlinx.html.js.li_525bpd$;
  var span = $module$kotlinx_html_js.kotlinx.html.span_6djfml$;
  var i = $module$kotlinx_html_js.kotlinx.html.i_5g1p9k$;
  var set_onInputFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onInputFunction_pszlq2$;
  var set_for_ = $module$kotlinx_html_js.kotlinx.html.set_for__i8xdhl$;
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
  var set_style = $module$kotlinx_html_js.kotlinx.html.set_style_ueiko3$;
  var p = $module$kotlinx_html_js.kotlinx.html.p_8pggrc$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var input = $module$kotlinx_html_js.kotlinx.html.input_e1g74z$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var set_onKeyPressFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onKeyPressFunction_pszlq2$;
  StorageService.prototype = Object.create(LinkedHashMap.prototype);
  StorageService.prototype.constructor = StorageService;
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
  function main(args) {
    var tmp$;
    var formContainer = Kotlin.isType(tmp$ = document.getElementById('formContainer'), HTMLDivElement) ? tmp$ : throwCCE();
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
  function Ajax() {
    this.xhttp = new XMLHttpRequest();
  }
  function Ajax$get$lambda(this$Ajax, closure$callback) {
    return function () {
      if (this$Ajax.xhttp.readyState == XMLHttpRequest.DONE && this$Ajax.xhttp.status == 200) {
        closure$callback(this$Ajax.xhttp);
      }
      return Unit;
    };
  }
  Ajax.prototype.get_phn05g$ = function (url, callback) {
    this.xhttp.open('GET', url, true);
    this.xhttp.onreadystatechange = Ajax$get$lambda(this, callback);
    this.xhttp.send();
  };
  function Ajax$post$lambda(this$Ajax, closure$callback) {
    return function () {
      if (this$Ajax.xhttp.readyState == XMLHttpRequest.DONE && this$Ajax.xhttp.status == 200) {
        closure$callback(this$Ajax.xhttp);
      }
      return Unit;
    };
  }
  Ajax.prototype.post_6dr5rq$ = function (url, task, callback) {
    this.xhttp.open('POST', url, true);
    this.xhttp.setRequestHeader('Content-type', 'application/json');
    this.xhttp.onreadystatechange = Ajax$post$lambda(this, callback);
    this.xhttp.send(JSON.stringify(task));
  };
  Ajax.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ajax',
    interfaces: []
  };
  function StorageService(eventEmitter) {
    LinkedHashMap_init(this);
    this.eventEmitter = eventEmitter;
    this.addEvent = 'addTask';
    this.doneEvent = 'doneEvent';
    this.undoneEvent = 'undoneEvent';
    this.eventEmitter.on_8yg5sx$(this.addEvent, StorageService_init$lambda);
    this.eventEmitter.on_8yg5sx$(this.doneEvent, StorageService_init$lambda_0(this));
    this.eventEmitter.on_8yg5sx$(this.undoneEvent, StorageService_init$lambda_1(this));
  }
  function StorageService$getAll$lambda(this$StorageService, closure$callback) {
    return function (it) {
      var tasks = JSON.parse(it.responseText);
      var tmp$;
      for (tmp$ = 0; tmp$ !== tasks.length; ++tmp$) {
        var element = tasks[tmp$];
        var this$StorageService_0 = this$StorageService;
        var task = new Task(element.id, element.text);
        task.isArchived = element.isArchived;
        task.isDone = element.isDone;
        this$StorageService_0.put_xwzc9p$(element.id, element);
      }
      closure$callback();
      return Unit;
    };
  }
  StorageService.prototype.getAll_o14v8n$ = function (callback) {
    return (new Ajax()).get_phn05g$('/tasks', StorageService$getAll$lambda(this, callback));
  };
  function StorageService$update$lambda(it) {
    console.log(it.response);
    return Unit;
  }
  StorageService.prototype.update_y1s6kq$ = function (task) {
    return (new Ajax()).post_6dr5rq$('/task/' + task.id, task, StorageService$update$lambda);
  };
  StorageService.prototype.put_xwzc9p$ = function (key, value) {
    this.eventEmitter.trigger_9wwc8o$(this.addEvent, value);
    return LinkedHashMap.prototype.put_xwzc9p$.call(this, key, value);
  };
  function StorageService_init$lambda(it) {
    console.log('added task: %s', it.isDone);
    return Unit;
  }
  function StorageService_init$lambda_0(this$StorageService) {
    return function (it) {
      console.log('marked task: %s as done', it.text);
      this$StorageService.update_y1s6kq$(it);
      return Unit;
    };
  }
  function StorageService_init$lambda_1(this$StorageService) {
    return function (it) {
      console.log('marked task: %s as undone', it.text);
      this$StorageService.update_y1s6kq$(it);
      return Unit;
    };
  }
  StorageService.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StorageService',
    interfaces: [LinkedHashMap]
  };
  function Todo(formContainer) {
    this.formContainer = formContainer;
    this.inputVal = '';
    this.eventEmitter_0 = new TodoEventEmitter();
    this.storage_0 = new StorageService(this.eventEmitter_0);
  }
  Todo.prototype.registerEvents_0 = function () {
  };
  function Todo$onInput$lambda(this$Todo) {
    return function (it) {
      var tmp$;
      var input = Kotlin.isType(tmp$ = it.currentTarget, HTMLInputElement) ? tmp$ : throwCCE();
      this$Todo.inputVal = input.value;
      return Unit;
    };
  }
  Todo.prototype.onInput = function () {
    return Todo$onInput$lambda(this);
  };
  function Todo$onSubmit$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function Todo$onSubmit$lambda$lambda(this$Todo, closure$task) {
    return function ($receiver) {
      todoItem($receiver, this$Todo.storage_0, closure$task, Todo$onSubmit$lambda$lambda$lambda);
      return Unit;
    };
  }
  function Todo$onSubmit$lambda(this$Todo) {
    return function (it) {
      var tmp$;
      it.preventDefault();
      var id = randomId();
      var task = new Task(id, this$Todo.inputVal);
      this$Todo.storage_0.put_xwzc9p$(id, task);
      (tmp$ = document.getElementById('task-collection')) != null ? (tmp$.append(li(get_create(document), 'collection-item avatar dismissable', Todo$onSubmit$lambda$lambda(this$Todo, task))), Unit) : null;
      return Unit;
    };
  }
  Todo.prototype.onSubmit = function () {
    return Todo$onSubmit$lambda(this);
  };
  function Todo$render$lambda(this$Todo) {
    return function () {
      this$Todo.formContainer.appendChild(this$Todo.getForm());
      return Unit;
    };
  }
  Todo.prototype.render = function () {
    this.storage_0.getAll_o14v8n$(Todo$render$lambda(this));
  };
  function Todo$getForm$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('ToDo Sample app');
    return Unit;
  }
  function Todo$getForm$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('border_color');
    return Unit;
  }
  function Todo$getForm$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Todo) {
    return function ($receiver) {
      set_onInputFunction($receiver, this$Todo.onInput());
      return Unit;
    };
  }
  function Todo$getForm$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    set_for_($receiver, 'icon_prefix');
    $receiver.unaryPlus_pdl1vz$('add a new task');
    return Unit;
  }
  function Todo$getForm$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$Todo) {
    return function ($receiver) {
      i($receiver, 'material-icons prefix', Todo$getForm$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      inputView($receiver, Todo$getForm$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Todo));
      label($receiver, 'active', Todo$getForm$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  function Todo$getForm$lambda$lambda$lambda$lambda$lambda$lambda(this$Todo) {
    return function ($receiver) {
      div($receiver, 'input-field', Todo$getForm$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$Todo));
      return Unit;
    };
  }
  function Todo$getForm$lambda$lambda$lambda$lambda$lambda_0(this$Todo) {
    return function ($receiver) {
      div($receiver, 'row', Todo$getForm$lambda$lambda$lambda$lambda$lambda$lambda(this$Todo));
      set_onSubmitFunction($receiver, this$Todo.onSubmit());
      return Unit;
    };
  }
  function Todo$getForm$lambda$lambda$lambda$lambda(this$Todo) {
    return function ($receiver) {
      span($receiver, 'card-title', Todo$getForm$lambda$lambda$lambda$lambda$lambda);
      form($receiver, '/', null, void 0, void 0, Todo$getForm$lambda$lambda$lambda$lambda$lambda_0(this$Todo));
      return Unit;
    };
  }
  function Todo$getForm$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    set_id($receiver, 'task-collection');
    return Unit;
  }
  function Todo$getForm$lambda$lambda$lambda$lambda_0(this$Todo) {
    return function ($receiver) {
      listView($receiver, this$Todo.storage_0, Todo$getForm$lambda$lambda$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  function Todo$getForm$lambda$lambda$lambda(this$Todo) {
    return function ($receiver) {
      div($receiver, 'card-content', Todo$getForm$lambda$lambda$lambda$lambda(this$Todo));
      div($receiver, 'card-action', Todo$getForm$lambda$lambda$lambda$lambda_0(this$Todo));
      return Unit;
    };
  }
  function Todo$getForm$lambda$lambda(this$Todo) {
    return function ($receiver) {
      div($receiver, 'card collection', Todo$getForm$lambda$lambda$lambda(this$Todo));
      return Unit;
    };
  }
  function Todo$getForm$lambda(this$Todo) {
    return function ($receiver) {
      div($receiver, 'col l12 m12 s12', Todo$getForm$lambda$lambda(this$Todo));
      return Unit;
    };
  }
  Todo.prototype.getForm = function () {
    return div_0(get_create(document), 'row', Todo$getForm$lambda(this));
  };
  Todo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Todo',
    interfaces: []
  };
  function listView$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('List of Tasks');
    return Unit;
  }
  function listView$lambda$lambda($receiver) {
    h5($receiver, void 0, listView$lambda$lambda$lambda);
    return Unit;
  }
  function listView$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function listView$lambda$lambda$lambda_0(closure$storage, closure$task) {
    return function ($receiver) {
      todoItem($receiver, closure$storage, closure$task, listView$lambda$lambda$lambda$lambda);
      return Unit;
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
      return Unit;
    };
  }
  function listView($receiver, storage, block) {
    ul($receiver, void 0, listView$lambda(storage, block));
  }
  function todoItem$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('insert_chart');
    return Unit;
  }
  function todoItem$lambda$lambda_0(closure$task) {
    return function ($receiver) {
      if (closure$task.isDone) {
        set_style($receiver, ' text-decoration: line-through');
      }
      $receiver.unaryPlus_pdl1vz$(closure$task.text);
      return Unit;
    };
  }
  function todoItem$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Personal');
    return Unit;
  }
  function todoItem$lambda$lambda$lambda(closure$inputId, closure$task) {
    return function ($receiver) {
      set_id($receiver, closure$inputId);
      set_classes($receiver, setOf('filled-in'));
      $receiver.type = InputType.checkBox;
      $receiver.checked = closure$task.isDone;
      return Unit;
    };
  }
  function todoItem$lambda$lambda$lambda_0(closure$inputId, closure$storage, closure$task) {
    return function ($receiver) {
      set_for_($receiver, closure$inputId);
      $receiver.unaryPlus_pdl1vz$('Done');
      set_onClickFunction($receiver, markAsDone(closure$storage, closure$task));
      return Unit;
    };
  }
  function todoItem$lambda$lambda_2(closure$inputId, closure$task, closure$storage) {
    return function ($receiver) {
      input($receiver, void 0, void 0, void 0, void 0, void 0, todoItem$lambda$lambda$lambda(closure$inputId, closure$task));
      label($receiver, void 0, todoItem$lambda$lambda$lambda_0(closure$inputId, closure$storage, closure$task));
      return Unit;
    };
  }
  function todoItem$lambda(closure$task, closure$inputId, closure$storage, closure$block) {
    return function ($receiver) {
      set_id($receiver, closure$task.id);
      i($receiver, 'material-icons circle green', todoItem$lambda$lambda);
      span($receiver, 'title left-align', todoItem$lambda$lambda_0(closure$task));
      p($receiver, void 0, todoItem$lambda$lambda_1);
      div($receiver, 'secondary-content', todoItem$lambda$lambda_2(closure$inputId, closure$task, closure$storage));
      closure$block($receiver);
      return Unit;
    };
  }
  function todoItem($receiver, storage, task, block) {
    var inputId = randomId();
    div($receiver, void 0, todoItem$lambda(task, inputId, storage, block));
  }
  function checkTaskIsDone$lambda(closure$task) {
    return function (it) {
      console.log('rendered');
      console.log(closure$task);
      return Unit;
    };
  }
  function checkTaskIsDone(task) {
    return checkTaskIsDone$lambda(task);
  }
  function markAsDone$lambda(closure$task, closure$storage) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      var todoItem = Kotlin.isType(tmp$ = document.getElementById(closure$task.id), HTMLDivElement) ? tmp$ : throwCCE();
      var checkbox = Kotlin.isType(tmp$_0 = todoItem.getElementsByTagName('input')[0], HTMLInputElement) ? tmp$_0 : throwCCE();
      var title = Kotlin.isType(tmp$_1 = todoItem.getElementsByClassName('title')[0], HTMLSpanElement) ? tmp$_1 : throwCCE();
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
      return Unit;
    };
  }
  function markAsDone(storage, task) {
    return markAsDone$lambda(task, storage);
  }
  function randomId() {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i <= 4; i++)
      text += String.fromCharCode(possible.charCodeAt(Math.floor(Math.random() * possible.length)));
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
      set_onKeyPressFunction($receiver, typeof (tmp$ = onInputViewKeyPress()) === 'function' ? tmp$ : throwCCE());
      return Unit;
    };
  }
  function inputView($receiver, block) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, inputView$lambda(block));
  }
  function onInputViewKeyPress$lambda(it) {
    var tmp$;
    if (it.which === 13) {
      var input = Kotlin.isType(tmp$ = it.currentTarget, HTMLInputElement) ? tmp$ : throwCCE();
      input.value = '';
    }
    return Unit;
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
  package$services.Ajax = Ajax;
  package$services.StorageService = StorageService;
  var package$views = _.views || (_.views = {});
  package$views.Todo = Todo;
  package$views.listView_4ufz7e$ = listView;
  package$views.todoItem_bpveso$ = todoItem;
  package$views.checkTaskIsDone_y1s6kq$ = checkTaskIsDone;
  package$views.markAsDone_qjuv9o$ = markAsDone;
  package$views.randomId = randomId;
  package$views.inputView_q9xvdb$ = inputView;
  package$views.onInputViewKeyPress = onInputViewKeyPress;
  main([]);
  Kotlin.defineModule('main', _);
  return _;
}(typeof main === 'undefined' ? {} : main, kotlin, this['kotlinx-html-js']);

//# sourceMappingURL=main.js.map
