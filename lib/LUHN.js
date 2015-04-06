function LUHN(can){
	this.cant=can;
	this.cuadrado=function(mul){
		return this.cant*mul;
	};
}

function ccTest(cc){
	var sumaPar=0;
	var sumaImpar=0;
	for(var i=0;i<cc.length;i++){
		if(i%2==0){
			if(parseInt(cc.substring(i,i+1))*2 > 9)
				sumaImpar+=parseInt(cc.substring(i,i+1))*2-9;
			else
				sumaImpar+=parseInt(cc.substring(i,i+1))*2;
		}
		else
			sumaPar+=parseInt(cc.substring(i,i+1));
	}
	var suma = sumaPar+sumaImpar;
	var MOD=suma%10;
	if(MOD==0)
		return true;
	else
		return false;
}
function ccGen(bin){
	var cc = "";
	var xInd=0;
	for(i=0;i<16;i++){
		if(bin.substring(i,i+1)=="x"){
			cc+=parseInt(Math.random(0,1)*9);
			xInd=i;
		}
		else {
			cc+=bin.substring(i,i+1);
		}
	}
	function ccGenX(bin,xInd){
		var cc="";
		for(var i=0;i<16;i++){
			if(i==xInd){
				if(bin.substring(i,i+1)==9)
					cc+=0;
				else
					cc+=(parseInt(bin.substring(i,i+1))+1);
			}
			else
				cc+=bin.substring(i,i+1);
		}
		return cc;
	}
	while(!ccTest(cc)){
		cc=ccGenX(cc,xInd);
	}
	return cc;
}