import { useForm } from "react-hook-form";
import { ResendActivationBody } from "../../types/Auth.types";
import { Button, Stack } from "@chakra-ui/react";
import FormTextField from "../ui/FormTextField/FormTextField";
import { LuMail } from "react-icons/lu";
import { emailRegex } from "../../utils/regexPatterns";

interface Props {
  isPending: boolean;
  resendActivationEmail: (data: ResendActivationBody) => void;
}

const ResendActivationForm = ({ isPending, resendActivationEmail }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResendActivationBody>();

  const onSubmit = handleSubmit((data) => resendActivationEmail(data));

  return (
    <form onSubmit={onSubmit}>
      <Stack w="xs" sm={{ w: "350px" }} gap="1.5rem">
        <FormTextField
          label="Email"
          invalid={!!errors.email}
          errorText={errors.email?.message}
          startElement={<LuMail />}
          placeholder="Type your email"
          register={register}
          name="email"
          registerOptions={{
            required: "Email is required.",
            pattern: {
              value: emailRegex,
              message: "Please enter a valid email",
            },
          }}
        />
        <Button type="submit" loading={isPending}>
          Resend email
        </Button>
      </Stack>
    </form>
  );
};

export default ResendActivationForm;
