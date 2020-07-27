import { HttRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-params-error'
export class PlansController {
  handle(httpRequest: HttRequest): HttpResponse {
    if (!httpRequest.body.ddd_origin) {
      return {
        statusCode: 400,
        body: new MissingParamError('ddd_origin')
      }
    }

    if (!httpRequest.body.ddd_destination) {
      return {
        statusCode: 400,
        body: new MissingParamError('ddd_destination')
      }
    }
  }
}
