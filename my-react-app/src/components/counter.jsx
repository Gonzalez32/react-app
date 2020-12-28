import React, { Component } from "react";

class Counter extends Component {
    state = {
        value: this.props.value,
        imageUrl: 'https://s.clipartkey.com/mpngs/s/24-248983_transparent-pitbull-clipart-png-straight-line-drawing-dog.png',
        tags: []
    };

    // constructor() {
    //     super()
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }

    handleIncrement = product => {
        // console.log(product);
        this.setState({ value: this.state.value + 1 })
    }

  render() {

    return (
      <React.Fragment>
            <img src={this.state.imageUrl} alt=""/>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
                onClick={ (product) => this.handleIncrement(product) } 
                className="btn btn-secondary btn-sm">
                Increment
            </button>

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
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
