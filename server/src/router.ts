import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

// Define program-related routes
import programActions from "./modules/programAction";

router.get("/api/programs", programActions.browse);
router.get("api/programs/:id", programActions.read);

/* ************************************************************************* */

// Declaration of a "Welcome" route

import sayActions from "./modules/sayAction";

router.get("/", sayActions.sayWelcome);

/* ************************************************************************* */

// Declaration of "categoryAction"
import categoryAction from "./modules/item/categoryAction";

router.get("/api/categories", categoryAction.browse);
router.get("/api/categories/:id", categoryAction.read);

export default router;
