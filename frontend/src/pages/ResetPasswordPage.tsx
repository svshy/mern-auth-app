import { Heading } from "@chakra-ui/react";
import ResetPasswordForm from "../components/ResetPasswordForm/ResetPasswordForm";
import { useResetPassword } from "../components/ResetPasswordForm/hooks/useResetPassword";
import { useNavigate, useParams } from "react-router-dom";
import ResultBox from "../components/ui/ResultBox/ResultBox";
import { useEffect } from "react";

const ResetPasswordPage = () => {
  const { token } = useParams() as { token: string };
  const navigate = useNavigate();

  const { isPending, isSuccess, resetPasswordReq } = useResetPassword();

  useEffect(() => {
    if (isSuccess) {
      const timeoutId = setTimeout(() => {
        navigate("/login");
      }, 7000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isSuccess, navigate]);

  if (isSuccess) {
    return (
      <ResultBox
        type="success"
        heading="Your password has been changed"
        description="You're being redirected to login page. Please wait, or click the button below"
        link={{ to: "/login", text: "Login" }}
      />
    );
  }
  return (
    <>
      <Heading size="2xl" sm={{ fontSize: "4xl" }}>
        Create new password
      </Heading>
      <ResetPasswordForm
        isPending={isPending}
        resetPassword={resetPasswordReq}
        token={token}
      />
    </>
  );
};

export default ResetPasswordPage;
