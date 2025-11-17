const util = require("util");

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
	const c = Array(n).fill(0);
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

// On peut calculer le signe à partir de la permutation
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

function mhndet(n, z) {
	let x = 0;
	const perms = sgnchoosek([...z.keys()], n);
	for (const [sgn, perm] of perms) {
		let u = sgn;
		console.log(sgn, perm);
		for (let i = 0; i < n; i++) {
			u *= z[(n + perm[i] - i) % n];
		}
		x += u;
	}
	return x;
}

function mhntostr(n, z) {
	let s = "";
	for (let i = 0; i < n; i++) {
		s += s ? " + " : "";
		s += z[i] + (i > 0 ? "e" + (i > 1 ? sup(i) : "") : "");
	}
	return s;
}

function mhnmult(n, u, v) {
	let z = Array(n).fill(0);
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			z[(i + j) % n] += u[i] * v[j];
		}
	}
	return z;
}

function mhnpow(n, x, p) {
	let z = [1, ...x.slice(1).fill(0)];
	for (let i = 0; i < p; i++) {
		z = mhnmult(n, z, x);
	}
	return z;
}

function part(z, i) {
  const n = z.length;
  return z
    .filter(([_, j]) => 0 === (j - i) % n)
    .map(([coeff, _, ...r]) => [coeff, ...r]);
}

function poly(x) {
  return {
    _x: x,
    pow(n) {
      return poly(pow(this._x, n));
    },
    add(x, ...xs) {
      return poly(groupTerms([...this._x, ...x._x]));
    },
    mult(x, ...xs) {
      return poly(conv(this._x, x._x));
    },
    [util.inspect.custom]() {
      return tostr(this._x);
    }
  };
}

function mcn(
  n, 
  z = Array(n).fill([]).map((_, i) => [1,i,...Array(i).fill(0), 1])
) {
  const {floor} = Math;
  z = z.map(([c, e, ...r]) => [floor(e / n) % 2 ? -c : c, (e % n), ...r]);
  return {
    _z: z,  
    add(z, ...zs) {
    },
    mult(z, ...zs) {
    },
    pow(n) {
      return mcn(n, pow(this._z, n));
    },
    part(i) {
      return poly(part(this._z, i));
    },
    det() {
    },
    [util.inspect.custom]() {
      return tostr(this._z, "eabcdfghijklmnopqrstuvwxyz");
    }
  }
}

function coltz(n) {
  const m = 6*n+2;
  let s = "\\begin{pmatrix}";
  for (let i=1; i<=m; i++) {
    let row = "";
    let k = ((i-1)%m)+1;
    for (let j=1; j<=m; j++) {
      row += (row ? " & " : "");
      if (k === j) {
        row += "-\\lambda";
      } else if (j/2 === k || (3*j+1)/2 === k) {
        row += "1";
      } else {
        row += "0";
      }
    }
    s += row + "\\\\";
  }
  s += "\\end{pmatrix}";
  console.log(s);
}
coltz(1)
