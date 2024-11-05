---
title: launch.json
layout: default
parent: Cấu hình
nav_order: 3
---
Nội dung file `launch.json`, đặt bên trong thư mục `.vscode` nằm ở thư mục gốc của `workspace`.
```json
{	
	"version": "0.2.0",
    "configurations": [
        {
            "name": "C/C++: g++.exe build and debug active file",
            "type": "cppdbg",
            "request": "launch",
            "program": "${fileDirname}\\${fileBasenameNoExtension}.exe",
            "args": [],
            "stopAtEntry": false,
            "cwd": "${fileDirname}",
            "environment": [],
            "externalConsole": false,			
            "MIMode": "gdb",
            "miDebuggerPath": "gdb",
            "setupCommands": [
                {
                    "description": "Enable pretty-printing for gdb",
                    "text": "-enable-pretty-printing",
                    "ignoreFailures": true
                },
                {
                    "description": "Set Disassembly Flavor to Intel",
                    "text": "-gdb-set disassembly-flavor intel",
                    "ignoreFailures": true
                }
            ],
            "existing": false,
            "preLaunchTask": "C/C++: g++.exe build active file with icon", 
            "detail": "preLaunchTask: Compile icon resource",
            "isDefault": true
        }
    ]
}
```
