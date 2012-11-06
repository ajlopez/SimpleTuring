
var simpleturing = require('../'),
    assert = require('assert');

    // First parameter: initial state
    // Second parameter: machine description
var machine = simpleturing('s0', {
    // State name
	's0': {
		0: [0, 's0', 1], // current cell value input: [new cell value, new state, position displacement (1 == right, -1 == left)]
		1: [0, 's1', 1]
	},
	's1': {
		0: [0, 'stop'],
		1: [0, 's1', 1]
	}
});

assert.ok(machine);

var result = machine.run([0, 0, 1, 1, 1, 0]);

assert.ok(result);
assert.ok(Array.isArray(result));
assert.equal(result.length, 6);
assert.deepEqual(result, [0,0,0,0,0,0]);

// second parameter: initial position in tape
// third parameter: default value for unspecified cells

var result = machine.run([0, 0, 1, 1, 1], 0, 0);

assert.ok(result);
assert.ok(Array.isArray(result));
assert.equal(result.length, 6);
assert.deepEqual(result, [0,0,0,0,0,0]);
