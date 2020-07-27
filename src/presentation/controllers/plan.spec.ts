import { PlansController } from './plansController'
import { MissingParamError } from '../errors/missing-params-error'

const makeSut = (): PlansController => {
  return new PlansController()
}

describe('Plans Controller', () => {
  test('Should return 400 if no ddd_origin is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        ddd_destination: 'any_ddd',
        plan_minutes: 'any_minutes'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('ddd_origin'))
  })
})

describe('Plans Controller', () => {
  test('Should return 400 if no ddd_destination is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        ddd_origin: 'any_ddd',
        plan_minutes: 'any_minutes'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('ddd_destination'))
  })
})
