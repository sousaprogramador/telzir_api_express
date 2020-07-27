import { HttRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-params-error'
import { badResquest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'

export class PlansController implements Controller {
  handle(httpRequest: HttRequest): HttpResponse {
    const requiredFields = ['ddd_origin', 'ddd_destination']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badResquest(new MissingParamError(field))
      }
    }
  }
}
