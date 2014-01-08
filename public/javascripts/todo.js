$(function () {
  $('#newform').on('submit', function () {
    $.post("/", $('#newform').serialize());

    var li = $('<li>' + $('#newinput').val() + '</li>')
    $('#todolist').append(li);

    //delete button shenanigans -_-
    var form = $('<form method="post" action="/delete/' + $('#todolist li').length + '"><button>Delete</button></form>')
    $(li).append(form);

    form.on('submit', function () {
      $.post("/", form.serialize());
      $(this).parent.remove();
      return false;
    })

    return false;
  })
})

