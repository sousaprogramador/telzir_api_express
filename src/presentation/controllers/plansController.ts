import { HttRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-params-error'
import { badResquest } from '../helpers/http-helper'

export class PlansController {
  handle(httpRequest: HttRequest): HttpResponse {
    if (!httpRequest.body.ddd_origin) {
      return badResquest(new MissingParamError('ddd_origin'))
    }
    if (!httpRequest.body.ddd_destination) {
      return badResquest(new MissingParamError('ddd_destination'))
    }
  }
}
