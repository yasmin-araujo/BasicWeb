let colors = [ 'pink', 'lightblue', 'palegreen', 'plum', 'NavajoWhite' ]; // 'mediumorchid','lightsalmon',
let firstClick = null;
let secondClick = null;
let del = false;
let points = 0;
let max_score = 0;
let points_element;
let max_score_element;
let square_size = 72;
let last_row_top;
let streak = 0;
let cnt_streak = 0;
let combo_element;

window.onload = () => {
	buildGame();
};

const buildGame = function() {
	//ajusta tamanho de tela
	if (screen.width < 1000) {
		square_size = 92;
	} else square_size = 72;

	// preenche a grade
	let padd = 22.5; //padding left para os quadradinhos
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			let square = document.createElement('div');
			let random = Math.floor(Math.random() * colors.length);
			let color = colors[random];

			square.style.backgroundColor = color;
			square.style.top = i * square_size + padd + 'px';
			square.style.left = j * square_size + padd + 'px';
			square.className = 'little-square';
			square.id = '' + i + j;

			this.document.getElementById('big-square').appendChild(square);
			square.onclick = function() {
				clicked(square);
			};
		}
	}

	firstClick = null;
	secondClick = null;
	points = 0;
	streak = 0;
	cnt_streak = 0;

	last_row_top = this.document.getElementById('99').style.top;
	points_element = document.getElementById('points');
	points_element.innerHTML = 'Pontos: ' + points;

	combo_element = document.getElementById('combo');
	combo_element.innerHTML = 'Combo: ' + streak;

	max_score = localStorage.getItem('max_score');
	if (max_score == null) max_score = 0;
	max_score_element = this.document.getElementById('high_score');
	max_score_element.innerHTML = 'High Score: ' + max_score + ' pontos';

	// checa combinações
	setTimeout(check, 780);
	// this.check();
};

function restart_game() {
	if (points > max_score) localStorage.setItem('max_score', points);
	// location.reload();
	// return false;
	while (this.document.getElementById('big-square').firstChild) {
		this.document.getElementById('big-square').firstChild.remove();
	}
	buildGame();
}

function reset_game() {
	localStorage.removeItem('max_score');
	// location.reload();
	// return false;
	while (this.document.getElementById('big-square').firstChild) {
		this.document.getElementById('big-square').firstChild.remove();
	}
	buildGame();
}

function clicked(element) {
	if (firstClick == null) {
		element.className = 'little-square-selected';
		firstClick = element;
	} else if (secondClick == null) {
		secondClick = element;
		firstClick.className = 'little-square';
		// confere se são vizinhos
		let top = parseInt(firstClick.style.top, 10) - parseInt(secondClick.style.top, 10);
		let left = parseInt(firstClick.style.left, 10) - parseInt(secondClick.style.left, 10);
		if (
			!(
				top <= square_size &&
				top >= -square_size &&
				(left <= square_size && left >= -square_size) &&
				(top == 0 || left == 0)
			)
		) {
			firstClick = null;
			secondClick = null;
			return;
		}
	} else return;
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
	cnt_streak = 0;
	setTimeout(check, 780);
}

