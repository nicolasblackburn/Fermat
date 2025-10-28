# Le dernier théorème de Fermat

## Motivation

En 1995, la publication de la preuve d'Andrew Wiles du [dernier théorème de Fermat](https://archive.wikiwix.com/cache/index2.php?url=http%3A%2F%2Fmath.stanford.edu%2F%7Elekheng%2Fflt%2Fwiles.pdf%2Findex.html#federation=archive.wikiwix.com&) a surpris le monde mathématique avec fulgurance. Elle se basait sur la théorie des courbes elliptiques et le travail acharné de nombreux mathématiciens avant lui. Il s'agit d'un document de 108 pages qui utilise des outils de la théorie des nombres sophistiqués.

Dans cet article, je vais tenter de démontrer le théorème de Fermat-Wiles par une preuve plus facile d'approche, en utilisant une généralisation des nombres complexes introduite par Norbert Fleury en 1993, les nombres multicomplexes.

Pour ce faire, je vais généraliser la méthode de recherche de triplets pythagoriciens aux nombres multicomplexes. Finalement, nous allons voir que l'équation $x^n + y^n = z^n$ ne peut être satisfaite pour $n > 2$.

Mon souhait est que cette preuve soit accessible à un public non-expert intéressé par les mathématiques et ayant une connaissance de base des nombres complexes et de l'algèbre linéaire. Il est fort possible que je me sois trompé, même extrêmement probable, car après tout je ne suis qu'un amateur. Dans tous les cas, au minimum, ce document peut servir d'introduction aux nombres multicomplexes et inspirer d'autres amateurs et non-amateurs.

## Triplets pythagoriciens et points rationnels sur le cercle unitaire

