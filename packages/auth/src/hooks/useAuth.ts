
import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import type { AuthUser } from '../types';
import { logger } from '../utils/logger';

/**
 * Custom hook for handling authentication state and operations
 * @returns Authentication state and operations
 */
export const useAuth = () => {
  const { user, isAuthenticated, setUser, logout } = useAuthStore();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        logger.info('Checking authentication status');
        const response = await fetch('/__replauthuser');
        
        if (!response.ok) {
          throw new Error(`Auth check failed with status: ${response.status}`);
        }

        const userData = await response.json();
        if (userData) {
          const authUser: AuthUser = {
            id: userData.id,
            name: userData.name,
            email: userData.email,
            image: userData.profileImage,
          };
          logger.info('User authenticated successfully', { userId: authUser.id });
          setUser(authUser);
        }
      } catch (error) {
        logger.error('Authentication check failed:', { error: error.message });
        logout();
      }
    };
    
    checkAuth();
  }, [setUser, logout]);

  return {
    user,
    isAuthenticated,
    logout: () => {
      logger.info('User logged out', { userId: user?.id });
      logout();
    },
  };
};
