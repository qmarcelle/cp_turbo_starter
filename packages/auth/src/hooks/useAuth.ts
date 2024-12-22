
import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import type { AuthUser } from '../types';

export const useAuth = () => {
  const { user, isAuthenticated, setUser, logout } = useAuthStore();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/__replauthuser');
        const userData = await response.json();
        if (userData) {
          const authUser: AuthUser = {
            id: userData.id,
            name: userData.name,
            email: userData.email,
            image: userData.profileImage,
          };
          setUser(authUser);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        logout();
      }
    };
    
    checkAuth();
  }, [setUser, logout]);

  return {
    user,
    isAuthenticated,
    logout,
  };
};
