import { useEffect } from "react";
import ResultBox from "../components/ui/ResultBox/ResultBox";
import AuthAPI from "../api/auth.api";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

const VerifyAccountPage = () => {
  const { token } = useParams() as { token: string };
  const navigate = useNavigate();

  const { isSuccess, isError } = useQuery({
    queryKey: ["VERIFY_ACCOUNT", token],
    queryFn: () => AuthAPI.verifyAccount(token),
    enabled: !!token,
    refetchOnWindowFocus: false,
  });

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
        heading="Your account has been verified"
        description="You're being redirected to login page. Please wait, or click the button below"
        link={{ to: "/login", text: "Login" }}
      />
    );
  }
  if (isError) {
    return (
      <ResultBox
        type="error"
        heading="Something went wrong!"
        description="An error occurred during account verification. Please try again or contact the administrator."
      />
    );
  }
};

export default VerifyAccountPage;
