import React from "react";
import RecipientForm from "./_components/RecipientComponents/RecipientForm";
import ShowRecipients from "./_components/RecipientComponents/ShowRecipients";
import CheckStatus from "./_components/RecipientComponents/CheckStatus";

const Recipient = () => {
  return (
    <>
      <RecipientForm />
      <ShowRecipients />
      <CheckStatus/>
    </>
  );
};

export default Recipient;
