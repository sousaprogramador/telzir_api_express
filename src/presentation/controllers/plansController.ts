export class PlansController {
  handle (httpRequest: any): any {
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
