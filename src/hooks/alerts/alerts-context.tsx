import * as React from "react";
import { AlertRequest } from "../../types/alert";

type Action = { type: "queue"; payload: AlertRequest } | { type: "dequeue" };
type Dispatch = (action: Action) => void;
type State = {
  alerts: AlertRequest[];
};
type AlertsProviderProps = React.PropsWithChildren<unknown>;
type Context = { state: State; dispatch: Dispatch };

const AlertsContext = React.createContext<Context | undefined>(undefined);

const alertsReducer: React.Reducer<State, Action> = (
  state: State,
  action: Action
) => {
  switch (action.type) {
    case "queue":
      return { alerts: [...state.alerts, action.payload] };
    case "dequeue":
      return { alerts: state.alerts.slice(1) };
    default:
      throw new Error(`Unhandled alerts action type`);
  }
};

export const AlertsProvider = ({
  children,
}: AlertsProviderProps): JSX.Element => {
  const [state, dispatch] = React.useReducer(alertsReducer, { alerts: [] });
  const value = { state, dispatch };

  return (
    <AlertsContext.Provider value={value}>{children}</AlertsContext.Provider>
  );
};

export const useAlerts = (): Context => {
  const context = React.useContext(AlertsContext);
  if (!context) {
    throw new Error("useAlerts must be used within an AlertsProvider");
  }
  return context;
};
