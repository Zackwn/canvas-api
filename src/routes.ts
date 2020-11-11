import { Router } from 'express'
import { generateImage } from './utils/generateImage'
import textsValidation from './validation/texts'
import multerConfig from './upload/multer'

const multerUpload = multerConfig.single('image')

const routes = Router()

routes.post('/generateImage', multerUpload, async (req, res) => {
  const { texts: textsString } = req.body
  const texts = JSON.parse(textsString).texts

  await textsValidation.generate.validate({ texts }, {
    abortEarly: false
  })

  const imgUrl = await generateImage({
    image: req.file.buffer,
    canvasConfig: { heigth: 500, width: 500 },
    textColor: '#000',
    texts
  })

  return res.json(imgUrl)
})

export default routes