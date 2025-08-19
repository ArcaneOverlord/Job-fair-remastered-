
function MenuItem({handleClick, name}) {
    return <button onClick={handleClick} className="hover:underline">{name}</button>
}

export default MenuItem;