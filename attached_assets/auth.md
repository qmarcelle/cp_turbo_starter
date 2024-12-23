# Authentication Implementation Context

## Core Files
- @src/app/(auth)/login/actions.ts: Main login actions
- @src/app/(auth)/login/mfa.ts: MFA handling
- @src/utils/api/esApi.ts: ES API integration

## Flow
1. User submits credentials
2. ES API validates through PingOne
3. MFA verification if required
4. Session establishment

## Implementation Details
```typescript
// Login Action Structure
export async function callLogin(
  request: LoginRequest
): Promise<ActionResponse<LoginStatus, PortalLoginResponse>> {
  const correlationId = `${request.username}_${Date.now()}`;
  try {
    // Implementation
  } catch (error) {
    // Error handling
  }
}

// MFA Implementation
export async function callSubmitMfaOtp(
  params: SubmitMfaOtpArgs
): Promise<ActionResponse<SubmitMFAStatus, LoginResponse>> {
  // Implementation
}
```
