import { Resend } from "resend";
import env from "../util/envalidEnv";
import { getVerifyEmailHTMLTemplate } from "./emailTemplates";

const resend = new Resend(env.RESEND_API_KEY);

type Params = {
  to: string;
  subject: string;
  text: string;
  html: string;
};

const sendMail = async ({ to, subject, text, html }: Params) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to,
    subject,
    text,
    html,
  });
};

export const sendVerifyAccountEmail = async (email: string, token: string) => {
  const verificationUrl = `${env.APP_ORIGIN}/api/auth/verify-account?token=${token}`;
  await sendMail({
    to: email,
    ...getVerifyEmailHTMLTemplate(verificationUrl),
  });
};
