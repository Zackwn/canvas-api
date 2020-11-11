import multer from 'multer'

function getExt(filename: string) {
  const filenameArr = filename.split('.')
  return filenameArr[filenameArr.length - 1].toLowerCase()
}

const maxFileSize = 10 * 1000 * 1000
const allowedFiles = ['png', 'jpg', 'jpeg']

const multerConfig = multer({
  fileFilter: (req, file, callback) => {
    const fileExt = getExt(file.originalname)
    if (allowedFiles.includes(fileExt)) {
      return callback(null, true)
    }
    return callback({
      name: 'UNSUPPORTED_MEDIA_TYPE',
      message: ''
    })
  },
  limits: {
    fileSize: maxFileSize
  }
})

export default multerConfig