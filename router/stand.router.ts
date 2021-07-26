import {  Router } from "https://deno.land/x/oak/mod.ts";

export const standRouter = new Router();
standRouter
  .get("/stand", (context) => {
    context.response.body = "stand server!";
  })
  .get("/stand/:number", (context) => {
    console.log(context.params);
    context.response.body = JSON.stringify({ result: 2 });
  });

