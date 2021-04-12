import { combineReducers, createStore } from "redux";
import { productsReducer } from "./ProductsState";

// -----------------------------------------------------------------------------------------------------

// GOOD FOR Single Reducer Only:
// const store = createStore(productsReducer);

//For getting productsState:
//store.getState().products

// -----------------------------------------------------------------------------------------------------

//For Multiple Reducers:
const reducers = combineReducers({ ProductsState: productsReducer/*, EmployeesState: employeesReducer, CustomerState: customerReducer*/});
const store = createStore(reducers);

// -----------------------------------------------------------------------------------------------------

//For getting ProductsState:
// store.getState().ProductsState.products
// store.getState().employeesState.employees
// store.getState().customersState.customers

// -----------------------------------------------------------------------------------------------------



export default store;