import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import useBooking from "./hooks/useBooking";
import Spinner from "../../ui/Spinner";
import useCheckout from "../check-in-out/hooks/useCheckout";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useDeleteBooking from "./hooks/useDeleteBooking";
import { useNavigate } from "react-router-dom";
import Empty from "../../ui/Empty";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking, isLoadingBooking, error, bookingId } = useBooking();
  const status = booking?.status;
  const { checkingOut, isCheckingOut } = useCheckout();
  const { removeBooking, isDeletingBooking } = useDeleteBooking();
  const moveBack = useMoveBack();

  const navigate = useNavigate();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  if (isLoadingBooking) return <Spinner />;

  if (!booking) return <Empty resourceName={"booking"} />;

  if (error) return <h2>Something went wrong! please reload the page.</h2>;

  return (
    <Modal>
      <Row type='horizontal'>
        <HeadingGroup>
          <Heading as='h1'>Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && <Button>Check in</Button>}
        {status === "checked-in" && (
          <Button
            disabled={isCheckingOut}
            onClick={() => checkingOut(bookingId)}>
            Check out
          </Button>
        )}

        <Modal.Open opens='delete'>
          <Button variations='danger'>Delete booking</Button>
        </Modal.Open>

        <Modal.Window name='delete'>
          <ConfirmDelete
            resourceName={"booking"}
            disabled={isDeletingBooking}
            onConfirm={() =>
              removeBooking(bookingId, { onSettled: navigate(-1) })
            }
            key={bookingId}
          />
        </Modal.Window>

        <Button variations='secondary' onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </Modal>
  );
}

export default BookingDetail;
