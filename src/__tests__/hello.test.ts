import { createMocks } from "node-mocks-http";
import handleExample from "../pages/api/hello";

describe("/api/hello", () => {
  test("returns a message with the specified animal", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });

    await handleExample(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual({ name: "John Doe" });
  });
});
