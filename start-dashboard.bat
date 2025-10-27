@echo off
echo ========================================
echo   Sentiment Analysis Dashboard Starter
echo ========================================
echo.
echo Checking Node.js installation...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js found: 
node --version
echo.

cd /d "%~dp0"

echo Current directory: %CD%
echo.

if not exist "node_modules\" (
    echo Installing dependencies for the first time...
    echo This may take 2-5 minutes...
    echo.
    call npm install
    if errorlevel 1 (
        echo.
        echo ERROR: npm install failed!
        pause
        exit /b 1
    )
    echo.
    echo ========================================
    echo Dependencies installed successfully!
    echo ========================================
    echo.
)

echo Starting development server...
echo The dashboard will open at http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

call npm start
