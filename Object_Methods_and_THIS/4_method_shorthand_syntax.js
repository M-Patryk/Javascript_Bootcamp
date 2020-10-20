//Tak samo, jak z skrotowymi wlasciwosciami obiektow, nie musimy pisac "add: function" itd., tylko

// const math = {
// 	add      : function(x, y) {
// 		return x + y;
// 	},
// 	multiply : function(x, y) {
// 		return x * y;
// 	}
// };


//Example
const math = {
    username: 'Tommy',
    login(){
        console.log('Hello, user')
    },
    logout(){
        console.log('Bye, user')
    }
}

//W tym przypadku, naszym "key" bedzie "login"