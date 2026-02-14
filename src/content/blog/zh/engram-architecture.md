---
title: "我如何设计 Engram 的双进程架构"
description: "从全 Python 到 TypeScript 驱动 Embedding 的架构演变，以及每一个设计决策背后的推演。"
date: 2026-02-14
tags: ["architecture", "vscode", "typescript", "python"]
lang: zh
readingTime: 12
---

## 起因

在给 AI 编码助手做"记忆"的时候，我面对的第一个问题是：**Embedding 在哪里生成？**

最直觉的方案是全部放在 Python 端—— Python 的 AI 生态最好，ChromaDB 是 Python 库，`google-generativeai` 也有 Python SDK。看起来很完美。

但实际跑起来，问题就来了。

## V1：全 Python 方案

```python
# 原来的设想：Python 做所有事
class MemoryService:
    def store(self, content, file_path):
        chunks = self.chunker.chunk(content)
        vectors = self.embedding.embed(chunks)  # ← 这里需要网络
        self.chromadb.upsert(chunks, vectors)
```

**问题清单**：

1. **API Key 管理分裂**：VS Code 扩展（TypeScript）和 Python sidecar 都需要管理 Gemini API Key
2. **Python 依赖膨胀**：除了 `chromadb`，还要装 `google-generativeai`、`httpx` 等网络库
3. **调试困难**：网络错误发生在子进程里，日志分散

## V2：TypeScript 驱动 Embedding

核心思路：**让 Python 只做最擅长的事——本地存储。**

```
TypeScript: 调 Gemini API → 拿到向量 → 通过 RPC 发给 Python
Python:     收到向量 → 存入 ChromaDB（纯本地操作）
```

这个看似简单的调整，带来了三个好处...

> 📝 *这是一篇示例文章。完整内容将在正式发布后补充。*
