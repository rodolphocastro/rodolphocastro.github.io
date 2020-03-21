Remove-Item .\css\ -Recurse -Force
Remove-Item .\js\ -Recurse -Force
Remove-Item .\img\ -Recurse -Force
Remove-Item .\favicon.ico -Force
Remove-Item .\index.html -Force

yarn install

yarn build

Move-Item -Path .\dist\** -Destination .