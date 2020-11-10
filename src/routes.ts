import { Router } from 'express'
import { generateMeme } from './utils/generateMeme'
import path from 'path'

const routes = Router()

routes.post('/generateMeme', async (req, res) => {
  const { texts } = req.body

  if (!texts) {
    return res.status(404).send()
  }

  const imgUrl = await generateMeme({
    canvasConfig: { heigth: 500, width: 500 },
    imagePath: path.resolve(__dirname, 'images', 'billy.jpg'),
    textColor: '#000',
    texts
  })

  return res.json(imgUrl)
})

export default routes