import { default as jwt }  from 'jsonwebtoken';

import 'dotenv/config';
const APP_SECRET = process.env.APP_SECRET;

export interface AuthTokenPayload {
  userId: string;
}

export function decodeAuthHeader(authHeader: String): AuthTokenPayload {
  const token = authHeader.replace('Bearer ', '');

  if (!token) {
    throw new Error('No token found');
  }
  return jwt.verify(token, APP_SECRET) as AuthTokenPayload;
}