Nous allons commencer par trouver les solutions à l'équation diophantienne $x^2 + y^2 = z^2$. Il s'agit du seul cas où il existe des solutions non triviales à l'équation $x^n + y^n = z^n$. Les triplets $(x, y, z)$ solutions de l'équation pour $n = 2$ portent le nom de triplets pythagoriciens. La chaîne 3Blue1Brown sur You Tube possède [une très belle vidéo sur ces nombres](https://www.youtube.com/watch?v=QJYmyhnaaek) et comment les trouver. C'est d'ailleurs ce qui a inspiré cet article.

Nous allons tenter ici de réexpliquer le contenu de cette vidéo à notre manière, et essayer d'expliquer pourquoi la méthode de passage par les nombres complexes marche.

Une méthode systématique pour trouver des solutions de notre équation diophantienne consiste à prendre un couple de nombres entiers relatifs $(a, b) \in \mathbb{Z}^2$ et à les envoyer dans les nombres complexes par la transformation $(a,b) \mapsto a + bi$. Posons $\xi = a + bi$. La norme de $\xi$ est $|\xi| = \sqrt{a^2 + b^2}$. En élevant $\xi$ au carré, on obtient l'assurance que la norme de $\xi^2$ est entière, égale à $a^2 + b^2$. Cela fonctionne car la norme de $\xi^2$ est $|\xi^2| = |\xi|^2$. Cela découle d'une identité de la norme dans les complexes, $|uv| = |u||v|$, mais nous allons voir qu'il y a un lien avec les déterminants. 

Voyons comment celà fonctionne. On peut représenter $i$ par la matrice 

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

Le déterminant de cette matrice $X$ est exactement le carré de la norme, $\det X = |\xi|^2 = a^2 + b^2$. Ainsi cela met en lumière pourquoi $|\xi^2| = |\xi|^2$, parce que la norme dans les complexes correspond au déterminant dans la représentation matricielle.

Revenons à notre solution de l'équation diophantienne. Nous avons déterminé que la norme de $\xi^2$ est $|\xi^2| = a^2 + b^2$. Puisque $\xi^2 = (a^2 - b^2) + 2abi$, on obtient la solution suivante à l'équation $x^2 + y^2 = z^2$:

$$
\begin{align*}
x = & a^2 - b^2 \\
y = & 2ab \\
z = & a^2 + b^2
\end{align*}
$$ 

Nous n'avons pas complèment terminé car comment avoir l'assurance que nous pouvons trouver toutes les solutions avec cette méthode? Pour démontrer que c'est bien le cas, nous allons projeter ce point $\xi^2$ dans le plan complexe sur le cercle unitaire en divisant ses coordonnées par sa norme. Ainsi, le point rationnel $\left( \frac{a^2-b^2}{a^2+b^2}, \frac{2ab}{a^2+b^2} \right)$ est sur le cercle unitaire car $\left( \frac{a^2-b^2}{a^2+b^2} \right)^2 + \left( \frac{2ab}{a^2+b^2} \right)^2 = 1$.

Maintenant considérons la droite qui le traverse et passe par l'origine du plan. La pente de cette droite est $\frac{2ab}{a^2-b^2}$. En multipliant le numérateur et le dénominateur par $\frac{1}{a^2}$, on obtient une autre représentation de ce nombre rationnel $\frac{2\frac{b}{a}}{1 - \frac{b}{a}^2}$. Ainsi la boucle est bouclée avec une bijection dans $\mathbb{Z}^2$, définie par l'application

$$
\frac{2\frac{b}{a}}{1 - \frac{b}{a}^2}
\mapsto
(a, b)
$$

Note: l'application dans $\mathbb{Q}$ occulte l'information du quadrant dans lequel le point se trouve, car elle perd les signes du numérateur et du dénominateur. Dans le cas des triplets pythagoriciens, ça n'est pas vraiment un problème car les quadrants du cercle unitaire sont symétriques. Dans les cas plus généraux que nous allons étudier, nous ne pourrons pas nous appuyer sur cette propriété pratique. Il nous faudra donc que l'application envoie dans $\mathbb{Q}^{n-1} \times \{+,-\}^n$ pour garder ls trace des signes des composants initiaux de $\mathbb{Z}^n$.

## L'importance de la bijection

Pour le mathématicien amateur, il peut ne pas être évident de comprendre l'importance de la bijection et pourquoi elle démontre que notre méthode précédente pour trouver les solutions de $x^2 + y^2 = z^2$ est exhaustive. C'est ce que nous allons tenter d'expliquer ici.

La définition d'une application bijective est une application qui à chaque élément de l'ensemble d'arrivé associe un unique élément de l'ensemble de départ. Puisque cette association est unique, on peut déterminer sans ambiguité l'élément de l'ensemble de départ à partir d'un élément de l'ensemble d'arrivée, l'application est inversible. On sait aussi qu'il y a exactement le même nombre d'éléments dans l'ensemble de départ et l'ensemble d'arrivée.

C'est pour cette raison que la bijection précédente nous assure que toutes les solutions sont trouvées avec la méthode présentée. Si celà n'était pas le cas, un des éléments de l'ensemble d'arrivée des points rationnels sur le cercle unitaire pourrait ne pas être associé à un point $(a, b)$ de l'ensemble de départ, ou deux couples différents de l'ensemble d'arrivée pourraient ramener sur le même point rationnel. Or, comme nous venons de le voir, tous les couples $(a, b)$ dans $\mathbb{N}^2$ correspondent à un triplet pythagoricien $(a^2 - b^2, 2ab, a^2 + b^2)$, qui lui-même correspond à un point rationnel $\left( \frac{a^2-b^2}{a^2+b^2}, \frac{2ab}{a^2+b^2} \right)$ sur le cercle unitaire et qui retourne finalement à la forme $(a, b)$.

## Les nombres multicomplexes hyperboliques


Nous allons d'abord faire un petit rappel de la définition et des propriétés des nombres multicomplexes. Pour plus d'information nous invitons le lecteur à se référer à la [publication de Norbert Fleury](http://www.sciencedirect.com/science/article/pii/S0022247X83714101/pdf?md5=99c473b97d70da5a165a55850a33d7ea&pid=1-s2.0-S0022247X83714101-main.pdf).

Pour définir les nombres multicomplexes $\mathcal{M}\mathbb{C}_n$, nous allons déterminer un nombre imaginaire $e$ tel que $e^n = -1$. Un nombre multicomplexe $\xi \in \mathcal{M}\mathbb{C}_n$ est défini comme une combinaison linéaire $\sum_{k=0}^{n-1}\xi_k e^k$, où les composantes $\xi_k$ sont des nombres réels.

Analogue à la norme dans les complexes définie par la racine du déterminant de la représentation matricielle, on a aussi une pseudo-norme. Il ne s'agit pas d'une norme dans le sens usuelle car elle ne respecte pas l'inégalité du triangle et elle peut prendre une valeur nulle ou négative, mais elle préserve l'identité multiplicative $|uv| = |u||v|$. Pour un nombre $\xi = \sum_{k=0}^{n-1}{\xi_k e^k}$, elle est définie par la racine $n$-ième du déterminant de la matrice $\sum_{k=0}^{n-1}{\xi_k J^k}$, où $J$ est une matrice telles que $J^n = -I$.

## Les points rationnels sur une surface unitaire multicomplexe

On peut généraliser la méthode au début de cet article pour trouver les points rationnels autour d'un cercle afin de trouver les points rationnels sur la surface unitaire $S = \{\xi \in \mathcal{M}\mathbb{C}_n: |\xi| = 1\}$. Ces points sont aussi des solutions de l'équation diophantienne $|\sigma| = \tau^n$, où $\sigma$ est un élément de $\mathcal{M}\mathbb{C}_n$ à coefficients entiers et $\tau$ est un entier positif.

La motivation derrière cette idée est que s'il existe une solution à l'équation $x^n + y^n = z^n$, alors elle sera aussi solution de $|\sigma| = \tau^n$. Si on démontre qu'il n'y a aucune telle solution dans $|\sigma| = \tau^n$, alors nous prouvons le théorème de Fermat-Wiles.

$$
\mathbb{Z}^n \xrightarrow{(a_0, a_1, \dots, a_{n-1}) \mapsto \sum_{j=0}^{n-1}a_j e^j} \mathcal{M}\mathbb{C}_n 
$$

$$
 \mathcal{M}\mathbb{C}_n\xrightarrow{\xi \mapsto \xi^n} \mathcal{M}\mathbb{C}_n 
$$

À cette étape, $\xi^n = b_0 + b_1e + \dots + b_{n-1}e^{n-1}$, où les termes $a_j$ sont des fonctions $g_j(a_0, a_1, \dots, a_{n-1})$ des composantes de $\xi$. Il est impossible de satisfaire que deux termes $b_j$ et $b_k$ soient strictement positifs, et tous les autres termes égaux à $0$.  

$$
 \mathcal{M}\mathbb{C}_n \xrightarrow{
\sum_{j=0}^{n-1}{g_j(a_0, a_1, \dots, a_{n-1})i^j}
\mapsto
\sum_{j=0}^{n-1}{g_j(1, \frac{a_1}{a_0}, \dots, \frac{a_{n-1}}{a_0})i^j}
} \mathcal{M}\mathbb{C}_n  
$$

Les fonctions $g_0, g_1, \cdots, g_{n-1}$ sont homogènes car elles résultent de la multiplication des termes de $\xi$ dans $\xi^n$.

$$
 \mathcal{M}\mathbb{C}_n\xrightarrow{ 
\sum_{j=0}^{n-1}{g_j(1, \frac{a_1}{a_0}, \dots, \frac{a_{n-1}}{a_0})i^j}
\mapsto (\frac{a_1}{a_0}, \dots, \frac{a_{n-1}}{a_0})} \mathbb{Q}^{n-1} \times \{+, -\}^n 
$$

$$
\mathbb{Q}^{n-1} \times \{+,-\}^n \xrightarrow{(\frac{a_1}{a_0}, \dots, \frac{a_{n-1}}{a_0}) \mapsto (a_0, a_1, \dots, a_{n-1})} \mathbb{Z}^n
$$

Ceci est en fait une bijection entre $\mathbb{N}^n$ et les points rationnels de la surface unitaire de $\mathcal{M}\mathbb{C}_n$. Ainsi, on exclu la possibilité de l'existence d'un nombre $\xi \in \mathcal{M}\mathbb{C}_n$ où $|\xi|^n = y^n + z^n$ et celà conclu la preuve.
