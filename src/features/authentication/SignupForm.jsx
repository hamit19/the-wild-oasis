import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { register, getValues, handleSubmit, formState } = useForm();

  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label='Full name' error={errors}>
        <Input
          type='text'
          id='fullName'
          name='fullName'
          {...register("fullName", { required: "This filed is required!" })}
        />
      </FormRow>

      <FormRow label='Email address' error={errors}>
        <Input
          type='email'
          id='email'
          name='email'
          {...register("email", {
            required: "This filed is required!",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email!",
            },
          })}
        />
      </FormRow>

      <FormRow label='Password (min 8 characters)' error={errors}>
        <Input
          type='password'
          id='password'
          name='password'
          {...register("password", {
            required: "This filed is required!",
            minLength: {
              value: 8,
              message: "The password needs minimum of 8 characters!",
            },
          })}
        />
      </FormRow>

      <FormRow label='Repeat password' error={errors}>
        <Input
          type='password'
          id='passwordConfirm'
          name='passwordConfirm'
          {...register("passwordConfirm", {
            required: "This filed is required!",
            validate: (value) =>
              value === getValues().password || "Passwords need to match!",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variations='secondary' type='reset'>
          Cancel
        </Button>
        <Button>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
