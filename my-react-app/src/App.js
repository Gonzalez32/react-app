import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  state = { 
    counters: [
        { id: 1, value: 6},
        { id: 2, value: 0},
        { id: 3, value: 0},
        { id: 4, value: 0}
    ]
}

handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters })
}

handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    })
    this.setState({ counters })
}

handleDelete = (counterId) => {
    // console.log("Event handler Called!", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters })
}

// render() { 
//     return ( 
//     <div>
//         <button
//         onClick={this.handleReset}
//         className="btn btn-primary btn-sm m-2">Reset
//         </button>
//         { this.state.counters.map(counter => (
//              <Counter key={counter.id} onDelete={this.handleDelete} onIncrement={this.handleIncrement} counter={counter} /> 
//         ))}
//     </div>
//     );
// }
  render() { 
    return ( 
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement} 
            onDelete={this.handleDelete}
         />
        </main>
      </React.Fragment>
     );
  }
}
 
export default App;


