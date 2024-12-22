
export interface AuthUser {
  id: string;
  name: string;
  email: string;
  image?: string;
  role?: string;
}

export interface AuthConfig {
  apiUrl?: string;
  redirectUrl?: string;
  tokenKey?: string;
}
