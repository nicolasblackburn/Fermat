# Le dernier théorème de Fermat

## Motivation

Dans cet article, je vais présenter une nouvelle approche du théorème de Fermat-Wiles qui utilise une généralisation des nombres complexes introduite par Norbert Fleury en 1993, les nombres multicomplexes.

Pour ce faire, je vais généraliser la méthode de recherche de triplets pythagoriciens aux nombres multicomplexes. Nous allons ensuite montrer que l'équation $x^n + y^n = z^n$ ne peut être satisfaite pour $n = 3$, $n = 4$ et montrer comment la technique peut être appliquée pour n'importe quelle valeur de $n > 2$ arbitraire. 

Mon souhait est que cet article soit accessible à un public non-expert intéressé par les mathématiques et ayant une connaissance de base des nombres complexes et de l'algèbre linéaire.

## Triplets pythagoriciens et points rationnels sur le cercle unitaire

Nous allons commencer par trouver les solutions à l'équation diophantienne $x^2 + y^2 = z^2$. Il s'agit du seul cas où il existe des solutions non triviales à l'équation $x^n + y^n = z^n$. Les triplets $(x, y, z)$ solution de l'équation pour $n = 2$ portent le nom de triplets pythagoriciens. La chaîne 3Blue1Brown sur You Tube possède [une très belle vidéo sur ces nombres](https://www.youtube.com/watch?v=QJYmyhnaaek) et comment les trouver. C'est d'ailleurs ce qui a inspiré cet article.

Nous allons tenter ici de réexpliquer le contenu de cette vidéo à notre manière, et essayer d'expliquer pourquoi la méthode de passage par les nombres complexes marche.

Une méthode systématique pour trouver des solutions de notre équation diophantienne consiste à prendre un couple de nombres entiers relatifs premiers entre eux $(a, b) \in \mathbb{Z}^2$ et à les envoyer dans les nombres complexes par la transformation $(a,b) \mapsto a + bi$. Posons $\xi = a + bi$. La norme de $\xi$ est $\newcommand{\norm}[1]{\lVert #1 \rVert}
 \norm \xi = \sqrt{a^2 + b^2}$. En élevant $\xi$ au carré, on obtient l'assurance que la norme de $\xi^2$ est entière, égale à $a^2 + b^2$. Cela fonctionne car la norme dans les complexes est multiplicative, c'est à dire que pour deux nombres complexes $u$ et $v$, $\norm {uv} = \norm u \norm v$. Nous allons voir qu'il y a un lien avec les déterminants. 

Voyons comment cela fonctionne. On peut représenter $i$ par la matrice 

$$
J = \begin{pmatrix}
0 & -1 \\
1 &  0
\end{pmatrix}
$$

En remplaçant $i$ par $J$ et en multipliant le terme $a$ par la matrice identitée $I$ dans $a+bi$ on obtient une matrice $X = aI + bJ$. 

$$
X = \begin{pmatrix}
a & -b \\
b & a
\end{pmatrix}
$$

Cette nouvelle représentation des nombres complexes se comporte en tous points identiquement à la définition usuelle des nombres complexes si l'on remplace l'addition de complexes par l'addition matricielle et la multiplication de complexes par la multiplication matricielle. Il s'agit en fait d'un isomorphisme de corps. 

Le déterminant de cette matrice $X$ est exactement le carré de la norme, $\det X = \norm \xi ^2 = a^2 + b^2$. Ainsi cela met en lumière pourquoi $\norm{\xi^2} = \norm \xi ^2$, parce que le carré de la norme dans les complexes correspond au déterminant dans la représentation matricielle et le déterminant est une application multiplicative.

Revenons à notre solution de l'équation diophantienne. Nous avons déterminé que la norme de $\xi^2$ est $\norm{\xi^2} = a^2 + b^2$. Puisque $\xi^2 = (a^2 - b^2) + 2abi$, on obtient la solution suivante à l'équation $x^2 + y^2 = z^2$:

$$
\begin{align*}
x = & a^2 - b^2 \\
y = & 2ab \\
z = & a^2 + b^2
\end{align*}
$$ 

Nous n'avons pas complèment terminé car comment avoir l'assurance que nous pouvons trouver toutes les solutions avec cette méthode? En fait, nous ne les trouvons pas toutes, mais tout triplet pythagoricien est un Pour démontrer que c'est bien le cas, nous allons prendre ce point $\xi^2$ dans le plan complexe et le projeter sur le cercle unitaire en divisant ses coordonnées par sa norme. Ainsi, le point rationnel $\left( \frac{a^2-b^2}{a^2+b^2}, \frac{2ab}{a^2+b^2} \right)$ est sur le cercle unitaire car $\left( \frac{a^2-b^2}{a^2+b^2} \right)^2 + \left( \frac{2ab}{a^2+b^2} \right)^2 = 1$.

Maintenant considérons la droite qui le traverse et passe par l'origine du plan. La pente de cette droite est $\frac{2ab}{a^2-b^2}$. En multipliant le numérateur et le dénominateur par $\frac{1}{a^2}$, on obtient une autre représentation de ce nombre rationnel $\frac{2\frac{b}{a}}{1 - \left(\frac{b}{a}\right)^2}$. Ainsi la boucle est bouclée avec une bijection dans $\mathbb{Z}^2$, définie par l'application

$$
\frac{2\frac{b}{a}}{1 - \left(\frac{b}{a}\right)^2}
\mapsto
(a, b)
$$

Note: l'application dans $\mathbb{Q}$ n'est pas exactement une bijection car elle occulte l'information du quadrant dans lequel le couple d'entiers initial se trouvait. En effet, elle perd la distiction des signes du numérateur et du dénominateur. Dans le cas des triplets pythagoriciens, ça n'est pas vraiment un problème car les quadrants du cercle unitaire sont symétriques. Dans les cas plus généraux que nous allons étudier, nous ne pourrons pas nous appuyer sur cette propriété utile. Il nous faudra donc que l'application envoie dans $\newcommand{Sgn}{\{+,-\}}\newcommand{QxSgn}[1]{\mathbb{Q}^{#1-1} \times \Sgn^#1} \QxSgn{n}$ pour garder la trace des signes des composantes initiales de $\mathbb{Z}^n$.

## L'importance de la bijection

Pour le mathématicien amateur, il peut ne pas être évident de comprendre l'importance de la bijection et pourquoi elle démontre que notre méthode précédente pour trouver les solutions de $x^2 + y^2 = z^2$ est exhaustive. C'est ce que nous allons tenter d'expliquer ici.

La définition d'une application bijective est une application qui à chaque élément de l'ensemble d'arrivé associe un unique élément de l'ensemble de départ. Puisque cette association est unique, on peut déterminer sans ambiguité l'élément de l'ensemble de départ à partir d'un élément de l'ensemble d'arrivée, l'application est inversible. On sait aussi qu'il y a exactement le même nombre d'éléments dans l'ensemble de départ et l'ensemble d'arrivée.

C'est pour cette raison que la bijection précédente nous assure que toutes les solutions sont trouvées avec la méthode présentée. Si cela n'était pas le cas, un des éléments de l'ensemble d'arrivée des points rationnels sur le cercle unitaire pourrait ne pas être associé à un point $(a, b)$ de l'ensemble de départ, ou deux couples différents de l'ensemble d'arrivée pourraient ramener sur le même point rationnel. Or, comme nous venons de le voir, tous les couples $(a, b)$ dans $\mathbb{N}^2$ correspondent à un triplet pythagoricien $(a^2 - b^2, 2ab, a^2 + b^2)$, qui lui-même correspond à un point rationnel $\left( \frac{a^2-b^2}{a^2+b^2}, \frac{2ab}{a^2+b^2} \right)$ sur le cercle unitaire et qui retourne finalement à la forme $(a, b)$.

## Les nombres multicomplexes

Nous allons d'abord faire un petit rappel de la définition et des propriétés des nombres multicomplexes. Pour plus d'information nous invitons le lecteur à se référer à [l'article original de Norbert Fleury](http://www.sciencedirect.com/science/article/pii/S0022247X83714101/pdf?md5=99c473b97d70da5a165a55850a33d7ea&pid=1-s2.0-S0022247X83714101-main.pdf).

Pour définir les nombres multicomplexes $\newcommand{MC}{\mathcal{M}\mathbb{C}} \MC_n$, nous allons déterminer un nombre imaginaire $e$ tel que $e^n = -1$. Un nombre multicomplexe $\xi \in \MC_n$ est défini comme une combinaison linéaire $\sum_{k=0}^{n-1}\xi_k e^k$, où les composantes $\xi_k$ sont des nombres réels.

Analogue à la norme dans les complexes définie par la racine du déterminant de la représentation matricielle, on a aussi une pseudo-norme $\norm \xi$. Il ne s'agit pas d'une norme dans le sens usuelle car elle ne respecte pas l'inégalité du triangle et elle peut prendre une valeur nulle ou négative, mais elle préserve la propriété multiplicative $\norm {uv} = \norm u \norm v$. Pour un nombre $\xi = \sum_{k=0}^{n-1}{\xi_k e^k}$, elle est définie par la racine $n$-ième du déterminant de la matrice $n \times n$,  $X = \sum_{k=0}^{n-1}{\xi_k J^k}$, où $J$ est une matrice $n \times n$ telles que $J^n = -I$.

$$
J = \begin{pmatrix}
     0 &     -1 &      0 &  \dots &      0 \\
     0 &      0 &     -1 &  \dots &      0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
     0 &      0 &      0 &  \dots &     -1 \\
     1 &      0 &      0 &  \dots &      0
\end{pmatrix}
$$

et

$$
X = \begin{pmatrix}
 \xi_0 & -\xi_1 & -\xi_2 & \dots & -\xi_{n-1} \\
 \xi_{n-1} & \xi_0 & -\xi_1 & \dots & -\xi_{n-2} \\
 \vdots & \vdots & \vdots & \ddots & \vdots \\
 \xi_2 & \xi_3 & \xi_4 & \dots & -\xi_1 \\
 \xi_1 & \xi_2 & \xi_3 & \dots & \xi_0
\end{pmatrix}
$$

Les composantes de cette matrice sont $\DeclareMathOperator{sgn}{sgn_{+}} X_{i,j} = \sgn(i - j) \xi_{j - i}$, où $\sgn(x) = -1$, si $x < 0$, $1$ sinon. Par convention, lorsque $j < i$, $j - i = n + j - i$. En utilisant la [formule du déterminant d'une matrice carrée de Leibniz](https://fr.wikipedia.org/wiki/Formule_de_Leibniz)

$$
\begin{align*}
\norm \xi & = \sqrt[n]{\sum_{\sigma \in S_n}{ \epsilon(\sigma) \prod_{j = 0}^{n - 1}{ \sgn \left(j - \sigma(j) \right) \xi_{\sigma(j) - j}}}}
\end{align*}
$$

$$
\norm \xi = \sqrt[n]{\left(\sum{\xi_j^n}\right) + \text{R.D.T.}}
$$

Puissance $n$ de $\xi$:

$$
\DeclareMathOperator{Part}{Part}
\DeclareMathOperator{Perm}{Perm}
\begin{align*}
\xi^n & = \sum_{p \in \Part(n)} {
  \sum_{\sigma \in \Perm(n, \ell(p))} {
    \binom{n}{p} \prod_{j = 0}^{\ell(p) - 1}{\left(\xi_{\sigma(j)} e^{\sigma(j)} \right)^{p_j}}
  }
} \\
\xi^n & = \sum_{p \in \Part(n)} {
  \sum_{\sigma \in \Perm(n, \ell(p))} {
    \binom{n}{p} \prod_{j = 0}^{\ell(p) - 1}{\xi_{\sigma(j)}^{p_j} e^{\sigma(j) p_j}}
  }
} \\
\xi^n & = \sum_{p \in \Part(n)} {
  \sum_{\sigma \in \Perm(n, \ell(p))} {
    \binom{n}{p} \left( \prod_{j = 0}^{\ell(p) - 1}{\xi_{\sigma(j)}^{p_j}}\right)\left( \prod_{j = 0}^{\ell(p) - 1} {e^{\sigma(j) p_j}}\right)
  }
} \\
\xi^n & = \sum_{p \in \Part(n)} {
  \sum_{\sigma \in \Perm(n, \ell(p))} {
    \binom{n}{p} \left( \prod_{j = 0}^{\ell(p) - 1}{\xi_{\sigma(j)}^{p_j}}\right) e^{E(p, \sigma)}
  }
} \\
\xi^n & = \sum_{p \in \Part(n)} {
  \sum_{\sigma \in \Perm(n, \ell(p))} {
    (-1)^{\lfloor \frac{E(p, \sigma)}{2} \rfloor} \binom{n}{p} \left( \prod_{j = 0}^{\ell(p) - 1}{\xi_{\sigma(j)}^{p_j}}\right) e^{E(p, \sigma) \bmod n}
  }
} \\
\end{align*}
$$

où

$$
E(p, \sigma) = \sum_{j = 0}^{\ell(p) - 1}{\sigma(j)p_j}
$$

Composantes de $\xi^n$:

$$
(\xi^n)_i = \sum_{p \in \Part(n)} {
   \sum_{\sigma \in \Perm(n, \ell(p))}^{E(p, \sigma) \equiv i \pmod n} {
		(-1)^{\lfloor \frac{E(p, \sigma)}{2} \rfloor} \binom{n}{p} \prod_{j = 0}^{\ell(p) - 1}{\xi_{\sigma(j)}^{p_j}}
  }
}
$$

$$
\begin{align*}
(\xi^n)_0 & = \left( \sum {\xi_j^n} \right) + \text{R.D.T.} \\
(\xi^n)_i & = \left( \sum {\xi_{i + j}^{n-1}\xi_{i + j + 1}} \right) + \text{R.D.T.}
\end{align*}
$$


## Les tuples hyper pythagoriciens

On peut généraliser la méthode au début de cet article pour trouver les triplets pythagoriciens dans un espace euclidien à une méthode pour trouver les $(n+1)$-uplets de nombres entiers solutions de l'équation diophantienne $\norm \xi^n = \tau^n$, où $\xi$ est un élément de $\MC_n$ à coefficients entiers et $\tau$ est un entier positif. Nous allons appeler ces tuples hyper pythagoriciens, pour les distinguer des tuples dans l'espace euclidien $\mathbb{R}^n$ qui seraient par exemple solution de l'équation diophantienne $x_0^2 + x_1^2 + \dots + x_{n-1}^2 = y^2$.

La motivation derrière cette idée est que s'il existe une solution à l'équation $x^n + y^n = z^n$, alors elle sera aussi solution de $\norm \xi^n = \tau^n$ (donner la démonstration). Si on démontre qu'il n'y a aucune telle solution pour $\norm \xi^n = \tau^n$, alors nous prouvons le théorème de Fermat-Wiles.

Nous allons commencer par montrer le cas particulier $n = 3$ pour nous réchauffer. On cherche à démontrer qu'il n'y a pas de triplet entier $(x, y, z)$ tels que $x^3 + y^3 = z^3$. Pour ce faire nous allons nous servir des nombres multicomplexes d'ordre 3, $\MC_3$. Prennons un élément $\xi \in \MC_3$, où $\xi = \xi_0 + \xi_1 e + \xi_2 e^2$ et tous les $\xi_j \in \mathbb{Z}$. La norme de $\xi$ est $\norm \xi = \sqrt[3]{\xi_0^3 - \xi_1^3 + \xi_2^3 + 3\xi_0\xi_1\xi_2}$. Puisque la norme est multiplicative nous avons que la norme de $\xi^3$ est $\norm{\xi^3} = \xi_0^3 - \xi_1^3 + \xi_2^3 + 3\xi_0\xi_1\xi_2$. 

Développons $\xi^3$ en utilisant la [formule du multinôme de Newton](https://fr.wikipedia.org/wiki/Formule_du_multin%C3%B4me_de_Newton):

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
    - \xi_2^2 \xi_1
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

$$
\mathbb Q ^{n-1} \xrightarrow{(\frac{\xi_1}{\xi_0}, \dots, \frac{\xi_{n-1}}{\xi_0}) \mapsto (\xi_0, \xi_1, \dots, \xi_{n-1})} \mathbb{Z}^n
$$

Ceci est en fait une bijection entre $\mathbb{Z}^n$ et les points rationnels de la surface unitaire de $\MC_n$. Il est impossible de satisfaire que deux termes $b_j$ et $b_k$ soient strictement positifs, et tous les autres termes égaux à $0$ (à démontrer). Ainsi, on exclu la possibilité de l'existence d'un nombre $\xi \in \MC_n$ où $\norm \xi ^n = y^n + z^n$ et cela conclu la preuve.
