
const sortAscending = () => {
    const { howto } = //state here//
    howto.sort((a,b) => a - b)
    /*setState*/({ howto })
}

const sortDescending = () => {
    const { howto } = //state here//
    howto.sort((a,b) => a - b).reverse()
    /*setState*/({ howto })
}

return (
    <div>
        <ul>
            {howto.map((item) => {
                return <li>{item}</li>;
            })}
        </ul>
        <button onClick={sortAscending}>Ascending</button>
        <button onClick={sortDescending}>Descending</button>
    </div>
)