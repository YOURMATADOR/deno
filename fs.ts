const text = "I'm a test text, hello!";

const encoder = new TextEncoder();
const data = encoder.encode(text);

Deno.writeFileSync("hello.text", data);
