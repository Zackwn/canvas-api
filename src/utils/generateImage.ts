import { createCanvas, loadImage } from 'canvas'

export const generateImage = async ({
  canvasConfig, image, textColor, texts, fontSize
}: GenerateImageParams): Promise<string> => {
  const canvas = createCanvas(
    canvasConfig.width,
    canvasConfig.heigth
  )

  const img = await loadImage(image)

  const context = canvas.getContext('2d')

  context.drawImage(img, 0, 0, canvas.width, canvas.height)

  context.fillStyle = textColor
  context.font = `${fontSize}px sans-serif`

  texts.forEach(({ text, positions, fontSize }) => {
    if (fontSize) {
      context.font = `${fontSize}px sans-serif`
    }
    context.fillText(text, positions.x, positions.y)
  })

  const imageURL = canvas.toDataURL()

  return imageURL
}