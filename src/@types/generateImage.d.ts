interface IPositions {
  x: number,
  y: number
}

interface IText {
  text: string,
  fontSize?: number,
  positions: IPositions
}

interface ICanvasConfig {
  width: number,
  heigth: number
}

interface GenerateImageParams {
  image: Express.Multer.File.buffer,
  texts: IText[],
  textColor: string,
  fontSize?: number,
  canvasConfig: ICanvasConfig
}