import { createContext, type Dispatch } from "react";

import { initialState, type AppState, type AppAction } from "../stores/app";

export const StateContext = createContext<AppState>(initialState);
export const DispatchContext = createContext<Dispatch<AppAction>>(() => {});
