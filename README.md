# Fermat

$$
\mathbb{N}^n \xrightarrow{(x_0, x_1, \dots, x_{n-1}) \mapsto x_0 + x_1 i + \dots + x_{n-1} i^{n-1}} \mathbb{M}_n 
$$

Pour les nombres multicomplexes $\mathbb{M}_n$, $i^n = -1$ et on définit une pseudo-norme $|x| = \det x$, analogue à la norme Euclidienne en dimension $2$. On a $\det x = \sum_{j=0}^{n/2 }x_{2j}^n - \sum_{j=0}^{n/2}x_{2j+1}^n + f(x_0, x_1, \dots, x_{n-1})$ et $|x| \in \pm \mathbb{N}_0$. À noter que $f(x_0, x_1, \dots, x_{n-1}) = 0$ si $n-2$ termes ou plus sont égaux à $0$. 

$$
\mathbb{M}_n \xrightarrow{x \mapsto x^n} \mathbb{M}_n 
$$

À cette étape, aucun nombre $x^n = a_0 + a_1i + \dots + a_{n-1}i^{n-1}$ ne peut satisfaire $a_0$ et $a_2$ différents de $0$, et tous les autres termes égaux à $0$. On peut le démontrer en montrant que les termes $g_0, g_1, \dots, g_{n-1}$ de l'étape suivante ne peuvent satisfaire $g_0, g_2 \neq 0$ et $g_2, \dots, g_{n-1} = 0$.  Donc $\det x^n = (\det x)^n = g_0^n + g_2^n + f(g_0, g_1, \dots, g_{n-1})$ où $f(g_0, g_1, \dots, g_{n-1}) \neq 0$.


$$
\mathbb{M}_n \xrightarrow{g_0(x_0, x_1, \dots, x_{n-1}) + g_1(x_0, x_1, \dots, x_{n-1}) i + \dots g_{n-1}(x_0, x_1, \dots, x_{n-1}) i^{n-1} \mapsto g_0(1, \frac{x_1}{x_0}, \dots, \frac{x_{n-1}}{x_0}) + g_1(1, \frac{x_1}{x_0}, \dots, \frac{x_{n-1}}{x_0}) i + \dots g_{n-1}(1, \frac{x_1}{x_0}, \dots, \frac{x_{n-1}}{x_0}) i^{n-1}} \mathbb{M}_n   
$$

Les fonctions $g_0, g_1, \cdots, g_{n-1}$ sont homogènes car elles résultent de la multiplication des termes de $x$ dans $x^n$.

$$
\mathbb{M}_n \xrightarrow{g_0(1, \frac{x_1}{x_0}, \dots, \frac{x_{n-1}}{x_0}) + g_1(1, \frac{x_1}{x_0}, \dots, \frac{x_{n-1}}{x_0}) i + \dots g_{n-1}(1, \frac{x_1}{x_0}, \dots, \frac{x_{n-1}}{x_0}) i^{n-1} \mapsto (\frac{x_1}{x_0}, \dots, \frac{x_{n-1}}{x_0})} \mathbb{Q}_{n-1}  
$$

$$
\mathbb{Q}_{n-1} \xrightarrow{(\frac{x_1}{x_0}, \dots, \frac{x_{n-1}}{x_0}) \mapsto (x_0, x_1, \dots, x_{n-1})} \mathbb{N}_n
$$

Cela démontre une bijection entre $\mathbb{Q}_{n-1}$ et les points rationnels de la surface unitaire de $\mathbb{M}_n$. Ainsi, on exclu la possibilité de l'existence d'un nombre $x \in \mathbb{M}_n$ où $(\det x)^n = y^n + z^n$.
