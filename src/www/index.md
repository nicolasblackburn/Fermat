# Le dernier théorème de Fermat

## Motivation

En 1995, la publication de la preuve d'Andrew Wiles du dernier théorème de Fermat a surpris le monde mathématique avec fulgurance. Elle se basait sur la théorie des courbes elliptiques et le travail acharné de nombreux mathématiciens avant lui. Il s'agit d'un document de 108 pages qui utilise des outils de la théorie des nombres sophistiqués.

Dans cet article, je vais tenter de démontrer le théorème de Fermat par une preuve plus facile d'approche, en utilisant une généralisation des nombres complexes introduite par Norbert Fleury en 1993, les nombres multicomplexes.

Pour ce faire, je vais étendre la théorie de Fleury, en introduisant les nombres multicomplexes hyperboliques, puis je vais généraliser la méthode de recherche des points rationnels sur le cercle unitaire aux surfaces unitaires associées aux nombres multicomplexes. Finalement, nous allons voir que l'équation $a^n + b^n = c^n$ ne peut être satisfaite.

Mon souhait est que cette preuve soit accessible à un public non-expert intéressé par les mathématiques et ayant une connaissance de base des nombres complexes et de l'algèbre linéaire. Il est fort possible que je me sois trompé, même extrêmement probable, car après tout je ne suis qu'un amateur. Dans tous les cas, au minimum, ce document peut servir d'introduction aux nombres multicomplexes et inspirer d'autres amateurs et non-amateurs.

## Introduction aux points rationnels sur le cercle unitaire

Les points rationnels sur le cercle unitaire $x^2 + y^2 = 1$ permettent de trouver les solutions à l'équation diophantine $u^2 + v^2 = w^2$. En effet si $x = \frac{a}{b}$ et $y = \frac{c}{d}$, alors $(ad)^2 + (bc)^2 = (bd)^2$.

Une méthode systématique pour trouver des solutions à l'équation diophantine $u^2 + v^2 = w^2$ consiste à prendre un couple de nombres entiers strictement positifs $(a, b) \in \mathbb{N}^2$ et à les envoyer dans les nombres complexes par la transformation $(a,b) \mapsto a + bi$. Posons $x = a + bi$. La norme de $x$ est $\sqrt{a^2 + b^2}$. En élevant $x$ au carré, on obtient l'assurance que la norme de $x^2$ est entière, égale à $a^2 + b^2$. Celà fonctionne car la norme de $x$ élevée au carré est en fait son déterminant. 

Voyons comment celà fonctionne. On peut représenter $i$ par la matrice 

$$
J = \begin{pmatrix}
0 & -1 \\
1 &  0 \\
\end{pmatrix}
$$

En remplaçant $i$ par $J$ et en multipliant le terme $a$ par la matrice identitée $I$ dans $a+bi$ on obtient une matrice $X = aI + bJ$. Le déterminant de cette matrice est exactement le carré de la norme de $x$, $a^2 + b^2$.

Revenons à notre solution de l'équation diophantine. Nous avons déterminé que la norme de $x^2$ est $a^2 + b^2$. Puisque $x^2 = (a^2 - b^2) + 2abi$, on obtient la solution suivante à l'équation $u^2 + v^2 = w^2$:

$$
\begin{align*}
u = & a^2 - b^2 \\
v = & 2ab \\
w = & a^2 + b^2
\end{align*}
$$ 

Nous n'avons pas complèment terminé car comment avoir l'assurance que nous pouvons trouver toutes les solutions avec cette méthode? Pour démontrer que c'est bien le cas, nous allons projeter ce point $x^2$ dans le plan complexe sur le cercle unitaire en divisant ses coordonnées par sa norme.

Maintenant considérons la droite qui le traverse et passe par l'origine du plan. La pente de cette droite est $\frac{2ab}{a^2-b^2}$. Une autre représentation de ce nombre rationnel est $\frac{2\frac{b}{a}}{1 - \frac{b}{a}^2}$. Ainsi la boucle est bouclée avec une bijection dans $\mathbb{N}^2$, définie par l'application

$$
\frac{2\frac{b}{a}}{1 - \frac{b}{a}^2}
\mapsto
(a, b)
$$

## L'importance de la bijection

Pour le mathématicien amateur, il peut ne pas être évident de comprendre l'importance de la bijection et pourquoi elle démontre que notre méthode précédente pour trouver les solutions de $u^2 + v^2 = w^2$ est exhaustive. C'est ce que nous allons tenter d'expliquer ici.

La définition d'une application bijective est une application qui à chaque élément de l'ensemble d'arrivé associe un unique élément de l'ensemble de départ. Puisque cette association est unique, on peut déterminer sans ambiguité l'élément de l'ensemble de départ à partir d'un élément de l'ensemble d'arrivée, l'application est inversible. On sait aussi qu'il y a exactement le même nombre d'éléments dans l'ensemble de départ et l'ensemble d'arrivée.

C'est pour cette raison que la bijection précédente nous assure que toutes les solutions sont trouvées avec la méthode présentée. Si celà n'était pas le cas, un des éléments de l'ensemble d'arrivée pourrait ne pas être associé à un point rationel sur le cercle unitaire. Or, comme nous venons de le voir, ça n'est pas le cas.

## Les nombres multicomplexes hyperboliques


Nous allons d'abord faire un petit rappel de la définition et des propriétés des nombres multicomplexes. Pour plus d'information nous invitons le lecteur à se référer à la publication de Norbert Fleury.

