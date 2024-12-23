
import { ActionResponse, SubmitMfaOtpArgs, SubmitMFAStatus, LoginResponse } from '../types';
import { logger } from '../utils/logger';
import { esApi } from '../utils/esApi';

export async function callSubmitMfaOtp(
  params: SubmitMfaOtpArgs
): Promise<ActionResponse<SubmitMFAStatus, LoginResponse>> {
  const { otp, deviceId, interactionId, correlationId } = params;
  
  logger.info('MFA verification attempt', { deviceId, correlationId });

  try {
    const response = await esApi.post('/auth/mfa/verify', {
      otp,
      deviceId,
      interactionId
    });

    logger.info('MFA verification successful', { correlationId });
    return {
      status: 'COMPLETED',
      data: response.data,
      correlationId
    };
    
  } catch (error) {
    logger.error('MFA verification failed', {
      correlationId,
      error: error.message
    });
    
    return {
      status: 'ERROR',
      error: error.message,
      correlationId
    };
  }
}
