# Le dernier théorème de Fermat

## Motivation

En 1995, la publication de la preuve d'Andrew Wiles du dernier théorème de Fermat a surpris le monde mathématique avec fulgurance. Elle se basait sur la théorie des courbes elliptiques et le travail acharné de nombreux mathématiciens avant lui. Il s'agit d'un document de 108 pages qui utilise des outils de la théorie des nombres sophistiqués.

Dans cet article, je vais tenter de démontrer le théorème de Fermat-Wiles par une preuve plus facile d'approche, en utilisant une généralisation des nombres complexes introduite par Norbert Fleury en 1993, les nombres multicomplexes.

Pour ce faire, je vais étendre la théorie de Fleury, en introduisant les nombres multicomplexes hyperboliques, puis je vais généraliser la méthode de recherche des points rationnels sur le cercle unitaire aux surfaces unitaires associées aux nombres multicomplexes. Finalement, nous allons voir que l'équation $a^n + b^n = c^n$ ne peut être satisfaite.

Mon souhait est que cette preuve soit accessible à un public non-expert intéressé par les mathématiques et ayant une connaissance de base des nombres complexes et de l'algèbre linéaire. Il est fort possible que je me sois trompé, même extrêmement probable, car après tout je ne suis qu'un amateur. Dans tous les cas, au minimum, ce document peut servir d'introduction aux nombres multicomplexes et inspirer d'autres amateurs et non-amateurs.

## Triplets pythagoriciens et points rationnels sur le cercle unitaire

