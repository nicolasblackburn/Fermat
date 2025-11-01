
# Fermat's Last Theorem

## Motivation

In this article, I will present a new approach to Fermat-Wiles' theorem which uses a generalization of complex numbers introduced by Norbert Fleury in 1993, multicomplex numbers.

To do this, I will generalize the method for finding Pythagorean triples to multicomplex numbers. We will then show that the equation $x^n + y^n = z^n$ cannot be satisfied for $n = 3$, $n = 4$, and demonstrate how the technique can be applied to any arbitrary value of $n > 2$.

My wish is that this article be accessible to a non-expert audience interested in mathematics and with a basic knowledge of complex numbers and linear algebra.

## Pythagorean triples and rational points on the unit circle

We will begin by finding the solutions to the Diophantine equation $x^2 + y^2 = z^2$. This is the only case where there are non-trivial solutions to the equation $x^n + y^n = z^n$. The triplets $(x, y, z)$ that are solutions to the equation for $n = 2$ are called Pythagorean triples. The YouTube channel 3Blue1Brown has a very good video on these numbers and how to find them. This is what inspired this article.

We will attempt here to re-explain the content of this video in our own way, and try to explain why the method of using complex numbers works.

A systematic method for finding solutions to our Diophantine equation consists of taking a pair of integers $(a, b) \in \mathbb{Z}^2$ and converting them to complex numbers by the transformation $(a,b) \mapsto a + bi$. Let $\xi = a + bi$. The norm of $\xi$ is $\newcommand{\norm}[1]{\lVert #1 \rVert}
 \norm \xi = \sqrt{a^2 + b^2}$. By squaring $\xi$, we can be certain that the norm of $\xi^2$ is an integer, equal to $a^2 + b^2$. This works because the norm in complex numbers is multiplicative, meaning that for two complex numbers $u$ and $v$, $\norm {uv} = \norm u \norm v$. We will see that there is a connection with determinants.

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

The determinant of this matrix $X$ is exactly the square of the norm, $\det X = \norm \xi ^2 = a^2 + b^2$. Thus, this highlights why $\norm{\xi^2} = \norm \xi ^2$, because the square of the norm in complex numbers corresponds to the determinant in matrix representation, and the determinant is a multiplicative function.

Let's return to our solution of the Diophantine equation. We determined that the norm of $\xi^2$ is $\norm{\xi^2} = a^2 + b^2$. Since $\xi^2 = (a^2 - b^2) + 2abi$, we obtain the following solution to the equation $x^2 + y^2 = z^2$:

$$
\begin{align*}
x = & a^2 - b^2 \\
y = & 2ab \\
z = & a^2 + b^2
\end{align*}
$$

We haven't completely finished because how can we be sure that we can find all the solutions with this method? To demonstrate that this is indeed the case, we will take this point $\xi^2$ in the complex plane and project it onto the unit circle by dividing its coordinates by its norm. Thus, the rational point $\left( \frac{a^2-b^2}{a^2+b^2}, \frac{2ab}{a^2+b^2} \right)$ is on the unit circle because $\left( \frac{a^2-b^2}{a^2+b^2} \right)^2 + \left( \frac{2ab}{a^2+b^2} \right)^2 = 1$.

Now consider the line that crosses it and passes through the origin of the plane. The slope of this line is $\frac{2ab}{a^2-b^2}$. Multiplying the numerator and denominator by $\frac{1}{a^2}$, we obtain another representation of this rational number $\frac{2\frac{b}{a}}{1 - \left(\frac{b}{a}\right)^2}$. Thus, the loop is closed with a bijection into $\mathbb{Z}^2$, defined by the mapping

$$
\frac{2\frac{b}{a}}{1 - \left(\frac{b}{a}\right)^2}
\mapsto
(a, b)
$$

Note: the function in $\mathbb{Q}$ is not exactly a bijection because it obscures the information about the quadrant in which the initial pair of integers was located. Indeed, it loses the distinction between the signs of the numerator and denominator. In the case of Pythagorean triples, this isn't really a problem because the quadrants of the unit circle are symmetric. In the more general cases we will study, we cannot rely on this useful property. Therefore, we will need the function to send $\newcommand{Sgn}{\{+,-\}}\newcommand{QxSgn}[1]{\mathbb{Q}^{#1-1} \times \Sgn^#1} \QxSgn{n}$ to keep track of the signs of the initial components of $\mathbb{Z}^n$.

## The importance of bijection

For the amateur mathematician, it may not be obvious to grasp the importance of the bijection and why it demonstrates that our previous method for finding the solutions to $x^2 + y^2 = z^2$ is exhaustive. This is what we will attempt to explain here.

The definition of a bijective function is a function that associates each element of the codomain with a unique element of the domain. Since this association is unique, we can unambiguously determine an element of the domain from an element of the codomain; the function is invertible. We also know that there are exactly the same number of elements in the domain and the codomain.

This is why the preceding bijection assures us that all solutions are found with the method presented. If this were not the case, one of the elements of the codomain of rational points on the unit circle might not be associated with a point $(a, b)$ in the domain, or two different pairs in the codomain could lead back to the same rational point. However, as we have just seen, all pairs $(a, b)$ in $\mathbb{N}^2$ correspond to a Pythagorean triple $(a^2 - b^2, 2ab, a^2 + b^2)$, which itself corresponds to a rational point $\left( \frac{a^2-b^2}{a^2+b^2}, \frac{2ab}{a^2+b^2} \right)$ on the unit circle and which ultimately returns to the form $(a, b)$.

## Multicomplex numbers

We will begin with a brief review of the definition and properties of multicomplex numbers. For more information, we invite the reader to refer to [the original article by Norbert Fleury](http://www.sciencedirect.com/science/article/pii/S0022247X83714101/pdf?md5=99c473b97d70da5a165a55850a33d7ea&pid=1-s2.0-S0022247X83714101-main.pdf).

To define the multicomplex numbers $\newcommand{MC}{\mathcal{M}\mathbb{C}} \MC_n$, we will determine an imaginary number $e$ such that $e^n = -1$. A multicomplex number $\xi \in \MC_n$ is defined as a linear combination $\sum_{k=0}^{n-1}\xi_k e^k$, where the components $\xi_k$ are real numbers.

Analogous to the norm in complex numbers defined by the root of the determinant of the matrix representation, we also have a pseudo-norm $\norm \xi$. This is not a norm in the usual sense because it does not respect the triangle inequality and it can take a zero or negative value, but it preserves the multiplicative property $\norm {uv} = \norm u \norm v$. For a number $\xi = \sum_{k=0}^{n-1}{\xi_k e^k}$, it is defined by the $n$-th root of the determinant of the matrix $n \times n$, $X = \sum_{k=0}^{n-1}{\xi_k J^k}$, where $J$ is an $n \times n$ matrix such that $J^n = -I$.

$$
J = \begin{pmatrix}
     0 & -1 & 0 & \dots & 0 \\
     0 & 0 & -1 & \dots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
     0 & 0 & 0 & \dots & -1 \\
     1 & 0 & 0 & \dots & 0
\end{pmatrix}
$$

And

$$
X = \begin{pmatrix}
 \xi_0 & -\xi_1 & -\xi_2 & \dots & -\xi_{n-1} \\
 \xi_{n-1} & \xi_0 & -\xi_1 & \dots & -\xi_{n-2} \\
 \vdots & \vdots & \vdots & \ddots & \vdots \\
 \xi_2 & \xi_3 & \xi_4 & \dots & -\xi_1 \\
 \xi_1 & \xi_2 & \xi_3 & \dots & \xi_0
\end{pmatrix}
$$

The components of this matrix are $X_{i,j} = s(i - j) \xi_{j - i}$, where $s(x) = -1$ if $x < 0$, and $1$ otherwise. By convention, when $j < i$, $j - i = n + j - i$. Using the [Leibniz formula for the determinant of a square matrix](https://fr.wikipedia.org/wiki/Formule_de_Leibniz)

$$
\begin{align*}
\norm \xi & = \sqrt[n]{\sum_{\sigma \in S_n}{ \epsilon(\sigma) \prod_{j = 1}^{n}{ s\left(j - \sigma(j) \right) \xi_{\sigma(j) - j}}}}
\end{align*}
$$

## Hyper Pythagorean tuples

We can generalize the method described at the beginning of this article for finding Pythagorean triples in a Euclidean space to a method for finding the (n+1)-tuples of integers that are solutions to the Diophantine equation $\norm \xi^n = \tau^n$, where $\xi$ is an element of $\MC_n$ with integer coefficients and $\tau$ is a positive integer. We will call these tuples hyper-Pythagorean, to distinguish them from tuples in the Euclidean space $\mathbb{R}^n$ that would, for example, be solutions to the Diophantine equation $x_0^2 + x_1^2 + \dots + x_{n-1}^2 = y^2$.

The motivation behind this idea is that if there exists a solution to the equation $x^n + y^n = z^n$, then it will also be a solution to $\norm \xi^n = \tau^n$ (prove the proof). If we prove that there is no such solution for $\norm \xi^n = \tau^n$, then we prove Fermat's Last Theorem.

We will begin by showing the special case $n = 3$ to warm up. We aim to prove that there is no integer triple $(x, y, z)$ such that $x^3 + y^3 = z^3$. To do this, we will use multicomplex numbers of order 3, $\MC_3$. Let's take an element $\xi \in \MC_3$, where $\xi = \xi_0 + \xi_1 e + \xi_2 e^2$ and all $\xi_j \in \mathbb{Z}$. The norm of $\xi$ is $\norm \xi = \sqrt[3]{\xi_0^3 - \xi_1^3 + \xi_2^3 + 3\xi_0\xi_1\xi_2}$. Since the norm is multiplicative we have that the norm of $\xi^3$ is $\norm{\xi^3} = \xi_0^3 - \xi_1^3 + \xi_2^3 + 3\xi_0\xi_1\xi_2$.

Let's expand $\xi^3$ using [Newton's multinomial formula](https://fr.wikipedia.org/wiki/Formule_du_multin%C3%B4me_de_Newton):

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

Let

$$
\begin{align*}
\beta_0 & = \xi_0^3 - \xi_1^3 + \xi_2^3
  - 6 \xi_0 \xi_1 \xi_2\\
\beta_1 & = 3 \left(
      xi_0^2 xi_1
    - xi_1^2 xi_2
    - xi_0 xi_2^2
    \right) \\
\beta_2 & = 3 \left(
      xi_0^2 xi_2
    + xi_0 xi_1^2
    - xi_2^2 xi_1
    \right)
\end{align*}
$$

Thus, $\xi^3 = \beta_0 + \beta_1 e + \beta_2 e^2$ is a new multicomplex number belonging to $\MC_3$. Let's call it $\xi'$. Substituting the coefficients $\beta_j$ into the norm formula, we obtain $\norm {\xi'} = \sqrt[3]{\beta_0^3 - \beta_1^3 + \beta_2^3 + 3\beta_0\beta_1\beta_2}$. Recall that we previously determined that $\norm {\xi^3} = \xi_0^3 - \xi_1^3 + \xi_2^3 + 3\xi_0\xi_1\xi_2$. Let $\tau = \norm {\xi^3}$ and observe that it is an integer. Thus, by raising $\norm{\xi^3}$ to the cube, we obtain

$$
\begin{gather*}
\norm{\xi'}^3 = \norm{\xi^3}^3 \\
\left( \sqrt[3]{\beta_0^3 - \beta_1^3 + \beta_2^3 + 3\beta_0\beta_1\beta_2} \right)^3 = \tau^3 \\
\beta_0^3 - \beta_1^3 + \beta_2^3 + 3\beta_0\beta_1\beta_2 = \tau^3
\end{gather*}
$$

where, all the $\beta_j$ are integers and $\tau$ is an integer. Therefore, $(\beta_0, \beta_1, \beta_3, \tau)$ is a hyper-Pythagorean quadruple because $\norm {\xi'}^3 = \tau^3$.

As with Pythagorean triples, we wonder if there are other hyper-Pythagorean quadruplets that cannot be found by this method, and we will see that the answer is negative.

## General Case in Bulk

Similarly, the previous method can be applied to find (n+1)-tuples of numbers that satisfy the Diophantine equation $\norm{\xi}^n = \tau^n$, for $\xi \in \MC_n$ with integer coefficients and $\tau$ a positive integer. We will now show that all Diophantine solutions of this equation can be found in this way.

We first take an element $\xi \in \MC_n$ with integer coefficients:

$$
\mathbb{Z}^n \xrightarrow{(\xi_0, \xi_1, \dots, \xi_{n-1}) \mapsto \sum_{j=0}^{n-1}\xi_j e^j} \MC_n
$$

Next, we raise $\xi$ to the power $n$:

$$
 \MC_n\xrightarrow{\xi \mapsto \xi^n} \MC_n \times \Sgn^n
$$

At this stage, we have a number $\xi' = \xi^n$, $\xi' \in \MC_n$ and $\xi' = \beta_0 + \beta_1e + \dots + \beta_{n-1}e^{n-1}$, where the terms $\beta_j$ are functions $\mathbb Z ^n \rightarrow \mathbb Z$, $\beta_j(\xi_0, \xi_1, \dots, \xi_{n-1})$ dependent on the components of $\xi$. We also have a solution to the Diophantine equation $\norm {\xi'}^n = \tau^n$ by setting $\tau = \norm{\xi^n}$.

The functions $\beta_j$ are homogeneous because they result from raising $\xi$ to the power $n$. Therefore, by multiplying $\xi^n$ with $\frac{1}{\xi_0^n}$

$$
 \MC_n \times \Sgn^n \xrightarrow{
   \sum_{j=0}^{n-1}{\beta_j(\xi_0, \xi_1, \dots, \xi_{n-1})e^j}
   \mapsto
   \sum_{j=0}^{n-1}{\beta_j(1, \frac{\xi_1}{\xi_0}, \dots, \frac{\xi_{n-1}}{\xi_0})e^j}
 } \MC_n 
$$

$$
 \MC_n \xrightarrow{
\sum_{j=0}^{n-1}{\beta_j(1, \frac{\xi_1}{\xi_0}, \dots, \frac{\xi_{n-1}}{\xi_0})e^j}
\mapsto (\frac{\xi_1}{\xi_0}, \dots, \frac{\xi_{n-1}}{\xi_0})} \mathbb Q ^{n-1}
$$

$$
\mathbb Q^{n-1} \xrightarrow{(\frac{\xi_1}{\xi_0}, \dots, \frac{\xi_{n-1}}{\xi_0}) \mapsto (\xi_0, \xi_1, \dots, \xi_{n-1})} \mathbb{Z}^n
$$

This is in fact a bijection between $\mathbb{Z}^n$ and the rational points of the unit surface of $\MC_n$. It is impossible to satisfy that two terms $b_j$ and $b_k$ are strictly positive, and all other terms equal to $0$ (to be proven). Thus, we exclude the possibility of the existence of a number $\xi \in \MC_n$ where $\norm \xi ^n = y^n + z^n$, and this concludes the proof.
