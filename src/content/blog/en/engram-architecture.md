---
title: "How I Designed Engram's Dual-Process Architecture"
description: "The architectural evolution from all-Python to TypeScript-driven embedding, and the reasoning behind every design decision."
date: 2026-02-14
tags: ["architecture", "vscode", "typescript", "python"]
lang: en
readingTime: 12
---

## The Problem

When building "memory" for AI coding assistants, the first question I faced was: **where should embeddings be generated?**

The most intuitive approach was to do everything in Python — Python has the best AI ecosystem, ChromaDB is a Python library, and `google-generativeai` has a Python SDK. Seems perfect.

But once I started running it, problems emerged.

## V1: All-Python Approach

```python
# Original vision: Python does everything
class MemoryService:
    def store(self, content, file_path):
        chunks = self.chunker.chunk(content)
        vectors = self.embedding.embed(chunks)  # ← needs network
        self.chromadb.upsert(chunks, vectors)
```

**Issues**:

1. **Split API key management**: Both the VS Code extension (TypeScript) and Python sidecar need to manage Gemini API keys
2. **Python dependency bloat**: Beyond `chromadb`, also need `google-generativeai`, `httpx`, etc.
3. **Debugging difficulty**: Network errors occur in a subprocess, logs are scattered

## V2: TypeScript-Driven Embedding

Core insight: **Let Python only do what it does best — local storage.**

```
TypeScript: call Gemini API → get vectors → send to Python via RPC
Python:     receive vectors → store in ChromaDB (pure local operation)
```

This seemingly simple adjustment brought three major benefits...

> 📝 *This is a sample post. Full content will be added after official launch.*
