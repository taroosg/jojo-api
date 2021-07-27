import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { standRouter } from "./router/stand.router.ts";

const app = new Application();
app.use(standRouter.routes());
app.use(standRouter.allowedMethods());

addEventListener("fetch", app.fetchEventHandler());
