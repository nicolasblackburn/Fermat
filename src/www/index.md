# Le dernier théorème de Fermat

---

## Motivation

En 1995, la publication de la preuve d'Andrew Wiles du dernier théorème de Fermat a surpris le monde mathématique avec fulgurance. Elle se basait sur la théorie des courbes elliptiques et le travail acharné de nombreux mathématiciens avant lui. Il s'agit d'un document de 108 pages qui utilise des outils de la théorie des nombres sophistiqués.

Dans cet article, je vais tenter de démontrer le théorème de Fermat par une preuve plus facile d'approche, en utilisant une généralisation des nombres complexes introduite par Norbert Fleury en 1993, les nombres multicomplexes.

Pour ce faire, je vais étendre la théorie de Fleury, en introduisant les nombres multicomplexes hyperboliques, puis je vais généraliser la méthode de recherche des points rationnels sur le cercle unitaire aux surfaces unitaires associées aux nombres multicomplexes. Finalement, nous allons voir que l'équation $a^n + b^n = c^n$ ne peut être satisfaite.

Mon souhait est que cette preuve soit accessible à un public non-expert intéressé par les mathématiques et ayant une connaissance de base des nombres complexes et de l'algèbre linéaire. Il est fort possible que je me sois trompé, même extrêmement probable, car après tout je ne suis qu'un amateur. Dans tous les cas, au minimum, ce document peut servir d'introduction aux nombres multicomplexes et inspirer d'autres amateurs et non-amateurs.

## Introduction aux points rationnels sur le cercle unitaire

## L'importance de la bijection

## Les nombres hyperboliques multicomplexes

## Les points rationnels sur une surface unitaire multicomplexe

## Démonstration finale

---
### Pot-pourri de notes à ordonner

| Terme | Définition |
|-|-|
| $\mathcal{M}\mathbb{C}_n$ | L'ensemble des nombres multicomplexes d'ordre $n$ |
| $\mathcal{M}\mathbf{H}_n$ | L'ensemble des nombres multicomplexes hyperboliques d'ordre $n$ |

$$
\mathbb{N}^n \xrightarrow{(x_0, x_1, \dots, x_{n-1}) \mapsto x_0 + x_1 i + \dots + x_{n-1} i^{n-1}} \mathcal{M}\mathbf{H}_n 
$$

Pour les nombres multicomplexes hyperboliques $\mathcal{M}\mathbf{H}_n$, on introduit un élément imaginaire $i^n = 1$ et on définit une pseudo-norme $|x| = \det x$, analogue à la norme Euclidienne en dimension $2$. On a $\det x = \sum_{j=0}^{n/2 }x_{2j}^n - \sum_{j=0}^{n/2}x_{2j+1}^n + f(x_0, x_1, \dots, x_{n-1})$ et $|x| \in \pm \mathbb{N}_0$. À noter que $f(x_0, x_1, \dots, x_{n-1}) = 0$ si $n-2$ termes ou plus sont égaux à $0$. 

$$
 \mathcal{M}\mathbf{H}_n\xrightarrow{x \mapsto x^n} \mathcal{M}\mathbf{H}_n 
$$

À cette étape, aucun nombre $x^n = a_0 + a_1i + \dots + a_{n-1}i^{n-1}$ ne peut satisfaire $a_0$ et $a_2$ différents de $0$, et tous les autres termes égaux à $0$. On peut le démontrer en montrant que les termes $g_0, g_1, \dots, g_{n-1}$ de l'étape suivante ne peuvent satisfaire $g_0, g_2 \neq 0$ et $g_2, \dots, g_{n-1} = 0$.  

C'est la raison spécifique pour laquelle on choisit les nombres multicomplexes hyperboliques, et non les multicomplexes classiques. Car en choisissant les multicomplexes hyperboliques, on s'assure que les termes dans $g_j$ sont tous positif, donc ne peuvent être égaux à zéro que si tous les $x_j$ sont aussi égaux à zéro. Donc $\det x^n = (\det x)^n = g_0^n + g_2^n + f(g_0, g_1, \dots, g_{n-1})$ où $f(g_0, g_1, \dots, g_{n-1}) \neq 0$.


$$
 \mathcal{M}\mathbf{H}_n \xrightarrow{
\begin{aligned}
  & g_0(x_0, x_1, \dots, x_{n-1}) \\
+ & g_1(x_0, x_1, \dots, x_{n-1}) i \\
+ & \dots \\
+ & g_{n-1}(x_0, x_1, \dots, x_{n-1}) i^{n-1} \\
\end{aligned}
\mapsto
\begin{aligned}
  & g_0(1, \frac{x_1}{x_0}, \dots, \frac{x_{n-1}}{x_0}) \\
+ & g_1(1, \frac{x_1}{x_0}, \dots, \frac{x_{n-1}}{x_0}) i \\
+ & \dots \\
+ & g_{n-1}(1, \frac{x_1}{x_0}, \dots, \frac{x_{n-1}}{x_0}) i^{n-1}
\end{aligned}
} \mathcal{M}\mathbf{H}_n  
$$

Les fonctions $g_0, g_1, \cdots, g_{n-1}$ sont homogènes car elles résultent de la multiplication des termes de $x$ dans $x^n$.

$$
 \mathcal{M}\mathbf{H}_n\xrightarrow{ \begin{align*}
  & g_0(1, \frac{x_1}{x_0}, \dots, \frac{x_{n-1}}{x_0}) \\
+ & g_1(1, \frac{x_1}{x_0}, \dots, \frac{x_{n-1}}{x_0}) i \\
+ & \dots \\
+ & g_{n-1}(1, \frac{x_1}{x_0}, \dots, \frac{x_{n-1}}{x_0}) i^{n-1} \end{align*} \mapsto (\frac{x_1}{x_0}, \dots, \frac{x_{n-1}}{x_0})} \mathbb{Q}_{n-1}  
$$

$$
\mathbb{Q}_{n-1} \xrightarrow{(\frac{x_1}{x_0}, \dots, \frac{x_{n-1}}{x_0}) \mapsto (x_0, x_1, \dots, x_{n-1})} \mathbb{N}_n
$$

Ceci est en fait une bijection entre un sous ensemble $S \subset \mathbb{Q}_{n-1}$ et les points rationnels de la surface unitaire de $\mathcal{M}\mathbf{H}_n$. Ainsi, on exclu la possibilité de l'existence d'un nombre $x \in \mathcal{M}\mathbf{H}_n$ où $(\det x)^n = y^n + z^n$ et celà conclu la preuve.
