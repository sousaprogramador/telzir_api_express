import { Router } from 'express'

export default (router: Router): void => {
  router.post('sigunp', (req, res) => {
    res.json('ok')
  })
}
