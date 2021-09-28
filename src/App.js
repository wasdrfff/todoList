import { useState } from 'react';
import './App.css';
import TodoItem from './TodoList/TodoItem';
import todoListData from './TodoList/TodoListData'
function App() {
// значение todos,setTodos кладет в себя хук UseState со значением todoListData
const [todos,setTodos]=useState(todoListData)
const [newTaskName,setNewTaskName]=useState('')
const result=todos.map(item =><TodoItem key={item.id} item={item} onChange={handleChange} />)
//Задал функцию HandleChange с аргументом id,изменяем todos(массив) ,
//благодаря методу map(перебираем каждый объект(todo))
//Если todo.id абсолютно равен id (handleChange)
//значит нужно поменять поле comleted у объекта todo,на противоположное значение.
//Возвращаем значение todo
function handleChange(id){ 
  setTodos(todos.map(function(todo){
    if(todo.id===id){
      todo.completed=!todo.completed
    }
    return todo
  }))
}
  function addTask(){
    //создаем переменную NewTask которая включает в себя объект с полями
    //поле id со значением:в масииве todos мы обращаемся к полю
    //к последнему объекту массива,через метод length,который
    //считает длину массива и вычитает -1,тк
    //длина массива считается с 1,а сам массив начинает отсчет с 0
    //после мы берем поле id и прибавляем к нему +1
    //после пишем новое поле task со значение NewTaskName,которое мы берем
    //из состояния для inputa
    //поле completed со значением false,потому что при добавлении задачи,она еще не выполнена 
    const newTask={id:todos[todos.length-1].id+1,task:newTaskName,completed:false}
   //изменение массива задач с помощью setTodos,
  //идет стрелочная функция,которая берет предыдущие состояния
  //Стрелочная функция возрвращает массив,в котором '...' выносят объекты за массив
  //После мы добавляем новую задачу(newTask)(готовый объект,который мы составили выше)  
    setTodos((prevState)=>{return [...prevState,newTask] })
  }
  //добавляем функцию на удаление задачи
  //изменяем массив задач с помощью setTodos,
  //идет стрелочная функция,которая берет предыдущие состояния
  //стрелочная функция возвращает массив,благодаря методу slice,
  //который удаляет последний объект
  //slice берет отчет с 0 
  function deletedTask(){
    //setTodos((prevState)=>{return prevState.slice(0,todos.length-1)})

    //
    setTodos((prevState)=>{
      return prevState.filter((task)=>{
      return task.completed !==true })
    })
  }
  return (
    <div>
      {result}
      <div>
        <input value={newTaskName} onChange={(element)=>setNewTaskName(element.target.value)}></input>
        <button onClick={addTask}>Добавить задачу</button>
        <button onClick={deletedTask}>Удалить задачу</button>
      </div>
    </div>
  );
}

export default App;
