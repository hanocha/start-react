import React from 'react'

class App extends React.Component {
  render() {
    return <Button>React</Button>
  }
}

const Button = (props) => <button>{props.children}</button> 

export default App
