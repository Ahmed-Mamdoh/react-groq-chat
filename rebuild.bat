@echo off
echo 🏗️ Rebuilding React Groq Chat...

REM Clean dist folder
if exist dist rmdir /s /q dist

REM Build with tsup
echo Building with tsup...
npx tsup

echo ✅ Rebuild complete!
echo 📁 Files in dist:
dir dist
pause