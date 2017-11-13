var seqlen = 20; //length of the scramble 
var ScrambleList = []; //array that stores the scramble
var limit = 0;
var size = 3; //length of edge of cube

/*
	cycles corners in case of 90 degree rotation of face 
	does 90 degree cycling if param == 1
	does 180 degree cycling if param == 2
*/
function cycleNonFace(A, param){
	if(param == 1){
		var temp1 = A[0];
		var temp2 = A[1];
		var temp3 = A[2];
		A[0] = A[3];
		A[1] = A[4];
		A[2] = A[5];
		A[3] = A[6];
		A[4] = A[7];
		A[5] = A[8];
		A[6] = A[9];
		A[7] = A[10];
		A[8] = A[11];
		A[9] = temp1;
		A[10] = temp2;
		A[11] = temp3;	
	}

	else if(param == 2){
		var temp;
		temp = A[0];
		A[0] = A[5];
		A[5] = temp;	  
		temp = A[2];
		A[2] = A[3];
		A[3] = temp;
		temp = A[1];
		A[1] = A[4];
		A[4] = temp;

		temp = A[6];
		A[6] = A[11];
		A[11] = temp;	  
		temp = A[8];
		A[8] = A[9];
		A[9] = temp;
		temp = A[7];
		A[7] = A[10];
		A[10] = temp;
	}
	
}

/*
	does clockwise if param == 1
	does anti-clockwise if param == 2 
	does 180 degree if param == 3
*/
function cycleFace(face, param){
	var tempFace = [["Y","Y","Y"],["Y","Y","Y"],["Y","Y","Y"]];
	if(param == 1){
		tempFace[0][0]=face[2][0];tempFace[0][1]=face[1][0];tempFace[0][2]=face[0][0]; 
		tempFace[1][0]=face[2][1];tempFace[1][1]=face[1][1];tempFace[1][2]=face[0][1];
		tempFace[2][0]=face[2][2];tempFace[2][1]=face[1][2];tempFace[2][2]=face[0][2];
	}

	else if(param == 2){
		tempFace[0][0]=face[0][2];tempFace[0][1]=face[1][2];tempFace[0][2]=face[2][2]; 
		tempFace[1][0]=face[0][1];tempFace[1][1]=face[1][1];tempFace[1][2]=face[2][1];
		tempFace[2][0]=face[0][0];tempFace[2][1]=face[1][0];tempFace[2][2]=face[2][0];
	}

	else if(param == 3){
		tempFace[0][0]=face[2][2];tempFace[0][1]=face[2][1];tempFace[0][2]=face[2][0]; 
		tempFace[1][0]=face[1][2];tempFace[1][1]=face[1][1];tempFace[1][2]=face[1][0];
		tempFace[2][0]=face[0][2];tempFace[2][1]=face[0][1];tempFace[2][2]=face[0][0];
	}
	for(var i = 0; i < 3; ++i){
		for(var j = 0; j < 3; ++j){
			face[i][j] = tempFace[i][j];
		}
	}
}