Pour définir les nombres multicomplexes $\mathcal{M}\mathbb{C}_n$, nous allons déterminer un nombre imaginaire $i$ tel que $i^n = -1$. Un nombre multicomplexe $x \in \mathcal{M}\mathbb{C}_n$ est défini comme une combinaison linéaire $\sum_{k=0}^{n-1}x_k i^k$, où les coefficients $x_k$ sont des nombres réels.

Analogue à la norme dans les complexes définie par la racine du déterminant, on a aussi une pseudo-norme. Il ne s'agit pas d'une norme usuelle car elle ne respecte pas l'inégalité du triangle et elle peut prendre une valeur nulle ou négative. Pour un nombre $x = \sum_{k=0}^{n-1}{x_k i^k}$, elle est définie par la racine $n$-ième du déterminant de la matrice $\sum_{k=0}^{n-1}{x_k J^k}$, où $J$ est une matrice telles que $J^n = -I$.

Nous pouvons maintenant introduires les nombres multicomplexes hyperboliques $\mathcal{M}\mathbf{H}_n$, qui sont aux nombres multicomplexes ce que sont les nombres hyperboliques aux nombres complexes. On définit un terme $i$ tel que $i^n = 1$. Un nombre $x \in \mathcal{M}\mathbf{H}_n$ est la combinaison linéaire $\sum_{k=0}^{n-1}x_k i^k$ à coefficients $x_k$ dans $\mathbb{R}$. 

La pseudo norme $|x|$ est définie de la même manière que pour les nombres multicomplexes. On prend la racine $n$-ième du déterminant de la matrice $\sum_{k=0}^{n-1}{x_k J^k}$, où $J^n = I$.

## Les points rationnels sur une surface unitaire multicomplexe

On peut généraliser la méthode au début de cet article pour trouver les points rationnels autour d'un cercle afin de trouver les points rationnels sur la surface unitaire $S = \{x \in \mathcal{M}\mathbf{H}_n: |x| = 1\}$. Ces points sont aussi des solutions de l'équation diophantine $|u| = v^n$, où $u$ est un élément de $\mathcal{M}\mathbf{H}_n$ à coefficients entiers et $v$ est un entier positif.

## Démonstration finale

---
### Pot-pourri de notes à ordonner

$$
\mathbb{N}^n \xrightarrow{(x_0, x_1, \dots, x_{n-1}) \mapsto \sum_{j=0}^{n-1}x_j i^j} \mathcal{M}\mathbf{H}_n 
$$

Pour les nombres multicomplexes hyperboliques $\mathcal{M}\mathbf{H}_n$, on introduit un élément imaginaire $i^n = 1$ et on définit une pseudo-norme $|x| = \det x$, analogue à la norme Euclidienne en dimension $2$. On a $\det x = \sum_{j=0}^{n-1}x_{j}^n + f(x_0, x_1, \dots, x_{n-1})$ et $|x| \in \pm \mathbb{N}_0$. À noter que $f(x_0, x_1, \dots, x_{n-1}) = 0$ si $n-2$ termes ou plus sont égaux à $0$. 

$$
 \mathcal{M}\mathbf{H}_n\xrightarrow{x \mapsto x^n} \mathcal{M}\mathbf{H}_n 
$$

À cette étape, aucun nombre $x^n = a_0 + a_1i + \dots + a_{n-1}i^{n-1}$ ne peut satisfaire $a_j$ et $a_k$ strictement positifs, et tous les autres termes égaux à $0$. On peut le démontrer comme suit.  

C'est la raison spécifique pour laquelle on choisit les nombres multicomplexes hyperboliques, et non les multicomplexes classiques. Car en choisissant les multicomplexes hyperboliques, on s'assure que les termes dans $g_j$ sont tous positif, donc ne peuvent être égaux à zéro que si au moins $n-1$ termes  $x_j$ sont aussi égaux à zéro. Donc $\det x^n = (\det x)^n = g_j^n + g_k^n + f(g_0, g_1, \dots, g_{n-1})$ où $f(g_0, g_1, \dots, g_{n-1}) \neq 0$.


$$
 \mathcal{M}\mathbf{H}_n \xrightarrow{
\sum_{j=0}^{n-1}{g_j(x_0, x_1, \dots, x_{n-1})i^j}
\mapsto
\sum_{j=0}^{n-1}{g_j(1, \frac{x_1}{x_0}, \dots, \frac{x_{n-1}}{x_0})i^j}
} \mathcal{M}\mathbf{H}_n  
$$

Les fonctions $g_0, g_1, \cdots, g_{n-1}$ sont homogènes car elles résultent de la multiplication des termes de $x$ dans $x^n$.

$$
 \mathcal{M}\mathbf{H}_n\xrightarrow{ 
\sum_{j=0}^{n-1}{g_j(1, \frac{x_1}{x_0}, \dots, \frac{x_{n-1}}{x_0})i^j}
\mapsto (\frac{x_1}{x_0}, \dots, \frac{x_{n-1}}{x_0})} \mathbb{Q}^{n-1}  
$$

$$
\mathbb{Q}^{n-1} \xrightarrow{(\frac{x_1}{x_0}, \dots, \frac{x_{n-1}}{x_0}) \mapsto (x_0, x_1, \dots, x_{n-1})} \mathbb{N}^n
$$

Ceci est en fait une bijection entre $\mathbb{N}^n$ et les points rationnels de la surface unitaire de $\mathcal{M}\mathbf{H}_n$. Ainsi, on exclu la possibilité de l'existence d'un nombre $x \in \mathcal{M}\mathbf{H}_n$ où $(\det x)^n = y^n + z^n$ et celà conclu la preuve.
