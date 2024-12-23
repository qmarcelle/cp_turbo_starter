
import { ActionResponse, LoginRequest, LoginStatus, PortalLoginResponse } from '../types';
import { logger } from '../utils/logger';
import { esApi } from '../utils/esApi';

export async function callLogin(
  request: LoginRequest
): Promise<ActionResponse<LoginStatus, PortalLoginResponse>> {
  const correlationId = `${request.username}_${Date.now()}`;
  
  logger.info('Login attempt initiated', { username: request.username, correlationId });
  
  try {
    if (!request.username || !request.password) {
      throw new Error('INVALID_INPUT');
    }

    const response = await esApi.post('/auth/login', {
      username: request.username,
      password: request.password,
      policyId: request.policyId,
      appId: request.appId
    });

    if (response.data.message === 'OTP_REQUIRED') {
      logger.info('MFA required', { correlationId });
      return {
        status: 'MFA_REQUIRED',
        data: response.data,
        correlationId
      };
    }

    logger.info('Login successful', { correlationId });
    return {
      status: 'COMPLETED',
      data: response.data,
      correlationId
    };
    
  } catch (error) {
    logger.error('Login failed', { 
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