/* 
	Applies the scramble to a 3x3 cube. The 3x3 cube is represented by 
	6 two dimensional arrays. 
*/
function applyScramble(list){
	/*
		These are six 2-D arrays which denote the six faces of the cube.
		Speffz letter scheme is the default. 
	*/
	var front = [["I", "I", "J"], ["L", "Z", "J"], ["L", "K", "K"]];
	var right = [["M", "M", "N"], ["P", "Z", "N"], ["P", "O", "O"]];
	var left = [["E", "E", "F"], ["H", "Z", "F"], ["H", "G", "G"]];
	var back = [["Q", "Q", "R"], ["T", "Z", "R"], ["T", "S", "S"]];
	var top = [["A", "A", "B"], ["D", "Z", "B"], ["D", "C", "C"]];
	var bottom = [["U", "U", "V"], ["X", "Z", "V"], ["X", "W", "W"]];

	/*	
		with 90 degree turns in function cycleNonFace()
		temp[0],temp[1],temp[2] are replaced by temp[3],temp[4],temp[5]
		temp[3],temp[4],temp[5] are replaced by temp[6],temp[7],temp[8]
		temp[6],temp[7],temp[8] are replaced by temp[9],temp[10],temp[11]
		temp[9],temp[10],temp[11] are replaced by temp[0],temp[1],temp[2] 
		with 180 degree turns in function cycleNonFace()
		temp[0],temp[1],temp[2] are interchanged with temp[5],temp[4],temp[3]
		temp[6],temp[7],temp[8] are interchanged with temp[11],temp[10],temp[9]
	*/
	for(var i = 0; i < list.length; ++i){
		var temp = new Array(12);
		switch(list[i]){
			case 0:
				//D move
				//cycle corners
				temp[0]=front[2][0];temp[1]=front[2][1];temp[2]=front[2][2];
				temp[3]=left[2][0];temp[4]=left[2][1];temp[5]=left[2][2];
				temp[6]=back[2][0];temp[7]=back[2][1];temp[8]=back[2][2];
				temp[9]=right[2][0];temp[10]=right[2][1];temp[11]=right[2][2];
				cycleNonFace(temp,1);
				front[2][0]=temp[0];front[2][1]=temp[1];front[2][2]=temp[2];
				left[2][0]=temp[3];left[2][1]=temp[4];left[2][2]=temp[5];
				back[2][0]=temp[6];back[2][1]=temp[7];back[2][2]=temp[8];
				right[2][0]=temp[9];right[2][1]=temp[10];right[2][2]=temp[11];
				//cycle face
				cycleFace(bottom,1);
				break;
			case 1:
				//D2 move
				//cycle corners
				temp[0]=front[2][0];temp[1]=front[2][1];temp[2]=front[2][2];
				temp[3]=back[2][2];temp[4]=back[2][1];temp[5]=back[2][0];
				temp[6]=left[2][0];temp[7]=left[2][1];temp[8]=left[2][2];
				temp[9]=right[2][2];temp[10]=right[2][1];temp[11]=right[2][0];
				cycleNonFace(temp,2);
				front[2][0]=temp[0];front[2][1]=temp[1];front[2][2]=temp[2];
				back[2][2]=temp[3];back[2][1]=temp[4];back[2][0]=temp[5];
				left[2][0]=temp[6];left[2][1]=temp[7];left[2][2]=temp[8];
				right[2][2]=temp[9];right[2][1]=temp[10];right[2][0]=temp[11];
				//cycle face
				cycleFace(bottom,3);
				break;
			case 2:
				//D' move
				//cycle corners
				temp[0]=front[2][0];temp[1]=front[2][1];temp[2]=front[2][2];
				temp[3]=right[2][0];temp[4]=right[2][1];temp[5]=right[2][2];
				temp[6]=back[2][0];temp[7]=back[2][1];temp[8]=back[2][2];
				temp[9]=left[2][0];temp[10]=left[2][1];temp[11]=left[2][2];
				cycleNonFace(temp,1);
				front[2][0]=temp[0];front[2][1]=temp[1];front[2][2]=temp[2];
				right[2][0]=temp[3];right[2][1]=temp[4];right[2][2]=temp[5];
				back[2][0]=temp[6];back[2][1]=temp[7];back[2][2]=temp[8];
				left[2][0]=temp[9];left[2][1]=temp[10];left[2][2]=temp[11];
				//cycle face
				cycleFace(bottom,2);
				break;
			case 12:
				//U move
				//cycle corners
				temp[0]=front[0][0];temp[1]=front[0][1];temp[2]=front[0][2];
				temp[3]=right[0][0];temp[4]=right[0][1];temp[5]=right[0][2];
				temp[6]=back[0][0];temp[7]=back[0][1];temp[8]=back[0][2];
				temp[9]=left[0][0];temp[10]=left[0][1];temp[11]=left[0][2];
				cycleNonFace(temp,1);
				front[0][0]=temp[0];front[0][1]=temp[1];front[0][2]=temp[2];
				right[0][0]=temp[3];right[0][1]=temp[4];right[0][2]=temp[5];
				back[0][0]=temp[6];back[0][1]=temp[7];back[0][2]=temp[8];
				left[0][0]=temp[9];left[0][1]=temp[10];left[0][2]=temp[11];
				//cycle face
				cycleFace(top,1);
				break;
			case 13:
				//U2 move
				//cycle corners
				temp[0]=front[0][0];temp[1]=front[0][1];temp[2]=front[0][2];
				temp[3]=back[0][2];temp[4]=back[0][1];temp[5]=back[0][0];
				temp[6]=left[0][0];temp[7]=left[0][1];temp[8]=left[0][2];
				temp[9]=right[0][2];temp[10]=right[0][1];temp[11]=right[0][0];
				cycleNonFace(temp,2);
				front[0][0]=temp[0];front[0][1]=temp[1];front[0][2]=temp[2];
				back[0][2]=temp[3];back[0][1]=temp[4];back[0][0]=temp[5];
				left[0][0]=temp[6];left[0][1]=temp[7];left[0][2]=temp[8];
				right[0][2]=temp[9];right[0][1]=temp[10];right[0][0]=temp[11];
				//cycle face
				cycleFace(top,3);
				break;
			case 14:
				//U' move
				//cycle corners
				temp[0]=front[0][0];temp[1]=front[0][1];temp[2]=front[0][2];
				temp[3]=left[0][0];temp[4]=left[0][1];temp[5]=left[0][2];
				temp[6]=back[0][0];temp[7]=back[0][1];temp[8]=back[0][2];
				temp[9]=right[0][0];temp[10]=right[0][1];temp[11]=right[0][2];
				cycleNonFace(temp,1);
				front[0][0]=temp[0];front[0][1]=temp[1];front[0][2]=temp[2];
				left[0][0]=temp[3];left[0][1]=temp[4];left[0][2]=temp[5];
				back[0][0]=temp[6];back[0][1]=temp[7];back[0][2]=temp[8];
				right[0][0]=temp[9];right[0][1]=temp[10];right[0][2]=temp[11];
				//cycle face
				cycleFace(top,2);
				break;
			case 20:
				//F move
				//cycle corners
				temp[0]=top[2][0];temp[1]=top[2][1];temp[2]=top[2][2];
				temp[3]=left[2][2];temp[4]=left[1][2];temp[5]=left[0][2];
				temp[6]=bottom[0][2];temp[7]=bottom[0][1];temp[8]=bottom[0][0];
				temp[9]=right[0][0];temp[10]=right[1][0];temp[11]=right[2][0];
				cycleNonFace(temp,1);
				top[2][0]=temp[0];top[2][1]=temp[1];top[2][2]=temp[2];
				left[2][2]=temp[3];left[1][2]=temp[4];left[0][2]=temp[5];
				bottom[0][2]=temp[6];bottom[0][1]=temp[7];bottom[0][0]=temp[8];
				right[0][0]=temp[9];right[1][0]=temp[10];right[2][0]=temp[11];
				//cycle face
				cycleFace(front,1);
				break;
			case 21:
				//F2 move
				//cycle corners
				temp[0]=top[2][0];temp[1]=top[2][1];temp[2]=top[2][2];
				temp[3]=bottom[0][0];temp[4]=bottom[0][1];temp[5]=bottom[0][2];
				temp[6]=left[0][2];temp[7]=left[1][2];temp[8]=left[2][2];
				temp[9]=right[0][0];temp[10]=right[1][0];temp[11]=right[2][0];
				cycleNonFace(temp,2);
				top[2][0]=temp[0];top[2][1]=temp[1];top[2][2]=temp[2];
				bottom[0][0]=temp[3];bottom[0][1]=temp[4];bottom[0][2]=temp[5];
				left[0][2]=temp[6];left[1][2]=temp[7];left[2][2]=temp[8];
				right[0][0]=temp[9];right[1][0]=temp[10];right[2][0]=temp[11];
				//cycle face
				cycleFace(front,3);
				break;
			case 22:
				//F' move
				//cycle corners
				temp[0]=top[2][0];temp[1]=top[2][1];temp[2]=top[2][2];
				temp[3]=right[0][0];temp[4]=right[1][0];temp[5]=right[2][0];
				temp[6]=bottom[0][2];temp[7]=bottom[0][1];temp[8]=bottom[0][0];
				temp[9]=left[2][2];temp[10]=left[1][2];temp[11]=left[0][2];
				cycleNonFace(temp,1);
				top[2][0]=temp[0];top[2][1]=temp[1];top[2][2]=temp[2];
				right[0][0]=temp[3];right[1][0]=temp[4];right[2][0]=temp[5];
				bottom[0][2]=temp[6];bottom[0][1]=temp[7];bottom[0][0]=temp[8];
				left[2][2]=temp[9];left[1][2]=temp[10];left[0][2]=temp[11];
				//cycle face
				cycleFace(front,2);
				break;
			case 8:
				//B move
				//cycle corners
				temp[0]=top[0][0];temp[1]=top[0][1];temp[2]=top[0][2];
				temp[3]=right[0][2];temp[4]=right[1][2];temp[5]=right[2][2];
				temp[6]=bottom[2][2];temp[7]=bottom[2][1];temp[8]=bottom[2][0];
				temp[9]=left[2][0];temp[10]=left[1][0];temp[11]=left[0][0];
				cycleNonFace(temp,1);
				top[0][0]=temp[0];top[0][1]=temp[1];top[0][2]=temp[2];
				right[0][2]=temp[3];right[1][2]=temp[4];right[2][2]=temp[5];
				bottom[2][2]=temp[6];bottom[2][1]=temp[7];bottom[2][0]=temp[8];
				left[2][0]=temp[9];left[1][0]=temp[10];left[0][0]=temp[11];
				//cycle face
				cycleFace(back,1);
				break;
			case 9:
				//B2 move
				//cycle corners
				temp[0]=top[0][0];temp[1]=top[0][1];temp[2]=top[0][2];
				temp[3]=bottom[2][0];temp[4]=bottom[2][1];temp[5]=bottom[2][2];
				temp[6]=left[0][0];temp[7]=left[1][0];temp[8]=left[2][0];
				temp[9]=right[0][2];temp[10]=right[1][2];temp[11]=right[2][2];
				cycleNonFace(temp,2);
				top[0][0]=temp[0];top[0][1]=temp[1];top[0][2]=temp[2];
				bottom[2][0]=temp[3];bottom[2][1]=temp[4];bottom[2][2]=temp[5];
				left[0][0]=temp[6];left[1][0]=temp[7];left[2][0]=temp[8];
				right[0][2]=temp[9];right[1][2]=temp[10];right[2][2]=temp[11];
				//cycle face
				cycleFace(back,3);
				break;
			case 10:
				//B' move
				//cycle corners
				temp[0]=top[0][0];temp[1]=top[0][1];temp[2]=top[0][2];
				temp[3]=left[2][0];temp[4]=left[1][0];temp[5]=left[0][0];
				temp[6]=bottom[2][2];temp[7]=bottom[2][1];temp[8]=bottom[2][0];
				temp[9]=right[0][2];temp[10]=right[1][2];temp[11]=right[2][2];
				cycleNonFace(temp,1);
				top[0][0]=temp[0];top[0][1]=temp[1];top[0][2]=temp[2];
				left[2][0]=temp[3];left[1][0]=temp[4];left[0][0]=temp[5];
				bottom[2][2]=temp[6];bottom[2][1]=temp[7];bottom[2][0]=temp[8];
				right[0][2]=temp[9];right[1][2]=temp[10];right[2][2]=temp[11];
				//cycle face
				cycleFace(back,2);
				break;
			case 16:
				//R move
				//cycle corners
				temp[0]=top[0][2];temp[1]=top[1][2];temp[2]=top[2][2];
				temp[3]=front[0][2];temp[4]=front[1][2];temp[5]=front[2][2];
				temp[6]=bottom[0][2];temp[7]=bottom[1][2];temp[8]=bottom[2][2];
				temp[9]=back[2][0];temp[10]=back[1][0];temp[11]=back[0][0];
				cycleNonFace(temp,1);
				top[0][2]=temp[0];top[1][2]=temp[1];top[2][2]=temp[2];
				front[0][2]=temp[3];front[1][2]=temp[4];front[2][2]=temp[5];
				bottom[0][2]=temp[6];bottom[1][2]=temp[7];bottom[2][2]=temp[8];
				back[2][0]=temp[9];back[1][0]=temp[10];back[0][0]=temp[11];
				//cycle face
				cycleFace(right,1);
				break;
			case 17:
				//R2 move
				//cycle corners
				temp[0]=top[0][2];temp[1]=top[1][2];temp[2]=top[2][2];
				temp[3]=bottom[2][2];temp[4]=bottom[1][2];temp[5]=bottom[0][2];
				temp[6]=front[0][2];temp[7]=front[1][2];temp[8]=front[2][2];
				temp[9]=back[0][0];temp[10]=back[1][0];temp[11]=back[2][0];
				cycleNonFace(temp,2);
				top[0][2]=temp[0];top[1][2]=temp[1];top[2][2]=temp[2];
				bottom[2][2]=temp[3];bottom[1][2]=temp[4];bottom[0][2]=temp[5];
				front[0][2]=temp[6];front[1][2]=temp[7];front[2][2]=temp[8];
				back[0][0]=temp[9];back[1][0]=temp[10];back[2][0]=temp[11];
				//cycle face
				cycleFace(right,3);
				break;
			case 18:
				//R' move
				//cycle corners
				temp[0]=top[0][2];temp[1]=top[1][2];temp[2]=top[2][2];
				temp[3]=back[2][0];temp[4]=back[1][0];temp[5]=back[0][0];
				temp[6]=bottom[0][2];temp[7]=bottom[1][2];temp[8]=bottom[2][2];
				temp[9]=front[0][2];temp[10]=front[1][2];temp[11]=front[2][2];
				cycleNonFace(temp,1);
				top[0][2]=temp[0];top[1][2]=temp[1];top[2][2]=temp[2];
				back[2][0]=temp[3];back[1][0]=temp[4];back[0][0]=temp[5];
				bottom[0][2]=temp[6];bottom[1][2]=temp[7];bottom[2][2]=temp[8];
				front[0][2]=temp[9];front[1][2]=temp[10];front[2][2]=temp[11];
				//cycle face
				cycleFace(right,2);
				break;
			case 4:
				//L move
				//cycle corners
				temp[0]=top[0][0];temp[1]=top[1][0];temp[2]=top[2][0];
				temp[3]=back[2][2];temp[4]=back[1][2];temp[5]=back[0][2];
				temp[6]=bottom[0][0];temp[7]=bottom[1][0];temp[8]=bottom[2][0];
				temp[9]=front[0][0];temp[10]=front[1][0];temp[11]=front[2][0];
				cycleNonFace(temp,1);
				top[0][0]=temp[0];top[1][0]=temp[1];top[2][0]=temp[2];
				back[2][2]=temp[3];back[1][2]=temp[4];back[0][2]=temp[5];
				bottom[0][0]=temp[6];bottom[1][0]=temp[7];bottom[2][0]=temp[8];
				front[0][0]=temp[9];front[1][0]=temp[10];front[2][0]=temp[11];
				//cycle face
				cycleFace(left,1);
				break;
			case 5:
				//L2 move
				//cycle corners
				temp[0]=top[0][0];temp[1]=top[1][0];temp[2]=top[2][0];
				temp[3]=bottom[2][0];temp[4]=bottom[1][0];temp[5]=bottom[0][0];
				temp[6]=back[0][2];temp[7]=back[1][2];temp[8]=back[2][2];
				temp[9]=front[0][0];temp[10]=front[1][0];temp[11]=front[2][0];
				cycleNonFace(temp,2);
				top[0][0]=temp[0];top[1][0]=temp[1];top[2][0]=temp[2];
				bottom[2][0]=temp[3];bottom[1][0]=temp[4];bottom[0][0]=temp[5];
				back[0][2]=temp[6];back[1][2]=temp[7];back[2][2]=temp[8];
				front[0][0]=temp[9];front[1][0]=temp[10];front[2][0]=temp[11];
				//cycle face
				cycleFace(left,3);
				break;
			case 6:
				//L' move
				//cycle corners
				temp[0]=top[0][0];temp[1]=top[1][0];temp[2]=top[2][0];
				temp[3]=front[0][0];temp[4]=front[1][0];temp[5]=front[2][0];
				temp[6]=bottom[0][0];temp[7]=bottom[1][0];temp[8]=bottom[2][0];
				temp[9]=back[2][2];temp[10]=back[1][2];temp[11]=back[0][2];
				cycleNonFace(temp,1);
				top[0][0]=temp[0];top[1][0]=temp[1];top[2][0]=temp[2];
				front[0][0]=temp[3];front[1][0]=temp[4];front[2][0]=temp[5];
				bottom[0][0]=temp[6];bottom[1][0]=temp[7];bottom[2][0]=temp[8];
				back[2][2]=temp[9];back[1][2]=temp[10];back[0][2]=temp[11];
				//cycle face
				cycleFace(left,2);
				break;
			
		}
	}
	// console.log("Here Z is the center for each face");
	// console.log("top");
	// console.log(top[0][0] + " " + top[0][1] + " " + top[0][2]);
	// console.log(top[1][0] + " " + top[1][1] + " " + top[1][2]);
	// console.log(top[2][0] + " " + top[2][1] + " " + top[2][2]);
	// console.log("front");
	// console.log(front[0][0] + " " + front[0][1] + " " + front[0][2]);
	// console.log(front[1][0] + " " + front[1][1] + " " + front[1][2]);
	// console.log(front[2][0] + " " + front[2][1] + " " + front[2][2]);
	// console.log("right");
	// console.log(right[0][0] + " " + right[0][1] + " " + right[0][2]);
	// console.log(right[1][0] + " " + right[1][1] + " " + right[1][2]);
	// console.log(right[2][0] + " " + right[2][1] + " " + right[2][2]);
	// console.log("left");
	// console.log(left[0][0] + " " + left[0][1] + " " + left[0][2]);
	// console.log(left[1][0] + " " + left[1][1] + " " + left[1][2]);
	// console.log(left[2][0] + " " + left[2][1] + " " + left[2][2]);
	// console.log("back");
	// console.log(back[0][0] + " " + back[0][1] + " " + back[0][2]);
	// console.log(back[1][0] + " " + back[1][1] + " " + back[1][2]);
	// console.log(back[2][0] + " " + back[2][1] + " " + back[2][2]);
	// console.log("bottom");
	// console.log(bottom[0][0] + " " + bottom[0][1] + " " + bottom[0][2]);
	// console.log(bottom[1][0] + " " + bottom[1][1] + " " + bottom[1][2]);
	// console.log(bottom[2][0] + " " + bottom[2][1] + " " + bottom[2][2]);
	
	var corners = new Array(24);
	corners[0] = top[0][0];corners[1] = top[0][2];
	corners[2] = top[2][2];corners[3] = top[2][0];
	corners[4] = left[0][0];corners[5] = left[0][2];
	corners[6] = left[2][2];corners[7] = left[2][0];
	corners[8] = front[0][0];corners[9] = front[0][2];
	corners[10] = front[2][2];corners[11] = front[2][0];
	corners[12] = right[0][0];corners[13] = right[0][2];
	corners[14] = right[2][2];corners[15] = right[2][0];
	corners[16] = back[0][0];corners[17] = back[0][2];
	corners[18] = back[2][2];corners[19] = back[2][0];
	corners[20] = bottom[0][0];corners[21] = bottom[0][2];
	corners[22] = bottom[2][2];corners[23] = bottom[2][0];

	var edges = new Array(24);
	edges[0] = top[0][1]; edges[1] = top[1][2];
	edges[2] = top[2][1]; edges[3] = top[1][0];
	edges[4] = left[0][1]; edges[5] = left[1][2];
	edges[6] = left[2][1]; edges[7] = left[1][0];
	edges[8] = front[0][1]; edges[9] = front[1][2];
	edges[10] = front[2][1]; edges[11] = front[1][0];
	edges[12] = right[0][1]; edges[13] = right[1][2];
	edges[14] = right[2][1]; edges[15] = right[1][0];
	edges[16] = back[0][1]; edges[17] = back[1][2];
	edges[18] = back[2][1]; edges[19] = back[1][0];
	edges[20] = bottom[0][1]; edges[21] = bottom[1][2];
	edges[22] = bottom[2][1]; edges[23] = bottom[1][0];

	solveCorners(corners);
	solveEdges(edges);
}

