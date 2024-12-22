declare namespace SharedHealth {
  interface LoginRequest {
    username: string;
    password: string;
    policyId?: string;
    appId?: string;
  }

  interface LoginResponse {
    message: string;
    accessToken?: string;
    mfaDeviceList?: MFADevice[];
    interactionId?: string;
    interactionToken?: string;
  }

  interface MFADevice {
    deviceId: string;
    deviceType: string;
    value: string;
  }

  type LoginStatus =
    | 'LOGIN_OK'
    | 'MFA_REQUIRED_ONE_DEVICE'
    | 'MFA_REQUIRED_MULTIPLE_DEVICES'
    | 'VERIFY_EMAIL'
    | 'ERROR';

  interface ActionResponse<S, T> {
    status: S;
    data?: T;
    error?: {
      errorCode: string;
      message: string;
    };
  }
}
