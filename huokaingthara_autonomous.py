import os, json, difflib, subprocess, sys, shutil
from datetime import datetime
from flask import Flask, request, jsonify, render_template

class HuokaingtharaFinal:
    def __init__(self):
        self.files = {
            "brain": "brain.json",
            "training": "training_data.txt",
            "neural_log": "neural_activity.log",
            "mem_log": "ai_memory_log.txt",
            "chat_log": "chat_logs.txt",
            "index": "templates/index.html",
            "launcher_win": "launch_ai.bat",
            "launcher_lin": "launch_ai.sh"
        }
        self.knowledge = {}
        # Run cleanup immediately on boot
        self.sanitize_workspace()
        self.boot_sequence()

    def sanitize_workspace(self):
        """Removes any file NOT in the core manifest or current script."""
        print("[!] Cleaning workspace of unused files...")

        # Files that MUST stay
        allowed_files = list(self.files.values()) + [os.path.basename(__file__)]
        allowed_dirs = ["templates", "__pycache__"]

        for item in os.listdir("."):
            # Skip the script itself and allowed core files
            if item in allowed_files or item in allowed_dirs:
                continue

            try:
                if os.path.isfile(item):
                    os.remove(item)
                    print(f"[-] Removed unused file: {item}")
                elif os.path.isdir(item) and item not in allowed_dirs:
                    shutil.rmtree(item)
                    print(f"[-] Removed unused directory: {item}")
            except Exception as e:
                print(f"[!] Could not remove {item}: {e}")

    def boot_sequence(self):
        if os.path.exists(self.files["training"]) and not os.path.exists(self.files["brain"]):
            self.migrate_and_optimize()
        if os.path.exists(self.files["brain"]):
            with open(self.files["brain"], 'r', encoding='utf-8') as f:
                self.knowledge = json.load(f)

    def migrate_and_optimize(self):
        print("[*] Migrating training_data.txt...")
        with open(self.files["training"], 'r', encoding='utf-8') as f:
            for line in f:
                if '|' in line:
                    k, v = line.strip().split('|', 1)
                    self.knowledge[k.lower().strip()] = v.strip()
        self.save_state()

    def save_state(self):
        with open(self.files["brain"], 'w', encoding='utf-8') as f:
            json.dump(self.knowledge, f, indent=4)

# --- Server Logic remains the same ---
