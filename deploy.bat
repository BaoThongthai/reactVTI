@echo off
echo Running Git commands...
git add .
git commit -m "autopost"
git push origin master

echo Running NPM command...
npm run deploy

echo Batch script completed.
pause
