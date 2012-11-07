
var simpleturing = require('../'),
    assert = require('assert');

    // First parameter: initial state
    // Second parameter: machine description
var machine = simpleturing('s0', {
    // State name
	's0': {
		0: [0, 's0', 1], // current cell value input: [new cell value, new state, position displacement (1 == right, -1 == left)]
		1: [2, 's1', 1],
		3: [1, 'stop']
	},
	's1': {
		0: [3, 's2', -1], 
		1: [1, 's1', 1],
		3: [3, 's4', 1]
	},
	's2': {
		0: [1, 'stop'], 
		1: [1, 's2', -1],
		2: [1, 's0', 1],
		3: [3, 's2', -1]
	},
	's4': {
		0: [1, 's2', -1], 
		1: [1, 's4', 1]
	}
});

assert.ok(machine);

var result = machine.run([0, 0, 1, 1, 1],0, 0);

assert.ok(result);
assert.ok(Array.isArray(result));
assert.equal(result.length, 8);
assert.deepEqual(result, [0, 0, 1, 1, 1, 1, 1, 1]);


var result = machine.run([0, 0, 1, 1, 1, 1, 1],0, 0);

assert.ok(result);
assert.ok(Array.isArray(result));
assert.equal(result.length, 12);
assert.deepEqual(result, [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
