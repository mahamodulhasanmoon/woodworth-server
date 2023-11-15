import { Request } from 'express';
import multer, {  Multer, MulterError } from 'multer';

const storage = multer.memoryStorage();
const fileSizeLimit: number = 5 * 1024 * 1024;

const upload: Multer = multer({
  storage,
  fileFilter: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, acceptFile: boolean) => void
  ) => {
    if (file.size && file.size > fileSizeLimit) {
      return cb(new MulterError('LIMIT_FILE_SIZE', 'File size exceeds the maximum limit of 5 MB.'), false);
    }

    cb(null, true);
  },
});

export default upload
