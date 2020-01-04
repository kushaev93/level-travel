import React from "react";
import { SnackbarProvider, useSnackbar } from "notistack";

const Message = props => {
  const { messages } = props;
  const { enqueueSnackbar } = useSnackbar();

  if (!messages) {
    return null;
  }

  const activeErrors = messages.map(item => enqueueSnackbar(item.message));

  return (<span id="mes">{activeErrors}</span>)
};



export default function PopUpMessage(props) {
  const { messages } = props;
  
  return (
    <SnackbarProvider maxSnack={5}>
      <Message messages={messages} />
    </SnackbarProvider>
  );
}
