var edgeSetupM2 = [
"", //A
"R' U R U' ", //B
"U2 M' U2 M' ",//C Special Case
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
"U R U' Uw R Uw' ", //Q
"U' L U ", //R
"M2 D U R2 U' M' U R2 U' M D'", //S Special Case
"U R' U' ", //T
"", //U Special Case
"U R2 U' ", //V
"M U2 M U2", //W Special Case
"U' L2 U " //X
];


var invertEdgeSetupM2 = [
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
" U R U' ", //T
"", //U Special Case
" U R2 U' ", //V
"", //W Special Case
" U' L2 U " //X
];

function isOddSwapTargetM2(target){
	if(target == 2 || target == 8 || target == 18 || target == 22){
		return true;
	}
	return false;
}

function getAlternateTargetM2(target) {
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
function utilityToBreakCycleEdgesM2(firstArray, secondArray, parity){
	var targetForCycleBreak = -1;
	if(firstArray[0]!=secondArray[0] && parity == 0){
		targetForCycleBreak = 16;
	}

	else if(firstArray[0]!=secondArray[0] && parity == 1){
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

	else if(parity == 0){
		if(firstArray[2]!=secondArray[22]){
		targetForCycleBreak = 22;
			}

		else if(firstArray[22]!=secondArray[2]){
			targetForCycleBreak = 2;
		}	
	}

	else{
		if(firstArray[2]!=secondArray[2]){
		targetForCycleBreak = 2;
			}

		else if(firstArray[22]!=secondArray[22]){
			targetForCycleBreak = 22;
		}	
	}
	
	console.log("am inside utility " + targetForCycleBreak);
	return targetForCycleBreak;
}

function swapStickersEdgesM2(currentEdgesM2, targetSticker){
	var temp;

	//The Edge with A sticker
	if(targetSticker == 0){
		[currentEdgesM2[targetSticker], currentEdgesM2[20]] = [currentEdgesM2[20], currentEdgesM2[targetSticker]];
		[currentEdgesM2[10], currentEdgesM2[16]] = [currentEdgesM2[16], currentEdgesM2[10]];
	}

	else if(targetSticker == 16){
		[currentEdgesM2[targetSticker], currentEdgesM2[20]] = [currentEdgesM2[20], currentEdgesM2[targetSticker]];
		[currentEdgesM2[10], currentEdgesM2[0]] = [currentEdgesM2[0], currentEdgesM2[10]];
	}

	//The Edge with J sticker
	else if(targetSticker == 9){
		[currentEdgesM2[targetSticker], currentEdgesM2[20]] = [currentEdgesM2[20], currentEdgesM2[targetSticker]];
		[currentEdgesM2[10], currentEdgesM2[15]] = [currentEdgesM2[15], currentEdgesM2[10]];
	}

	else if(targetSticker == 15){
		[currentEdgesM2[targetSticker], currentEdgesM2[20]] = [currentEdgesM2[20], currentEdgesM2[targetSticker]];
		[currentEdgesM2[10], currentEdgesM2[9]] = [currentEdgesM2[9], currentEdgesM2[10]];
	}

	//The Edge with L sticker
	else if(targetSticker == 11){
		[currentEdgesM2[targetSticker], currentEdgesM2[20]] = [currentEdgesM2[20], currentEdgesM2[targetSticker]];
		[currentEdgesM2[10], currentEdgesM2[5]] = [currentEdgesM2[5], currentEdgesM2[10]];
	}

	else if(targetSticker == 5){
		[currentEdgesM2[targetSticker], currentEdgesM2[20]] = [currentEdgesM2[20], currentEdgesM2[targetSticker]];
		[currentEdgesM2[10], currentEdgesM2[11]] = [currentEdgesM2[11], currentEdgesM2[10]];
	}

	//The Edge with T sticker
	else if(targetSticker == 19){
		[currentEdgesM2[targetSticker], currentEdgesM2[20]] = [currentEdgesM2[20], currentEdgesM2[targetSticker]];
		[currentEdgesM2[10], currentEdgesM2[13]] = [currentEdgesM2[13], currentEdgesM2[10]];
	}

	else if(targetSticker == 13){
		[currentEdgesM2[targetSticker], currentEdgesM2[20]] = [currentEdgesM2[20], currentEdgesM2[targetSticker]];
		[currentEdgesM2[10], currentEdgesM2[19]] = [currentEdgesM2[19], currentEdgesM2[10]];
	}

	//The Edge with R sticker
	else if(targetSticker == 17){
		[currentEdgesM2[targetSticker], currentEdgesM2[20]] = [currentEdgesM2[20], currentEdgesM2[targetSticker]];
		[currentEdgesM2[10], currentEdgesM2[7]] = [currentEdgesM2[7], currentEdgesM2[10]];
	}

	else if(targetSticker == 7){
		[currentEdgesM2[targetSticker], currentEdgesM2[20]] = [currentEdgesM2[20], currentEdgesM2[targetSticker]];
		[currentEdgesM2[10], currentEdgesM2[17]] = [currentEdgesM2[17], currentEdgesM2[10]];
	}

	//The Edge with V sticker
	else if(targetSticker == 21){
		[currentEdgesM2[targetSticker], currentEdgesM2[20]] = [currentEdgesM2[20], currentEdgesM2[targetSticker]];
		[currentEdgesM2[10], currentEdgesM2[14]] = [currentEdgesM2[14], currentEdgesM2[10]];
	}

	else if(targetSticker == 14){
		[currentEdgesM2[targetSticker], currentEdgesM2[20]] = [currentEdgesM2[20], currentEdgesM2[targetSticker]];
		[currentEdgesM2[10], currentEdgesM2[21]] = [currentEdgesM2[21], currentEdgesM2[10]];
	}

	//The Edge with X sticker
	else if(targetSticker == 23){
		[currentEdgesM2[targetSticker], currentEdgesM2[20]] = [currentEdgesM2[20], currentEdgesM2[targetSticker]];
		[currentEdgesM2[10], currentEdgesM2[6]] = [currentEdgesM2[6], currentEdgesM2[10]];
	}

	else if(targetSticker == 6){
		[currentEdgesM2[targetSticker], currentEdgesM2[20]] = [currentEdgesM2[20], currentEdgesM2[targetSticker]];
		[currentEdgesM2[10], currentEdgesM2[23]] = [currentEdgesM2[23], currentEdgesM2[10]];
	}

	//The Edge with B sticker
	else if(targetSticker == 1){
		[currentEdgesM2[targetSticker], currentEdgesM2[20]] = [currentEdgesM2[20], currentEdgesM2[targetSticker]];
		[currentEdgesM2[10], currentEdgesM2[12]] = [currentEdgesM2[12], currentEdgesM2[10]];
	}

	else if(targetSticker == 12){
		[currentEdgesM2[targetSticker], currentEdgesM2[20]] = [currentEdgesM2[20], currentEdgesM2[targetSticker]];
		[currentEdgesM2[10], currentEdgesM2[1]] = [currentEdgesM2[1], currentEdgesM2[10]];
	}

	//The Edge with D sticker
	else if(targetSticker == 3){
		[currentEdgesM2[targetSticker], currentEdgesM2[20]] = [currentEdgesM2[20], currentEdgesM2[targetSticker]];
		[currentEdgesM2[10], currentEdgesM2[4]] = [currentEdgesM2[4], currentEdgesM2[10]];
	}

	else if(targetSticker == 4){
		[currentEdgesM2[targetSticker], currentEdgesM2[20]] = [currentEdgesM2[20], currentEdgesM2[targetSticker]];
		[currentEdgesM2[10], currentEdgesM2[3]] = [currentEdgesM2[3], currentEdgesM2[10]];
	}

	//The Edge with C sticker
	else if(targetSticker == 2){
		[currentEdgesM2[targetSticker], currentEdgesM2[20]] = [currentEdgesM2[20], currentEdgesM2[targetSticker]];
		[currentEdgesM2[10], currentEdgesM2[8]] = [currentEdgesM2[8], currentEdgesM2[10]];
	}

	else if(targetSticker == 8){
		[currentEdgesM2[targetSticker], currentEdgesM2[20]] = [currentEdgesM2[20], currentEdgesM2[targetSticker]];
		[currentEdgesM2[10], currentEdgesM2[2]] = [currentEdgesM2[2], currentEdgesM2[10]];
	}

	//The Edge with W sticker
	else if(targetSticker == 22){
		[currentEdgesM2[targetSticker], currentEdgesM2[20]] = [currentEdgesM2[20], currentEdgesM2[targetSticker]];
		[currentEdgesM2[10], currentEdgesM2[18]] = [currentEdgesM2[18], currentEdgesM2[10]];
	}

	else if(targetSticker == 18){
		[currentEdgesM2[targetSticker], currentEdgesM2[20]] = [currentEdgesM2[20], currentEdgesM2[targetSticker]];
		[currentEdgesM2[10], currentEdgesM2[22]] = [currentEdgesM2[22], currentEdgesM2[10]];
	}

	//Will happen every time
	[currentEdgesM2[2], currentEdgesM2[22]] = [currentEdgesM2[22], currentEdgesM2[2]];
	[currentEdgesM2[8], currentEdgesM2[18]] = [currentEdgesM2[18], currentEdgesM2[8]];

}


function paritySolvedCaseM2(firstArray, secondArray){
	var auxArray = [];
	for(var i = 0; i < firstArray.length; i++){
		auxArray[i] = firstArray[i];
	}
	[auxArray[2], auxArray[22]] = [auxArray[22], auxArray[2]]; 
	[auxArray[8], auxArray[18]] = [auxArray[18], auxArray[8]]; 

	return checkIfSame(auxArray, secondArray);
}



function solveEdgesM2(currentEdgesM2){
	var solvedEdgesM2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
						"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X"];

	var numOfEdgeSwaps = 0;
	var edgeMemoM2 = [];
	var edgeSolutionM2 = [];
	var buffer;

	while(!checkIfSame(currentEdgesM2, solvedEdgesM2) && !paritySolvedCaseM2(currentEdgesM2, solvedEdges)){
		numOfEdgeSwaps++;
		if(numOfEdgeSwaps > 50){
			alert("number of edge swaps error");
			break;
		}
		//Need to break into a new cycle
		if(currentEdgesM2[20] == "K" || currentEdgesM2[20] == "U"){
			var targetForCycleBreak;
			var algorithm;
			console.log("inside if " + targetForCycleBreak);
			if(numOfEdgeSwaps % 2 == 0 && (isOddSwapTargetM2(targetForCycleBreak))){
				targetForCycleBreak = utilityToBreakCycleEdgesM2(currentEdgesM2, solvedEdges, 0);
				console.log("inside if inside if");
				var alternateTarget = getAlternateTargetM2(targetForCycleBreak);
				edgeMemoM2.push(solvedEdges[targetForCycleBreak]);
				swapStickersEdgesM2(currentEdgesM2, alternateTarget);
				algorithm = edgeSetup[alternateTarget];
			}
			else{
				targetForCycleBreak = utilityToBreakCycleEdgesM2(currentEdgesM2, solvedEdges, 1);
				console.log("inside if inside else");
				edgeMemoM2.push(solvedEdges[targetForCycleBreak]);
				swapStickersEdgesM2(currentEdgesM2, targetForCycleBreak);
				if(isOddSwapTargetM2(targetForCycleBreak)){
					algorithm = edgeSetup[targetForCycleBreak];	
				}
				else{
					algorithm = edgeSetupM2[targetForCycleBreak] + "M2" 
							+ invertEdgeSetup[targetForCycleBreak];
				}
			}
			edgeSolutionM2.push(algorithm);
		}

		else{	
			buffer = currentEdgesM2[20];
			var toBeShotLocation = buffer.charCodeAt(0) - 65;
			var algorithm;
			console.log("inside else " + toBeShotLocation);
			if(numOfEdgeSwaps % 2 == 0 && (isOddSwapTargetM2(toBeShotLocation))){
				console.log("inside else inside if");
				var alternateTarget = getAlternateTargetM2(toBeShotLocation);
				edgeMemoM2.push(solvedEdgesM2[toBeShotLocation]);
				swapStickersEdgesM2(currentEdgesM2, alternateTarget);
				algorithm = edgeSetupM2[alternateTarget];
			}
			else{
				console.log("inside else inside else");
				edgeMemoM2.push(solvedEdges[toBeShotLocation]);
				swapStickersEdgesM2(currentEdgesM2, toBeShotLocation);
				if(isOddSwapTargetM2(toBeShotLocation)){
					algorithm = edgeSetup[toBeShotLocation];	
				}
				else{
					algorithm = edgeSetup[toBeShotLocation] + "M2" 
							+ invertEdgeSetup[toBeShotLocation];
				}
			}
			edgeSolutionM2.push(algorithm);
		}

	}

	if(edgeMemoM2.length%2 == 1){
		edgeMemoM2.push(" ");
	}

	console.log("This is the edge memo: " + "\n");
	var finalEdgesMemo = "Edges Memo: <br>" ;
	for(var i = 0; i < edgeMemoM2.length; i+=2){
		console.log(edgeMemoM2[i] + edgeMemoM2[i+1]);
		finalEdgesMemo = finalEdgesMemo + edgeMemoM2[i] + edgeMemoM2[i+1] + " ";
	}
	finalEdgesMemo = finalEdgesMemo + '<br><br>';

	document.getElementById("edges-memo").innerHTML = finalEdgesMemo;

	console.log("This is the solution via M2: " + "\n");
	var finalEdgesSolutionM2 = "Edges Execution: <br>";
	for(var i = 0; i < edgeSolutionM2.length; i++){
		console.log(edgeSolutionM2[i]);
		finalEdgesSolutionM2 = finalEdgesSolutionM2 + edgeSolutionM2[i] + '<br>';
	}
	document.getElementById("edges-solution").innerHTML = finalEdgesSolutionM2;
}

//scrambles to test this on:
//B' F' R2 B F R B2 R' U R' D' B' F U R2 B R D2 L F2 