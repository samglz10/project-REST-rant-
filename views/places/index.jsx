const React = require('react')
const Def = require('../default')
// unsure if this index was made correctly
const index = ((data) =>{ //removed key={idx}
    let placesFormatted = data.places.map((place) => {
        return (
          <div className="col-sm-6" >
            <h2><a href={`/places/${place.id}`}>
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






    
  