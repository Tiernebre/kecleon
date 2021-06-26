import { Alerts, ExpirableAlert } from "..";
import { useAlerts } from "../../hooks";

// You may be wondering -- what's the difference between these values?
// Fade Out is when the element will _start_ to leave the page.
// Fade Duration is how long the fade out effect will run for.
const DEFAULT_FADE_OUT_IN_SECONDS = 5;
const DEFAULT_FADE_OUT_IN_MILLIS = DEFAULT_FADE_OUT_IN_SECONDS * 1000;
const DEFAULT_FADE_DURATION_IN_SECONDS = 2.5;
const DEFAULT_FADE_DURATION_IN_MILLIS = DEFAULT_FADE_DURATION_IN_SECONDS * 1000;

type SmartAlertsProps = {
  fadeOutInMillis?: number;
};

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
export const SmartAlerts = ({
  fadeOutInMillis,
}: SmartAlertsProps): JSX.Element => {
  const { state, dispatch } = useAlerts();
  const { alerts } = state;

  const expiresInMillis = fadeOutInMillis ?? DEFAULT_FADE_OUT_IN_MILLIS;

  return (
    <Alerts>
      {alerts.map((alert) => {
        const closeAlert = () => dispatch({ type: "remove", id: alert.id });
        return (
          <ExpirableAlert
            color={alert.color}
            expiresInMillis={expiresInMillis}
            key={alert.id}
            onRemoval={closeAlert}
            onClose={closeAlert}
            fadeable
            fadeDurationInMillis={DEFAULT_FADE_DURATION_IN_MILLIS}
          >
            {alert.message}
          </ExpirableAlert>
        );
      })}
    </Alerts>
  );
};
