import { useForm } from "react-hook-form";

import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import FormRow from "./FormRow";
import useCreateCabin from "./hooks/useCreateCabin";
import useEditCabin from "./hooks/useEditCabin";

function CreateCabinForm({ cabinToEdit = {} }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditingSession = Boolean(editId);

  const { register, handleSubmit, reset, formState, getValues } = useForm({
    defaultValues: isEditingSession ? editValues : {},
  });
  const { errors } = formState;
  const { isCreating, createNewCabin } = useCreateCabin();
  const { isEditing, updateCabin } = useEditCabin();
  const isWorking = isEditing || isCreating;

  function onSubmit(data) {
    if (isEditingSession)
      updateCabin({ ...data, id: editId }, { onSuccess: () => reset() });
    else
      createNewCabin(
        { ...data, image: data.image[0] },
        { onSuccess: () => reset() }
      );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label={"Cabin name"} error={errors}>
        <Input
          type='text'
          id='name'
          name='name'
          disabled={isWorking}
          {...register("name", {
            required: "This filed is required!",
          })}
        />
      </FormRow>

      <FormRow label={"Maximum Capacity"} error={errors}>
        <Input
          type='number'
          id='maxCapacity'
          name='maxCapacity'
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "This field is required!",
            min: {
              value: 1,
              message: "Capacity must be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label={"Regular Price"} error={errors}>
        <Input
          type='number'
          id='regularPrice'
          name='regularPrice'
          disabled={isWorking}
          {...register("regularPrice", {
            required: "This field is required!",
            min: {
              value: 1,
              message: "Price must be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label={"Discount"} error={errors}>
        <Input
          type='number'
          id='discount'
          name='discount'
          disabled={isWorking}
          defaultValue={0}
          {...register("discount", {
            required: "This field is required!",
            validate: (value) =>
              value <= Number(getValues("regularPrice")) ||
              "Discount must be less than regular price!",
          })}
        />
      </FormRow>

      <FormRow label={"Description for website"} error={errors}>
        <Textarea
          type='text'
          id='description'
          name='description'
          disabled={isWorking}
          defaultValue=''
          {...register("description", {
            required: "This field is required!",
            validate: (value) =>
              value.length >= 10 ||
              "Description must be at least 10 characters long!",
          })}
        />
      </FormRow>

      <FormRow label={"Cabin Photo"} error={errors}>
        <FileInput
          name='image'
          id='image'
          accept='image/*'
          disabled={isWorking}
          {...register("image", {
            required: isEditingSession ? false : "This field is required!",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation='secondary' type='reset'>
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditingSession ? "Edit Cabin" : "Create new cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
