import request from 'supertest'
import app from '../src/app'

const texts = [
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

describe('generateMeme tests', () => {

  it('should successfully generate a meme', async (done) => {
    const response = await request(app)
      .post('/api/generateMeme')
      .send({ texts })

    expect(response.status).toBe(200)
    done()
  })

  it('should fail generating a meme', async (done) => {
    const response = await request(app)
      .post('/api/generateMeme')
      .send({})

    expect(
      JSON.stringify({
        status: response.status,
        field_error: response.body.errors
      })
    ).toBe(
      JSON.stringify({
        status: 404,
        field_error: { texts: ['texts is a required field'] }
      })
    )
    done()
  })

})

