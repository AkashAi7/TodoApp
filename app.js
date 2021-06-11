let todos=[];
const renderTodos=function(){

   db.collection('todo').get().then(data=>{

      // console.log(data.docs[0].data());
      data.docs.forEach(element => {
          const singleTodo= element.data();   
          todos.push(singleTodo);       
      });
      todos.forEach(element => {
         $('.todos').append('<p>'+element.name+'</p>');
      })


   });
}

renderTodos();