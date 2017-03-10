<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>To-do list - Javascript</title>

  <style media="screen">
    ul{
      list-style: none;
      padding:10;
      margin:10;
      width:40%;
      float:left;
      border:1px solid #333;
      background:#eee;
    }
  </style>

</head>
<body>

<h1>To do list</h1>

<input type="text" id="input"/>
<button id="btn">ADD</button>

<hr/>

<!-- to do -->
<ul id="todo">
</ul>

<!-- done -->
<ul id="done">
</ul>

<script type="text/javascript">
// self invoke function
  ( function () {
      var input = document.getElementById('input');
      var btn = document.getElementById('btn');
      var lists = {
          todo:document.getElementById('todo'),
          done:document.getElementById('done')
      };

      var makeTaskHtml = function(str,onCheck) {
          var el = document.createElement('li');
          var checkbox = document.createElement('input');
          var label = document.createElement('span');

          checkbox.type = 'checkbox';
          checkbox.addEventListener('click',onCheck);
          label.textContent = str;

          el.appendChild(checkbox);
          el.appendChild(label);

          return el;
      };

      var addTask = function(task) {
          lists.todo.appendChild(task);
      };

      var onCheck = function(event) {
          var task = event.target.parentElement;
          var list = task.parentElement.id;
          lists[list === 'done'?'todo':'done'].appendChild(task);
          this.checked = false;
          input.focus();
      };

      var onInput = function() {
          var str = input.value.trim();
          if (str.length > 0) {
              addTask(makeTaskHtml(str, onCheck));
              input.value = '';
              input.focus();
          }
      };

      btn.addEventListener('click',onInput);
      input.addEventListener('keyup', function(event) {
          var code = event.keyCode;
          if (code === 13) {
              onInput();
          }
      });
      input.focus();
  }());
</script>
</body>
</html>
