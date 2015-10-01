  // grab the todo model we just created
var Todo = require('./models/listmodel');
var mongodb = require('mongodb');

module.exports = function(app) {

    // application -------------------------------------------------------------
    // app.get('*', function(req, res) {
    //     res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    // });
  

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos', function(req, res) {
        console.log("Inside /api/todos going to get..");

        // use mongoose to get all todos in the database
        Todo.find(function(err, todos) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err){
              console.log("Eror getting the result");
                res.send(err)}

            res.json(todos); // return all todos in JSON format
        });
    });

          // create todo and send back all todos after creation
    app.post('/api/todos', function(req, res) {
        console.log("Going to create...");

        // create a todo, information comes from AJAX request from Angular
        Todo.create({
            text : req.body.text,
            done : false
        }, function(err, todo) {
            if (err){
                console.log("Encountered an error");
                res.send(err);
            }
            // get and return all the todos after you create another
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err);

                console.log(todos);
                res.json(todos);
            });
        });

    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function(req, res) {
        
        console.log("Inside the service delete "+req.params.todo_id);
        Todo.remove({
            _id :   new mongodb.ObjectID(req.params.todo_id)
        }, function(err, todo) {
            if (err){
                console.log("Could not delete "+err);
                res.send(err);
                
            }
                

            // // get and return all the todos after you create another
            Todo.find(function(err, todo) {
                if (err){
                    res.send(err);
                }
                console.log("From the service:");
                console.log(todo);                    
                res.json(todo);
            });
        });
    });    

};