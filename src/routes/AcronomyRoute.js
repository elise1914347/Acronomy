import { Router } from "express";
import * as AcronomyController from "../Controlers/AcronomyController";

const route = Router();


route
  .route("/createPost")
  .post( AcronomyController.createAcronomy)
  .get(AcronomyController.getAllAcronomy );


route
  .route("/createPost/:id")
  .patch(AcronomyController.updateOneAcronomy)
  .get(AcronomyController.getOneAcronomy)
  .delete(AcronomyController.deleteOneAcronomy);

export default route;