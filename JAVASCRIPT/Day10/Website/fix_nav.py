with open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Fix Intersection Observer
js = js.replace('"-10% 0px -50% 0px"', '"-130px 0px -70% 0px"')
# Also fix any single quotes just in case
js = js.replace("'-10% 0px -50% 0px'", '"-130px 0px -70% 0px"')

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(js)
print('JS observer margin fixed!')

with open('styles.css', 'a', encoding='utf-8') as f:
    f.write('''

html.light .bg-sidebarBg\\\\/80 {
    background-color: #f8fafc !important;
    border-color: rgba(0, 0, 0, 0.05) !important;
}

html.light aside h1.text-transparent {
    background-image: linear-gradient(to right, #ea580c, #e11d48, #4f46e5);
    background-clip: text;
    -webkit-background-clip: text;
}

html.light aside p.uppercase {
    color: #64748b !important;
}

html.light .bg-black\\\\/40 {
    background-color: #ffffff !important;
    border-color: #e2e8f0 !important;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05) !important;
}

html.light .bg-black\\\\/40 p.text-gray-300 {
    color: #334155 !important;
}

html.light .bg-black\\\\/40 p.text-gray-500 {
    color: #64748b !important;
}
''')
print('CSS styles for sidebar fixed!')
