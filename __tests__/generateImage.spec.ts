import request from 'supertest'
import app from '../src/app'
import path from 'path'

const texts = {
  texts: [
    {
      text: 'how to blow up every pc with fortnite on it?', positions: {
        x: 230, y: 150
      },
      fontSize: 10
    },
    {
      text: 'OH, Billy...', positions: {
        x: 35,
        y: 265
      },
      fontSize: 15
    },
    {
      text: "I'm really proud of you", positions: {
        x: 275,
        y: 260
      },
      fontSize: 15
    }
  ]
}

describe('generateImage tests', () => {

  it('should successfully generate a image', async (done) => {
    const response = await request(app)
      .post('/api/generateImage')
      .set('Content-Type', 'multipart/form-data')
      .field('texts', JSON.stringify(texts))
      .attach('image', path.resolve(
        __dirname,
        'testImages',
        'image.jpg'))

    expect(response.status).toBe(200)
    done()
  })

  it('should fail generating a image', async (done) => {
    const response = await request(app)
      .post('/api/generateImage')
      .send()

    expect(response.status).toBe(400)
    done()
  })

})

