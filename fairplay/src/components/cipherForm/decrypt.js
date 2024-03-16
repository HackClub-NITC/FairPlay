export function generateKeyTable(key, ks, keyT) {
	let i,
		j,
		k,
		flag = 0;

	// a 26 character hashmap
	// to store count of the alphabet
	let dicty = new Array(26).fill(0);
	for (i = 0; i < ks; i++) {
		let r = key[i].charCodeAt(0) - 97;

		if (key[i] !== "j") {
			dicty[r] = 2;
		}
	}

	dicty["j".charCodeAt(0) - 97] = 1;
	i = 0;
	j = 0;

	for (k = 0; k < ks; k++) {
		let r = key[k].charCodeAt(0) - 97;
		if (dicty[r] === 2) {
			dicty[r] -= 1;
			keyT[i][j] = key[k];
			j++;
			if (j === 5) {
				i++;
				j = 0;
			}
		}
	}

	for (k = 0; k < 26; k++) {
		if (dicty[k] === 0) {
			keyT[i][j] = String.fromCharCode(k + 97);
			j++;
			if (j === 5) {
				i++;
				j = 0;
			}
		}
	}
	return keyT;
}

export function decrypt(str, keyT, ps) {
	let i;
	let a = new Array(4).fill(0);
	let newstr = new Array(ps);

	for (i = 0; i < ps; i += 2) {
		let brr = search(keyT, str[i], str[i + 1], a);
		let k1 = brr[0];
		let k2 = brr[1];
		let k3 = brr[2];
		let k4 = brr[3];
		if (k1 === k3) {
			newstr[i] = keyT[k1][mod5(k2 - 1)];
			newstr[i + 1] = keyT[k1][mod5(k4 - 1)];
		} else if (k2 === k4) {
			newstr[i] = keyT[mod5(k1 - 1)][k2];
			newstr[i + 1] = keyT[mod5(k3 - 1)][k2];
		} else {
			newstr[i] = keyT[k1][k4];
			newstr[i + 1] = keyT[k3][k2];
		}
	}
	let res = "";

	for (let i = 0; i < newstr.length; i++) {
		res += newstr[i];
	}
	return res;
}

export function search(keyT, a, b, arr) {
	let i, j;

	if (a === "j") a = "i";
	else if (b === "j") b = "i";

	for (i = 0; i < 5; i++) {
		for (j = 0; j < 5; j++) {
			if (keyT[i][j] === a) {
				arr[0] = i;
				arr[1] = j;
			} else if (keyT[i][j] === b) {
				arr[2] = i;
				arr[3] = j;
			}
		}
	}
	return arr;
}

// export export function to make the plain text length to be even
export function prepare(str, ptrs) {
	if (ptrs % 2 !== 0) {
		str += "z";
	}

	return [str, ptrs];
}

// export function to decrypt using Playfair Cipher
export function decryptByPlayfairCipher(str, key) {
	let ps, ks;
	let keyT = new Array(5).fill(null).map(() => new Array(5));

	str = str.trim().toLowerCase();
	key = key.trim().toLowerCase();

	ps = str.length;
	ks = key.length;
	[str, ps] = prepare(str, ps);

	let kt = generateKeyTable(key, ks, keyT);
	return decrypt(str, kt, ps);
}
