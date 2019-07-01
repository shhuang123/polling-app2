import React, { Component } from 'react';
//import Display from './Display';
//import Chart from './Chart';
import { Bar } from 'react-chartjs-2'

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }

    this.increment = this.increment.bind(this)
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  };

  //Load a Chat.js Chart
  //pass data per state.count as an individual bar on the graph


  render() {
    const chartData = {
      datasets: [{
        label: this.props.name,
        data: [5000],
        backgroundColor: [
          'rgba(255,99,132,0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
        ],
        borderWidth: 1,
        hoverBackgroundColor: [
          'rgba(255,99,132,0.4)',
        ],
      }]
    }

  return (
  <div>
    <div>
      <button id="update-chart" className="nav-button" onClick={this.increment}>{this.props.name}: {this.state.count}</button>
    </div>
    <Bar
      data={chartData}
      width={650}
      height={400}
      options={{
        maintainAspectRatio: false,
        legend:{
          display: true,
          position:'left'
        },
        layout: {
          padding: {
              left: 150,
              right: 150,
              top: 50,
              bottom: 30
          }
        }
      }}
    />
  </div>
    );
  }
};

export default Button;