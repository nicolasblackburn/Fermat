# Fermat's last theorem

## Motivation

In 1995, the publication of Andrew Wiles' proof of Fermat's Last Theorem took the mathematical world by surprise. It was based on the theory of elliptic curves and the hard work of many mathematicians before him. It is a 108-page document that uses sophisticated number theory tools.

In this article, I will try to demonstrate Fermat's theorem by an easier proof approach, using a generalization of complex numbers introduced by Norbert Fleury in 1993, multicomplex numbers.

To do this, I will extend Fleury's theory, by introducing hyperbolic multicomplex numbers, then I will generalize the method of finding rational points on the unit circle to unit surfaces associated with multicomplex numbers. Finally, we will see that the equation $a^n + b^n = c^n$ cannot be satisfied.

My wish is that this proof is accessible to a non-expert audience interested in mathematics and with a basic knowledge of complex numbers and linear algebra. It is quite possible that I was wrong, even extremely likely, because after all I am only an amateur. In any case, at a minimum, this document can serve as an introduction to multicomplex numbers and inspire other amateurs and non-amateurs.

## Introduction to rational points on the unit circle

The rational points on the unit circle $x^2 + y^2 = 1$ allow us to find the solutions to the diophantine equation $u^2 + v^2 = w^2$. Indeed if $x = \frac{a}{b}$ and $y = \frac{c}{d}$, then $(ad)^2 + (bc)^2 = (bd)^2$.

A systematic method for finding solutions to the diophantine equation $u^2 + v^2 = w^2$ consists of taking a pair of strictly positive integers $(a, b) \in \mathbb{N}^2$ and sending them into the complex numbers by the transformation $(a,b) \mapsto a + bi$. Let $x = a + bi$. The norm of $x$ is $\sqrt{a^2 + b^2}$. By squaring $x$, we obtain the assurance that the norm of $x^2$ is integer, equal to $a^2 + b^2$. This works because the norm of $x$ squared is in fact its determinant. 

Let's see how this works. We can represent $i$ by the matrix 

$$
J = \begin{pmatrix}
0 & -1 \\
1 & 0 \\
\end{pmatrix}
$$

By replacing $i$ by $J$ and multiplying the term $a$ by the identity matrix $I$ in $a+bi$ we obtain a matrix $X = aI + bJ$. The determinant of this matrix is ​​exactly the square of the norm of $x$, $a^2 + b^2$.

Let's return to our solution of the diophantine equation. We have determined that the norm of $x^2$ is $a^2 + b^2$. Since $x^2 = (a^2 - b^2) + 2abi$, we obtain the following solution to the equation $u^2 + v^2 = w^2$:

$$
\begin{align*}
u = & a^2 - b^2 \\
v = & 2ab \\
w = & a^2 + b^2
\end{align*}
$$ 

We are not completely finished because how can we be sure that we can find all the solutions with this method? To demonstrate that this is indeed the case, we will project this point $x^2$ in the complex plane onto the unit circle by dividing its coordinates by its norm.

Now consider the line which crosses it and passes through the origin of the plane. The slope of this line is $\frac{2ab}{a^2-b^2}$. Another representation of this rational number is $\frac{2\frac{b}{a}}{1 - \frac{b}{a}^2}$. Thus the loop is closed with a bijection in $\mathbb{N}^2$, defined by the application

$$
\frac{2\frac{b}{a}}{1 - \frac{b}{a}^2}
\mapsto
(a, b)
$$

## The importance of bijection

For the amateur mathematician, it may not be obvious to understand the importance of bijection and why it demonstrates that our previous method for finding solutions to $u^2 + v^2 = w^2$ is exhaustive. This is what we will try to explain here.

The definition of a bijective map is a map which associates a unique element of the starting set with each element of the arrival set. Since this association is unique, we can unambiguously determine the element of the starting set from an element of the ending set, the application is invertible. We also know that there are exactly the same number of elements in the starting set and the ending set.

It is for this reason that the previous bijection assures us that all the solutions are found with the method presented. If this were not the case, one of the elements of the arrival set might not be associated with a rational point on the unit circle. However, as we have just seen, this is not the case.

## Hyperbolic multicomplex numbers


We will first give a quick reminder of the definition and properties of multicomplex numbers. For more information we invite the reader to refer to the publication by Norbert Fleury.

To define the multicomplex numbers $\mathcal{M}\mathbb{C}_n$, we will determine an imaginary number $i$ such that $i^n = -1$. A multicomplex number $x \in \mathcal{M}\mathbb{C}_n$ is defined as a linear combination $\sum_{k=0}^{n-1}x_k i^k$, where the coefficients $x_k$ are real numbers.

