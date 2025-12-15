import Button from "../../ui/Button";
import useCheckout from "./hooks/useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkingOut, isCheckingOut } = useCheckout();

  return (
    <Button
      onClick={() => checkingOut(bookingId)}
      variation='primary'
      sizes='small'
      disabled={isCheckingOut}>
      Check out
    </Button>
  );
}

export default CheckoutButton;
