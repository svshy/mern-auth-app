export interface CreateAccountBody {
  login: string;
  password: string;
  email: string;
}

export interface LogInBody {
  login: string;
  password: string;
}

export interface IsUserUniqueBody {
  login?: string;
  email?: string;
}

export interface IsUserUniqueRes {
  isUnique: boolean;
}

export interface ForgotPasswordBody {
  email: string;
}

export interface ResendActivationBody {
  email: string;
}

export interface ResetPasswordBody {
  password: string;
}
