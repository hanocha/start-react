import React from 'react'

class App extends React.Component {
  render() {
    let txt = this.props.txt
    return (
      <div>
        <h1>{txt}</h1>
        <b>bold text</b>
      </div>
    )
  }
}

// stateless component sample
// const App = () => <h1>hello with const!</h1>

export default App
