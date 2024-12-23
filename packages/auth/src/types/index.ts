
export interface AuthUser {
  id: string;
  name: string;
  email: string;
  image?: string;
  role?: string;
}

export type LoginStatus = 'COMPLETED' | 'MFA_REQUIRED' | 'ERROR';
export type SubmitMFAStatus = 'COMPLETED' | 'ERROR';

export interface LoginRequest {
  username: string;
  password: string;
  policyId?: string;
  appId?: string;
}

export interface SubmitMfaOtpArgs {
  otp: string;
  deviceId: string;
  interactionId: string;
  correlationId: string;
}

export interface ActionResponse<S, T> {
  status: S;
  data?: T;
  error?: string;
  correlationId: string;
}

export interface AuthConfig {
  apiUrl?: string;
  redirectUrl?: string;
  tokenKey?: string;
}
