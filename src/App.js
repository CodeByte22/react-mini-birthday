import React from 'react'

import List from './list.js'
import data from './data'

function App() {
  const [people, setPeople] = React.useState(data)
  return (
    <React.Fragment>
      <main>
        <section className="container">
          <h3>{people.length} birthdays today</h3>
          <List people={people}></List>
          <button onClick={() => setPeople([])}>Clear All</button>
        </section>
      </main>
    </React.Fragment>
  )
}

export default App
