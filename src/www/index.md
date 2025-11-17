# Application des nombres multicompexes au théorème de Fermat-Wiles

_Par Nicolas Blackburn_

## Les nombres multicomplexes

Nous allons d'abord faire un petit rappel de la définition et des propriétés des nombres multicomplexes. Pour plus d'information nous invitons le lecteur à se référer à [l'article original de Norbert Fleury](http://www.sciencedirect.com/science/article/pii/S0022247X83714101/pdf?md5=99c473b97d70da5a165a55850a33d7ea&pid=1-s2.0-S0022247X83714101-main.pdf).

Pour définir les nombres multicomplexes $\newcommand{MC}{\mathcal{M}\mathbb{C}}\newcommand{\norm}[1]{\lVert #1 \rVert} \MC_n$, nous allons déterminer un nombre imaginaire $e$ tel que $e^n = -1$. Un nombre multicomplexe $\xi \in \MC_n$ est défini comme une combinaison linéaire $\sum_{k=0}^{n-1}\xi_k e^k$, où les coefficients $\xi_k$ sont des nombres réels.

Analogue à la norme dans les complexes définie par la racine du déterminant de la représentation matricielle, on a aussi une pseudo-norme $\norm \xi$. Lorsque $n$ est plus grand que 2 il ne s'agit pas d'une norme dans le sens usuelle car elle ne respecte pas l'inégalité du triangle et elle peut prendre une valeur nulle ou négative, mais elle préserve la propriété multiplicative $\norm {uv} = \norm u \norm v$. Pour un nombre $\xi = \sum_{k=0}^{n-1}{\xi_k e^k}$, elle est définie par la racine $n$-ième du déterminant de la matrice $n \times n$,  $M(\xi) = \sum_{k=0}^{n-1}{\xi_k J^k}$, où $J$ est une matrice $n \times n$ telles que $J^n = -I$.

$$
J = \begin{pmatrix}
     0 &     1 &      0 &  \dots &      0 \\
     0 &      0 &     1 &  \dots &      0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
     0 &      0 &      0 &  \dots &     1 \\
    -1 &      0 &      0 &  \dots &      0
\end{pmatrix}
$$

et

$$
M(\xi) = \begin{pmatrix}
 \xi_0 & \xi_1 & \dots &  \xi_{n-2} & \xi_{n-1} \\
-\xi_{n-1} & \xi_0 & \dots &  \xi_{n-3} & \xi_{n-2} \\
-\xi_{n-2} & -\xi_{n-1} & \dots & \xi_{n-4} & \xi_{n-3} \\
 \vdots & \vdots & \ddots & \vdots & \vdots \\
-\xi_1 & -\xi_2 & \dots & -\xi_{n-1} & \xi_0
\end{pmatrix}
$$

Les composantes de cette matrice sont $\DeclareMathOperator{sgnplus}{sgn_{+}} (M(\xi))_{i,j} = \sgnplus(j-i) \xi_{j - i}$, où $\sgnplus(x) = -1$, si $x < 0$, $1$ sinon. Par convention, lorsque $j < i$, $j - i = n + j - i$. 

En utilisant la [formule du déterminant d'une matrice carrée de Leibniz](https://fr.wikipedia.org/wiki/Formule_de_Leibniz):

$$
\norm \xi = \sqrt[n]{\sum_{\sigma \in S_n}{ \epsilon(\sigma) \prod_{j = 0}^{n - 1}{ \sgnplus \left(\sigma(j)-j\right) \xi_{\sigma(j) - j}}}}
$$

Notons que si les coefficients de $\xi$ sont dans $\mathbb{Z}$, alors $\norm \xi^n$ est aussi dans $\mathbb{Z}$.

---

### Proposition

Si $\xi_0$ et $\xi_{n-1}$ sont différents de zéro et $\xi_i = 0$ pour tout $i$ plus grand que 0 et plus petit que $n-1$, alors: 

$$
\DeclareMathOperator{sgnstar}{sgn^*}
\norm \xi = \sqrt[n]{\xi_0^n + \xi_{n-1}^n}
$$

<details>
<summary>Démonstration</summary>

On procède au calcul du déterminant en appliquant la formule de récurrence par cofacteurs par rapport à la première rangée:

$$
\det {M(\xi)} = \sum_{i = 0}^{n-1}{(-1)^i(M(\xi))_{0,i}\det{M(\xi)_{0,i}}}
$$

On note que seul les éléments de la première et de la dernière colonnes sont non-nuls, et en appliquant la formule des composantes on obtient

$$
\begin{align*}
\det {M(\xi)} = \xi_{0}\det{M(\xi)_{0,0}} + (-1)^{n-1}\xi_{n-1}\det{M(\xi)_{0,n-1}}
\end{align*}
$$

La comatrice $M(\xi)_{0,0}$ est une matrice triangulaire inférieure dont la diagonale ne contient que des composantes $\xi_0$ et la comatrice $M(\xi)_{0,n-1}$ est une matrice diagonale supérieure dont la diagonale ne contient que des composantes $-\xi_{n-1}$. Ainsi on obtient

$$
\begin{align*}
\det {M(\xi)} = \xi_{0}\xi_0^{n-1} + (-1)^{n-1}\xi_{n-1}(-\xi_{n-1})^{n-1}
\end{align*}
$$

On réorganise les termes semblables et on obtient

$$
\begin{align*}
\det {M(\xi)} & = \xi_{0}^n + (-1)^{2(n-1)}\xi_{n-1}^n \\
\det {M(\xi)} & = \xi_{0}^n + \xi_{n-1}^n \\
\end{align*}
$$

Et en appliquant la définition de la pseudo-norme

$$
\begin{align*}
\norm \xi &= \sqrt[n]{\det{M(\xi)}} \\
\norm \xi &= \sqrt[n]{\xi_{0}^n + \xi_{n-1}^n}
\end{align*}
$$

□

</details>

---

### Proposition

Une puissance $n$ de $\xi$ est donnée par la formule

$$
\DeclareMathOperator{Part}{Part}
\DeclareMathOperator{Perm}{Perm}
\xi^n = \sum_{\substack{p_j \in \mathbb{N}, \\ n = \sum_{j=0}^{n-1} {p_j}}} {(-1)^{D(p)} \binom{n}{p_0, \dots, p_{n-1}} \left(\prod_{j=0}^{n-1} {\xi_j^{p_j}}\right) e^{R(p)}}
$$

où

$$
\begin{gather*}
E(p) = \sum_{j = 0}^{n - 1}{j p_j} \\
D(p) = \lfloor \frac{E(p)}{n} \rfloor \bmod 2\\
R(p) = E(p) \bmod n\\
\end{gather*}
$$

<details>
<summary>Démonstration</summary>

On applique le théorème du multinôme de Newton:

$$
\begin{align*}
\xi^n & = \sum_{\substack{p_j \in \mathbb{N}, \\ n = \sum_{j=0}^{n-1} {p_j}}} {\binom{n}{p_0, \dots, p_{n-1}} \prod_{j=0}^{n-1} {(\xi_j e^j)^{p_j}}}  \\
\xi^n & = \sum_{\substack{p_j \in \mathbb{N}, \\ n = \sum_{j=0}^{n-1} {p_j}}} {\binom{n}{p_0, \dots, p_{n-1}} \left(\prod_{j=0}^{n-1} {\xi_j^{p_j}}\right) \left(\prod_{j=0}^{n-1} {e^{j p_j}} \right)}  \\
\xi^n & = \sum_{\substack{p_j \in \mathbb{N}, \\ n = \sum_{j=0}^{n-1} {p_j}}} {\binom{n}{p_0, \dots, p_{n-1}} \left(\prod_{j=0}^{n-1} {\xi_j^{p_j}}\right) e^{E(p)}}  \\
\xi^n & = \sum_{\substack{p_j \in \mathbb{N}, \\ n = \sum_{j=0}^{n-1} {p_j}}} {\binom{n}{p_0, \dots, p_{n-1}} \left(\prod_{j=0}^{n-1} {\xi_j^{p_j}}\right) (-1)^{D(p)} e^{R(p)}}  \\
\xi^n & = \sum_{\substack{p_j \in \mathbb{N}, \\ n = \sum_{j=0}^{n-1} {p_j}}} {(-1)^{D(p)} \binom{n}{p_0, \dots, p_{n-1}} \left(\prod_{j=0}^{n-1} {\xi_j^{p_j}}\right) e^{R(p)}}  \\
\end{align*}
$$
</details>

---

### Corrolaire

Formule pour les composantes de $\xi^n$

$$
(\xi^n)_i = 
   \sum_{\substack{p_j \in \mathbb{N}, \\ n = \sum_{j=0}^{n-1} {p_j}, \\ R(p) = i}} {
		(-1)^{D(p)} \binom{n}{p_0, \dots, p_{n-1}} \prod_{j = 0}^{n-1}{\xi_{j}^{p_j}}
  }
$$

---

### Corrolaire

Cette formule met en évidence les termes à 1 et 2 variables des composantes de $\xi^n$

$$
(\xi^n)_i = \begin{cases} 
	\left( \sum_{j=0}^{n-1} {(-1)^j \xi_j^n} \right) + \text{R.D.T.} & \text{si } i = 0, \\
	\left( \sum_{j=0}^{n-1} {(-1)^{D(\overset{*}p(i,j))} \binom{n}{n-1} \xi_{j}^{n-1}\xi_{i + j}} \right) + \text{R.D.T.} & \text{sinon}.
\end{cases}
$$

où

$$
\overset{*}p(i, j)_k = \begin{cases}
n-1 & \text{si } k = j, \\
1 & \text{si } k = i + j, \\
0 & \text{sinon}.
\end{cases}
$$

---

## Les tuples hyper pythagoriciens

On peut généraliser la méthode au début de cet article pour trouver les triplets pythagoriciens dans un espace euclidien à une méthode pour trouver les $(n+1)$-uplets de nombres entiers solutions de l'équation diophantienne $\norm \xi^n = \tau^n$, où $\xi$ est un élément de $\MC_n$ à coefficients entiers et $\tau$ est un entier positif. Nous allons appeler ces tuples hyper pythagoriciens, pour les distinguer des tuples dans l'espace euclidien $\mathbb{R}^n$ qui seraient par exemple solution de l'équation diophantienne $x_0^2 + x_1^2 + \dots + x_{n-1}^2 = y^2$.

La motivation derrière cette idée est que s'il existe une solution à l'équation $x^n + y^n = z^n$, alors elle sera aussi solution de $\norm \xi^n = \tau^n$.

---

### Théorème

S'il existe $x$, $y$ et $z$ entiers positifs solution de $x^n + y^n = z^n$, alors ils seront aussi solution de $\norm \xi^n = \tau^n$.

<details>
<summary>Démonstration</summary>
□
</details>

---

Si on démontre qu'il n'y a aucune telle solution pour $\norm \xi^n = \tau^n$, alors nous prouvons le théorème de Fermat-Wiles.

Nous allons commencer par montrer le cas particulier $n = 3$ pour nous réchauffer. On cherche à démontrer qu'il n'y a pas de triplet entier $(x, y, z)$ tels que $x^3 + y^3 = z^3$. Pour ce faire nous allons nous servir des nombres multicomplexes d'ordre 3, $\MC_3$. Prennons un élément $\xi \in \MC_3$, où $\xi = \xi_0 + \xi_1 e + \xi_2 e^2$ et tous les $\xi_j \in \mathbb{Z}$. La norme de $\xi$ est $\norm \xi = \sqrt[3]{\xi_0^3 - \xi_1^3 + \xi_2^3 + 3\xi_0\xi_1\xi_2}$. Puisque la norme est multiplicative nous avons que la norme de $\xi^3$ est $\norm{\xi^3} = \xi_0^3 - \xi_1^3 + \xi_2^3 + 3\xi_0\xi_1\xi_2$. 

Développons $\xi^3$ en utilisant la [formule du multinôme de Newton](https://fr.wikipedia.org/wiki/Formule_du_multin%C3%B4me_de_Newton):

$$
\begin{align*}
\xi^3 = \xi_0^3 - \xi_1^3 + \xi_2^3
  - 6 \xi_0 \xi_1 \xi_2
  + 3 \left( 
      \xi_0^2\xi_1
    - \xi_1^2 \xi_2
    - \xi_0 \xi_2^2
    \right) e
  + 3 \left(
      \xi_0^2\xi_2 
    + \xi_0 \xi_1^2
    - \xi_1 \xi_2^2
    \right) e^2
\end{align*}
$$

---

<details>
<summary>Calculs</summary>
$$
\begin{align*}
\xi^3 & = (\xi_0 + \xi_1 e + \xi_2 e^2)^3 \\
& = \binom{3}{3}\left(\xi_0^3 + (\xi_1 e)^3 + (\xi_2 e^2)^3\right)
  + \binom{3}{2,1}\left(
      \xi_0^2(\xi_1 e) + \xi_0^2(\xi_2 e^2) 
    + (\xi_1 e)^2\xi_0 + (\xi_1 e)^2(\xi_2 e^2) 
    + (\xi_2 e^2)^2\xi_0 + (\xi_2 e^2)^2(\xi_1 e) \right)
  + \binom{3}{1,1,1}\left(\xi_0 (\xi_1 e) (\xi_2 e^2)\right) \\
& = \frac{3!}{3!}\left(\xi_0^3 + \xi_1^3 e^3 + \xi_2^3 e^6 \right)
  + \frac{3!}{2! 1!}\left(
      \xi_0^2\xi_1 e + \xi_0^2\xi_2 e^2 
    + \xi_0 \xi_1^2 e^2 + \xi_1^2 \xi_2 e^4 
    + \xi_0 \xi_2^2 e^4 + \xi_1 \xi_2^2 e^5 \right)
  + \frac{3!}{1! 1! 1!}\left(\xi_0 \xi_1 \xi_2 e^3 \right) \\
& = \xi_0^3 - \xi_1^3 + \xi_2^3
  + 3 \left(
      \xi_0^2\xi_1 e + \xi_0^2\xi_2 e^2 
    + \xi_0 \xi_1^2 e^2 - \xi_1^2 \xi_2 e 
    - \xi_0 \xi_2^2 e - \xi_1 \xi_2^2 e^2 \right)
  - 6 \left(\xi_0 \xi_1 \xi_2 \right) \\
& = \xi_0^3 - \xi_1^3 + \xi_2^3
  - 6 \xi_0 \xi_1 \xi_2
  + 3 \xi_0^2\xi_1 e 
  - 3 \xi_1^2 \xi_2 e 
  - 3 \xi_0 \xi_2^2 e 
  + 3 \xi_0^2\xi_2 e^2 
  + 3 \xi_0 \xi_1^2 e^2 
  - 3 \xi_1 \xi_2^2 e^2 
  \\
& = \xi_0^3 - \xi_1^3 + \xi_2^3
  - 6 \xi_0 \xi_1 \xi_2
  + 3 \left( 
      \xi_0^2\xi_1
    - \xi_1^2 \xi_2
    - \xi_0 \xi_2
    \right) e
  + 3 \left(
      \xi_0^2\xi_2 
    + \xi_0 \xi_1^2
    - \xi_2 \xi_1
    \right) e^2
\end{align*}
$$
</details>

---

Posons

$$
\begin{align*}
\beta_0 & = \xi_0^3 - \xi_1^3 + \xi_2^3
  - 6 \xi_0 \xi_1 \xi_2\\
\beta_1 & = 3 \left( 
      \xi_0^2\xi_1
    - \xi_1^2 \xi_2
    - \xi_0 \xi_2^2
    \right) \\
\beta_2 & = 3 \left(
      \xi_0^2\xi_2 
    + \xi_0 \xi_1^2
    - \xi_1 \xi_2^2
    \right)\\
\end{align*}
$$

Ainsi $\xi^3 = \beta_0 + \beta_1 e + \beta_2 e^2$ est un nouveau nombre multicomplexe membre de $\MC_3$. Appelons-le $\xi'$. En subsituant les coefficients $\beta_j$ dans la formule de la norme, on obtient $\norm {\xi'} = \sqrt[3]{\beta_0^3 - \beta_1^3 + \beta_2^3 + 3\beta_0\beta_1\beta_2}$. Rappelons-nous que nous avons déterminé auparavant que $\norm {\xi^3} = \xi_0^3 - \xi_1^3 + \xi_2^3 + 3\xi_0\xi_1\xi_2$. Posons $\tau = \norm {\xi^3}$ et observons que c'est un nombre entier. Ainsi, en élevant $\norm{\xi^3}$ au cube, on obtient

$$
\begin{gather*}
\norm{\xi'}^3 = \norm{\xi^3}^3 \\
\left( \sqrt[3]{\beta_0^3 - \beta_1^3 + \beta_2^3 + 3\beta_0\beta_1\beta_2} \right)^3 = \tau^3 \\
\beta_0^3 - \beta_1^3 + \beta_2^3 + 3\beta_0\beta_1\beta_2 = \tau^3
\end{gather*}
$$

où, tous les $\beta_j$ sont entiers et $\tau$ est entier. Donc $(\beta_0, \beta_1, \beta_3, \tau)$ est un quadruplet hyper pythagoricien car $\norm {\xi'}^3 = \tau^3$.

De même que pour les triplets pythagoriciens, on se demande s'il existe d'autres quadruplets hyper pythagoriciens que l'on ne trouve pas par cette méthode et nous allons voir que la réponse est négative.

Divisons par $\tau$ de chaque côté de l'équation:

$$
\left(\frac{\beta_0}{\tau}\right)^3 - \left(\frac{\beta_1}{\tau}\right)^3 + \left(\frac{\beta_2}{\tau}\right)^3 + 3\left(\frac{\beta_0}{\tau}\right)\left(\frac{\beta_1}{\tau}\right)\left(\frac{\beta_2}{\tau}\right) = 1 
$$

Ce qui donne pour les termes $\frac{\beta_i}{\tau}$:

$$
\begin{align*}
\frac{\beta_0}{\tau} & = \frac{\xi_0^3 - \xi_1^3 + \xi_2^3
  - 6 \xi_0 \xi_1 \xi_2}{\xi_0^3-\xi_1^3+\xi_2^3+3\xi_0\xi_1\xi_2} \\
\frac{\beta_1}{\tau} & = \frac{3 \left( 
      \xi_0^2\xi_1
    - \xi_1^2 \xi_2
    - \xi_0 \xi_2^2
    \right)}{\xi_0^3-\xi_1^3+\xi_2^3+3\xi_0\xi_1\xi_2} \\
\frac{\beta_2}{\tau} & = \frac{3 \left(
      \xi_0^2\xi_2 
    + \xi_0 \xi_1^2
    - \xi_1 \xi_2^2
    \right)}{\xi_0^3-\xi_1^3+\xi_2^3+3\xi_0\xi_1\xi_2} \\
\end{align*}
$$

Qui est équivalent, en multipliant les numérateurs et dénominateurs par $\frac{1}{\xi_0^3}$:

$$
\begin{align*}
\frac{\beta_0}{\tau} & = \frac{1 - \frac{\xi_1}{\xi_0}^3 + \frac{\xi_2}{\xi_0}^3
  - 6 \frac{\xi_1}{\xi_0} \frac{\xi_2}{\xi_0}}{1-\frac{\xi_1}{\xi_0}^3+\frac{\xi_2}{\xi_0}^3+3\frac{\xi_1}{\xi_0}\frac{\xi_2}{\xi_0}} \\
\frac{\beta_1}{\tau} & = \frac{3 \left( 
      \frac{\xi_1}{\xi_0}
    - \frac{\xi_1}{\xi_0}^2 \frac{\xi_2}{\xi_0}
    - \frac{\xi_2}{\xi_0}^2
    \right)}{1-\frac{\xi_1}{\xi_0}^3+\frac{\xi_2}{\xi_0}^3+3\frac{\xi_1}{\xi_0}\frac{\xi_2}{\xi_0}} \\
\frac{\beta_2}{\tau} & = \frac{3 \left(
      \frac{\xi_2}{\xi_0} 
    + \frac{\xi_1}{\xi_0}^2
    - \frac{\xi_1}{\xi_0} \frac{\xi_2}{\xi_0}^2
    \right)}{1-\frac{\xi_1}{\xi_0}^3+\frac{\xi_2}{\xi_0}^3+3\frac{\xi_1}{\xi_0}\frac{\xi_2}{\xi_0}} \\
\end{align*}
$$

Et finalement substituons $t_i = \frac{\xi_i}{\xi_0}$ pout $i$ plus grand que 0 et $x_i = \frac{\beta_i}{\tau}$:

$$
\begin{align*}
x_0 & = \frac{1-t_1^3+t_2^3-6t_1t_2}{1-t_1^3+t_2^3+3t_1t_2} \\
x_1 & = \frac{3\left(t_1-t_1^2t_2-t_2^2\right)}{1-t_1^3+t_2^3+3t_1t_2} \\
x_2 & = \frac{3\left(t_2+t_1^2-t_1t_2^2\right)}{1-t_1^3+t_2^3+3t_1t_2} \\
\end{align*}
$$

Dans l'autre sens à partir du point rationnel $x = (1,0,0)$ on peut projeter une droite qui intersectionne l'hypersurface en un point rationnel.

$$
\begin{cases}
x_1 = r_1(x_0 - 1) \\
x_2 = r_2(x_0 - 1) \\
\end{cases}
$$

Donc

$$
\begin{cases}
r_1 = \frac{x_1}{x_0-1} \\
r_2 = \frac{x_2}{x_0-1} \\
\end{cases}
$$

On fait la vérification

$$
\begin{align*}
x_0-1 & = \frac{1-t_1^3+t_2^3-6t_1t_2}{1-t_1^3+t_2^3+3t_1t_2}-1 \\
& = \frac{1-t_1^3+t_2^3-6t_1t_2-1+t_1^3-t_2^3-3t_1t_2}{1-t_1^3+t_2^3+3t_1t_2} \\
& = \frac{-9t_1t_2}{1-t_1^3+t_2^3+3t_1t_2} \\
\end{align*}
$$

Maintenant on divise $x_1$ par $x_0-1$

$$
\begin{align*}
\frac{x_1}{x_0-1} & = \frac{3\left(t_1-t_1^2t_2-t_2^2\right)}{-9t_1t_2} \\
r_1 & = \frac{3\left(t_1-t_1^2t_2-t_2^2\right)}{-9t_1t_2} \\
r_1 & = \frac{3\left(-t_1+t_1^2t_2+t_2^2\right)}{9t_1t_2} \\
r_1 & = \frac{3(-t_1)}{9t_1t_2} + \frac{3t_1^2t_2}{9t_1t_2} + \frac{3t_2^2}{9t_1t_2} \\
3t_1t_2r_1 & = -t_1 + t_1^2t_2 + t_2^2 \\
0 & = -3t_1t_2r_1 - t_1 + t_1^2t_2 + t_2^2 \\
0 & = t_1^2t_2 + t_1(-3t_2r_1 - 1) + t_2^2 \\
r_2 & = \frac{3\left(t_2+t_1^2-t_1t_2^2\right)}{-9t_1t_2} \\
\end{align*}
$$

On factorise l'expression quadratique en $t_1$.

$$
\begin{align*}
0 & = (t_1 - \frac{3t_2r_1+1+\sqrt{(3t_2r_1+1)^2-4t_2t_2^2}}{2t_2})(t_1 - \frac{3t_2r_1+1+\sqrt{(3t_2r_1+1)^2-4t_2t_2^2}}{2t_2}) \\
\end{align*}
$$


$$
\begin{cases}
x_1 = r_1(x_0 - 1) \\
x_2 = r_2(x_0 - 1) \\
x_0^3 - x_1^3 + x_2^n + 3x_0x_1x_2 = 1 \\
\end{cases}
$$

$$
\begin{align*}
x_0^3 + (-r_1^3+r_2^3)(x_0 - 1)^3 + 3r_1r_2x_0(x_0-1)^2 & = 1 \\
x_0^3 + (-r_1^3+r_2^3)(x_0 - 1)^3 + 3r_1r_2x_0(x_0-1)^2 -1 & = 0 \\
(x_0-1)(x_0^2+x_0+1+(-r_1^3+r_2^3)(x_0-1)^2+3r_1r_2x_0(x_0-1)) & = 0 \\
x_0^2+x_0+1+(-r_1^3+r_2^3)(x_0-1)^2+3r_1r_2x_0(x_0-1) & = 0 \\
x_0^2+x_0+1+(-r_1^3+r_2^3)(x_0^2-2x_0+1)+3r_1r_2x_0^2-3r_1r_2x_0 & = 0 \\
x_0^2+x_0+1+(-r_1^3+r_2^3)x_0^2-(-r_1^3+r_2^3)2x_0-r_1^3+r_2^3+3r_1r_2x_0^2-3r_1r_2x_0 & = 0 \\
x_0^2+(-r_1^3+r_2^3)x_0^2+3r_1r_2x_0^2+x_0-(-r_1^3+r_2^3)2x_0-3r_1r_2x_0+1-r_1^3+r_2^3 & = 0 \\
x_0^2(1-r_1^3+r_2^3+3r_1r_2)+x_0(1+2r_1^3-2r_2^3-3r_1r_2)+1-r_1^3+r_2^3 & = 0 \\
\end{align*}
$$

## Cas général en vrac

De manière analogue, la méthode précédente peut être appliquée pour trouver des $(n+1)$-uplets de nombres qui satisfont l'équation diophantienne $\norm{\xi}^n = \tau^n$, pour $\xi \in \MC_n$ à coefficients entiers et $\tau$ un entier positif. Nous allons maintenant démontrer que toutes les solutions diophantiennes de cette équation peuvent être trouvées de cette manière.

On prend d'abord un élément $\xi \in \MC_n$ à coefficients entiers:

$$
\mathbb{Z}^n \xrightarrow{(\xi_0, \xi_1, \dots, \xi_{n-1}) \mapsto \sum_{j=0}^{n-1}\xi_j e^j} \MC_n 
$$

Ensuite on élève $\xi$ à la puissance $n$:

$$
 \MC_n\xrightarrow{\xi \mapsto \xi^n} \MC_n
$$

À cette étape, on a un nombre $\xi' = \xi^n$, $\xi' \in \MC_n$ et $\xi' = \beta_0 + \beta_1e + \dots + \beta_{n-1}e^{n-1}$, où les termes $\beta_j$ sont des fonctions $\mathbb Z ^n \rightarrow \mathbb Z$, $\beta_j(\xi_0, \xi_1, \dots, \xi_{n-1})$ dépendantes des composantes de $\xi$. Nous avons aussi une solution à l'équation diophantienne $\norm {\xi'}^n = \tau^n$ en posant $\tau = \norm{\xi^n}$.

Les fonctions $\beta_j$ sont homogènes car elles résultent de l'élévation à la puissance $n$ de $\xi$. Alors en multipliant $\xi^n$ par $\frac{1}{\xi_0^n}$:

$$
 \MC_n \xrightarrow{
   \sum_{j=0}^{n-1}{\beta_j(\xi_0, \xi_1, \dots, \xi_{n-1})e^j}
   \mapsto
   \sum_{j=0}^{n-1}{\beta_j(1, \frac{\xi_1}{\xi_0}, \dots, \frac{\xi_{n-1}}{\xi_0})e^j}
 } \MC_n
$$

$$
 \MC_n \xrightarrow{ 
\sum_{j=0}^{n-1}{\beta_j(1, \frac{\xi_1}{\xi_0}, \dots, \frac{\xi_{n-1}}{\xi_0})e^j}
\mapsto (\frac{\xi_1}{\xi_0}, \dots, \frac{\xi_{n-1}}{\xi_0})} \mathbb Q^{n-1}
$$

On pose $t_j = \frac{\xi_j}{\xi_0}$ pour $j > 0$ et ça nous donne une paramétrisation des points rationnels.

Maintenant on doit montrer dans l'autre sens en partant du point rationnel $(1, 0, \dots, 0)$ dans $\mathbb{Q}^{n-1}$ et en projetant les droites de pente $t_1$, $t_2$, $\dots$, $t_{n-1}$ sur un point quelconque de l'hypersurface définie par $\{\xi \in \MC_n \colon \norm \xi^n = 1\}$.

Soit $P(x) = x_0^n + x_1^n + (-1)^{a_2}x_2^n + \dots + (-1)^{a_{n-1}}x_{n-1}^n + Q(x)$ le polynôme associé à $\norm \xi^n$, On doit résoudre le système suivant:

$$
\begin{cases}
x_1 = t_1(x_0 - 1) \\
\dots \\
x_{n-1} = t_{n-1}(x_0 - 1) \\
x_0^n + x_1^n + (-1)^{a_2}x_2^n + \dots + (-1)^{a_{n-1}}x_{n-1}^n + Q(x) = 1 \\
\end{cases}
$$

On voit que $x_0 = 1$ est une solution de $P(x)=1$ donc $x_0-1$ divise $P(x)-1$. Pour les termes dans $Q(x)$ ça n'est pas évident, mais le théorème du multinôme de Newton nous indique que tous les termes dans $Q(x)$ on au moins un facteur $x_j = t_j(x_0-1)$. Pour la suite, je ne sais pas trop comment nous allons procéder pour l'instant, mais je pense que nous devrons procéder par induction.
