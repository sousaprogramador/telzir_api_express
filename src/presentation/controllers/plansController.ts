import { HttRequest, HttpResponse } from '../protocols/http'
export class PlansController {
  handle (httpRequest: HttRequest): HttpResponse {
    if (!httpRequest.body.ddd_origin) {
      return {
        statusCode: 400,
        body: new Error('Missing params: ddd_origin')
      }
    }

    if (!httpRequest.body.ddd_destination) {
      return {
        statusCode: 400,
        body: new Error('Missing params: ddd_destination')
      }
    }
  }
}
