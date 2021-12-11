function partialAny(func,...args){
	var args = Array.from(arguments);
	args.splice(0,1);
	return function(){
		var arrInside = Array.from(arguments);
		var j=0;
		outer: for (let i=0; i<args.length; i++){
			if(args[i] == undefined){
				while (j<arrInside.length){
				args = args.fill(arrInside[j], i, i+1);
				j++;
				continue outer;
            };
        };
    };
    return  func.apply(this, args);
};
};

const test = (a, b, c) => 'a=' + a + ',b=' + b + ',c=' + c;
let test1_3 = partialAny(test, 1, undefined, 3);
console.log(test1_3(5)); // a=1,b=5,c=3