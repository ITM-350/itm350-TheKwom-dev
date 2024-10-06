const { events } = require("../backend/api.js");
const eventsData = require("../backend/events.js");

describe("Event Handlers", () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = { json: jest.fn() };
  });

  test("should return all events", () => {
    events(req, res);
    expect(res.json).toHaveBeenCalledWith(eventsData);
  });
});

// pass/fail patterns
test("Number should be positive", () => {
  const number = 5;
  expect(number > 0).toBe(true);
});
test("Number should be negative", () => {
  const number = -5;
  expect(number < 0).toBe(true);
});

// collection management patterns
test("Item should be added to the list", () => {
  const items = [1, 2, 3];
  items.push(4);
  expect(items).toEqual([1, 2, 3, 4]);
});

// data driven patterns
test.each([
  [1, 2],
  [2, 4],
  [3, 6],
])("Multiplying %i by 2 results in %i", (input, expected) => {
  expect(input * 2).toBe(expected);
});

// performance patterns
test("Function should execute within time limit", () => {
  const start = Date.now();
  const result = Array.from({ length: 10000 }, (_, i) => i + 1).reduce(
    (a, b) => a + b
  );
  const end = Date.now();
  expect(end - start).toBeLessThan(10);
});

//process pattterns
test('Process should move from "start" to "completed"', () => {
  let processStep = "start";
  processStep = "in_progress";
  processStep = "completed";
  expect(processStep).toBe("completed");
});

// simulation patterns
test("Simulate successful login", () => {
  const username = "user123";
  const password = "password";
  const validUsername = "user123";
  const validPassword = "password";

  expect(username === validUsername && password === validPassword).toBe(true);
});

// multithreading patterns
const { Worker, isMainThread, parentPort } = require("worker_threads");

if (isMainThread) {
  test("Multithreading works correctly", async () => {
    const worker = new Worker(__filename);
    let result;

    worker.on("message", (msg) => {
      result = msg;
    });

    worker.postMessage("start");
    await new Promise((resolve) => worker.on("exit", resolve));

    expect(result).toBe("done");
  });
} else {
  parentPort.on("message", (msg) => {
    if (msg === "start") {
      parentPort.postMessage("done");
    }
  });
}

// stress test patterns
test("Stress test with many iterations", () => {
  let i = 0;
  try {
    while (i < 1000000) {
      i++;
    }
    expect(i).toBe(1000000);
  } catch (error) {
    throw new Error("Stress test failed");
  }
});
