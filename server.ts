import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { standRouter } from "./router/stand.router.ts";

// const router = new Router();
// router
//   .get("/", (context) => {
//     context.response.body = "Chat server!";
//   })
  // .get("/:number", (context) => {
  //   console.log(context.params);
  //   context.response.body = JSON.stringify({ result: 2 });
  // });

const app = new Application();
app.use(standRouter.routes());
app.use(standRouter.allowedMethods());
// app.use("/stand", (context) => standRouter(context));

addEventListener("fetch", app.fetchEventHandler());
