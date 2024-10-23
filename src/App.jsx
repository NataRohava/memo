import React, { useState, useRef } from 'react';

import List from './List';
import './App.css'



function App() {
  
  const data = [ 
    {id: 0, title:1}, 
    {id: 1, title:2}, 
    {id: 2, title:3}, 
    {id: 3, title:4} 
  ]
  const [element, setElement] = useState(data)
  //useRef для получения доступа к элементу input
  const textInput = useRef(null)

  //при вызове устанавливает фокус на элемент, 
  //с которым связан textInput (т.е. на инпут), 
  //что позволяет сразу начать ввод текста при нажатии на кнопку.
  const valid =()=> {
    textInput.current.focus()
  }
  //когда нажимаем клавишу Enter=>создается новый объект элемента 
  //с id и добавляется в список к текущему состоянию.

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const newItem = { id: element.length, title: textInput.current.value };
      setElement((element) => [...element, newItem]);
      
      textInput.current.value = ''; // Очистка текстового поля
    }    
  }
  return (
    <>
      <div>
        {/* передаём актуальное состояние element,а не data */}
        <List items = {element}/>
        <input ref = {textInput} onKeyDown = {handleKeyDown} />

        {/* Кнопка при нажатии вызывает функцию valid, фокусируя инпут.
        ()=>valid()-колбэк функция,обеспечивает отложенный вызов
        valid => произойдет,только когда нажмем на кнопку */}
        <button onClick = {()=>valid()}>Focus</button>
        
      </div>
      
    </>
  )
}
export default App
