import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import useSettings from "./hooks/useSettings";
import useUpdateSetting from "./hooks/useUpdateSetting";

function UpdateSettingsForm() {
  const {
    isLoading,
    error,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGustesPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();

  const { isUpdating, updateSetting } = useUpdateSetting();

  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;

    updateSetting({ [field]: value });
  }

  if (isLoading) return <Spinner />;

  if (error) return <h3>Something went wrong! </h3>;

  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input
          defaultValue={minBookingLength}
          type='number'
          id='min-nights'
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input
          defaultValue={maxBookingLength}
          type='number'
          id='max-nights'
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
        />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input
          defaultValue={maxGustesPerBooking}
          type='number'
          id='max-guests'
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxGustesPerBooking")}
        />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input
          defaultValue={breakfastPrice}
          type='number'
          id='breakfast-price'
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
