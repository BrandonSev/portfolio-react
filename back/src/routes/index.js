const mainRouter = require("express").Router();
const projectRouter = require("./project.routes");
const imagesRouter = require("./images.routes");
const authRouter = require("./auth.routes");
const categoryRouter = require("./category.routes");

mainRouter.use("/projects", projectRouter);

mainRouter.use("/images", imagesRouter);

mainRouter.use("/", authRouter);

mainRouter.use("/categories", categoryRouter);

module.exports = mainRouter;
