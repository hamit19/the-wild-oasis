import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useSignup from "./hooks/useSignup";
import SpinnerMini from "../../ui/SpinnerMini";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { register, getValues, handleSubmit, formState, reset } = useForm();

  const { errors } = formState;

  const { signup, isSigningUp } = useSignup();

  function onSubmit({ fullName, email, password }) {
    if (!errors?.root?.type)
      signup(
        { email, password, fullName },
        {
          onSettled: () => reset(),
        }
      );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label='Full name' error={errors}>
        <Input
          disabled={isSigningUp}
          type='text'
          id='fullName'
          name='fullName'
          {...register("fullName", { required: "This filed is required!" })}
        />
      </FormRow>

      <FormRow label='Email address' error={errors}>
        <Input
          disabled={isSigningUp}
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
          disabled={isSigningUp}
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
          disabled={isSigningUp}
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
        <Button disabled={isSigningUp} variations='secondary' type='reset'>
          Cancel
        </Button>
        <Button disabled={isSigningUp}>
          {!isSigningUp ? "Create new user" : <SpinnerMini />}
        </Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
