//function to check if two given arrays of the same length are the same or not
function checkIfSame(firstArray, secondArray){
	//console.log(firstArray);
	//console.log(secondArray);
	for(var i = 0; i < firstArray.length; i++){
		if(firstArray[i] != secondArray[i]){
			return 0;
		}
	}
	return 1;
}

var cornerSetup = [
"", //A
"R D' ", //B
"F ",//C
"F R' ", //D
"", //E
"F2 ", //F
"D2 R ", //G
"D2 ", //H
"F' D ", //I
"R2 D' ", //J
"D R ", //K
"D ", //L
"R' ", //M
"R2 ", //N
"R ", //O
"", //P
"R' F ", //Q
"", //R
"D' R ", //S
"D' ", //T
"F' ", //U
"D' F' ", //V
"D2 F' ", //W
"D F' " //X
];


var intervtCornerSetup = [
"", //A
" D R'", //B
" F'",//C
" R F'", //D
"", //E
" F2", //F
" R' D2", //G
" D2", //H
" D' F", //I
" D R2", //J
" R' D'", //K
" D'", //L
" R", //M
" R2", //N
" R'", //O
"", //P
" F' R", //Q
"", //R
" R' D", //S
" D", //T
" F", //U
" F D", //V
" F D2", //W
" F D'" //X
];

//Finds a location in the firstArray where the buffer piece can be shot
//Uses a sequence of targets (via preference)
//The preference goes like this: P(15), C(2), L(11), T(19), H(7), F(5), N(13) 
function utilityToBreakCycleCorners(firstArray, secondArray){
	var targetForCycleBreak = -1;
	if(firstArray[15]!=secondArray[15]){
		targetForCycleBreak = 15;
	}

	else if(firstArray[2]!=secondArray[2]){
		targetForCycleBreak = 2;
	}

	else if(firstArray[11]!=secondArray[11]){
		targetForCycleBreak = 11;
	}

	else if(firstArray[19]!=secondArray[19]){
		targetForCycleBreak = 19;
	}

	else if(firstArray[7]!=secondArray[7]){
		targetForCycleBreak = 7;
	}

	else if(firstArray[5]!=secondArray[5]){
		targetForCycleBreak = 5;
	}

	else if(firstArray[13]!=secondArray[13]){
		targetForCycleBreak = 13;
	}

	//console.log("am inside utility " + targetForCycleBreak);
	return targetForCycleBreak;
}

