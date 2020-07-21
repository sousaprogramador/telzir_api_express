import { PlansController } from './plansController'
describe('Plans Controller', () => {
  test('Should return 400 if no ddds is provided', () => {
    const sut = new PlansController()
    const httpRequest = {
      body: {
        ddd_origin: 'any_ddd',
        ddd_destination: 'any_ddd',
        plan_minutes: 'any_minutes'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
  })
})
