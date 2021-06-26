import { Alerts } from "..";
import { useAlerts } from "../../hooks";
import { ExpirableAlert } from "../expirable-alert";

/**
 * SmartAlerts is a flavor of the {@link Alerts} component
 * that is "smart" in that it knows about Alerts context state.
 *
 * Any consumer of SmartAlerts will need to wrap it with an {@link AlertsProvider}
 * context component in order for the alerts to work properly.
 *
 * If you do not wish to use the "smart" stateful coupled nature
 * of this component, you should prefer to just use {@link Alerts} instead.
 */
export const SmartAlerts = (): JSX.Element => {
  const { state, dispatch } = useAlerts();
  const { alerts } = state;

  return (
    <Alerts>
      {alerts.map((alert) => {
        return (
          <ExpirableAlert
            color={alert.color}
            expiresInMillis={5000}
            key={alert.id}
            onExpire={() => dispatch({ type: "remove", id: alert.id })}
          >
            {alert.message}
          </ExpirableAlert>
        );
      })}
    </Alerts>
  );
};
