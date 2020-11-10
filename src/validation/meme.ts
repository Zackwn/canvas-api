import * as yup from 'yup'

export default {
  generate: yup.object().shape({
    texts: yup.array(
      yup.object().shape({
        text: yup.string().required(),
        position: yup.object().shape({
          x: yup.number().required(),
          y: yup.number().required()
        }),
        fontSize: yup.number()
      })
    ).required()
  })
}