//swaps the three stickers when two corners are interchanges using a Y perm
//The stickers on the buffer corner are 0, 4 and 17. 
function swapStickersCorners(currentCorners, targetSticker){
	var temp;
	//The corner with B sticker
	if(targetSticker == 1){
		temp = currentCorners[0];
		currentCorners[0] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[4];
		currentCorners[4] = currentCorners[16];
		currentCorners[16] = temp;
		temp = currentCorners[17];
		currentCorners[17] = currentCorners[13];
		currentCorners[13] = temp;
	}

	else if(targetSticker == 16){
		temp = currentCorners[0];
		currentCorners[0] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[4];
		currentCorners[4] = currentCorners[13];
		currentCorners[13] = temp;
		temp = currentCorners[17];
		currentCorners[17] = currentCorners[1];
		currentCorners[1] = temp;
	}

	else if(targetSticker == 13){
		temp = currentCorners[0];
		currentCorners[0] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[4];
		currentCorners[4] = currentCorners[1];
		currentCorners[1] = temp;
		temp = currentCorners[17];
		currentCorners[17] = currentCorners[16];
		currentCorners[16] = temp;
	}

	//The corner with C sticker
	else if(targetSticker == 2){
		temp = currentCorners[0];
		currentCorners[0] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[4];
		currentCorners[4] = currentCorners[12];
		currentCorners[12] = temp;
		temp = currentCorners[17];
		currentCorners[17] = currentCorners[9];
		currentCorners[9] = temp;
	}

	else if(targetSticker == 12){
		temp = currentCorners[0];
		currentCorners[0] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[4];
		currentCorners[4] = currentCorners[9];
		currentCorners[9] = temp;
		temp = currentCorners[17];
		currentCorners[17] = currentCorners[2];
		currentCorners[2] = temp;
	}

	else if(targetSticker == 9){
		temp = currentCorners[0];
		currentCorners[0] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[4];
		currentCorners[4] = currentCorners[2];
		currentCorners[2] = temp;
		temp = currentCorners[17];
		currentCorners[17] = currentCorners[12];
		currentCorners[12] = temp;
	}
	
	//The corner with D sticker
	else if(targetSticker == 3){
		temp = currentCorners[0];
		currentCorners[0] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[4];
		currentCorners[4] = currentCorners[8];
		currentCorners[8] = temp;
		temp = currentCorners[17];
		currentCorners[17] = currentCorners[5];
		currentCorners[5] = temp;
	}

	else if(targetSticker == 8){
		temp = currentCorners[0];
		currentCorners[0] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[4];
		currentCorners[4] = currentCorners[5];
		currentCorners[5] = temp;
		temp = currentCorners[17];
		currentCorners[17] = currentCorners[3];
		currentCorners[3] = temp;
	}

	else if(targetSticker == 5){
		temp = currentCorners[0];
		currentCorners[0] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[4];
		currentCorners[4] = currentCorners[3];
		currentCorners[3] = temp;
		temp = currentCorners[17];
		currentCorners[17] = currentCorners[8];
		currentCorners[8] = temp;
	}

	//The corner with P sticker
	else if(targetSticker == 15){
		temp = currentCorners[0];
		currentCorners[0] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[4];
		currentCorners[4] = currentCorners[21];
		currentCorners[21] = temp;
		temp = currentCorners[17];
		currentCorners[17] = currentCorners[10];
		currentCorners[10] = temp;
	}

	else if(targetSticker == 21){
		temp = currentCorners[0];
		currentCorners[0] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[4];
		currentCorners[4] = currentCorners[10];
		currentCorners[10] = temp;
		temp = currentCorners[17];
		currentCorners[17] = currentCorners[15];
		currentCorners[15] = temp;
	}

	else if(targetSticker == 10){
		temp = currentCorners[0];
		currentCorners[0] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[4];
		currentCorners[4] = currentCorners[15];
		currentCorners[15] = temp;
		temp = currentCorners[17];
		currentCorners[17] = currentCorners[21];
		currentCorners[21] = temp;
	}

	//The corner with L sticker
	else if(targetSticker == 11){
		temp = currentCorners[0];
		currentCorners[0] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[4];
		currentCorners[4] = currentCorners[20];
		currentCorners[20] = temp;
		temp = currentCorners[17];
		currentCorners[17] = currentCorners[6];
		currentCorners[6] = temp;
	}

	else if(targetSticker == 20){
		temp = currentCorners[0];
		currentCorners[0] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[4];
		currentCorners[4] = currentCorners[6];
		currentCorners[6] = temp;
		temp = currentCorners[17];
		currentCorners[17] = currentCorners[11];
		currentCorners[11] = temp;
	}

	else if(targetSticker == 6){
		temp = currentCorners[0];
		currentCorners[0] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[4];
		currentCorners[4] = currentCorners[11];
		currentCorners[11] = temp;
		temp = currentCorners[17];
		currentCorners[17] = currentCorners[20];
		currentCorners[20] = temp;
	}

	//The corner with H sticker
	else if(targetSticker == 7){
		temp = currentCorners[0];
		currentCorners[0] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[4];
		currentCorners[4] = currentCorners[23];
		currentCorners[23] = temp;
		temp = currentCorners[17];
		currentCorners[17] = currentCorners[18];
		currentCorners[18] = temp;
	}

	else if(targetSticker == 23){
		temp = currentCorners[0];
		currentCorners[0] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[4];
		currentCorners[4] = currentCorners[18];
		currentCorners[18] = temp;
		temp = currentCorners[17];
		currentCorners[17] = currentCorners[7];
		currentCorners[7] = temp;
	}

	else if(targetSticker == 18){
		temp = currentCorners[0];
		currentCorners[0] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[4];
		currentCorners[4] = currentCorners[7];
		currentCorners[7] = temp;
		temp = currentCorners[17];
		currentCorners[17] = currentCorners[23];
		currentCorners[23] = temp;
	}

	//The corner with H sticker
	else if(targetSticker == 19){
		temp = currentCorners[0];
		currentCorners[0] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[4];
		currentCorners[4] = currentCorners[22];
		currentCorners[22] = temp;
		temp = currentCorners[17];
		currentCorners[17] = currentCorners[14];
		currentCorners[14] = temp;
	}

	else if(targetSticker == 22){
		temp = currentCorners[0];
		currentCorners[0] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[4];
		currentCorners[4] = currentCorners[14];
		currentCorners[14] = temp;
		temp = currentCorners[17];
		currentCorners[17] = currentCorners[19];
		currentCorners[19] = temp;
	}

	else if(targetSticker == 14){
		temp = currentCorners[0];
		currentCorners[0] = currentCorners[targetSticker];
		currentCorners[targetSticker] = temp;
		temp = currentCorners[4];
		currentCorners[4] = currentCorners[19];
		currentCorners[19] = temp;
		temp = currentCorners[17];
		currentCorners[17] = currentCorners[22];
		currentCorners[22] = temp;
	}
}

