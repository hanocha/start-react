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
    let txt = this.props.txt
    return (
      <div>
        <h1>{this.state.text}</h1>
        <b>bold text</b>
        <input type="text" onChange={this.update.bind(this)} />
      </div>
    )
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired,
}

App.defaultProps = {
  txt: "this is the default text",
}

export default App
