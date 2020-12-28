import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
        imageUrl: 'https://s.clipartkey.com/mpngs/s/24-248983_transparent-pitbull-clipart-png-straight-line-drawing-dog.png',
        tags: []
    };

    // constructor() {
    //     super()
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }

    handleIncrement = () => {
        // console.log("Increment Clicked", this);
        this.setState({ count: this.state.count + 1 })
    }

  render() {

    return (
      <React.Fragment>
            <img src={this.state.imageUrl} alt=""/>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            <ul>
                {
                    this.state.tags.map(tag => <li key={ tag }>{ tag }</li>)
                }
            </ul>
      </React.Fragment>
    );
    
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
