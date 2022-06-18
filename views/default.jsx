const React = require('react')

const Def = ((html) =>{
return (
    <html>
        <head>
            <title>Title</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="style.css"/>
        </head>
        <body>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/places">Places</a></li>
                    <li><a href="/places/new">New Place</a></li>
                </ul>
            </nav>
            {html.children}
        </body>
    </html>
)
})

module.exports = Def
