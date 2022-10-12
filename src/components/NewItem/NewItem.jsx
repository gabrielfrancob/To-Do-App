
import { useState } from "react"

import styles from "./NewItem.module.css"

export default function NewItem({ handleSubmit }) {

    const [item, setItem] = useState()


    const submit = (e) => {
        e.preventDefault()
        handleSubmit(item)
    }

    function handleChange(e) {
        setItem({ ...item, description: e.target.value })
    }

    return (
        <form onSubmit={submit} className={styles}>
            <input
                type="text"
                onChange={handleChange}
                name="description"
            />
            <input
                type="submit"
                value="Adicionar" />
        </form>
    )
}