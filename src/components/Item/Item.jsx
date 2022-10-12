import styles from "./Item.module.css"

import { BsFillTrashFill } from 'react-icons/bs'

export default function Item({ id, description, handleRemove }) {

    function remove(e) {
        e.preventDefault()
        handleRemove(id)
    }

    return (
        <div className={styles.item_container} key={id}>
            <input type="checkbox" id="checkbox" />
            <p>{description}</p>
            <button onClick={remove}><BsFillTrashFill /></button >
        </div>
    )
}