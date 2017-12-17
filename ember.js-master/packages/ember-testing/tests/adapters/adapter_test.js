import run from "ember-metal/run_loop";
import Adapter from "ember-testing/adapters/adapter";

var adapter;

QUnit.module("ember-testing Adapter", {
  setup: function() {
    adapter = new Adapter();
  },
  teardown: function() {
    run(adapter, adapter.destroy);
  }
});

// Can't test these this way anymore since we have nothing to compare to
// test("asyncStart is a noop", function() {
//   equal(adapter.asyncStart, K);
// });

// test("asyncEnd is a noop", function() {
//   equal(adapter.asyncEnd, K);
// });

test("exception throws", function() {
  var error = "Hai", thrown;
  try {
    adapter.exception(error);
  } catch (e) {
    thrown = e;
  }
  equal(thrown, error);
});
