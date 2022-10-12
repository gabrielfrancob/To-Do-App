
import { useState } from "react"

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
        <form onSubmit={submit}>
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