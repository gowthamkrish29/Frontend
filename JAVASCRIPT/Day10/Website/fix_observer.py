import re

with open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

new_observer = """
    // Animation Observer and Active Link Highlighting
    let activeSections = new Set();
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const index = parseInt(entry.target.id.split('-')[1]) - 1;
            if (entry.isIntersecting) {
                activeSections.add(index);
            } else {
                activeSections.delete(index);
            }
        });
        
        let targetIndex = activeSections.size > 0 ? Math.min(...Array.from(activeSections)) : -1;
        
        // Check if we are at the very bottom of the page
        if (contentArea.scrollHeight - contentArea.scrollTop - contentArea.clientHeight < 50) {
            targetIndex = sections.length - 1; 
        }
        
        if (targetIndex !== -1 && navItems[targetIndex]) {
            navItems.forEach(item => {
                item.classList.remove('bg-white/10', 'text-white', 'border-l-2', 'border-orange-500');
                item.classList.add('text-gray-400', 'border-transparent');
            });
            navItems[targetIndex].classList.add('bg-white/10', 'text-white', 'border-l-2', 'border-orange-500');
            navItems[targetIndex].classList.remove('text-gray-400', 'border-transparent');
        }
    }, { root: contentArea, threshold: 0.1, rootMargin: "-50px 0px -50% 0px" });
    
    contentArea.addEventListener('scroll', () => {
        if (contentArea.scrollHeight - contentArea.scrollTop - contentArea.clientHeight < 50) {
            navItems.forEach(item => {
                item.classList.remove('bg-white/10', 'text-white', 'border-l-2', 'border-orange-500');
                item.classList.add('text-gray-400', 'border-transparent');
            });
            const last = sections.length - 1;
            navItems[last].classList.add('bg-white/10', 'text-white', 'border-l-2', 'border-orange-500');
            navItems[last].classList.remove('text-gray-400', 'border-transparent');
        }
    });
"""

# Replace old observer
js = re.sub(r'const animationObserver = new IntersectionObserver\([\s\S]*?\{\s*root:\s*contentArea[^\}]*\}\);\s*sections\.forEach[^\n]+;', new_observer + '\n    sections.forEach(section => animationObserver.observe(section));', js)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("IntersectionObserver replaced.")

# Add cache buster to index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()
    
# increment v param
import re
html = re.sub(r'script\.js\?v=\d+', 'script.js?v=6', html)
html = re.sub(r'styles\.css\?v=\d+', 'styles.css?v=6', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Cache buster updated.")
