import { Router } from "express";
import * as AcronomyController from "../Controlers/AcronomyController";
import Validator from "../middlewares/validator";
import Datachecker from "../middlewares/datackecker";

const route = Router();


route
  .route("/createPost")
  .post(
      Validator.newAccountRules(),
    Validator.validateInput,
    Datachecker.validateDescriptionlDuplication,
  AcronomyController.createAcronomy)
  .get(AcronomyController.getAllAcronomy );


route
  .route("/createPost/:id")
  .patch(AcronomyController.updateOneAcronomy)
  .get(AcronomyController.getOneAcronomy)
  .delete(AcronomyController.deleteOneAcronomy);

export default route;