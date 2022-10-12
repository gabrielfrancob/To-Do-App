

export default function Input({ status,type, name, value, handleOnChange }) {
    return <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleOnChange}
        disabled={status} />
}