@echo off
echo.
echo 🎨 Q-rator - Veridian-Q Media Library
echo ======================================
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo 📦 Installing dependencies...
    call npm install
    echo.
)

echo 🚀 Starting development server...
echo.
call npm run dev

pause
