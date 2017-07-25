import React from 'react';
import {Players} from './../api/players';
import PropTypes from 'prop-types';

export default class Player extends React.Component {

  render() {
    return (
      <div>
        <div key={this.props.player._id} className='item'>
        <p>  {this.props.player.name} has a score of {this.props.player.score} </p>
          <button onClick={() => Players.update({'_id':this.props.player._id},{$inc: {score: 1}})}>+</button>
          <button onClick={() => Players.update({'_id':this.props.player._id},{$inc: {score: -1}})}>-</button>
          <button onClick={() => Players.remove({'_id':this.props.player._id})}>delete</button>
        </div>
      </div>
    );
  }

}
// TitleBar.propTypes = {
//   title: PropTypes.string.isRequired,
//   subtitle: PropTypes.string.isRequired
// };

Player.propTypes = {
  player: PropTypes.object.isRequired

}
