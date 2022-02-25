import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

//below is the way getting access if u want to get value from th datalayer or want to dispatch an action
export const useDataLayerValue = () => useContext(DataLayerContext);
