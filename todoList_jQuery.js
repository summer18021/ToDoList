<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <title>To do List - jquery</title>

  <style media="screen">
    div{
      list-style: none;
      padding: 10;
      margin: 10;
      width: 40%;
      float: left;
      background: #eee;
    }
    .delete{
      color: gray;
      float: right;
      margin-right: 10px;
    }
  </style>

</head>
<body>
<h1>To do List - jquery</h1>
<input type="text" id="input" placeholder="Enter Item To Do"/>
<button type="button" id="add">ADD</button>

<hr/>
<!-- todo -->
<div>
<p>things to do</p>
<ul id="todo">
</ul>
</div>


<!-- done -->
<div>
<p>things being done</p>
<ul id="done">
</ul>
</div>

<script type="text/javascript">
$(document).ready(function() {
    $("#add").click(function() {
        var text = $("#input").val().trim();
        if (text.length > 0) {
            $("#todo").append('<li>'
             + '<input type = "checkbox" class="cbox"/>'
              + text + '<button class="delete">delete</button>'
              + '</li>');
            $("#input").val('');
            $(".cbox").on('click', function() {
              if ($(this).is(':checked')) {
                var task = $(this).parent();
                var list = $(this).parent().parent().attr('id');
                if (list === 'todo') {
                    $('#done').append(task);
                }else{
                    $('#todo').append(task);
                }
                this.checked = false;
                input.focus();
              }
            });
            $(".delete").on('click', function() {
              var task = $(this).parent();
              task.hide();
              input.focus();
            });
        }
    });

});
</script>
</body>
</html>
