import { CookieOptions, Response } from "express";
import { thirtyDaysFromNow, thirtyMinutesFromNow } from "./date";

export const REFRESH_TOKEN_PATH = "/auth/refresh-token";

const defaults: CookieOptions = {
  sameSite: "strict",
  httpOnly: true,
};

export const getAccessTokenCookieOptions = (): CookieOptions => ({
  ...defaults,
  expires: thirtyMinutesFromNow(),
});

export const getRefreshTokenCookieOptions = (): CookieOptions => ({
  ...defaults,
  expires: thirtyDaysFromNow(),
  path: REFRESH_TOKEN_PATH,
});

type Params = {
  res: Response;
  accessToken: string;
  refreshToken: string;
};
export const setAuthCookies = ({ res, accessToken, refreshToken }: Params) =>
  res
    .cookie("accessToken", accessToken, getAccessTokenCookieOptions())
    .cookie("refreshToken", refreshToken, getRefreshTokenCookieOptions());

export const clearAuthCookies = (res: Response) =>
  res
    .clearCookie("accessToken")
    .clearCookie("refreshToken", { path: REFRESH_TOKEN_PATH });
