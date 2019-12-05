/*
- Buracos -> é so arrumar a gravidade


*/
let colors = [ 'pink', 'lightblue', 'palegreen', 'plum', 'NavajoWhite' ]; // 'mediumorchid','lightsalmon',
let firstClick = null;
let secondClick = null;

window.onload = function() {
	let padd = 22.5;
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			let square = document.createElement('div');
			let random = Math.floor(Math.random() * colors.length);
			let color = colors[random];
			square.style.backgroundColor = color;
			square.style.top = i * 102 + padd + 'px';
			square.style.left = j * 102 + padd + 'px';
			square.className = 'little-square';
			square.id = '' + i + j;
			this.document.getElementById('big-square').appendChild(square);
			square.onclick = function() {
				clicked(square);
			};
		}
	}
	this.check();
};

function clicked(element) {
	if (firstClick == null) {
		element.className = 'little-square-selected';
		firstClick = element;
	} else if (secondClick == null) {
		secondClick = element;
		firstClick.className = 'little-square';
		let top = parseInt(firstClick.style.top, 10) - parseInt(secondClick.style.top, 10);
		let left = parseInt(firstClick.style.left, 10) - parseInt(secondClick.style.left, 10);
		console.log(top, left);
		if (!(top <= 102 && top >= -102 && (left <= 102 && left >= -102) && (top == 0 || left == 0))) {
			firstClick = null;
			secondClick = null;
			return;
		}
	} else return;
	console.log(element.style.backgroundColor);
	swap();
}

function swap() {
	if (firstClick == null || secondClick == null) return;
	let ft = firstClick.style.top;
	let fl = firstClick.style.left;
	let fi = firstClick.id;
	firstClick.style.top = secondClick.style.top;
	firstClick.style.left = secondClick.style.left;
	firstClick.id = secondClick.id;
	secondClick.style.top = ft;
	secondClick.style.left = fl;
	secondClick.id = fi;
	firstClick = null;
	secondClick = null;
	setTimeout(check, 780);
}

//check combinations
function check() {
	console.log('AHAAAAAAA');
	//check horizontal
	let cnt = 1;
	let current_elem;
	let color_strike = null;
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			let id = '' + i + j;
			// console.log("HID", id);
			current_elem = document.getElementById(id);
			if (current_elem == null) {
				continue;
			} else if (current_elem.style.backgroundColor == color_strike)
				// console.log("FOI", current_elem.style.backgroundColor, color_strike, cnt);
				cnt++;
			else {
				if (cnt >= 3) {
					for (let k = 1; k <= cnt; k++) {
						let del_id = '' + id - k;
						if (id - k < 10) del_id = '0' + del_id;

						let delete_elem = document.getElementById(del_id);
						if (delete_elem != null) {
							console.log(cnt, delete_elem.style.backgroundColor, color_strike, del_id, k);
							document.getElementById('big-square').removeChild(delete_elem);
							// delete_elem.style.top = '1000px';
							// this.document.getElementById('resto').appendChild(delete_elem);
						} else {
							color_strike = current_elem.style.backgroundColor;
							// console.log('null', cnt, id, color_strike, k, id - k);
						}
					}
				}
				color_strike = current_elem.style.backgroundColor;
				cnt = 1;
			}
		}
		color_strike = null;
	}

	cnt = 1;

	//check vertical
	for (let j = 0; j < 10; j++) {
		for (let i = 0; i < 10; i++) {
			let id = '' + i + j;
			current_elem = document.getElementById(id);
			// console.log("VID", id);
			// if (current_elem.parentElement != document.getElementById('big-square')) {
			if (current_elem == null) {
				// console.log('BORA', current_elem.id, current_elem.parentElement);
				continue;
			} else if (current_elem.style.backgroundColor == color_strike) {
				// console.log("FOI H ", current_elem.style.backgroundColor, color_strike, cnt);
				cnt++;
				if (i != 9) continue;
			}
			if (cnt >= 3) {
				for (let k = 1; k <= cnt; k++) {
					let aux = 0;
					let del_id;
					let delete_elem;

					do {
						del_id = '' + id[0] - k - aux + id[1];
						if (id - k - aux < 10) del_id = '0' + del_id;
						delete_elem = document.getElementById(del_id);
						aux++;
					} while (delete_elem == null);
					if (delete_elem != null) {
						console.log('delete', cnt, delete_elem.style.backgroundColor, color_strike, del_id, k);
						document.getElementById('big-square').removeChild(delete_elem);
						// delete_elem.style.left = '1000px';
						// this.document.getElementById('resto').appendChild(delete_elem);
					} else {
						color_strike = current_elem.style.backgroundColor;
						// console.log('null', cnt, id, color_strike, k, id - k);
					}
				}
			}
			color_strike = current_elem.style.backgroundColor;
			cnt = 1;
			// console.log('UE');
		}
		color_strike = null;
	}
	gravity();
}

//precisa checar matriz de baixo pra cima
function gravity() {
	console.log('CAI CAI');
	let dist = 0;
	//Vertical
	for (let j = 0; j < 10; j++) {
		//primeira coluna pra ultima
		for (let i = 9; i >= 0; i--) {
			//ultima linha pra primeira
			let id = '' + i + j;
            let current_elem = document.getElementById(id);
            console.log('id: ', id);
			let next_elem;
			let nid = i + 1;

			if (current_elem != null) {
				do {
					next_elem = document.getElementById('' + nid + j);
					console.log('next: ', '' + (i + 1) + j);
					nid++;
				} while (next_elem == null && nid < 10);

				if (next_elem != null) {
					dist = parseFloat(next_elem.style.top) - parseFloat(current_elem.style.top);
                    console.log("FICA AQUI Ó", current_elem.style.top);
					console.log('dist: ', dist);
                    let top = parseFloat(current_elem.style.top);
					while (dist > 110) {
                        // console.log("AAAA", ( parseFloat(current_elem.style.top) + 102 ));
                        top += 102;
                        current_elem.style.top = top + "PX";
                        console.log("VAMO LOGO", current_elem.style.top);
                        dist = parseFloat(next_elem.style.top) - top;
                        // dist = parseFloat(next_elem.style.top) - 100;
                        console.log("DESGRAÇA ", dist, parseFloat(next_elem.style.top), top);
					}
				}
			}
		}
	}
}
