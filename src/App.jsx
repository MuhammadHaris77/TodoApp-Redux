import { useRef, } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, updateTodo } from './config/redux/reducer/todoSlice';
function App() {
  const selector = useSelector(state => state.todo.todo)
  const input = useRef()
  const dispatch = useDispatch()
  const addDataTodo = (event) => {
    event.preventDefault();
    console.log(input.current.value)
    dispatch(
      addTodo({ title: input.current.value })
    )
    input.current.value = ''

  }

  const deleteTodo = (index) => {
    
    dispatch(removeTodo(
      {
        index
      })
      )
  }


  const editTodo = (index) => {
    const newTitle = prompt("Enter Your Todo Update Value?") 
    dispatch(updateTodo({
      index,title:newTitle
    }))
  }

  return (
    <div className='container-sm'>
      <h1 className='text-dark' >Todo App</h1>
      <div>
        <form onSubmit={addDataTodo} className="input-group mb-3">
          <input type="text" className="form-control" ref={input} placeholder="Enter Your Todos?" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <button className="btn btn-dark">Add Todo</button>
        </form >
          <ol>
          {
            selector.length > 0 ? selector.map((item, index) => {
              return (

                <div className='bg-light rounded p- mt-4' >
                  <div className='row  text-dark  rounded p-2 m-2'>  <li className='row' key={item.id}><span className=' m-auto col-8 '> <b>{item.title}</b></span> <span className='col-2'><button onClick={()=>editTodo(index)} className="btn btn-outline-success  p-1 mx-1"><ModeIcon /></button><button className="btn btn-outline-danger  p-1 mx-1" onClick={() => deleteTodo(index)}><DeleteIcon /></button></span> </li></div>
                </div>

              )
            }) : <h1 className='bg-light p-4 '>No Todo in list</h1>
          }

          </ol>
    </div>
    </div >
  )
}

export default App
