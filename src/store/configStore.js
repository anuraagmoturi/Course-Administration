import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';


//--without redux dev tools

// /* eslint-disable no-underscore-dangle */
// export default function configureStore(initialState){
//   return createStore(
//     rootReducer,
//     initialState,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(thunk,reduxImmutableStateInvariant())
//
//   );
// }
// /* eslint-enable */

//------with redux dev tools

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function configureStore(initialState){
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers( applyMiddleware(thunk,reduxImmutableStateInvariant())

    ));
}
/* eslint-enable */
