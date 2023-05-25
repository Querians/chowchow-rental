import { ConfirmContact, ConfirmAddress, ConfirmPayment } from 'ui';

export const ConfirmInfo = ({ contact, address }) => {
  return (
    <>
      <ConfirmContact contact={contact}/>
      <ConfirmAddress address={address}/>
      <ConfirmPayment />
    </>
  );
};
