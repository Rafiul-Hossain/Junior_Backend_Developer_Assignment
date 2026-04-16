import dotenv from 'dotenv';
dotenv.config();

export const port = process.env.PORT || 5000;
export const env = process.env.NODE_ENV || 'development';

// JWT
export const accessTokenSecrete = process.env.ACCESS_TOKEN_SECRET;
export const accessTokenExpires = process.env.ACCESS_TOKEN_EXPIRES || '7d';
export const refreshTokenSecrete = process.env.REFRESH_TOKEN_SECRET;
export const refreshTokenExpires = process.env.REFRESH_TOKEN_EXPIRES || '10d';

// Email
export const emailExpires = parseInt(process.env.EMAIL_EXPIRES || 15 * 60 * 1000);
export const emailHost = process.env.EMAIL_HOST;
export const emailPort = process.env.EMAIL_PORT;
export const emailAddress = process.env.EMAIL_ADDRESS;
export const emailPass = process.env.EMAIL_PASS;
export const emailFrom = process.env.EMAIL_FROM;
export const adminMail = process.env.ADMIN_EMAIL;

// Cloudinary
export const cloudinaryCloudName = process.env.CLOUDINARY_CLOUD_NAME;
export const cloudinaryApiKey = process.env.CLOUDINARY_API_KEY;
export const cloudinarySecret = process.env.CLOUDINARY_API_SECRET;
