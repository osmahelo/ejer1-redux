import {createStore} from 'redux';

const counterReducer = (state = {counter: 0, show: true}, action)=>{
    if (action.type === 'increment') {
        return {
            counter: state.counter + (action.payload || 1),
            show: state.show
        };
      }
      if (action.type === 'decrement') {
        return {
          counter: state.counter - 1,
          show: state.show
        };  
    }
        if (action.type === 'reset') {
            return {
                counter: state.counter * 0,
                show: state.show
            };
    }
        if (action.type === 'toggle') {
            return {
                counter: state.counter,
                show: !state.show
                };   
    }
    return state;
};

const store = createStore(counterReducer);

export default store;


