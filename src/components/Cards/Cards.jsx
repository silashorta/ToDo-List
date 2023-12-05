import React, { useState } from 'react';
import './Cards.css'

const Cards = () => {
    const [cards, setCards] = useState([
        { id: 1, title: 'Work Files', bg: "#BDD1C5", todos: [] },
        { id: 2, title: 'Personal Files', bg: "#EECC8C", todos: [] },
        { id: 3, title: 'To-Do', bg: "#E8B298", todos: [] },
        { id: 4, title: 'Others', bg: "#D3A29D", todos: [] },
    ]);

    const addTodo = (cardId, task) => {
        setCards((prevCards) =>
            prevCards.map((card) =>
                card.id === cardId ? { ...card, todos: [...card.todos, task] } : card
            )
        );
    };

    const removeTodo = (cardId, index) => {
        setCards((prevCards) =>
            prevCards.map((card) =>
                card.id === cardId
                    ? { ...card, todos: card.todos.filter((_, i) => i !== index) }
                    : card
            )
        );
    };

    return (
        <main className='main'>
            <div className='container-fluid d-flex flex-column flex-wrap'>
                <h1 className=' title'>ToDo List</h1>
                <div className='d-flex flex-wrap justify-content-center align-items-center gap-3'>
                    {cards.map((card) => (
                        <div key={card.id} className='p-1 m-2 rounded-4 bg-light card-main'>
                            <h1 style={{ background: `${card.bg}` }} className='p-2 rounded-4'>{card.title}</h1>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    addTodo(card.id, e.target.task.value);
                                    e.target.task.value = '';
                                }}
                            >
                                <div className="input-group">
                                    <input className='form-control' type='text' name='task' placeholder='Nova tarefa' />
                                    <button className='btn btn-light' type='submit'>+</button>
                                </div>
                            </form>
                            <ul className='d-flex flex-column gap-2 pt-3'>
                                {card.todos.map((todo, index) => (
                                    <div className='d-flex gap-3 align-items-center' key={index}>
                                        <span className='task'>{todo}</span>
                                        <button className='btn btn-danger' onClick={() => removeTodo(card.id, index)}>X</button>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Cards;
