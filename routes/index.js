var todos = [];

exports.index = function (req, res) {
  res.render('index', {
    title: 'Todo list',
    todos: todos
  });
};

exports.index_post = function (req, res) {
  todos.push(req.body.todo); 
  //push is a javascript function that adds new elements to the end of an array
  res.redirect('/');
};

exports.index_delete = function (req, res) {
  todos.splice(parseInt(req.params.id), 1);
  res.redirect('/');
};