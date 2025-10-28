import numpy as np
import matplotlib.pyplot as plt
from skimage import measure

# Define the 3D grid
x = np.linspace(-2, 2, 50);
y = np.linspace(-2, 2, 50);
z = np.linspace(-2, 2, 50);
X, Y, Z = np.meshgrid(x, y, z);

# Define implicit function
title = "X**3 + Y**3 + Z**3 - 3*X*Y*Z = 1"
F = X**3 + Y**3 + Z**3 - 3*X*Y*Z - 1
filename = "unit-surface-3d.png"
# F = (-X)**3 + Y**3 + Z**3 - 3*(-X)*Y*Z - 1
# F = X**3 + (-Y)**3 + Z**3 - 3*X*(-Y)*Z - 1
# F = X**3 + Y**3 + (-Z)**3 - 3*X*Y*(-Z) - 1
# F = (-X)**3 + (-Y)**3 + Z**3 - 3*(-X)*(-Y)*Z - 1
# F = (-X)**3 + Y**3 + (-Z)**3 - 3*(-X)*Y*(-Z) - 1
# F = X**3 + (-Y)**3 + (-Z)**3 - 3*X*(-Y)*(-Z) - 1
# F = (-X)**3 + (-Y)**3 + (-Z)**3 - 3*(-X)*(-Y)*(-Z) - 1

# Use marching cube
verts, faces, normals, values = measure.marching_cubes(F, level=0)

# Transform vertices
verts_transformed = np.array([
    [x[int(v[0])], y[int(v[1])], z[int(v[2])]]
    for v in verts
])

# Plot surface
fig = plt.figure(figsize=(8, 6))
ax = fig.add_subplot(111, projection='3d')

# Create surface mesh
ax.plot_trisurf(verts_transformed[:, 0], verts_transformed[:, 1], verts_transformed[:, 2], triangles=faces, cmap='Spectral', lw=0.5)

# Set plot labels
ax.set_xlabel("X")
ax.set_ylabel("Y")
ax.set_zlabel("Z")
ax.set_title(title)

plt.gca().invert_yaxis()

# Save plot
plt.tight_layout()
plt.savefig("bin/www/" + filename)

