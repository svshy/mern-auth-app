import { Heading } from "@chakra-ui/react";
import BackToLogin from "../components/BackToLogin/BackToLogin";
import ResendActivationForm from "../components/ResendActivationForm/ResendActivationForm";
import { useResendActivationEmail } from "../components/ResendActivationForm/hooks/useResendActivationEmail";
import ResultBox from "../components/ui/ResultBox/ResultBox";

const ResendActivationPage = () => {
  const { resendEmailReq, isPending, isSuccess } = useResendActivationEmail();

  if (isSuccess) {
    return (
      <ResultBox
        type="success"
        heading="Check your email"
        description="If your account exists and is not active, an activation link has been sent to the provided email address."
      />
    );
  }

  return (
    <>
      <Heading size="2xl" sm={{ fontSize: "4xl" }}>
        Resend Email Activation
      </Heading>
      <ResendActivationForm
        isPending={isPending}
        resendActivationEmail={resendEmailReq}
      />
      <BackToLogin />
    </>
  );
};

export default ResendActivationPage;
