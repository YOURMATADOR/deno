import { Application } from "https://deno.land/x/oak/mod.ts";
import { routes } from "./routes/index.ts";

const app = new Application();

app.use(routes.routes());
app.use(routes.allowedMethods());

await app.listen({ port: 3000 });
