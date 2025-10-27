import { Request, Response, NextFunction } from 'express';
import { AppError } from '@/utils/errors';

export async function errorMiddleware(
  error: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  if (error instanceof AppError) {
    res.status(error.statusCode).json({
      success: false,
      error: {
        code: error.code,
        message: error.message,
        details: error.details,
      },
      timestamp: new Date().toISOString(),
    });
    return;
  }

  console.error('Unhandled error:', error);

  res.status(500).json({
    success: false,
    error: {
      code: 'INTERNAL_SERVER_ERROR',
      message: 'An unexpected error occurred',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    },
    timestamp: new Date().toISOString(),
  });
}
