let cachedEditorState = "Test question: What is the year now?";
let lastUpdated = new Date().toISOString();

Bun.serve({
  port: 3001,
  async fetch(req) {
    const url = new URL(req.url);

    // POST /update — receive editor content
    if (req.method === "POST" && url.pathname === "/update") {
      const body = await req.text();
      cachedEditorState = body;
      lastUpdated = new Date().toISOString();
      return new Response("Editor state updated", { status: 200 });
    }

    // GET /state — return structured JSON
    if (req.method === "GET" && url.pathname === "/state") {
      const response = {
        content: cachedEditorState,
        updatedAt: lastUpdated,
      };
      return Response.json(response);
    }

    return new Response("Not found", { status: 404 });
  },
});
