import axios from "axios"

import { useEffect, useState } from "react"

import { BsPlusCircleFill } from 'react-icons/bs'

import styles from './ToDo.module.css'

import Item from "../Item/Item"
import NewItem from "../NewItem/NewItem"

const api = axios.create({
    baseURL: `http://localhost:5000/item`
})

export default function ToDo() {

    const [todos, setTodo] = useState([])
    const [isDisabled, setIsDisabled] = useState(true)

    function removeItem(id) {
        api.delete(`/${id}`)
        window.location.reload()
    }

    function createItem(item) {
        api.post('/', {
            id: item.id,
            description: item.description
        })
        window.location.reload()
    }

    function openInput() {
        setIsDisabled(!isDisabled)
    }



    useEffect(() => {
        api.get('/').then(resp => {
            setTodo(resp.data)
        })
    }, [])

    return (
        <main className={styles.center}>
            <div className={styles.todo_container}>
                <div className={styles.header}>
                    <button onClick={openInput}>
                        <BsPlusCircleFill />
                    </button>
                    <h1>My to do</h1>
                </div>

                {todos.length > 0 &&
                    todos.map(item => (
                        <Item
                            key={item.id}
                            id={item.id}
                            description={item.description}
                            handleRemove={removeItem} />
                    ))
                }
                {todos.length === 0 && (
                    <h2>Nenhum item na lista</h2>
                )}
                {!isDisabled &&
                    <NewItem handleSubmit={createItem} />
                }
            </div>
        </main>
    )
}