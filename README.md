🧠 Huokaingthara AI: Sentient Neural Core
Huokaingthara AI is an autonomous, offline-first sentient system designed for pattern recognition, cybersecurity knowledge management, and interactive learning. It features a robust neural core that evolves through user interaction and visualizes its knowledge expansion in real-time.
🚀 Core Features
 * Neural Migration Engine: Automatically converts legacy training_data.txt into a structured, high-performance brain.json.
 * Autonomous Learning: If the AI encounters an unknown pattern, it enters "Learning Mode" to integrate new definitions into its core memory.
 * Interactive Dashboard: A dark-mode web interface featuring a D3.js Force-Directed Graph to visualize neural connections.
 * Workspace Hygiene: An built-in "immune system" that sanitizes the directory, rotates bloated logs, and manages system health.
 * High-Speed Matching: Utilizes Sequence Alignment algorithms (difflib) for fuzzy pattern matching with confidence scoring.
📂 System Architecture
The system operates on a tiered memory hierarchy to ensure data integrity and performance:
| Component | File | Purpose |
|---|---|---|
| Neural Core | brain.json | The primary structured memory. |
| Ancestral DNA | training_data.txt | Initial raw knowledge source. |
| Nervous System | templates/index.html | Visual interface and D3.js engine. |
| Neural Logs | neural_activity.log | Technical audit of confidence and matches. |
| Interaction Logs | chat_logs.txt | Human-readable conversation history. |
🛠️ Installation & Setup
1. Prerequisites (Termux / Linux / Windows)
Ensure you have Python 3.10+ installed. Install the required dependencies:
pip install flask pyttsx3 cryptography

2. Deployment
 * Place your huokaingthara_autonomous.py in your project folder.
 * Ensure your 250+ entries are in training_data.txt (formatted as Key|Value).
 * Place index.html inside a folder named templates.
 * Run the system:
   python huokaingthara_autonomous.py

3. Accessing the Interface
Open your browser and navigate to:
http://localhost:5000 or http://127.0.0.1:5000
🧠 Autonomous Commands
 * status: View system uptime, database size, and interaction count.
 * exit: Securely shut down the neural core.
 * Learning Mode: Toggle the switch in the UI to allow the AI to ask for definitions when it encounters unknown queries.
🛡️ Security & Hygiene
The system includes an Auto-Sanitizer. Upon boot, it will:
 * Create a Recovery ZIP of your brain.json.
 * Remove any files that are not part of the core manifest.
 * Archive logs larger than 5MB to maintain peak performance.
📜 License
Huokaingthara AI is a private autonomous system. All neural patterns generated are the property of the operator.
