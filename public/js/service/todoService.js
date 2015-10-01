// public/js/services/NerdService.js
 app.factory('todoService', function ($http) {

    return {
        // call to get all nerds
        get : function() {


        return $http.get('/api/todos').then(function (result) {
                    return result.data;
                });


            // return  $http.get('/api/todos')
            //         .success(function(data) {
            //             console.log(data);
            //             return data;
            //         })
            //         .error(function(data) {
            //             console.log('Error: ' + data);
            //         });
        },

                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(textData) {

        return $http.post('/api/todos', textData).then(function (result) {
                    return result.data;
                });


            //         $http.post('/api/todos', textData)
            // .success(function(data) {

            //     console.log(data);
            //     console.log("returning...")
            //     return data;
            // })
            // .error(function(data) {
            //     console.log('Error: ' + data);
            // });
        },

        // call to DELETE a nerd
        delete : function(id) {
            console.log("Inside Service delete");
            return $http.delete('/api/todos/'+ id).then(function (result) {
                    return result.data;
                });

            //    $http.delete('/api/todos/' + id)
            // .success(function(data) {
               
            //     console.log(data);
            //     return data;
            // })
            // .error(function(data) {
            //     console.log('Error: ' + data);
            // });
        }
    }   

 });
