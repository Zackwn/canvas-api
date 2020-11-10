import { ErrorRequestHandler } from 'express'
import { ValidationError } from 'yup'

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if (error instanceof ValidationError) {
    let errors: IValidationErrors = {}

    error.inner.forEach(err => {
      errors[err.path] = err.errors
    })

    return res.status(404).json({ errors })
  }
  return res.status(500).send()
}

export default errorHandler