import { Notification } from "..";
import { AlertColor } from "../../types";
import styled from "styled-components";

export type AlertProps = {
  message: string;
  color: AlertColor;
};

const StyledAlert = styled.div.attrs(() => ({
  className: "alert",
}))`
  position: fixed;
  width: 400px;
  top: 20px;
  right: 20px;
`;

export const Alert = ({ color, message }: AlertProps): JSX.Element => {
  return (
    <StyledAlert>
      <Notification color={color} closable>
        {message}
      </Notification>
    </StyledAlert>
  );
};
