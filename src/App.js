import React from 'react'

class App extends React.Component {
  render() {
    return <Title text='tesT'/>
  }
}

const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
  text: function(props, propName, component) {
    if(!(propName in props)) {
      return new Error(`missing prop: ${propName}`)
    }
  }
}

export default App
