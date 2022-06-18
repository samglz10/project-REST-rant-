const React = require('react')
const Def = require('../default')
// unsure if this index was made correctly
const index = ((data) =>{
    let placesFormatted = data.places.map((place, idx) => {
        return (
          <div className="col-sm-6" key={idx}>
            <h2><a href={`/places/${idx}`}>
              {place.name}
              </a>
            </h2>
            <p className="text-center">
              {place.cuisines}
            </p>
            <img src={place.pic} alt={place.name}/>
            <p className="text-center">
              Located in {place.cuisines}, {place.state}
            </p>
          </div>
        )
      })
      return (
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className="row">
                  {placesFormatted}
                </div>
            </main>
        </Def>
      )
})

module.exports = index






    
  