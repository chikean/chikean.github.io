#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# if you are deploying to a custom domain
echo 'chrischow.me' > docs/CNAME

git init
git add -A
git commit -m ':rocket: Deploy new build'

git push

cd -