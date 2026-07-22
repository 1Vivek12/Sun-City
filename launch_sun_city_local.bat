@echo off
rem ------------------------------------------------------------
rem  Sun‑City‑main – केवल स्थानीय dev‑सर्वर
rem ------------------------------------------------------------

:: 1️⃣  Node.js का फ़ोल्डर (डिफ़ॉल्ट Windows इंस्टॉल) सेट करें
set "NODEDIR=C:\Program Files\nodejs"

if not exist "%NODEDIR%\node.exe" (
    echo ❌  node.exe नहीं मिला – कृपया Node.js इंस्टॉल करें
    pause
    exit /b 1
)
if not exist "%NODEDIR%\npm.cmd" (
    echo ❌  npm.cmd नहीं मिला – कृपया Node.js इंस्टॉल करें
    pause
    exit /b 1
)

:: 2️⃣  इस प्रोसेस के PATH में Node.js जोड़ें
set "PATH=%NODEDIR%;%PATH%"

:: 3️⃣  स्क्रिप्ट की डायरेक्टरी (project root) पर स्विच करें
cd /d "%~dp0"

:: 4️⃣  पुराना node_modules हटाएँ (यदि मौजूद हो)
if exist node_modules (
    echo 🗑️  मौजूदा node_modules हटाया जा रहा है …
    rd /s /q node_modules
    if errorlevel 1 (
        echo    ❗  हटाने में समस्या – कोई फ़ाइल लॉक हो सकती है
        pause
        exit /b 1
    )
)

:: 5️⃣  npm dependencies इंस्टॉल करें
echo 📦  npm install चल रहा है …
"%NODEDIR%\npm.cmd" install --force
if errorlevel 1 (
    echo    ❌  npm install फ़ेल हो गया
    pause
    exit /b 1
) else (
    echo    ✅  डिपेंडेंसी इंस्टॉल हो गई
)

:: 6️⃣  Next.js dev‑सर्वर को नई कंसोल विंडो में चलाएँ
start "Next.js dev server" cmd /c "cd /d "%~dp0" && "%NODEDIR%\npm.cmd" run dev"
rem Wait a few seconds for the server to start, then open the default browser
timeout /t 5 >nul && start "" "http://localhost:3000"

echo.
echo 🎉  सेट‑अप पूरा – अब अपने ब्राउज़र में
echo    http://localhost:3000
echo खोलें और साइट देखें
pause
