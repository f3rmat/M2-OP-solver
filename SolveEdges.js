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

function swapStickersEdges(currentEdges, targetSticker){
	var temp;
	//The sticker with J sticker
	if(targetSticker == 9){
		temp = currentCorners[20];
		currentCorners[20] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[10];
		currentCorners[10] = currentCorners[15];
		currentCorners[15] = temp;
	}

	else if(targetSticker == 15){
		temp = currentCorners[20];
		currentCorners[20] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[10];
		currentCorners[10] = currentCorners[9];
		currentCorners[9] = temp;
	}

	//The Edge with L sticker
	else if(targetSticker == 11){
		temp = currentCorners[20];
		currentCorners[20] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[10];
		currentCorners[10] = currentCorners[5];
		currentCorners[5] = temp;
	}

	else if(targetSticker == 5){
		temp = currentCorners[20];
		currentCorners[20] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[10];
		currentCorners[10] = currentCorners[11];
		currentCorners[11] = temp;
	}

	//The Edge with T sticker
	else if(targetSticker == 19){
		temp = currentCorners[20];
		currentCorners[20] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[10];
		currentCorners[10] = currentCorners[13];
		currentCorners[13] = temp;
	}

	else if(targetSticker == 13){
		temp = currentCorners[20];
		currentCorners[20] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[10];
		currentCorners[10] = currentCorners[19];
		currentCorners[19] = temp;
	}

	//The Edge with R sticker
	else if(targetSticker == 17){
		temp = currentCorners[20];
		currentCorners[20] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[10];
		currentCorners[10] = currentCorners[7];
		currentCorners[7] = temp;
	}

	else if(targetSticker == 7){
		temp = currentCorners[20];
		currentCorners[20] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[10];
		currentCorners[10] = currentCorners[17];
		currentCorners[17] = temp;
	}

	//The Edge with V sticker
	else if(targetSticker == 21){
		temp = currentCorners[20];
		currentCorners[20] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[10];
		currentCorners[10] = currentCorners[14];
		currentCorners[14] = temp;
	}

	else if(targetSticker == 14){
		temp = currentCorners[20];
		currentCorners[20] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[10];
		currentCorners[10] = currentCorners[21];
		currentCorners[21] = temp;
	}

	//The Edge with X sticker
	else if(targetSticker == 23){
		temp = currentCorners[20];
		currentCorners[20] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[10];
		currentCorners[10] = currentCorners[6];
		currentCorners[6] = temp;
	}

	else if(targetSticker == 6){
		temp = currentCorners[20];
		currentCorners[20] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[10];
		currentCorners[10] = currentCorners[23];
		currentCorners[23] = temp;
	}

	//The Edge with B sticker
	else if(targetSticker == 1){
		temp = currentCorners[20];
		currentCorners[20] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[10];
		currentCorners[10] = currentCorners[12];
		currentCorners[12] = temp;
	}

	else if(targetSticker == 12){
		temp = currentCorners[20];
		currentCorners[20] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[10];
		currentCorners[10] = currentCorners[1];
		currentCorners[1] = temp;
	}

	//The Edge with D sticker
	else if(targetSticker == 3){
		temp = currentCorners[20];
		currentCorners[20] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[10];
		currentCorners[10] = currentCorners[4];
		currentCorners[4] = temp;
	}

	else if(targetSticker == 4){
		temp = currentCorners[20];
		currentCorners[20] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[10];
		currentCorners[10] = currentCorners[3];
		currentCorners[3] = temp;
	}

	//The Edge with C sticker
	else if(targetSticker == 2){
		temp = currentCorners[20];
		currentCorners[20] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[10];
		currentCorners[10] = currentCorners[8];
		currentCorners[8] = temp;
	}

	else if(targetSticker == 8){
		temp = currentCorners[20];
		currentCorners[20] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[10];
		currentCorners[10] = currentCorners[2];
		currentCorners[2] = temp;
	}

	//The Edge with W sticker
	else if(targetSticker == 22){
		temp = currentCorners[20];
		currentCorners[20] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[10];
		currentCorners[10] = currentCorners[18];
		currentCorners[18] = temp;
	}

	else if(targetSticker == 18){
		temp = currentCorners[20];
		currentCorners[20] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[10];
		currentCorners[10] = currentCorners[22];
		currentCorners[22] = temp;
	}

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