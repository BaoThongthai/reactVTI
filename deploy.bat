@echo off
echo Running Git commands...
git add .
git commit -m "fixloicss"
git push origin master

echo Running NPM command...
npm run deploy

echo Batch script completed.
pause
