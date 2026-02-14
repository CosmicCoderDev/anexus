---
title: "Engram"
description: "本地语义记忆系统，让 AI 编码助手拥有跨会话记忆。TypeScript + Python 双进程架构。"
tags: ["TypeScript", "Python", "ChromaDB", "VS Code"]
repo: "https://github.com/CosmicCoderDev/engram"
featured: true
order: 1
---

## 为什么做这个？

AI 编码助手（Gemini、Copilot 等）没有跨会话记忆。Engram 在本地持续积累代码上下文，保存文件时自动分块、向量化、存入 ChromaDB。查询时用余弦相似度检索最相关的代码片段。

## 架构要点

- **双进程模型**：TypeScript 负责 Embedding（调 Gemini API），Python Sidecar 负责 ChromaDB 存储
- **JSON-RPC over stdio**：无端口、低延迟、生命周期与扩展绑定
- **智能分块**：Python AST、JS/TS 正则、滑窗回退
- **零网络 Python**：Sidecar 无任何网络依赖，只有一个 `chromadb` 包
