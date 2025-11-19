import styled from "styled-components";
import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
import CreateCabinForm from "./CreateCabinForm";
import useDeleteCabin from "./hooks/useDeleteCabin";
import { HiDuplicate, HiPencil, HiTrash } from "react-icons/hi";
import useCreateCabin from "./hooks/useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
export default function CabinRow({ cabin }) {
  const {
    id: cabinId,
    regularPrice: price,
    name,
    maxCapacity,
    image,
    discount,
    description,
  } = cabin;

  const { isDeleting, removeCabin } = useDeleteCabin();
  const { isCreating, createNewCabin } = useCreateCabin();

  const handleDuplicate = () => {
    createNewCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      image,
      regularPrice: price,
      discount,
      description,
    });
  };

  return (
    <TableRow role='row'>
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div> Fits up to {maxCapacity} Guests</div>
      <Price>{formatCurrency(price)}</Price>
      <Discount>{discount ? formatCurrency(discount) : "---"}</Discount>
      <div>
        <Modal>
          <Modal.Open opens='edit'>
            <button>
              <HiPencil />
            </button>
          </Modal.Open>
          <Modal.Window name='edit'>
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>
        </Modal>

        <button disabled={isCreating} onClick={handleDuplicate}>
          <HiDuplicate />
        </button>

        <Modal>
          <Modal.Open opens='confirm-delete'>
            <button disabled={isDeleting}>
              <HiTrash />
            </button>
          </Modal.Open>

          <Modal.Window name='confirm-delete'>
            <ConfirmDelete
              onConfirm={() => removeCabin(cabinId)}
              resourceName={`"${name}"`}
            />
          </Modal.Window>
        </Modal>

        <Menus.Menu>
          <Menus.Toggle id={cabinId} />
          <Menus.List id={cabinId}>
            <Menus.Button
              icon={<HiDuplicate />}
              disabled={isCreating}
              onClick={handleDuplicate}>
              Duplicate
            </Menus.Button>
            <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
            <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
          </Menus.List>
        </Menus.Menu>
      </div>
    </TableRow>
  );
}

CabinRow.propTypes = {
  cabin: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    maxCapacity: PropTypes.number.isRequired,
    regularPrice: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
