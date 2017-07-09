import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      text: 'this is a state text',
    }
  }

  update(e) {
    this.setState({
      text: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <Widget update={this.update.bind(this)} />
      </div>
    )
  }
}

const Widget = (props) => 
  <input type="text" onChange={props.update} />

export default App