//function to solve corners 
function solveCorners(currentCorners){
	console.log("solving corners");

	var cornerMemo = [];
	var cornerSolution = [];

	var solvedCorners = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
						"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X"];

	var numOfCornerSwaps = 0;
	var buffer = currentCorners[0];
	while(!checkIfSame(currentCorners, solvedCorners)){
		numOfCornerSwaps++;
		if(numOfCornerSwaps > 10){
			break;
		}
		//console.log("Number of swaps is: " + numOfCornerSwaps);
		//cycle break case
		if(currentCorners[0] == "A" || currentCorners[0] == "E" || currentCorners[0] == "R"){
			var targetForCycleBreak = utilityToBreakCycleCorners(currentCorners, solvedCorners);
			//console.log("inside if " + targetForCycleBreak);


			cornerMemo.push(solvedCorners[targetForCycleBreak]);

			swapStickersCorners(currentCorners, targetForCycleBreak);

			// var temp = currentCorners[0];
			// currentCorners[0] = currentCorners[targetForCycleBreak];
			// currentCorners[targetForCycleBreak] = temp;

			//console.log("Shooting corner target ");
			var algorithm = cornerSetup[targetForCycleBreak] + "Y Perm" 
							+ intervtCornerSetup[targetForCycleBreak];
			cornerSolution.push(algorithm);
			//console.log(algorithm);
		}

		//non cycle break case
		else{
			buffer = currentCorners[0];
			var toBeShotLocation = buffer.charCodeAt(0) - 65;
			//console.log("inside else " + toBeShotLocation);
			cornerMemo.push(solvedCorners[toBeShotLocation]);
			swapStickersCorners(currentCorners, toBeShotLocation);

			//swap 0 and toBeShotLocation in currentCorners array
			// var temp = currentCorners[0];
			// currentCorners[0] = currentCorners[toBeShotLocation];
			// currentCorners[toBeShotLocation] = temp;

			//console.log("Shooting corner target ");
			var algorithm = cornerSetup[toBeShotLocation] + "Y Perm" 
							+ intervtCornerSetup[toBeShotLocation];
			cornerSolution.push(algorithm);
			//console.log(algorithm);

		}
	}
	if(cornerMemo.length%2 == 1){
		cornerMemo.push(" ");
	}

	console.log("This is the corner memo: " + "\n");
	var finalCornersMemo = "Corners Memo: <br>" ;
	for(var i = 0; i < cornerMemo.length; i+=2){
		console.log(cornerMemo[i] + cornerMemo[i+1]);
		finalCornersMemo = finalCornersMemo + cornerMemo[i] + cornerMemo[i+1] + " ";
	}
	finalCornersMemo = finalCornersMemo + '<br><br>';

	document.getElementById("corners-memo").innerHTML = finalCornersMemo;

	console.log("This is the solution via OP: " + "\n");
	var finalCornersSolution = "Corners Execution: <br>";
	for(var i = 0; i < cornerSolution.length; i++){
		console.log(cornerSolution[i]);
		finalCornersSolution = finalCornersSolution + cornerSolution[i] + '<br>';
	}
	document.getElementById("corners-solution").innerHTML = finalCornersSolution;
}
