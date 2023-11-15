import { Request, Response } from "express";
import sharp from 'sharp'
import path from 'path';
import fs from 'fs'

export const singleUploadController = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const imageBuffer = req.file.buffer;

    const compressionOptions = {
      quality: 60,
    };

    const maxImageWidth = 1920;
    const uploadFolderPath = path.resolve(process.cwd(), 'dist', 'uploads');
    if (!fs.existsSync(uploadFolderPath)) {
      // If not, create the "upload" folder
      fs.mkdirSync(uploadFolderPath);
    }
      

    const outputFileName = `${Date.now()}.webp`;
    const outputFilePath = path.resolve(uploadFolderPath, outputFileName);


    await sharp(imageBuffer)
      .resize({ width: maxImageWidth })
      .webp(compressionOptions)
      .toFile(outputFilePath);

    const imageUrl = `${req.protocol}://${req.get('host')}/api/public/${outputFileName}`;

    // Now, send the image URL as a response.
    res.status(201).json({
      status: 201,
      message: 'Successfully compressed and uploaded the image',
      data: {
        imageUrl,
      },
    });
  } catch (error) {
    // Handle errors here
    console.error(error);
    res.status(500).json({ error: error,message:error.message });
  }
};
  
// done multiple upload file data
export const multipleUploadController = async (req: Request, res: Response) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    const imageUrls: string[] = [];

    // Loop through the uploaded files and process each one.
    for (const file of req.files as Express.Multer.File[]) {
      const imageBuffer = file.buffer;

      const compressionOptions = {
        quality: 60,
      };

      const maxImageWidth = 1920;
      const uploadFolderPath = path.resolve(process.cwd(), 'dist', 'uploads');
      if (!fs.existsSync(uploadFolderPath)) {
        // If not, create the "upload" folder
        fs.mkdirSync(uploadFolderPath);
      }
      
      const outputFileName =`${file.originalname.replace(/\s/g, '_').replace(/\.[^/.]+$/, '')}_${Date.now()}.webp`;

      const outputFilePath = path.resolve(uploadFolderPath, outputFileName);

      await sharp(imageBuffer)
        .resize({ width: maxImageWidth })
        .webp(compressionOptions)
        .toFile(outputFilePath);

      const imageUrl = `${req.protocol}://${req.get('host')}/api/public/${outputFileName}`;
      imageUrls.push(imageUrl);
    }

    res.status(201).json({
      status: 201,
      message: 'Successfully uploaded and processed multiple images',
      data: {
        imageUrls,
      },
    });
  } catch (error) {
    // Handle errors here
    res.status(500).json({ error: error, message:error.message });
  }
};

