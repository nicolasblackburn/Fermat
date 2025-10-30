# Fermat's Last Theorem

## Motivation

In this article, I will present a new approach to Fermat-Wiles' theorem which uses a generalization of complex numbers introduced by Norbert Fleury in 1993, multicomplex numbers.

To do this, I will generalize the method for finding Pythagorean triples to multicomplex numbers. We will then show that the equation $x^n + y^n = z^n$ cannot be satisfied for $n = 3$, $n = 4$, and demonstrate how the technique can be applied to any arbitrary value of $n > 2$.

My wish is that this article be accessible to a non-expert audience interested in mathematics and with a basic knowledge of complex numbers and linear algebra.

## Pythagorean triples and rational points on the unit circle

We will begin by finding the solutions to the Diophantine equation $x^2 + y^2 = z^2$. This is the only case where there are non-trivial solutions to the equation $x^n + y^n = z^n$. The triplets $(x, y, z)$ that are solutions to the equation for $n = 2$ are called Pythagorean triples. The YouTube channel 3Blue1Brown has a very good video on these numbers and how to find them. This is what inspired this article.

We will attempt here to re-explain the content of this video in our own way, and try to explain why the method of using complex numbers works.

A systematic method for finding solutions to our Diophantine equation consists of taking a pair of integers $(a, b) \in \mathbb{Z}^2$ and transforming them into complex numbers using the transformation $(a,b) \mapsto a + bi$. Let $\xi = a + bi$. The norm of $\xi$ is $|\xi| = \sqrt{a^2 + b^2}$. By squaring $\xi$, we obtain the assurance that the norm of $\xi^2$ is an integer, equal to $a^2 + b^2$. This works because the norm in the complex numbers is multiplicative, that is, for two complex numbers $u$ and $v$, $|uv| = |u||v|$. We will see that there is a connection with determinants.

Let's see how this works. We can represent $i$ by the matrix

$$
J = \begin{pmatrix}
0 & -1 \\
1 & 0
\end{pmatrix}
$$

By replacing $i$ with $J$ and multiplying the term $a$ by the identity matrix $I$ in $a+bi$ we obtain a matrix $X = aI + bJ$.

$$
X = \begin{pmatrix}
a & -b \\
b & a
\end{pmatrix}
$$

This new representation of complex numbers behaves identically to the usual definition of complex numbers if we replace the addition of complex numbers with matrix addition and the multiplication of complex numbers with matrix multiplication. It is, in fact, a field isomorphism.

The determinant of this matrix $X$ is exactly the square of the norm, $\det X = |\xi|^2 = a^2 + b^2$. Thus, this highlights why $|\xi^2| = |\xi|^2$, because the square of the norm in complex numbers corresponds to the determinant in matrix representation, and the determinant is a multiplicative function.

Let's return to our solution of the Diophantine equation. We determined that the norm of $\xi^2$ is $|\xi^2| = a^2 + b^2$. Since $\xi^2 = (a^2 - b^2) + 2abi$, we obtain the following solution to the equation $x^2 + y^2 = z^2$:

$$
\begin{align*}
x = & a^2 - b^2 \\
y = & 2ab \\
z = & a^2 + b^2
\end{align*}
$$

We haven't completely finished because how can we be sure that we can find all the solutions with this method? To demonstrate that this is indeed the case, we will take this point $\xi^2$ in the complex plane and project it onto the unit circle by dividing its coordinates by its norm. Thus, the rational point $\left( \frac{a^2-b^2}{a^2+b^2}, \frac{2ab}{a^2+b^2} \right)$ is on the unit circle because $\left( \frac{a^2-b^2}{a^2+b^2} \right)^2 + \left( \frac{2ab}{a^2+b^2} \right)^2 = 1$.

Now consider the line that crosses it and passes through the origin of the plane. The slope of this line is $\frac{2ab}{a^2-b^2}$. Multiplying the numerator and denominator by $\frac{1}{a^2}$, we obtain another representation of this rational number $\frac{2\frac{b}{a}}{1 - \frac{b}{a}^2}$. Thus, the loop is closed with a bijection into $\mathbb{Z}^2$, defined by the mapping

$$
\frac{2\frac{b}{a}}{1 - \frac{b}{a}^2}
\mapsto
(a, b)
$$

Note: the function in $\mathbb{Q}$ is not exactly a bijection because it obscures the information about the quadrant in which the initial pair of integers was located. Indeed, it loses the distinction between the signs of the numerator and denominator. In the case of Pythagorean triples, this isn't really a problem because the quadrants of the unit circle are symmetric. In the more general cases we will study, we cannot rely on this useful property. Therefore, we will need the function to map to $\mathbb{Q}^{n-1} \times \{+,-\}^n$ to keep track of the signs of the initial components of $\mathbb{Z}^n$.

## The importance of bijection

For the amateur mathematician, it may not be obvious to grasp the importance of the bijection and why it demonstrates that our previous method for finding the solutions to $x^2 + y^2 = z^2$ is exhaustive. This is what we will attempt to explain here.

