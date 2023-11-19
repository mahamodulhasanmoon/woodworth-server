"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multipleUploadController = exports.singleUploadController = void 0;
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const singleUploadController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        const imageBuffer = req.file.buffer;
        const compressionOptions = {
            quality: 60,
        };
        const maxImageWidth = 1920;
        const uploadFolderPath = path_1.default.resolve(process.cwd(), 'dist', 'uploads');
        if (!fs_1.default.existsSync(uploadFolderPath)) {
            // If not, create the "upload" folder
            fs_1.default.mkdirSync(uploadFolderPath);
        }
        const outputFileName = `${Date.now()}.webp`;
        const outputFilePath = path_1.default.resolve(uploadFolderPath, outputFileName);
        yield (0, sharp_1.default)(imageBuffer)
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
    }
    catch (error) {
        // Handle errors here
        console.error(error);
        res.status(500).json({ error: error, message: error.message });
    }
});
exports.singleUploadController = singleUploadController;
// done multiple upload file data
const multipleUploadController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: 'No files uploaded' });
        }
        const imageUrls = [];
        // Loop through the uploaded files and process each one.
        for (const file of req.files) {
            const imageBuffer = file.buffer;
            const compressionOptions = {
                quality: 60,
            };
            const maxImageWidth = 1920;
            const uploadFolderPath = path_1.default.resolve(process.cwd(), 'dist', 'uploads');
            if (!fs_1.default.existsSync(uploadFolderPath)) {
                // If not, create the "upload" folder
                fs_1.default.mkdirSync(uploadFolderPath);
            }
            const outputFileName = `${file.originalname.replace(/\s/g, '_').replace(/\.[^/.]+$/, '')}_${Date.now()}.webp`;
            const outputFilePath = path_1.default.resolve(uploadFolderPath, outputFileName);
            yield (0, sharp_1.default)(imageBuffer)
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
    }
    catch (error) {
        // Handle errors here
        res.status(500).json({ error: error, message: error.message });
    }
});
exports.multipleUploadController = multipleUploadController;
//# sourceMappingURL=uploader.controller.js.map