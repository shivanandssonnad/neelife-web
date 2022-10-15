import React from 'react';
import { LOGIN_MESSAGES } from './constant';
import LoginMessageContainer from './LoginMessageContainer';

function LoginMessage(props) {
  return (
    <LoginMessageContainer className={props.className}>
      <LoginMessageContainer.Title>
        Let’s deliver smiles today
      </LoginMessageContainer.Title>
      <div>
        <For of={LOGIN_MESSAGES} each="message">
          <LoginMessageContainer.MessageRow
            key={message.label}
            className="margin-top-40"
            label={message.label}
            subLabel={message.subLabel}
          />
        </For>
      </div>
    </LoginMessageContainer>
  );
}

export default LoginMessage;
