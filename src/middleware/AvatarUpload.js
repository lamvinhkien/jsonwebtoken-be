import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/public/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype == "image/bmp" || file.mimetype == "image/png" || file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg" || file.mimetype == "image/webp" || file.mimetype == "image/avif") {
            cb(null, true);
        } else {
            cb(new Error('Please upload image file.'));
        }
    }
});

export default upload;
