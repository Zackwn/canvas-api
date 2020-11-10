import { createCanvas, loadImage } from 'canvas'

export const generateMeme = async ({
  canvasConfig, imagePath, textColor, texts, fontSize
}: GenerateMemeParams): Promise<string> => {
  const canvas = createCanvas(
    canvasConfig.width,
    canvasConfig.heigth
  )

  const image = await loadImage(imagePath)

  const context = canvas.getContext('2d')

  context.drawImage(image, 0, 0, canvas.width, canvas.height)

  context.fillStyle = textColor
  context.font = `${fontSize}px sans-serif`

  texts.forEach(({ text, positions, fontSize }) => {
    if (fontSize) {
      context.font = `${fontSize}px sans-serif`
    }
    context.fillText(text, positions.x, positions.y)
  })

  const memeURL = canvas.toDataURL()

  return memeURL
}