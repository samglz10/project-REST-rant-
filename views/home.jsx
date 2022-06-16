const React = require('react')
const Def = require('./default')

const home =  (()=>{
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img className="home" src="/images/homepage.png" alt="Photo by Artur Rutkowski on Unsplash."/>
                <div>
                    <a href="https://unsplash.com/@alienowicz">Artur Rutkowski</a> on <a href="https://unsplash.com/photos/4yzEtTQLdL4">Unsplash</a>
                </div>
                </div>
                <a href= "/places">
                    <button className="btn-primary"> Places Page</button>
                </a>
            </main>
        </Def>
    )
})
module.exports = home