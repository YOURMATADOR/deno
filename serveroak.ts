// if you ever want to force Deno to re-fetch the remote files i.e to clear the local cache,
// you can do so by executing your script with the --reload flag else.g deno run --reload my_script.ts

import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use(({ response, }) => {
  response.body = "Hello from oak";
});

await app.listen({ port: 3000 });