function appendMoves( sq, axsl, tl, la ){
	for( var sl=0; sl<tl; sl++){	// for each move type
		if( axsl[sl] ){				// if it occurs
			var q=axsl[sl]-1;
 
			// get semi-axis of this move
			var sa = la;
			var m = sl;
			if(sl+sl+1>=tl){ // if on rear half of this axis
				sa+=3; // get semi-axis (i.e. face of the move)
				m=tl-1-m; // slice number counting from that face
				q=2-q; // opposite direction when looking at that face
			}
			// store move
			sq[sq.length]=(m*6+sa)*4+q;
			//console.log((m*6+sa)*4+q);
			ScrambleList[limit++] = (m*6+sa)*4+q;
		}
	}
}


function generateScramble(){
	var tl = 2;
	var axsl=new Array(tl);    // movement of each slice/movetype on this axis
	var axam=new Array(0,0,0); // number of slices moved each amount
	var la; // last axis moved

	la=-1;
	var seq=new Array(); // moves generated so far
	// reset slice/direction counters
	for( var i=0; i<tl; i++) axsl[i]=0;
	axam[0]=axam[1]=axam[2]=0;
	var moved = 0;

	// while generated sequence not long enough
	while( seq.length + moved <seqlen ){

		var ax, sl, q;
		do{
			do{
				// choose a random axis
				ax=Math.floor(Math.random()*3);
				// choose a random move type on that axis
				sl=Math.floor(Math.random()*tl);
				// choose random amount
				q=Math.floor(Math.random()*3);
			}while( ax==la && axsl[sl]!=0 );		// loop until have found an unused movetype
		}while( ax==la					// loop while move is reducible: reductions only if on same axis as previous moves
				&& tl==size				// only even-sized cubes have reductions (odds have middle layer as reference)
				&& (
					2*axam[0]==tl ||	// reduction if already have half the slices move in same direction
					2*axam[1]==tl ||
					2*axam[2]==tl ||
					(
						2*(axam[q]+1)==tl	// reduction if move makes exactly half the slices moved in same direction and
						&&
						axam[0]+axam[1]+axam[2]-axam[q] > 0 // some other slice also moved
					)
			    )
		);
		// if now on different axis, dump cached moves from old axis
		if( ax!=la ) {
			appendMoves( seq, axsl, tl, la );
			// reset slice/direction counters
			for( var i=0; i<tl; i++) axsl[i]=0;
			axam[0]=axam[1]=axam[2]=0;
			moved = 0;
			// remember new axis
			la=ax;
		}

		// adjust counters for this move
		axam[q]++;// adjust direction count
		moved++;
		axsl[sl]=q+1;// mark the slice has moved amount

	}
	// dump the last few moves
	appendMoves( seq, axsl, tl, la );

	var text = "";
	for(var i = 0; i < ScrambleList.length; ++i){
		switch(ScrambleList[i]){
			case 0:
				text+="D ";
				break;
			case 1:
				text+="D2 ";
				break;
			case 2:
				text+="D' ";
				break;
			case 4:
				text+="L ";
				break;
			case 5:
				text+="L2 ";
				break;
			case 6:
				text+="L' ";
				break;
			case 8:
				text+="B ";
				break;
			case 9:
				text+="B2 ";
				break;
			case 10:
				text+="B' ";
				break;
			case 12:
				text+="U ";
				break;
			case 13:
				text+="U2 ";
				break;
			case 14:
				text+="U' ";
				break;
			case 16:
				text+="R ";
				break;
			case 17:
				text+="R2 ";
				break;
			case 18:
				text+="R' ";
				break;
			case 20:
				text+="F ";
				break;
			case 21:
				text+="F2 ";
				break;
			case 22:
				text+="F' ";
				break;
		}
	}

	document.getElementById("maindiv").innerHTML = text;
	applyScramble(ScrambleList);
	for(var i = 0; i < ScrambleList.length; ++i) ScrambleList[i] = -1;
	limit = 0;
}