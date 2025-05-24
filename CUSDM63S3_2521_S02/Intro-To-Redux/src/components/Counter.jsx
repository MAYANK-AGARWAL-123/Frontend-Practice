import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counterActions';

const Counter = ({ count, increment, decrement }) => (
  <div>
    <h2>Counter: {count}</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <div>
      <h3>Current State (stringified):</h3>
      <pre>{JSON.stringify({ count }, null, 2)}</pre>
    </div>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count
});

export default connect(
  mapStateToProps,
  { increment, decrement }
)(Counter);