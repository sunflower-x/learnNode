const async_hooks = require("node:async_hooks");
const eid = async_hooks.executionAsyncId();
const tid = async_hooks.triggerAsyncId();
console.log(eid, tid);
async_hooks.createHook({
  init(asyncId, type, triggerAsyncId, resource) {
    console.log("init", asyncId, type, triggerAsyncId, resource);
  },
  before(asyncId) {
    console.log("before", asyncId);
  },
  after(asyncId) {
    console.log("after", asyncId);
  },
  destroy(asyncId) {
    console.log("destroy", asyncId);
  },
  promiseResolve(asyncId) {
    console.log("promiseResolve", asyncId);
  },
}).enable();


