<?php
// Configuration
$sourceDir = __DIR__ . '/../src/static';       // Répertoire source à scanner
$outputDir = __DIR__ . '/../www';     // Répertoire où générer les HTML

/**
 * Fonction récursive pour parcourir un répertoire
 */
function compilePhpToHtml($dir, $outputBase, $relativePath = '') {
    $fullPath = rtrim($dir, '/') . '/' . $relativePath;
    $items = scandir($fullPath);

    foreach ($items as $item) {
        if ($item === '.' || $item === '..') continue;

        $itemPath = $fullPath . '/' . $item;
        $relativeItemPath = ltrim($relativePath . '/' . $item, '/');

        if (is_dir($itemPath)) {
            // Recurse
            compilePhpToHtml($dir, $outputBase, $relativeItemPath);
        } elseif (is_file($itemPath) && pathinfo($itemPath, PATHINFO_EXTENSION) === 'php') {
            // Générer le fichier HTML
            $htmlOutputPath = $outputBase . '/' . substr($relativeItemPath, 0, -4) . '.html';
            $htmlDir = dirname($htmlOutputPath);

            if (!is_dir($htmlDir)) {
                mkdir($htmlDir, 0777, true);
            }

            // Exécuter le fichier PHP et capturer le rendu
            ob_start();
            include $itemPath;
            $htmlContent = ob_get_clean();

            file_put_contents($htmlOutputPath, $htmlContent);
            echo "Compiled: $relativeItemPath → $htmlOutputPath\n";
        }
    }
}

// Crée le répertoire de sortie s'il n'existe pas
if (!is_dir($outputDir)) {
    mkdir($outputDir, 0777, true);
}

// Lancer la compilation
compilePhpToHtml($sourceDir, $outputDir);

echo "Compilation terminée.\n";
?>
