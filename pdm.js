class Poly {
	constructor(degree, ...terms) {
		this._degree = degree;
		this._terms = terms;
	}
	_sort() {
		const groupedTerms = [];
		for (let i = 0; i < this._terms.length;) {
			const term = [];
			for (; i < this._degree + 1; i++) {
				term.push(this._terms[i] ?? 0);
			}
			groupedTerms.push(term);
		}
		
	}
}

function pad(xs, n) {
	while (xs.length < n) {
		xs.push(0);
	}
	return xs;
}

function sort(xs) {
	const { abs, min } = Math;
	return xs.sort((a, b) => {
		const n = min(a.length, b.length);
		for (let i = 0; i < n; i++) {
			let x = a[i] ?? 0;
			let y = b[i] ?? 0;
			if (x !== y) {
				if (i === 0) {
					if (abs(x) === abs(y)) {
						return y - x;
					} else {
						return abs(x) - abs(y);
					}
				} else {
					return y - x;
				}
			}
		}
		return 0;
	});
}

function mult(a, b) {
	const n = Math.max(a.length, b.length);
	const c = Array(n).fill(0)];
	for (let i = 0; i < n; i++) {
		if (i === 0) {
			c[i] = (a[i] ?? 0) * (b[i] ?? 0);
		} else {
			c[i] = (a[i] ?? 0) + (b[i] ?? 0);
		}
	}
	return c;
}

function groupTerms(terms) {
	const m = Math.max(...terms.map(xs => xs.length - 1));
	let groupedTerms = [];
	for (const [coeff, ...v] of terms) {
		const k = JSON.stringify(pad(v, m));
		if (groupedTerms[k] == undefined) {
			groupedTerms[k] = 0;
		}
		groupedTerms[k] += coeff;
	}
	return sort(Object.entries(groupedTerms)
		.map(([k, a]) => [
			a, 
			...JSON.parse(k)
			.map(x => x == null ? 0 : x)
		]));
} 

function conv(a, b) {
	const n = a.length + b.length - 1;
	const l = Math.max(a.length, b.length);
	let c = [];
	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < b.length; j++) {
			c.push(mult(a[i], b[j]));
		}
	}
	return groupTerms(c);
}

function pow(x, n) {
	let y = [[1]];
	for (let i = 0; i < n; i++) {
		y = conv(y, x);
	}
	return y;
}

function sortz(xs) {
	const { abs, min } = Math;
	return xs.sort((a, b) => {
		const n = min(a.length, b.length);
		for (let i = 0; i < n; i++) {
			let x = a[(i + 1) % n] ?? 0;
			let y = b[(i + 1) % n] ?? 0;
			if (x !== y) {
				if (i + 1 === n) {
					if (abs(x) === abs(y)) {
						return y - x;
					} else {
						return abs(x) - abs(y);
					}
				} else {
					return x - y;
				}
			}
		}
		return 0;
	});
}

function mcn(n, x) {
	return sortz(x.map(([a, e, ...rest]) => [a, e % n, ...rest]));
}

function sup(n) {
	const supers = "⁰¹²³⁴⁵⁶⁷⁸⁹".split("");
	return n
		.toString()
		.split("")
		.map(n => supers[parseInt(n)])
		.join("");
}

function tostr(x, alpha = "abcdefghijklmnopqrstuvwxyz") {
	const vars = alpha.split("");
	return x
		.reduce((a, [coeff, ...mono]) => {
			let smono = "";
			if (mono.every(p => p === 0 || p == null)) {
				smono = "1";
			} else {
				mono.forEach((p, v) => {
					if (p === 1) {
						smono += vars[v];
					} else if (p !== 0 && p != null) {
						smono += vars[v] + sup(p);
					}
				});
			}
			return a + (coeff === 0 ? "" : (a.length ? coeff < 0 ? " - " : " + " : coeff < 0 ? "-" : "") 
				+ (Math.abs(coeff) === 1 ? "" : Math.abs(coeff))
				+ smono);
		}, "");
}

function sgnchoosek(list, k = list.length) {
	if (k > list.length || k < 1) {
		return [[1, []]];
	} else {
		const results = [];
		let sign = 1;
		for (let i = 0; i < list.length; i++) {
			const x = list[i];
			const sub = [
				...list.slice(0, i),
				...list.slice(i + 1)
			];
			for (const [sign2, xs] of sgnchoosek(sub, k - 1)) {
				results.push([sign * sign2, [x, ...xs]]);
			}
			sign *= -1;
		}
		return results;
	}
}

function det(n) {
	const columns = [...Array(n).keys()];
	const terms = sgnchoosek(columns);
	const flatTerms = terms
		.map(([sign, terms]) => [
			sign, 
			...terms
				.reduce(
					(a, i, j) => {
						const v = (i - j + n) % n;
						if (a[v] == undefined) {
							a[v] = 0;
						}
						a[v]++;
						return a;
					}, 
					[]
				)
		]);
	return groupTerms(flatTerms);
}

