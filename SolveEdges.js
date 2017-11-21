var edgeSetup = [
"", //A
"R' U R U' ", //B
"M U2 M U2 ",//C Special Case
"L U' L' U ", //D
"B L' B' ", //E
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
"B' R2 B ", //P
"U R U' Uw R Uw'", //Q
"U' L U ", //R
"M2 D U R2 U' M' U R2 U' M D'", //S Special Case
"U R' U' ", //T
"", //U Special Case
"U R2 U' ", //V
"U2 M' U2 M'", //W Special Case
"U' L2 U " //X
];


var invertEdgeSetup = [
"", //A
" U R' U' R ", //B
"",//C Special Case
" U' L U L' ", //D
" B L' B' ", //E
" B L2 B' ", //F
" B L' B' ", //G
" Uw L Uw' ", //H
"", //I Special Case
" U R' U' ", //J
"", //K Special Case
" U' L U ", //L
" B' R' B ", //M
" Uw R' Uw' ", //N
" B' R B ", //O
" B' R2 B", //P
" Uw R' Uw' U R' U' ", //Q
" U' L' U ", //R
"", //S Special Case
"U R U' ", //T
"", //U Special Case
"U R2 U' ", //V
"", //W Special Case
"U' L2 U " //X
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
	if(firstArray[0]!=secondArray[0]){
		targetForCycleBreak = 0;
	}

	else if(firstArray[9]!=secondArray[9]){
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

	else if(firstArray[21]!=secondArray[21]){
		targetForCycleBreak = 21;
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
	console.log("am inside utility " + targetForCycleBreak);
	return targetForCycleBreak;
}

function swapStickersEdges(currentEdges, targetSticker){
	var temp;

	//The Edge with A sticker
	if(targetSticker == 0){
		temp = currentEdges[20];
		currentEdges[20] = currentEdges[targetSticker];
		currentEdges[targetSticker] = temp;
		temp = currentEdges[10];
		currentEdges[10] = currentEdges[16];
		currentEdges[16] = temp;
	}

	else if(targetSticker == 16){
		temp = currentEdges[20];
		currentEdges[20] = currentEdges[targetSticker];
		currentEdges[targetSticker] = temp;
		temp = currentEdges[10];
		currentEdges[10] = currentEdges[0];
		currentEdges[0] = temp;
	}

	//The Edge with J sticker
	else if(targetSticker == 9){
		temp = currentEdges[20];
		currentEdges[20] = currentEdges[targetSticker];
		currentEdges[targetSticker] = temp;
		temp = currentEdges[10];
		currentEdges[10] = currentEdges[15];
		currentEdges[15] = temp;
	}

	else if(targetSticker == 15){
		temp = currentEdges[20];
		currentEdges[20] = currentEdges[targetSticker];
		currentEdges[targetSticker] = temp;
		temp = currentEdges[10];
		currentEdges[10] = currentEdges[9];
		currentEdges[9] = temp;
	}

	//The Edge with L sticker
	else if(targetSticker == 11){
		temp = currentEdges[20];
		currentEdges[20] = currentEdges[targetSticker];
		currentEdges[targetSticker] = temp;
		temp = currentEdges[10];
		currentEdges[10] = currentEdges[5];
		currentEdges[5] = temp;
	}

	else if(targetSticker == 5){
		temp = currentEdges[20];
		currentEdges[20] = currentEdges[targetSticker];
		currentEdges[targetSticker] = temp;
		temp = currentEdges[10];
		currentEdges[10] = currentEdges[11];
		currentEdges[11] = temp;
	}

	//The Edge with T sticker
	else if(targetSticker == 19){
		temp = currentEdges[20];
		currentEdges[20] = currentEdges[targetSticker];
		currentEdges[targetSticker] = temp;
		temp = currentEdges[10];
		currentEdges[10] = currentEdges[13];
		currentEdges[13] = temp;
	}

	else if(targetSticker == 13){
		temp = currentEdges[20];
		currentEdges[20] = currentEdges[targetSticker];
		currentEdges[targetSticker] = temp;
		temp = currentEdges[10];
		currentEdges[10] = currentEdges[19];
		currentEdges[19] = temp;
	}

	//The Edge with R sticker
	else if(targetSticker == 17){
		temp = currentEdges[20];
		currentEdges[20] = currentEdges[targetSticker];
		currentEdges[targetSticker] = temp;
		temp = currentEdges[10];
		currentEdges[10] = currentEdges[7];
		currentEdges[7] = temp;
	}

	else if(targetSticker == 7){
		temp = currentEdges[20];
		currentEdges[20] = currentEdges[targetSticker];
		currentEdges[targetSticker] = temp;
		temp = currentEdges[10];
		currentEdges[10] = currentEdges[17];
		currentEdges[17] = temp;
	}

	//The Edge with V sticker
	else if(targetSticker == 21){
		temp = currentEdges[20];
		currentEdges[20] = currentEdges[targetSticker];
		currentEdges[targetSticker] = temp;
		temp = currentEdges[10];
		currentEdges[10] = currentEdges[14];
		currentEdges[14] = temp;
	}

	else if(targetSticker == 14){
		temp = currentEdges[20];
		currentEdges[20] = currentEdges[targetSticker];
		currentEdges[targetSticker] = temp;
		temp = currentEdges[10];
		currentEdges[10] = currentEdges[21];
		currentEdges[21] = temp;
	}

	//The Edge with X sticker
	else if(targetSticker == 23){
		temp = currentEdges[20];
		currentEdges[20] = currentEdges[targetSticker];
		currentEdges[targetSticker] = temp;
		temp = currentEdges[10];
		currentEdges[10] = currentEdges[6];
		currentEdges[6] = temp;
	}

	else if(targetSticker == 6){
		temp = currentEdges[20];
		currentEdges[20] = currentEdges[targetSticker];
		currentEdges[targetSticker] = temp;
		temp = currentEdges[10];
		currentEdges[10] = currentEdges[23];
		currentEdges[23] = temp;
	}

	//The Edge with B sticker
	else if(targetSticker == 1){
		temp = currentEdges[20];
		currentEdges[20] = currentEdges[targetSticker];
		currentEdges[targetSticker] = temp;
		temp = currentEdges[10];
		currentEdges[10] = currentEdges[12];
		currentEdges[12] = temp;
	}

	else if(targetSticker == 12){
		temp = currentEdges[20];
		currentEdges[20] = currentEdges[targetSticker];
		currentEdges[targetSticker] = temp;
		temp = currentEdges[10];
		currentEdges[10] = currentEdges[1];
		currentEdges[1] = temp;
	}

	//The Edge with D sticker
	else if(targetSticker == 3){
		temp = currentEdges[20];
		currentEdges[20] = currentEdges[targetSticker];
		currentEdges[targetSticker] = temp;
		temp = currentEdges[10];
		currentEdges[10] = currentEdges[4];
		currentEdges[4] = temp;
	}

	else if(targetSticker == 4){
		temp = currentEdges[20];
		currentEdges[20] = currentEdges[targetSticker];
		currentEdges[targetSticker] = temp;
		temp = currentEdges[10];
		currentEdges[10] = currentEdges[3];
		currentEdges[3] = temp;
	}

	//The Edge with C sticker
	else if(targetSticker == 2){
		temp = currentEdges[20];
		currentEdges[20] = currentEdges[targetSticker];
		currentEdges[targetSticker] = temp;
		temp = currentEdges[10];
		currentEdges[10] = currentEdges[8];
		currentEdges[8] = temp;
	}

	else if(targetSticker == 8){
		temp = currentEdges[20];
		currentEdges[20] = currentEdges[targetSticker];
		currentEdges[targetSticker] = temp;
		temp = currentEdges[10];
		currentEdges[10] = currentEdges[2];
		currentEdges[2] = temp;
	}

	//The Edge with W sticker
	else if(targetSticker == 22){
		temp = currentEdges[20];
		currentEdges[20] = currentEdges[targetSticker];
		currentEdges[targetSticker] = temp;
		temp = currentEdges[10];
		currentEdges[10] = currentEdges[18];
		currentEdges[18] = temp;
	}

	else if(targetSticker == 18){
		temp = currentEdges[20];
		currentEdges[20] = currentEdges[targetSticker];
		currentEdges[targetSticker] = temp;
		temp = currentEdges[10];
		currentEdges[10] = currentEdges[22];
		currentEdges[22] = temp;
	}

	//Will happen every time
	temp = currentEdges[2];
	currentEdges[2] = currentEdges[22];
	currentEdges[22] = temp;
	temp = currentEdges[18];
	currentEdges[18] = currentEdges[8];
	currentEdges[8] = temp;

}



function solveEdges(currentEdges){
	var solvedEdges = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
						"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X"];

	var numOfEdgeSwaps = 0;
	var edgeMemo = [];
	var edgeSolution = [];
	var buffer;

	while(!checkIfSame(currentEdges, solvedEdges)){
		numOfEdgeSwaps++;
		if(numOfEdgeSwaps > 15)
			break;
		//Need to break into a new cycle
		if(currentEdges[20] == "K" || currentEdges[20] == "U"){
			var targetForCycleBreak = utilityToBreakCycleEdges(currentEdges, solvedEdges);
			var algorithm;
			console.log("inside if " + targetForCycleBreak);
			if(numOfEdgeSwaps % 2 == 0 && (isOddSwapTarget(targetForCycleBreak))){
				console.log("inside if inside if");
				var alternateTarget = getAlternateTarget(targetForCycleBreak);
				edgeMemo.push(solvedEdges[alternateTarget]);
				swapStickersEdges(currentEdges, alternateTarget);
				algorithm = edgeSetup[alternateTarget];
			}
			else{
				console.log("inside if inside else");
				edgeMemo.push(solvedEdges[targetForCycleBreak]);
				swapStickersEdges(currentEdges, targetForCycleBreak);
				if(isOddSwapTarget(targetForCycleBreak)){
					algorithm = edgeSetup[targetForCycleBreak];	
				}
				else{
					algorithm = edgeSetup[targetForCycleBreak] + "M2" 
							+ invertEdgeSetup[targetForCycleBreak];
				}
			}
			edgeSolution.push(algorithm);
		}

		else{	
			buffer = currentEdges[20];
			var toBeShotLocation = buffer.charCodeAt(0) - 65;
			var algorithm;
			console.log("inside else " + toBeShotLocation);
			if(numOfEdgeSwaps % 2 == 0 && (isOddSwapTarget(toBeShotLocation))){
				console.log("inside else inside if");
				var alternateTarget = getAlternateTarget(toBeShotLocation);
				edgeMemo.push(solvedEdges[alternateTarget]);
				swapStickersEdges(currentEdges, alternateTarget);
				algorithm = edgeSetup[alternateTarget];
			}
			else{
				console.log("inside else inside else");
				edgeMemo.push(solvedEdges[toBeShotLocation]);
				swapStickersEdges(currentEdges, toBeShotLocation);
				if(isOddSwapTarget(toBeShotLocation)){
					algorithm = edgeSetup[toBeShotLocation];	
				}
				else{
					algorithm = edgeSetup[toBeShotLocation] + "M2" 
							+ invertEdgeSetup[toBeShotLocation];
				}
			}
			edgeSolution.push(algorithm);
		}

	}

	if(edgeMemo.length%2 == 1){
		edgeMemo.push(" ");
	}

	console.log("This is the edge memo: " + "\n");
	var finalEdgesMemo = "Edges Memo: <br>" ;
	for(var i = 0; i < edgeMemo.length; i+=2){
		console.log(edgeMemo[i] + edgeMemo[i+1]);
		finalEdgesMemo = finalEdgesMemo + edgeMemo[i] + edgeMemo[i+1] + " ";
	}
	finalEdgesMemo = finalEdgesMemo + '<br><br>';

	document.getElementById("edges-memo").innerHTML = finalEdgesMemo;

	console.log("This is the solution via M2: " + "\n");
	var finalEdgesSolution = "Edges Execution: <br>";
	for(var i = 0; i < edgeSolution.length; i++){
		console.log(edgeSolution[i]);
		finalEdgesSolution = finalEdgesSolution + edgeSolution[i] + '<br>';
	}
	document.getElementById("edges-solution").innerHTML = finalEdgesSolution;
}