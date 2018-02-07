import { connect } from 'react-redux';
import { HelloWorldComponent } from './helloWorld';
import { State } from '../reducers/index';

const mapStateToProps = (state : State) => ({
    userName : state.userProfileReducer.firstname
});

const mapDispatchToProps = (dispatch) => ({

});

export const HelloWorldContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HelloWorldComponent)