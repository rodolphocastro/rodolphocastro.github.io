Remove-Item .\css\ -Recurse -Force
Remove-Item .\js\ -Recurse -Force
Remove-Item .\img\ -Recurse -Force
Remove-Item .\favicon.ico -Force
Remove-Item .\index.html -Force

npm install

npm run build

Move-Item -Path .\dist\** -Destination .