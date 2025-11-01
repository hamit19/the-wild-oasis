import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "./FormRow";

function CreateCabinForm() {
  const { register, handleSubmit, reset, formState, getFieldState } = useForm();
  const { errors, name } = formState;
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

  console.log("Hello!", errors);

  console.log("Ffff", formState.name);

  function onSubmit(data) {
    if (!data) return;

    mutate(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label={"Cabin name"} error={errors}>
        <Input
          type='text'
          id='name'
          name='name'
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
          {...register("maxCapacity", {
            required: "This field is required!",
          })}
        />
      </FormRow>

      <FormRow label={"Regular Price"} error={errors}>
        <Input
          type='number'
          id='regularPrice'
          name='regularPrice'
          {...register("regularPrice", {
            required: "This field is required!",
          })}
        />
      </FormRow>

      <FormRow label={"Discount"} error={errors}>
        <Input
          type='number'
          id='discount'
          name='discount'
          defaultValue={0}
          {...register("discount", {
            required: "This field is required!",
          })}
        />
      </FormRow>

      <FormRow label={"Description for website"} error={errors}>
        <Textarea
          type='text'
          id='description'
          name='description'
          defaultValue=''
          {...register("description", { required: "This field is required!" })}
        />
      </FormRow>

      <FormRow label={"Cabin Photo"} error={errors}>
        <FileInput id='image' accept='image/*' />
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
