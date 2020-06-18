import { Router } from "https://deno.land/x/oak/mod.ts";

let routes = new Router();

interface Todo {
  name: string;
  age: number;
}

let todos: Todo[] = [];

routes.get("/", ({ response }) => {
  response.body = todos;
});

routes.post("/todo", async ({ response, request, params }) => {
  let result = await request.body({
    contentTypes: {
      form: ["form-data"],
    },
  });
  let data = await result.value.read();
  console.log("====================================");
  console.log(result, data);
  console.log("====================================");

  let { name, age } = data.fields;
  todos = [...todos, { name, age }];
  response.body = "New todo added";
});

export { routes };
