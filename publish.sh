#!/usr/bin/env bash
set -e

git checkout gh-pages
git merge main --no-ff --no-edit
git push
git checkout main