Analogous to the norm in complexes defined by the root of the determinant, we also have a pseudo-norm. This is not a usual standard because it does not respect the inequality of the triangle and it can take a zero or negative value. For a number $x = \sum_{k=0}^{n-1}{x_k i^k}$, it is defined by the $n$-th root of the determinant of the matrix $\sum_{k=0}^{n-1}{x_k J^k}$, where $J$ is a matrix such that $J^n = -I$.

We can now introduce the hyperbolic multicomplex numbers $\mathcal{M}\mathbf{H}_n$, which are to multicomplex numbers what hyperbolic numbers are to complex numbers. We define a term $i$ such that $i^n = 1$. A number $x \in \mathcal{M}\mathbf{H}_n$ is the linear combination $\sum_{k=0}^{n-1}x_k i^k$ with coefficients $x_k$ in $\mathbb{R}$. The pseudo norm is defined in the same way as for multicomplex numbers. We take the $n$-th root of the determinant of the matrix $\sum_{k=0}^{n-1}{x_k J^k}$, where $J^n = I$.

## Rational points on a multicomplex unit surface

$\det X = 1$.

## Final demonstration

---
### Potpourri of notes to order

$$
\mathbb{N}^n \xrightarrow{(x_0, x_1, \dots, x_{n-1}) \mapsto \sum_{j=0}^{n-1}x_j i^j} \mathcal{M}\mathbf{H}_n 
$$

For hyperbolic multicomplex numbers $\mathcal{M}\mathbf{H}_n$, we introduce an imaginary element $i^n = 1$ and we define a pseudo-norm $|x| = \det x$, analogous to the Euclidean norm in dimension $2$. We have $\det x = \sum_{j=0}^{n-1}x_{j}^n + f(x_0, x_1, \dots, x_{n-1})$ and $|x| \in \pm \mathbb{N}_0$. Note that $f(x_0, x_1, \dots, x_{n-1}) = 0$ if $n-2$ terms or more are equal to $0$. 

$$
 \mathcal{M}\mathbf{H}_n\xrightarrow{x \mapsto x^n} \mathcal{M}\mathbf{H}_n 
$$

At this stage, no number $x^n = a_0 + a_1i + \dots + a_{n-1}i^{n-1}$ can satisfy strictly positive $a_j$ and $a_k$, and all other terms equal to $0$. It can be demonstrated as follows.  

This is the specific reason why we choose hyperbolic multicomplex numbers, and not classical multicomplexes. Because by choosing hyperbolic multicomplexes, we ensure that the terms in $g_j$ are all positive, therefore can only be equal to zero if at least $n-1$ terms $x_j$ are also equal to zero. So $\det x^n = (\det x)^n = g_j^n + g_k^n + f(g_0, g_1, \dots, g_{n-1})$ where $f(g_0, g_1, \dots, g_{n-1}) \neq 0$.


$$
 \mathcal{M}\mathbf{H}_n \xrightarrow{
\sum_{j=0}^{n-1}{g_j(x_0, x_1, \dots, x_{n-1})i^j}
\mapsto
\sum_{j=0}^{n-1}{g_j(1, \frac{x_1}{x_0}, \dots, \frac{x_{n-1}}{x_0})i^j}
} \mathcal{M}\mathbf{H}_n  
$$

The functions $g_0, g_1, \cdots, g_{n-1}$ are homogeneous because they result from the multiplication of the terms of $x$ in $x^n$.

$$
 \mathcal{M}\mathbf{H}_n\xrightarrow{ 
\sum_{j=0}^{n-1}{g_j(1, \frac{x_1}{x_0}, \dots, \frac{x_{n-1}}{x_0})i^j}
\mapsto (\frac{x_1}{x_0}, \dots, \frac{x_{n-1}}{x_0})} \mathbb{Q}_{n-1}  
$$

$$
\mathbb{Q}_{n-1} \xrightarrow{(\frac{x_1}{x_0}, \dots, \frac{x_{n-1}}{x_0}) \mapsto (x_0, x_1, \dots, x_{n-1})} \mathbb{N}_n
$$

This is in fact a bijection between a subset $S \subset \mathbb{Q}_{n-1}$ and the rational points of the unit surface of $\mathcal{M}\mathbf{H}_n$. Thus, we exclude the possibility of the existence of a number $x \in \mathcal{M}\mathbf{H}_n$ where $(\det x)^n = y^n + z^n$ and this concludes the proof.