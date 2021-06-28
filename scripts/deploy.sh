#!/usr/bin/env bash
yarn build &&
cd build &&
git init &&
git add . &&
git commit -m "deploy" &&
git remote add origin git@github.com:wantingjun/wanwan-money-accounting-website.git &&
#git remote add origin git@gitee.com:tingjunwan/wanwan-money-accounting-website.git &&
git branch -M main &&
git push -u origin main -f
cd -
