export class PlansController {
  handle (httpRequest: any): any {
    return {
      statusCode: 200,
      body: new Error('Missing params: ddd_origin')
    }
  }
}
