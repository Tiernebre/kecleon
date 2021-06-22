import { Notification } from "..";
import { AlertColor } from "../../types";
import styled from "styled-components";

export type AlertProps = {
  message: string;
  color: AlertColor;
};

const AlertContainer = styled.div.attrs((props) => ({
  className: "alert",
}))`
  position: sticky;
`;

export const Alert = ({ color, message }: AlertProps): JSX.Element => {
  return (
    <AlertContainer>
      <Notification color={color} closable>
        {message}
      </Notification>
    </AlertContainer>
  );
};
