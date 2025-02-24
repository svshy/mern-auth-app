import { Heading } from "@chakra-ui/react";
import ForgotPasswordForm from "../components/ForgotPasswordForm/ForgotPasswordForm";
import { useForgotPassword } from "../components/ForgotPasswordForm/hooks/useForgotPassword";
import ResultBox from "../components/ui/ResultBox/ResultBox";
import BackToLogin from "../components/BackToLogin/BackToLogin";

const ForgotPasswordPage = () => {
  const { forgotPasswordReq, isPending, isSuccess } = useForgotPassword();

  if (isSuccess) {
    return (
      <ResultBox
        type="success"
        heading="Check your email"
        description="If your account exists and is active, a password reset link has been sent to the provided email address. The link will be valid for 1 hour."
      />
    );
  }

  return (
    <>
      <Heading size="2xl" sm={{ fontSize: "4xl" }}>
        Forgot password?
      </Heading>
      <ForgotPasswordForm
        isPending={isPending}
        forgotPassword={forgotPasswordReq}
      />
      <BackToLogin />
    </>
  );
};

export default ForgotPasswordPage;
