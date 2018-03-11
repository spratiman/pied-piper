import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    decrementAsync, increment
} from '../actions/actionCreators/counter';
import Home from '../components/login.js';
import {decrement} from "../actions/actionCreators/counter";
import {incrementAsync} from "../actions/actionCreators/counter";

const mapStateToProps = state => ({
    count: state.counter.count,
    isIncrementing: state.counter.isIncrementing,
    isDecrementing: state.counter.isDecrementing
  });
  
  const mapDispatchToProps = dispatch => bindActionCreators({
    increment,
    incrementAsync,
    decrement,
    decrementAsync,
    changePage: () => push('/about-us')
  }, dispatch);
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)