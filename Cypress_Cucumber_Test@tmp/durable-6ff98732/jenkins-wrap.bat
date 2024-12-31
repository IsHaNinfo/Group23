@echo off 
cmd /c call "H:\Group23\Cypress_Cucumber_Test@tmp\durable-6ff98732\jenkins-main.bat" > "H:\Group23\Cypress_Cucumber_Test@tmp\durable-6ff98732\jenkins-log.txt" 2>&1
echo %ERRORLEVEL% > "H:\Group23\Cypress_Cucumber_Test@tmp\durable-6ff98732\jenkins-result.txt"
