const React = require('react')
const Def = require('./default')

const error404 =(()=>{
    return (
        <Def>
            <main>
                <h1> 404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img className="oops" src="/images/oops.png" alt="Photo by Artur Rutkowski on Unsplash."/>
                <div>
                    <a href="https://unsplash.com/@alienowicz">Artur Rutkowski</a> on <a href="https://unsplash.com/photos/4yzEtTQLdL4">Unsplash</a>
                </div>
                </div>
            </main>
        </Def>
    )
})

module.exports = error404

