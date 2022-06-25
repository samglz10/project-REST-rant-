const React = require("react")
const Def = require("../default")
// left off part 2 step 4 missing show.jsx data
const show = (data) => {
    return(
        <Def>
            <main>
                <h1>{data.place.name}</h1> 
                {/* How to view you data
                <pre>
                    {JSON.stringify(data,undefined,2)}
                </pre>*/}
                <p>Rating</p>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}

module.exports = show