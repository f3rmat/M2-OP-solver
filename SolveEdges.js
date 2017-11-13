var edgeSetup = [
"", //A
"R' U R U' ", //B
"M U2 M U2",//C Special Case
"L U' L' U ", //D
"B L' B'", //E
"B L2 B' ", //F
"B L B' ", //G
"Uw' L' Uw ", //H
"D M' U R2 U' M U R2 U' D' M2", //I Special Case
"U R U' ", //J
"", //K Special Case
"U' L' U ", //L
"B' R B ", //M
"Uw R Uw' ", //N
"B' R' B ", //O
"B' R2 B", //P
"U R U' Uw R Uw'", //Q
"U' L U", //R
"M2 D U R2 U' M' U R2 U' M D'", //S Special Case
"U R' U' ", //T
"", //U Special Case
"U R2 U' ", //V
"U2 M' U2 M'", //W Special Case
"U' L2 U " //X
];


var intervtEdgeSetup = [
"", //A
"U R' U' R ", //B
"",//C Special Case
"U' L U L' ", //D
"B L' B'", //E
"B L2 B' ", //F
"B L' B' ", //G
"Uw L Uw' ", //H
"", //I Special Case
"U' R' U ", //J
"", //K Special Case
"U L U' ", //L
"B R' B' ", //M
"Uw' R' Uw ", //N
"B R B' ", //O
"B R2 B'", //P
"Uw R' Uw' U R' U'", //Q
"U L' U'", //R
"", //S Special Case
"U' R U ", //T
"", //U Special Case
"U' R2 U ", //V
"", //W Special Case
"U L2 U' " //X
];

function isOddSwapTarget(target){
	if(target == 2 || target == 8 || target == 18 || target == 22){
		return true;
	}
	return false;
}

function getAlternateTarget(target) {
	var alternateTarget = -1;
	if(target == 2){
		alternateTarget = 22;
	}

	else if(target == 22){
		alternateTarget = 2;
	}

	else if(target == 8){
		alternateTarget = 18;
	}

	else if(target == 18){
		alternateTarget = 8;
	}

	return alternateTarget;
}

//Finds a location in the firstArray where the buffer piece can be shot
//Uses a sequence of targets (via preference) 
function utilityToBreakCycleEdges(firstArray, secondArray){
	var targetForCycleBreak = -1;
	if(firstArray[9]!=secondArray[9]){
		targetForCycleBreak = 9;
	}

	else if(firstArray[11]!=secondArray[11]){
		targetForCycleBreak = 11;
	}

	else if(firstArray[19]!=secondArray[19]){
		targetForCycleBreak = 19;
	}

	else if(firstArray[17]!=secondArray[17]){
		targetForCycleBreak = 17;
	}

	else if(firstArray[22]!=secondArray[22]){
		targetForCycleBreak = 22;
	}

	else if(firstArray[23]!=secondArray[23]){
		targetForCycleBreak = 23;
	}

	else if(firstArray[1]!=secondArray[1]){
		targetForCycleBreak = 1;
	}

	else if(firstArray[3]!=secondArray[3]){
		targetForCycleBreak = 3;
	}

	else if(firstArray[2]!=secondArray[2]){
		targetForCycleBreak = 2;
	}

	else if(firstArray[22]!=secondArray[22]){
		targetForCycleBreak = 22;
	}
	//console.log("am inside utility " + targetForCycleBreak);
	return targetForCycleBreak;
}




function solveEdges(currentEdges){
	var solvedEdges = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
						"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X"];

	var numOfEdgeSwaps = 0;
	var edgeMemo = [];
	var edgeSolution = [];

	while(!checkIfSame(currentEdges, solvedEdges)){
		numOfEdgeSwaps++;

		//Need to break into a new cycle
		if(currentEdges[0] == "K" || currentEdges[0] == "U"){

		}

		else{	
			buffer = currentEdges[0];
			var toBeShotLocation = buffer.charCodeAt(0) - 65;
			var algorithm;
			//console.log("inside else " + toBeShotLocation);
			if(numOfEdgeSwaps % 2 == 0 && (isOddSwapTarget(toBeShotLocation))){
				var alternateTarget = getAlternateTarget(toBeShotLocation);
				edgeMemo.push(solvedEdges[alternateTarget]);
				swapStickersEdges(currentEdges, alternateTarget);
				algorithm = edgeSetup[alternateTarget];
			}
			else{
				edgeMemo.push(solvedEdges[toBeShotLocation]);
				swapStickersEdges(currentEdges, toBeShotLocation);
				algorithm = edgeSetup[toBeShotLocation] + "M2" 
							+ intervtEdgeSetup[toBeShotLocation];
			}
			edgeSolution.push(algorithm);
		}

	}
}