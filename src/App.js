import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'count = 0'

    }
  }
   
  UpdateADD = () => {
    this.setState ( {
      name: 'count = 5'
})
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.UpdateADD}>ADD</button>
      </div>
    )
    
      
  
  }
}
    




export default App;









    //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
         // Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a
          //className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
         // rel="noopener noreferrer"
         // Learn React
      //</header>>
        //</a>
      //<header>
    //</div>

//export default App;
