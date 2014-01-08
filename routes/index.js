//storing all the entries in the to-do list in an array 
//(probably because mongoose/DB stuff would be overkill for this example)
var todos = [];

exports.index = function (req, res) {
  res.render('index', {
    title: 'Todo list',
    todos: todos
  });
};

exports.index_post = function (req, res) {
  //push is a javascript function that adds new elements to the end of an array
  //todos.push(req.body.todo); 
  res.redirect('/');
};

exports.index_delete = function (req, res) {
  todos.splice(parseInt(req.params.id), 1);
  res.redirect('/');
};