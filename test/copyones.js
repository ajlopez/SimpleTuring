
var simpleturing = require('../'),
    assert = require('assert');

    // First parameter: initial state
    // Second parameter: machine description
var machine = simpleturing('s0', {
    // State name
	's0': {
		0: [0, 's0', 1], // current cell value input: [new cell value, new state, position displacement (1 == right, -1 == left)]
		1: [1, 's1', 1]
	},
	's1': {
		0: [0, 's2', 1], 
		1: [1, 's1', 1]
	},
	's2': {
		0: [1, 's3', 1], 
		1: [1, 's2', 1]
	},
	's3': {
		0: [1, 's4', -1], 
		1: [1, 'stop']
	},
	's4': {
		0: [0, 's5', -1], 
		1: [1, 's4', -1]
	},
	's5': {
		0: [0, 's5', -1], 
		1: [1, 's6', -1]
	},
	's6': {
		0: [0, 's7', 1], 
		1: [1, 's6', -1]
	},
	's7': {
		0: [0, 'stop'], 
		1: [0, 's8', 1]
	},
	's8': {
		0: [0, 'stop', 1], 
		1: [1, 's1', 1]
	}
});

assert.ok(machine);

var result = machine.run([0, 0, 1, 1],0, 0);

assert.ok(result);
assert.ok(Array.isArray(result));
assert.equal(result.length, 9);
assert.deepEqual(result, [0, 0, 0, 0, 0, 1, 1, 1, 1]);
