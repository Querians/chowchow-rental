import { PrismaClient } from '@prisma/client';
import { decodeAuthHeader, AuthTokenPayload } from './utils/auth.ts';
import { Request } from 'express';

export const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
  userId?: string;
}

export const createContext = async ({ req }: { req: Request }) => {
  const token =
    req && req.headers.authorization
      ? decodeAuthHeader(req.headers.authorization)
      : null;

  return {
    prisma: prisma,
    userId: token?.userId,
  };
};
