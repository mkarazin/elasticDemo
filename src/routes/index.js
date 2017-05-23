import { Router } from "express"
import * as ResponseObjects from "./../utils/responseObjects"

const router = new Router()

/**
 * For Testing / checking if the service is running successfully
 */
router.get(
  "/healthCheck",
  (req, res) => {
    ResponseObjects.Success(res, {
      status: "up",
    })
  })

module.exports = router
