import { connect } from 'react-redux';

import { actions } from '@state';
import Presentational from './presentational';           // we import the presentational component here

const mapStateToProps = (state) => ({
    counter: state.counter,
});

const mapDispatchToProps = {
    decrement: actions.counterActions.Decrement,
    increment: actions.counterActions.Increment
};

const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(Presentational);

export default Home;