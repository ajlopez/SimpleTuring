
var simpleturing = (function() {
    function Machine(initial, states) {
        this.run = function(initialdata, position) {
            var tape = initialdata.slice();
			
            if (position == null)
				position = 0;
                
            var state = initial;
                
            while (true) {
                next = states[state][tape[position]];
                
                tape[position] = next[0];
                state = next[1];
                
                if (state == 'stop')
                    return tape;
                
                position += next[2];
            }
        }
    }
	
    return function(initial, states) {
        return new Machine(initial, states);
    }
}());

if (typeof(window) === 'undefined') {
    module.exports = simpleturing;
}

