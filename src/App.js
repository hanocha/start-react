import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.txt}</h1>
        <b>bold text</b>
      </div>
    )
  }
}

// stateless component sample
// const App = () => <h1>hello with const!</h1>

export default App