Nous allons commencer par trouver les solutions à l'équation diophantienne $x^2 + y^2 = z^2$. Il s'agit du seul cas où il existe des solutions non triviales à l'équation $x^n + y^n = z^n$. Les triplets $(x, y, z)$ solutions de l'équation pour $n = 2$ portent le nom de triplets pythagoriciens. La chaîne 3Blue1Brown sur You Tube possède [une très belle vidéo sur ces nombres](https://www.youtube.com/watch?v=QJYmyhnaaek) et comment les trouver. C'est d'ailleurs ce qui a inspiré cet article.

Nous allons tenter ici de réexpliquer le contenu de cette vidéo à notre manière, et essayer d'expliquer pourquoi la méthode de passage par les nombres complexes marche.

Une méthode systématique pour trouver des solutions de notre équation diophantienne consiste à prendre un couple de nombres entiers strictement positifs $(a, b) \in \mathbb{N}^2$ et à les envoyer dans les nombres complexes par la transformation $(a,b) \mapsto a + bi$. Posons $x = a + bi$. La norme de $x$ est $|x| = \sqrt{a^2 + b^2}$. En élevant $x$ au carré, on obtient l'assurance que la norme de $x^2$ est entière, égale à $a^2 + b^2$. Cela fonctionne car la norme de $x^2$ est $|x^2| = |x|^2$. Cela découle d'une identité de la norme dans les complexes, $|uv| = |u||v|$, mais nous allons voir qu'il y a un lien avec les déterminants. 

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

Le déterminant de cette matrice $X$ est exactement le carré de la norme, $\det X = |x|^2 = a^2 + b^2$. Ainsi cela met en lumière pourquoi $|x^2| = |x|^2$, parce que la norme dans les complexes correspond au déterminant dans la représentation matricielle.

Revenons à notre solution de l'équation diophantienne. Nous avons déterminé que la norme de $x^2$ est $|x^2| = a^2 + b^2$. Puisque $x^2 = (a^2 - b^2) + 2abi$, on obtient la solution suivante à l'équation $u^2 + v^2 = w^2$:

$$
\begin{align*}
u = & a^2 - b^2 \\
v = & 2ab \\
w = & a^2 + b^2
\end{align*}
$$ 

Nous n'avons pas complèment terminé car comment avoir l'assurance que nous pouvons trouver toutes les solutions avec cette méthode? Pour démontrer que c'est bien le cas, nous allons projeter ce point $x^2$ dans le plan complexe sur le cercle unitaire en divisant ses coordonnées par sa norme. Ainsi, les points $\frac{a^2-b^2}{a^2+b^2}$ et $\frac{2ab}{a^2+b^2}$ sont sur le cercle unitaire car $\left( \frac{a^2-b^2}{a^2+b^2} \right)^2 + \left( \frac{2ab}{a^2+b^2} \right)^2 = 1$.

Maintenant considérons la droite qui le traverse et passe par l'origine du plan. La pente de cette droite est $\frac{2ab}{a^2-b^2}$. En divisant le numérateur et le dénominateur par $\frac{1}{a^2}$, on obtient une autre représentation de ce nombre rationnel $\frac{2\frac{b}{a}}{1 - \frac{b}{a}^2}$. Ainsi la boucle est bouclée avec une bijection dans $\mathbb{N}^2$, définie par l'application

$$
\frac{2\frac{b}{a}}{1 - \frac{b}{a}^2}
\mapsto
(a, b)
$$

## L'importance de la bijection

Pour le mathématicien amateur, il peut ne pas être évident de comprendre l'importance de la bijection et pourquoi elle démontre que notre méthode précédente pour trouver les solutions de $x^2 + y^2 = z^2$ est exhaustive. C'est ce que nous allons tenter d'expliquer ici.

La définition d'une application bijective est une application qui à chaque élément de l'ensemble d'arrivé associe un unique élément de l'ensemble de départ. Puisque cette association est unique, on peut déterminer sans ambiguité l'élément de l'ensemble de départ à partir d'un élément de l'ensemble d'arrivée, l'application est inversible. On sait aussi qu'il y a exactement le même nombre d'éléments dans l'ensemble de départ et l'ensemble d'arrivée.

C'est pour cette raison que la bijection précédente nous assure que toutes les solutions sont trouvées avec la méthode présentée. Si celà n'était pas le cas, un des éléments de l'ensemble d'arrivée des points rationnels sur le cercle unitaire pourrait ne pas être associé à un point $(a, b)$ de l'ensemble de départ, ou deux couples différents de l'ensemble d'arrivée pourraient ramener sur le même point rationnel. Or, comme nous venons de le voir, tous les couples $(a, b)$ dans $\mathbb{N}^2$ correspondent à un triplet pythagoricien $(a^2 - b^2, 2ab, a^2 + b^2)$, qui lui-même correspond à un point rationnel $\left( \frac{a^2-b^2}{a^2+b^2}, \frac{2ab}{a^2+b^2} \right)$ sur le cercle unitaire et qui retourne finalement à la forme $(a, b)$.

## Les nombres multicomplexes hyperboliques


Nous allons d'abord faire un petit rappel de la définition et des propriétés des nombres multicomplexes. Pour plus d'information nous invitons le lecteur à se référer à la publication de Norbert Fleury.

Pour définir les nombres multicomplexes $\mathcal{M}\mathbb{C}_n$, nous allons déterminer un nombre imaginaire $i$ tel que $i^n = -1$. Un nombre multicomplexe $x \in \mathcal{M}\mathbb{C}_n$ est défini comme une combinaison linéaire $\sum_{k=0}^{n-1}x_k i^k$, où les coefficients $x_k$ sont des nombres réels.

Analogue à la norme dans les complexes définie par la racine du déterminant de la représentation matricielle, on a aussi une pseudo-norme. Il ne s'agit pas d'une norme dans le sens usuelle car elle ne respecte pas l'inégalité du triangle et elle peut prendre une valeur nulle ou négative, mais elle préserve l'identité multiplicative $|uv| = |u||v|$. Pour un nombre $x = \sum_{k=0}^{n-1}{x_k i^k}$, elle est définie par la racine $n$-ième du déterminant de la matrice $\sum_{k=0}^{n-1}{x_k J^k}$, où $J$ est une matrice telles que $J^n = -I$.

Nous pouvons maintenant introduires les nombres multicomplexes hyperboliques $\mathcal{M}\mathbf{H}_n$, qui sont aux nombres multicomplexes ce que sont les nombres hyperboliques aux nombres complexes. On définit un terme $i$ tel que $i^n = 1$. Un nombre $x \in \mathcal{M}\mathbf{H}_n$ est la combinaison linéaire $\sum_{k=0}^{n-1}x_k i^k$ à coefficients $x_k$ dans $\mathbb{R}$. 

La pseudo norme $|x|$ est définie de la même manière que pour les nombres multicomplexes. On prend la racine $n$-ième du déterminant de la matrice $\sum_{k=0}^{n-1}{x_k J^k}$, où $J^n = I$.

## Les points rationnels sur une surface unitaire multicomplexe

On peut généraliser la méthode au début de cet article pour trouver les points rationnels autour d'un cercle afin de trouver les points rationnels sur la surface unitaire $S = \{x \in \mathcal{M}\mathbf{H}_n: |x| = 1\}$. Ces points sont aussi des solutions de l'équation diophantienne $|\sigma| = \tau^n$, où $\sigma$ est un élément de $\mathcal{M}\mathbf{H}_n$ à coefficients entiers et $\tau$ est un entier positif.

La motivation derrière cette idée est que s'il existe une solution à l'équation $u^n + v^n = w^n$, alors elles seront aussi solution de $|\sigma| = \tau^n$. Si on démontre qu'il n'y a aucune telle solution dans $|\sigma| = \tau^n$, alors nous prouvons le théorème de Fermat-Wiles.

$$
\mathbb{N}^n \xrightarrow{(x_0, x_1, \dots, x_{n-1}) \mapsto \sum_{j=0}^{n-1}x_j i^j} \mathcal{M}\mathbf{H}_n 
$$

On a $|x| = \sum_{j=0}^{n-1}x_{j}^n + f(x_0, x_1, \dots, x_{n-1})$ et $|x| \in \pm \mathbb{N}_0$.

$$
 \mathcal{M}\mathbf{H}_n\xrightarrow{x \mapsto x^n} \mathcal{M}\mathbf{H}_n 
$$

À cette étape, $x^n = a_0 + a_1i + \dots + a_{n-1}i^{n-1}$, ou les termes $a_j$ sont des fonctions $g_j(x_0, x_1, \dots, x_{n-1})$ des coefficients de $x$. Il est impossible de satisfaire que deux termes $a_j$ et $a_k$ soient strictement positifs, et tous les autres termes égaux à $0$. On peut le démontrer comme suit.  

C'est la raison spécifique pour laquelle on choisit les nombres multicomplexes hyperboliques, et non les multicomplexes classiques. Car en choisissant les multicomplexes hyperboliques, on s'assure que les termes qui composent $a_j$ par addition sont tous positif. Donc ne peuvent être égaux à zéro que si au moins $n-1$ termes  $x_j$ sont aussi égaux à zéro. Donc $|x^n| = |x|^n = g_j^n + g_k^n + f(g_0, g_1, \dots, g_{n-1})$ où $f(g_0, g_1, \dots, g_{n-1}) \neq 0$.

Une autre façon de le voir, c'est de pendre le cas où on a que deux coefficients $x_j, x_k$ différents de $0$ dans $x$. Alors en élevant $x$ à la puissance $n$, les termes de $x^n$ auront des coefficients non-zéros à toutes les puissance de $i$. En ayant plus de deux coefficients non-zéros, on aurs le même problème. Donc la seule possibilité, c'est qu'un seul coefficient soit zéro, ou tous, ce qui correspond aux deux solutions triviales $u^n + 0^n = u^n$ et $0^n + 0^n = 0^n$. 


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

Ceci est en fait une bijection entre $\mathbb{N}^n$ et les points rationnels de la surface unitaire de $\mathcal{M}\mathbf{H}_n$. Ainsi, on exclu la possibilité de l'existence d'un nombre $x \in \mathcal{M}\mathbf{H}_n$ où $|x|^n = y^n + z^n$ et celà conclu la preuve.
