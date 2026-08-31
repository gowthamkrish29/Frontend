import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Fix the main background washing out (remove backdrop-blur and semi-transparency)
html = html.replace('bg-darkBg/50 backdrop-blur-3xl relative', 'bg-transparent relative')

# 2. Add glass-card to the first section (JavaScript Basics)
# It starts at: <div>\n<h2 class="text-3xl md:text-4xl... 1. 🟢 JavaScript Basics</h2>\n</div>
# We isolate from the first heading block up to the FIRST <section class="glass-card
match = re.search(r'(<div>\s*<h2[^>]*>\s*1\. 🟢 JavaScript Basics</h2>[\s\S]*?)(?=<section class=\"glass-card)', html)
if match:
    old_sec = match.group(0)
    new_sec = '<section class=\"glass-card mb-10 p-8 md:p-10 rounded-[32px] relative overflow-hidden group border border-white/5 shadow-2xl transition-all duration-700 hover:shadow-orange-500/10 pointer-events-auto bg-gradient-to-br from-white/[0.02] to-transparent\">\n' + old_sec + '\n</section>\n'
    html = html.replace(old_sec, new_sec)
    print('Wrapped Section 1 successfully.')

# 3. Enhance text readability globally
html = html.replace('text-gray-400', 'text-gray-300') # lighter gray for better contrast
html = html.replace('text-gray-500', 'text-gray-400') # lighter text for outputs/captions

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print('Contrast fixes applied!')
