import React, { Component } from 'react';
import { connect } from 'react-redux';

import { endSocket } from '../../ducks/socket';

class CloseWebsocketButton extends Component {
  closeConnection = () => this.props.endSocket();

  render() {
    return (
      <button onClick={() => this.closeConnection()}>Close websocket</button>
    );
  }
}

export default connect(null, { endSocket })(CloseWebsocketButton);
