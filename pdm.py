import sympy as sp

# Définir des symboles
def M(n):
  s_xi = "\u03BE"
  xi = sp.symbols(f"{s_xi}0:{n}")
  M = sp.zeros(n, n)
  for i in range(n):
    for j in range(n):
      if j < i:
        M[i, j] = -xi[(j - i + n) % n]
      else:
        M[i, j] = xi[(j - i + n) % n]
  return M
def printM(n):
  print("\\lVert\\xi\\rVert=\\sqrt[{}]{{".format(n)+sp.latex(M(n).det())+"}")
  print("M(\\xi)^{}=".format(n)+sp.latex(M(n)**n))
printM(4)

def M(n):
  s_xi = "\u03BE"
  xi = sp.symbols(f"{s_xi}0:{n}")
  M = sp.zeros(n, n)
  for i in range(n):
    for j in range(n):
      if j < i:
        M[i, j] = -xi[(j - i + n) % n]
      else:
        M[i, j] = xi[(j - i + n) % n]
  return M
print(sp.latex(M(1)))
print(sp.latex(M(2)))
print(sp.latex(M(3)))
print(sp.latex(M(4)))
print(sp.latex(M(5)))
print(sp.latex(M(6)))
print(sp.latex(M(7)))

# p0 = (1, 0)
# p1 = (x1, y1)
# x = (x1 - 1) * t + 1
# t = (x - 1) / (x1 - 1) 
# r1 = y1 / (x1 - 1)
# y = y1 * t
# y = r1 * (x - 1)
# V = x**2 + y**2 - 1
x0, t1 = sp.symbols("x0 t1")
x1 = t1 * (x0 - 1)
v = x0**2 + x1**2 - 1
q, r = sp.div(v, x0 * (1 + t1**2) + 1 - t1**2);
print(sp.expand(v))
print(sp.expand(q))
print(sp.expand(r))

x0, t1, t2 = sp.symbols("x0, t1, t2")
x1 = t1 * (x0 - 1)
x2 = t2 * (x0 - 1)
v = x0**3 - x1**3 + x2**3 + 3*x0*x1*x2 - 1
print(sp.expand(v))
#q, r = sp.div(v, x0*(1-t1**3+t2**3+3*t1*t2)-(1-t1**3+t2**3-6*t1*t2))
#q, r = sp.div(v, x0*(1-t1**3+t2**3+3*t1*t2)-3*(t1-t1**2*t2-t2**2))
#q, r = sp.div(v, x0*(1-t1**3+t2**3+3*t1*t2)-(1-t1**3+t2**3-6*t1*t2))
#print(sp.expand(q))
#print(sp.expand(r)) 
q, r = sp.div(v, x0 - 1)
print(sp.expand(q))
a, r = sp.div(q, x0**2)
b, c = sp.div(r, x0)
print(sp.expand(a))
print(sp.expand(b))
print(sp.expand(c))
d = b**2 - 4 * a * c
print(sp.expand(d))

a, b, c, e = sp.symbols("a b c e")
z = a + b*e + c*e**2
print(sp.expand(z**3))
zzz = sp.expand(z**3).subs(e**6, 1).subs(e**5, -e**2).subs(e**4, -e).subs(e**3, -1)
x2, r = sp.Poly(zzz, e).div(sp.Poly(e**2, e))
x1, x0 = r.div(sp.Poly(e, e))
print(x0.as_expr())
print(x1.as_expr())
print(x2.as_expr())

a, b, c = sp.symbols("a b c")
tau = a**3 + b**3 - c**3 + 3*a*b*c
beta0 = a**3 - b**3 + c**3 - 6*a*b*c
beta1 = 3*(a**2*b - b**2*c - c**2*a)
beta2 = 3*(a**2*c + a*b**2 - b*c**2)
x0 = beta0 / tau
x1 = beta1 / tau
x2 = beta2 / tau
f = beta0**3 + beta1**3 - beta2**3 + 3*beta0*beta1*beta2
print(f.subs(a, 1).subs(b, 2).subs(c, 3))
print(tau.subs(a, 1).subs(b, 2).subs(c, 3))

def tau(a, b, c):
  return a**3 - b**3 + c**3 + 3*a*b*c
def x0(a, b, c):
  return a**3 - b**3 + c**3 - 6*a*b*c
def x1(a, b, c):
  return 3*(a**2*b - b**2*c - a*c**2)
def x2(a, b, c):
  return 3*(a**2*c + a*b**2 - b*c**2)


# Variables
u, v = sp.symbols('u v')
x, z = sp.symbols('x z')
# Définition du dénominateur D et des numérateurs A, B
D = u**3 + 6*u*v - v**3 - 1
A = u**2*v - u + v**2
B = -u**2 + u*v**2 - v
# Équations x = 3A/D  et z = 3B/D   <=>   x*D - 3A = 0,  z*D - 3B = 0
P1 = x*D - 3*A
P2 = z*D - 3*B

R1 = sp.resultant(P1, P2, v)   # polynomial in u,x,z
R1_simpl = sp.factor(R1)
print(R1_simpl)

R2 = sp.resultant(R1_simpl, sp.diff(R1_simpl, u), u)
print(sp.factor(R2))
