import { useReducer } from "react";
import { Route, Switch, useLocation } from "wouter";

import { ErrorBoundary } from "./components/ErrorBoundary";
import { StateContext, DispatchContext } from "./providers/StateContext";
import { Dashboard } from "./routes/Dashboard";
import { Landing } from "./routes/Landing";
import { Onboarding } from "./routes/Onboarding";
import { Settings } from "./routes/Settings";
import { NotFound } from "./routes/NotFound";
import { initialState, reducer } from "./stores/app";

function App() {
  const [, navigate] = useLocation(); // [location, navigate]
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    return initial;
  });

  const redirect = true;

  if (redirect) {
    navigate("/onboarding");
  }

  return (
    <ErrorBoundary>
      <h1>Savvy</h1>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <Switch>
            <Route path="/" component={Landing} />
            <Route path="/onboarding" component={Onboarding} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/settings" component={Settings} />
            <Route component={NotFound} />
          </Switch>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
