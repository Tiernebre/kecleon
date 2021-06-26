import * as React from "react";
import { AlertRequest, QueuedAlert } from "../../types/alert";
import { v4 as uuid } from "uuid";

type Action =
  | { type: "queue"; payload: AlertRequest }
  | { type: "dequeue" }
  | { type: "remove"; id: string };
type Dispatch = (action: Action) => void;
type State = {
  alerts: QueuedAlert[];
};
type AlertsProviderProps = React.PropsWithChildren<unknown>;
type Context = {
  state: State;
  dispatch: Dispatch;
  showAlert: (request: AlertRequest) => void;
};

const AlertsContext = React.createContext<Context | undefined>(undefined);

const alertsReducer: React.Reducer<State, Action> = (
  state: State,
  action: Action
) => {
  switch (action.type) {
    case "queue": {
      const alert: QueuedAlert = {
        ...action.payload,
        id: uuid(),
      };
      return { alerts: [...state.alerts, alert] };
    }
    case "dequeue":
      return { alerts: state.alerts.slice(1) };
    case "remove": {
      const alerts = state.alerts.slice();
      const alertIndexToRemove = alerts.findIndex(({ id }) => id === action.id);
      alerts.splice(alertIndexToRemove, 1);
      return { alerts };
    }
    default:
      throw new Error(`Unhandled alerts action type`);
  }
};

export const AlertsProvider = ({
  children,
}: AlertsProviderProps): JSX.Element => {
  const [state, dispatch] = React.useReducer(alertsReducer, { alerts: [] });
  const showAlert = React.useCallback(
    (request: AlertRequest) => {
      dispatch({
        type: "queue",
        payload: request,
      });
    },
    [dispatch]
  );
  const value = { state, dispatch, showAlert };

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
