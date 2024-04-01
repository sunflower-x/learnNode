const assert = require("node:assert");

const { message } = new assert.AssertionError({
  actual: 1,
  expected: 1,
  operator: "strictEqual",
});

console.log(message);

// 比较值
try {
  assert.strictEqual(1, 2);
} catch (err) {
  assert(err instanceof assert.AssertionError);
  assert.strictEqual(err.message, message);
  assert.strictEqual(err.name, "AssertionError");
  assert.strictEqual(err.actual, 1);
  assert.strictEqual(err.expected, 2);
  assert.strictEqual(err.code, "ERR_ASSERTION");
  assert.strictEqual(err.operator, "strictEqual");
  assert.strictEqual(err.generatedMessage, true);
}

// 判断一个函数是否被调用了指定次数
const tracker = new assert.CallTracker();

function func() {}

const callsfunc = tracker.calls(func, 1);

callsfunc();
// callsfunc();

process.on("exit", () => {
  tracker.verify();
});
