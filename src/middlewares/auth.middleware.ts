import { Request, Response, NextFunction } from 'express';
import jwt, { Secret } from 'jsonwebtoken';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token missing' });
  }

  const token = authHeader.split(' ')[1];
  const secretEnv = process.env.JWT_SECRET;

  if (!secretEnv) {
    return res.status(500).json({ message: 'Server misconfiguration' });
  }

  try {
    const decoded = jwt.verify(token, secretEnv as Secret) as { id: number };
    (req as any).userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};