import { prisma } from './client';
import { NextFunction, Request, Response } from 'express';
import { hashPassword } from '../utils/authUtils'

const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const createUser = catchAsync(
  async (request: Request, response: Response, next: NextFunction) => {
    const { username, name, email, password, type, city, country } =
      request.body;
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{username}, {email}]
      } 
    });
    if (existingUser) next(new AppError('User already exists', 409))

    const hashedPassword = await hashPassword(password)
    const user = await prisma.user.create({
      data: {
        username,
        name,
        email,
        password: hashedPassword,
        type,
        city,
        country,
      },
    });

    if (!user) return next(new AppError('Could not register user', 400));
    else {
      return response
        .status(200)
        .json({ Message: 'Successful registration', result: { username, email, type, city, country} });
    }
  }
);

// edit user
// delete user

export { createUser };
