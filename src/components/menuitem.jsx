
function MenuItem({handleClick, name}) {
    return <button onClick={handleClick} className="hover:underline cursor-pointer">{name}</button>
}

export default MenuItem;