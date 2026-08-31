import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

match = re.search(r'(<div>\s*<h2[^>]*>\s*1\. 🟢 JavaScript Basics</h2>[\s\S]*?)(?=<section\s+class="glass-card)', html, re.DOTALL | re.IGNORECASE)
if match:
    old_sec = match.group(1)
    new_sec = '<section class="glass-card mb-10 p-8 md:p-10 rounded-[32px] relative overflow-hidden group border border-white/5 shadow-2xl pointer-events-auto bg-gradient-to-br from-white/[0.02] to-transparent">\n' + old_sec + '</section>\n'
    html = html.replace(old_sec, new_sec)
    print("Wrapped Section 1 successfully.")
else:
    print("Could not find section 1")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
