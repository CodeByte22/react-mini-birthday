import React from 'react'
const list = ({ people }) => {
  return (
    <React.Fragment>
      <section className="itemlist">
        {people.map((person) => {
          // const { name, age, image } = person
          return <Item key={person.id} person={person} />
        })}
      </section>
    </React.Fragment>
  )
}

const Item = (props) => {
  const { name, age, image } = props.person
  return (
    <React.Fragment>
      <article className="person">
        <img src={image} alt="image" />
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
      </article>
    </React.Fragment>
  )
}

export default list
