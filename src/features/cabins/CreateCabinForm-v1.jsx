import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";

function CreateCabinForm() {
  const { register, handleSubmit, reset, formState, getValues } = useForm();
  const { errors } = formState;
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("The Cabin added successfully!");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  function onSubmit(data) {
    if (!data) return;

    mutate({ ...data, image: data.image[0] });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label={"Cabin name"} error={errors}>
        <Input
          type='text'
          id='name'
          name='name'
          disabled={isPending}
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
          disabled={isPending}
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
          disabled={isPending}
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
          disabled={isPending}
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
          disabled={isPending}
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
          disabled={isPending}
          {...register("image", {
            required: "This field is required!",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation='secondary' type='reset'>
          Cancel
        </Button>
        <Button disabled={isPending}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
