# 🧠 Huokaingthara AI: Sentient Neural Core
**An autonomous, offline-first knowledge management & pattern recognition engine.**

[![Status](https://img.shields.io/badge/Status-Active-success.svg)](#)
[![Security](https://img.shields.io/badge/Security-Sanitized-blue.svg)](#)
[![Platform](https://img.shields.io/badge/Environment-Termux%20|%20Linux%20|%20Windows-lightgrey.svg)](#)

Huokaingthara AI is a local-first neural architecture designed for high-speed information retrieval and cybersecurity knowledge mapping. Unlike cloud-based LLMs, it operates entirely within your local environment, ensuring total privacy and data sovereignty. It features a dynamic D3.js visualization layer to map "thought" connections in real-time.

---

## ⚡ Special Abilities (Unique Capabilities)

### 1. **Neural Migration & Evolutionary Memory**
The system features a **Self-Evolving Schema**. It can ingest legacy unstructured data (`training_data.txt`) and migrate it into a high-performance `brain.json` structure. It doesn't just store data; it optimizes it for retrieval speed.

### 2. **Autonomous Immune System (Workspace Hygiene)**
The AI manages its own host environment. Upon boot, it performs "System Hygiene":
* **Auto-Sanitization:** Identifies and removes non-manifest files to prevent directory clutter.
* **Log Rotation:** Automatically archives bloated logs to maintain disk performance.
* **Integrity Backups:** Generates recovery snapshots of the Neural Core (`brain.json`) before every session.

### 3. **Fuzzy-Logic Pattern Matching**
Using **Sequence Alignment Algorithms**, the AI can understand misspelled or partial queries. It calculates a "Confidence Score" for every response, ensuring that the user knows exactly how accurate the matched data is.

### 4. **Live Neural Mapping (D3.js Core)**
The AI visualizes its "brain" through a **Force-Directed Graph**. As new patterns are learned, the web interface updates dynamically, allowing the operator to see the density and growth of their knowledge base visually.

---

## 📂 System Architecture
The system operates on a tiered memory hierarchy:

| Component | File | Purpose |
| :--- | :--- | :--- |
| **Neural Core** | `brain.json` | The primary structured memory. |
| **Nervous System** | `index.html` | D3.js Engine & Web Visualizer. |
| **Immune System** | `auto_sanitizer` | Security and maintenance module. |
| **Audit Logs** | `neural_activity.log` | Technical audit of confidence and matches. |

---

## 🛠️ Deployment & Usage

1. **Environment Setup:**
   ```bash
   pip install flask pyttsx3 cryptography
Initialization: Place your training_data.txt (Format: Key|Value) in the root directory and run:

Bash
python huokaingthara_autonomous.py
Interface: Access the Neural Dashboard at http://localhost:5000.

🛡️ Security Statement
Huokaingthara AI is an offline tool.

Data Privacy: No data is transmitted to external servers.

No Credential Harvesting: This system is for knowledge management and does not request or store passwords, API keys, or personal identification.

Open Source Transparency: All logic is contained within the local Python script for user audit.