The definition of a bijective function is a function that associates each element of the codomain with a unique element of the domain. Since this association is unique, we can unambiguously determine an element of the domain from an element of the codomain; the function is invertible. We also know that there are exactly the same number of elements in the domain and the codomain.

This is why the preceding bijection assures us that all solutions are found with the method presented. If this were not the case, one of the elements of the codomain of rational points on the unit circle might not be associated with a point $(a, b)$ in the domain, or two different pairs in the codomain could lead back to the same rational point. However, as we have just seen, all pairs $(a, b)$ in $\mathbb{N}^2$ correspond to a Pythagorean triple $(a^2 - b^2, 2ab, a^2 + b^2)$, which itself corresponds to a rational point $\left( \frac{a^2-b^2}{a^2+b^2}, \frac{2ab}{a^2+b^2} \right)$ on the unit circle and which ultimately returns to the form $(a, b)$.

## Multicomplex numbers

We will begin with a brief review of the definition and properties of multicomplex numbers. For more information, we invite the reader to refer to the [publication by Norbert Fleury](http://www.sciencedirect.com/science/article/pii/S0022247X83714101/pdf?md5=99c473b97d70da5a165a55850a33d7ea&pid=1-s2.0-S0022247X83714101-main.pdf).

To define the multicomplex numbers $\mathcal{M}\mathbb{C}_n$, we will determine an imaginary number $e$ such that $e^n = -1$. A multicomplex number $\xi \in \mathcal{M}\mathbb{C}_n$ is defined as a linear combination $\sum_{k=0}^{n-1}\xi_k e^k$, where the components $\xi_k$ are real numbers.

Analogous to the norm in complex numbers defined by the root of the determinant of the matrix representation, we also have a pseudo-norm. It is not a norm in the usual sense because it does not respect the triangle inequality and can take a zero or negative value, but it preserves the multiplicative property $|uv| = |u||v|$. For a number $\xi = \sum_{k=0}^{n-1}{\xi_k e^k}$, it is defined by the $n$-th root of the determinant of the matrix $\sum_{k=0}^{n-1}{\xi_k J^k}$, where $J$ is a matrix such that $J^n = -I$.

## Rational points on a multicomplex unit surface

We can generalize the method at the beginning of this article for finding rational points around a circle in order to find rational points on the unit surface $S = \{\xi \in \mathcal{M}\mathbb{C}_n: |\xi| = 1\}$. These points are also solutions of the Diophantine equation $|\xi| = \tau^n$, where $\xi$ is an element of $\mathcal{M}\mathbb{C}_n$ with integer coefficients and $\tau$ is a positive integer.

The motivation behind this idea is that if there exists a solution to the equation $x^n + y^n = z^n$, then it will also be a solution to $|\xi| = \tau^n$. If we prove that there is no such solution for $|\xi| = \tau^n$, then we prove Fermat's Last Theorem.

$$
\mathbb{Z}^n \xrightarrow{(a_0, a_1, \dots, a_{n-1}) \mapsto \sum_{j=0}^{n-1}a_j e^j} \mathcal{M}\mathbb{C}_n
$$

$$
 \mathcal{M}\mathbb{C}_n\xrightarrow{\xi \mapsto \xi^n} \mathcal{M}\mathbb{C}_n
$$

At this stage, $\xi^n = b_0 + b_1e + \dots + b_{n-1}e^{n-1}$, where the terms $b_j$ are functions $g_j(a_0, a_1, \dots, a_{n-1})$ of the components of $\xi$. It is impossible to satisfy that two terms $b_j$ and $b_k$ are strictly positive, and all other terms equal to $0$.

$$
 \mathcal{M}\mathbb{C}_n \xrightarrow{
\sum_{j=0}^{n-1}{g_j(a_0, a_1, \dots, a_{n-1})i^j}
\mapsto
\sum_{j=0}^{n-1}{g_j(1, \frac{a_1}{a_0}, \dots, \frac{a_{n-1}}{a_0})i^j}
} \mathcal{M}\mathbb{C}_n  
$$

The functions $g_0, g_1, \cdots, g_{n-1}$ are homogeneous because they result from the multiplication of the terms of $\xi$ in $\xi^n$.

$$
 \mathcal{M}\mathbb{C}_n\xrightarrow{
\sum_{j=0}^{n-1}{g_j(1, \frac{a_1}{a_0}, \dots, \frac{a_{n-1}}{a_0})i^j}
\mapsto (\frac{a_1}{a_0}, \dots, \frac{a_{n-1}}{a_0})} \mathbb{Q}^{n-1} \times \{+, -\}^n
$$

$$
\mathbb{Q}^{n-1} \times \{+,-\}^n \xrightarrow{(\frac{a_1}{a_0}, \dots, \frac{a_{n-1}}{a_0}) \mapsto (a_0, a_1, \dots, a_{n-1})} \mathbb{Z}^n
$$

This is in fact a bijection between $\mathbb{Z}^n$ and the rational points of the unit surface of $\mathcal{M}\mathbb{C}_n$. Thus, we exclude the possibility of the existence of a number $\xi \in \mathcal{M}\mathbb{C}_n$ where $|\xi|^n = y^n + z^n$ and this concludes the proof.
