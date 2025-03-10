import { cleanEnv } from "envalid";
import { port, str } from "envalid/dist/validators";

export default cleanEnv(process.env, {
  PORT: port(),
  MONGO_URI: str(),
  APP_ORIGIN: str(),
  RESEND_API_KEY: str(),
  SESSION_SECRET: str()
});
