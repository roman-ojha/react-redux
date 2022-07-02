/*
    # Why Redux?
        -> Redux works to manage the state
        -> The data in React always flows from parent to child components which makes it unidirectional
        -> but in redux we will sotre the data to the seprate component and we will use it as the redux store and after that when the any component will need that data then we will going to provede that data through  the redux store
*/

/*
    # What is REDUX?
        -> Readux is a pattern and library for managing and updating application state. using events called 'actions'.
        -> it servers as a centralized store for state that need to be used across you entire application, with rules ensuring that the state can only ba update in a predictable fashion.
*/

/*
    # REDUX Main Topics
        1) Action:
            -> What to do ?
                -> Actions are plain JavaScript Ojbects that have a type field. 
                -> Actions only tell what to do, but they don't tell how to do.
                    -> Ex:
                        return {                        return {
                            type: 'INCREMENT',                  type: 'DECREMENT',  
                            payload: num                        payload: num
                        }                               }
                -> Actions will create by Action Creator:
                        -> Pure function which creates an action
                            export const incNumber = (num) =>{
                                    return {
                                    type: 'INCREMENT',
                                    payload: num
                                }
                            }
                -> which is Reusable, Portable, and Easy to Test
        2) Reducer:
            -> How to do ?
                -> Reducer are functions that take the current state and an action as argument, and return a new state result.
        3) Store :
            -> Object which holds the state of the application
                -> The Redux store brings together the state, actions, and reducers that make up you app.
                -> It's important to note that you'll only have a single store in a Redux application.
                -> Every Redux store has a single root reducer function.
        4) Functions associated with Store
            -> createStore()
            -> dispatch(action)
            -> getState()
*/

/*
    # REDUX Principles:
            1) single source of Turth:
                    -> The global state of your application is stored as an object inside a single store.
            2) State is Read-Only
                    -> The only way to change the state is to dispatch an action
            3) Immutability, Only-way data flow, Predictability of outcome
            4) Changes are Made with pure Reducer Functions
*/

/*
    -> so firstly to use redux we have to install the redux by:
        -> npm i redux react-redux
*/