//check combinations
function check() {
	// cnt_streak++;
	del = false;

	//check horizontal
	let cnt = 1;
	let current_elem;
	let color_streak = null;
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			let id = '' + i + j;
			current_elem = document.getElementById(id);

			// se não for buraco -> ver se continua a sequencia ou se deleta
			// se for buraco -> se cnt >= 3 - deleta eles e zera, senao só zera

			// não é buraco
			if (current_elem != null) {
				// segue a sequencia
				if (current_elem.style.backgroundColor == color_streak) {
					cnt++;
					if (j == 9) {
						del = seq_delete_hor(del, cnt, '' + (parseInt(id) + 1));
					}
					//não segue a seq -> começa uma nova
				} else {
					//deleta sequencia anterior (se existente)
					del = seq_delete_hor(del, cnt, id);
					color_streak = current_elem.style.backgroundColor;
					cnt = 1;
				}
				// é buraco
			} else {
				// deleta sequencia
				del = seq_delete_hor(del, cnt, id);
				color_streak = null;
				cnt = 0;
			}
		}
		color_streak = null;
		cnt = 0;
	}

	cnt = 1;
	color_streak = null;

	//check vertical
	for (let j = 0; j < 10; j++) {
		for (let i = 0; i < 10; i++) {
			let id = '' + i + j;
			current_elem = document.getElementById(id);

			// sem buraco -> ve se continua seq ou del

			if (current_elem != null) {
				if (current_elem.style.backgroundColor == color_streak) {
					cnt++;
					if (i == 9) {
						del = seq_delete_ver(del, cnt, '' + (parseInt(id) + 10));
					}
					// não é null e nem segue a seq -> começa uma nova
				} else {
					//deleta sequencia anterior (se existente)
					del = seq_delete_ver(del, cnt, id);
					color_streak = current_elem.style.backgroundColor;
					cnt = 1;
				}
			} else {
				// deleta sequencia (se existente)
				del = seq_delete_ver(del, cnt, id);
				color_streak = null;
				cnt = 0;
			}
		}
		color_streak = null;
		cnt = 0;
	}

	if (del) {
		gravity();
		cnt_streak++;
		streak++;
		if (streak > 1) combo_element.innerHTML = 'Combo: ' + streak + 'X pontos';
	} else if (cnt_streak == 0) {
		streak = 0;
		combo_element.innerHTML = 'Combo: ' + streak;
	}
}

function seq_delete_hor(del, cnt, id) {
	if (cnt >= 3) {
		// para cada bloco da sequencia
		for (let k = 1; k <= cnt; k++) {
			let del_id = '' + id - k;
			if (id - k < 10) del_id = '0' + del_id;

			let delete_elem = document.getElementById(del_id);
			if (delete_elem != null) {
				document.getElementById('big-square').removeChild(delete_elem);
				del = true;
			}
			points += Math.max(1, streak);
		}
	}
	points_element.innerHTML = 'Pontos: ' + points;
	return del;
}

function seq_delete_ver(del, cnt, id) {
	if (cnt >= 3) {
		// para cada bloco da sequencia
		for (let k = 1; k <= cnt; k++) {
			let del_id = '' + id - k * 10;
			if (id - k * 10 < 10) del_id = '0' + del_id;

			let delete_elem = document.getElementById(del_id);

			if (delete_elem != null) {
				document.getElementById('big-square').removeChild(delete_elem);
				del = true;
			}
			points += Math.max(1, streak);
		}
	}
	points_element.innerHTML = 'Pontos: ' + points;
	return del;
}

//precisa checar matriz de baixo pra cima
function gravity() {
	let dist = 0;

	//Vertical

	//primeira coluna pra ultima (esquerda para direita)
	for (let j = 0; j < 10; j++) {
		//ultima linha pra primeira (baixo para cima)
		for (let i = 9; i >= 0; i--) {
			let id = '' + i + j;
			let current_elem = document.getElementById(id);
			let next_elem;
			let nid = i + 1; // next id

			// se elemento existe
			if (current_elem != null) {
				// achar id do próximo elemento não nulo
				do {
					next_elem = document.getElementById('' + nid + j);
					nid++;
				} while (next_elem == null && nid < 10);

				if (next_elem != null) {
					dist = parseFloat(next_elem.style.top) - parseFloat(current_elem.style.top);
					let top = parseFloat(current_elem.style.top);
					while (dist > square_size + 5) {
						current_elem.id = '' + (parseInt(current_elem.id) + 10);
						top += square_size;
						current_elem.style.top = top + 'px';
						dist = parseFloat(next_elem.style.top) - top;
					}
				} else if (nid >= 10) {
					// ultima linha com buraco
					current_elem.id = '' + 9 + j;
					current_elem.style.top = last_row_top;
				}
			}
		}
	}

	setTimeout(check, 780);
	// check();
}
