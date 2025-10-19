#!/usr/bin/env bash
set -e

git checkout gh-pages
git merge main --no-ff --no-edit
node build.js
git add -u
git commit -m "Publish"
git push
git checkout main
