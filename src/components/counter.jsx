import React, { Component } from 'react';

class Counter extends Component {

    render() {
        return(
            <div>
                <h4>{this.props.id}</h4>

                <span className={this.getBadgeClasses()} classes="badge bg-light m-2">{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)}
                 className='btn btn-secondary btn-sm'>Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)}
                 className="btn btn-danger btn-sm m-2">Delete</button>
                </div>
        ) ;
    }

    getBadgeClasses() {
        let classes = "badge bg-light m-2";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;