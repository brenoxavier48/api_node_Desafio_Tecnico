import { HttpResponse } from '../protocols'
import { ServerError } from '../errors'

export const badRequest = (error: Error): HttpResponse => {
  return {
    statusCode: 400,
    body: error
  }
}

export const serverError = (err: Error): HttpResponse => {
  return {
    statusCode: 500,
    body: new ServerError(err)
  }
}