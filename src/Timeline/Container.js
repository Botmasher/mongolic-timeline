import React from 'react';
import Timeline from './';

class TimelineContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vertical: true
    };
  }

  changeDirection = () => this.setState(prevState => ({vertical: !prevState.vertical}));

  render() {
    console.log(`timeline orientation: ${this.state.vertical ? 'vertical' : 'horizontal'}`);
    return (
      <div>
        <button onClick={() => this.changeDirection()}>Switch direction</button>
        <Timeline entries={this.props.entries} isVertical={this.state.vertical} />
      </div>
    );
  }
}

export default TimelineContainer;
