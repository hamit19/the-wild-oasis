import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import useBooking from "../bookings/hooks/useBooking";
import Spinner from "../../ui/Spinner";
import Checkbox from "../../ui/Checkbox";
import { formatCurrency } from "../../utils/helpers";
import { useEffect, useState } from "react";
import useCheckin from "./hooks/useCheckin";
import useSettings from "../settings/hooks/useSettings";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState();
  const [addBreakfast, setAddBreakfast] = useState();

  const { booking, isLoadingBooking, error } = useBooking();
  const { checkinBooking, isChecking } = useCheckin();
  const { settings, isLoadingSettings } = useSettings();

  const moveBack = useMoveBack();

  useEffect(() => {
    setConfirmPaid(booking?.isPaid ?? false);
  }, [booking?.isPaid]);

  if (isLoadingBooking || isLoadingSettings) return <Spinner />;
  if (error) return <h2>Something went wrong! please reload the page.</h2>;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const breakfastPrice = settings?.breakfastPrice * numNights * numGuests;

  function handleCheckin() {
    if (!confirmPaid) return;

    if (addBreakfast) {
      checkinBooking({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: breakfastPrice,
          totalPrice: totalPrice + breakfastPrice,
        },
      });
    } else {
      checkinBooking({ bookingId, breakfast: {} });
    }
  }

  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {!hasBreakfast && (
        <Box>
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((add) => !add);
              setConfirmPaid(false);
            }}
            id='add-breakfast'>
            Want to add breakfast for {formatCurrency(breakfastPrice)} ?
          </Checkbox>
        </Box>
      )}

      <Box>
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid(!confirmPaid)}
          id='confirm-paid'
          disabled={booking.isPaid && confirmPaid}>
          I confirm that {guests.fullName} has paid the total amount of{" "}
          {!addBreakfast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(totalPrice + breakfastPrice)}
          (${formatCurrency(totalPrice)} + ${formatCurrency(breakfastPrice)})`}
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button disabled={!confirmPaid || isChecking} onClick={handleCheckin}>
          Check in booking #{bookingId}
        </Button>
        <Button variations='secondary' onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
