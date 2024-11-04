---
title: cpp.json
layout: default
nav_order: 4
---
Snippets template `cppmain` prefix, file `cpp.json` đặt tại `"%appdata%\Roaming\Code\User\snippets\"`.
```json
{
	"C++ Template": {
		"prefix": "cppmain",
		"body": [
			"#include <iostream>",
			"#include <vector>",
			"",
			"int main() {",
			"    std::cout << \"\\\\033c\";",
			"\tstd::cin.sync_with_stdio(0);",
			"\tstd::cin.tie(0);",
			"",
			"\tint n;",
			"\tstd::cin >> n;",
			"",
			"\treturn 0;",
			"}"
		],
		"description": "Template for C++ main file"
	}
}
```
