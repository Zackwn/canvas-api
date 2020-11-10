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

interface GenerateMemeParams {
  imagePath: string,
  texts: IText[],
  textColor: string,
  fontSize?: number,
  canvasConfig: ICanvasConfig
}