import { Injectable } from '@nestjs/common';
import * as Cloudinary from 'cloudinary';
import * as fs from 'fs';
import streamifier from 'streamifier';

const cloudinary = Cloudinary.v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

@Injectable()
export class UploadService {
  async uploadImg(img): Promise<any> {
    try {
      return new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: 'Image' }, (err, result) => {
            if (result) {
              resolve(result.url);
            } else {
              reject(err);
            }
          })
          .end(img.buffer);
      });
    } catch (err) {
      console.log(err);
    }
  }
}
