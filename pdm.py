import sympy as sp

# Définir des symboles
n = 5
s_xi = "\u03BE"
xi = sp.symbols(f"{s_xi}0:{n}")

# Définir une matrice symbolique
M = sp.Matrix([[xi[0], -xi[1], -xi[2]],
               [xi[2], xi[0], -xi[1]],
               [xi[1], xi[2], xi[0]]])

n = 6
s_xi = "\u03BE"
xi = sp.symbols(f"{s_xi}0:{n}")
M = sp.zeros(n, n)
for i in range(n):
  for j in range(n):
    if j > i:
      M[i, j] = -xi[(j - i + n) % n]
    else:
      M[i, j] = xi[(j - i + n) % n]
print(M.det())

# Calculer le déterminant
det_M = M.det()

print(det_M)
