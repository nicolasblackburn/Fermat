#!/usr/bin/env bash
set -e

git checkout gh-pages
git merge main --no-ff --no-edit
node build.js --baseUrl "/Fermat/"
rm -rf docs
cp -r bin/www/ docs/
git add -A
git commit -m "Publish"
git push
git checkout main
