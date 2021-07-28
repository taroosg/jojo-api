import { Router } from "https://deno.land/x/oak/mod.ts";

export const standRouter = new Router();
standRouter
  .get("/stand", (context) => {
    context.response.body = "stand server!";
  })
  .get("/stand/:number", (context) => {
    console.log(context.params);
    const result = 0 < Number(context.params.number) && Number(context.params.number) < 9 ? Number(context.params.number) : "No such as number";
    context.response.body = JSON.stringify({ result:  result });
  });
