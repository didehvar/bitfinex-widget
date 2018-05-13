import { Component } from 'react';
import { connect } from 'react-redux';

import { startSocket } from '../../ducks/socket';

class Socket extends Component {
  componentDidMount() {
    this.props.startSocket();
  }

  render() {
    return null;
  }
}

export default connect(null, { startSocket })(Socket);
