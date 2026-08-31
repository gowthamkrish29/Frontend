const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The file has a <main> tag that wraps all content except header.
// Let's extract everything inside <main>.
let mainMatch = html.match(/<main>([\s\S]*?)<\/main>/);
if (!mainMatch) {
    console.error("Could not find <main> tag.");
    process.exit(1);
}
let mainContent = mainMatch[1];

// Clean up old horizontal rules and breaks
mainContent = mainContent.replace(/<br>\s*<hr>\s*<br>/g, '');
mainContent = mainContent.replace(/<br>/g, '');

// Convert all top-level divs to sections (Section 1 uses divs instead of <section> tags)
// Let's parse out the <h2> and use them as split points to wrap in <section> manually.
let h2Split = mainContent.split(/(<div>\s*<h2>|<section>\s*<div>\s*<h2>)/);

let processedContent = '';

// Because we split by the opening tags of the sections, we need to reconstruct them properly.
// The easiest way to style this beautifully without breaking HTML is just simple regex on tags:

// Sections
mainContent = mainContent.replace(/<section>([\s\S]*?)<\/section>/g, '\n<section class="glass-card section-observer opacity-0 translate-y-4 mb-10 p-8 md:p-10 rounded-[32px] relative overflow-hidden group border border-white/5 shadow-2xl transition-all duration-700 hover:shadow-orange-500/10 pointer-events-auto bg-gradient-to-br from-white/[0.02] to-transparent">$1</section>\n');

// For Section 1 which is not wrapped in <section>, let's wrap it.
// Finding the first <h2>
mainContent = mainContent.replace(/(<div>\s*<h2>[\s\S]*?)(?=\n\s*<section>)/, '<section class="glass-card section-observer opacity-0 translate-y-4 mb-10 p-8 md:p-10 rounded-[32px] relative overflow-hidden group border border-white/5 shadow-2xl transition-all duration-700 hover:shadow-orange-500/10 pointer-events-auto bg-gradient-to-br from-white/[0.02] to-transparent">$1</section>');

// Headings
mainContent = mainContent.replace(/<h2>(.*?)<\/h2>/g, 
    '<h2 class="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-rose-400 to-purple-500 mb-8 font-display tracking-tight drop-shadow-sm">$1</h2>');

mainContent = mainContent.replace(/<h3>(.*?)<\/h3>/g, 
    '<h3 class="text-xl font-semibold text-gray-100 mb-5 mt-10 border-b border-white/10 pb-3 flex items-center gap-2"><i class="ph ph-sparkle text-orange-400"></i>$1</h3>');

mainContent = mainContent.replace(/<h4>(.*?)<\/h4>/g, 
    '<h4 class="text-sm font-medium text-purple-300 mb-4 mt-8 uppercase tracking-[0.15em]">$1</h4>');

// Lists
mainContent = mainContent.replace(/<ul>/g, '<ul class="space-y-3 mb-8 text-gray-400">');
mainContent = mainContent.replace(/<li>(.*?)<\/li>/g, 
    '<li class="flex items-start before:content-[\'\'] before:w-1.5 before:h-1.5 before:bg-rose-500 before:rounded-full before:mr-4 before:min-w-[6px] before:mt-2.5 before:shadow-[0_0_10px_rgba(244,63,94,0.6)] hover:text-gray-200 transition-colors cursor-default text-[15px] md:text-base leading-relaxed">$1</li>');

// Code Blocks inside <p> tag
mainContent = mainContent.replace(/<p>([\s\S]*?)<\/p>/g, 
    '<div class="code-block bg-[#050505] p-6 rounded-2xl border border-white/10 font-mono text-sm md:text-base text-emerald-400 leading-relaxed mb-6 overflow-x-auto shadow-inner"><p>$1</p></div>');
mainContent = mainContent.replace(/&nbsp;/g, '<span class="ml-4"></span>'); // Replace space entity for padding

let newHtml = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Mastery | Interactive Developer Portal</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        display: ['Space Grotesk', 'sans-serif'],
                    },
                    colors: {
                        darkBg: '#08080a',
                        sidebarBg: '#101014'
                    }
                }
            }
        }
    </script>
    
    <!-- Phosphor Icons -->
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
    
    <!-- Custom Styles -->
    <link rel="stylesheet" href="styles.css">
</head>
<body class="bg-darkBg text-gray-200 font-sans antialiased overflow-hidden selection:bg-orange-500/30">

    <!-- Ambient Glow Effects -->
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden" id="ambient-bg">
        <div class="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-orange-600/10 blur-[120px] transition-all duration-1000 ease-in-out"></div>
        <div class="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-600/10 blur-[150px] transition-all duration-1000 ease-in-out"></div>
    </div>

    <!-- Layout Container -->
    <div class="relative z-10 flex h-screen overflow-hidden">
        
        <!-- Sidebar Navigation -->
        <aside id="sidebar" class="w-[320px] bg-sidebarBg/80 backdrop-blur-2xl border-r border-white/5 flex flex-col h-full transform transition-transform duration-500 z-50 absolute md:relative -translate-x-full md:translate-x-0 shadow-2xl md:shadow-none">
            <!-- Sidebar Header -->
            <div class="p-8 border-b border-white/5 flex items-center justify-between">
                <div>
                    <h1 class="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-purple-400 tracking-tight">JS.Portal</h1>
                    <p class="text-xs text-gray-500 mt-1 uppercase tracking-wider font-semibold">Learning Platform</p>
                </div>
                <button id="closeSidebar" class="md:hidden text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-lg">
                    <i class="ph ph-x text-xl"></i>
                </button>
            </div>
            
            <!-- Progress Section -->
            <div class="p-6 border-b border-white/5">
                <div class="bg-black/40 rounded-2xl p-5 border border-white/5 shadow-inner">
                    <div class="flex items-center justify-between mb-3">
                        <p class="text-sm text-gray-300 font-medium">Course Progress</p>
                        <i class="ph-fill ph-trophy text-orange-400"></i>
                    </div>
                    <div class="h-2.5 bg-gray-800 rounded-full overflow-hidden mb-2">
                        <div id="progressBar" class="h-full bg-gradient-to-r from-orange-500 via-rose-500 to-purple-500 w-0 transition-all duration-1000 ease-out relative">
                            <div class="absolute inset-0 bg-white/20 w-full h-full custom-shimmer"></div>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="text-xs text-gray-500" id="sectionsCount">0/18 Completed</p>
                        <p class="text-xs font-bold text-white" id="progressText">0%</p>
                    </div>
                </div>
            </div>

            <!-- Navigation Links -->
            <nav class="flex-1 overflow-y-auto px-4 py-6 custom-scrollbar space-y-1" id="navLinks">
                <!-- Dynamically Populated by JS -->
            </nav>
            
            <!-- Sidebar Footer -->
            <div class="p-6 border-t border-white/5 pb-8">
                <button id="markAllComplete" class="w-full py-3 px-4 rounded-xl border border-white/10 text-sm font-medium hover:bg-white/5 transition-all text-gray-300 hover:text-white flex items-center justify-center gap-2">
                    <i class="ph ph-check-circle"></i> Mark All Complete
                </button>
            </div>
        </aside>

        <!-- Main Content Area -->
        <main class="flex-1 flex flex-col h-full bg-darkBg/50 backdrop-blur-3xl relative">
            
            <!-- Top Header -->
            <header class="h-24 border-b border-white/5 flex items-center justify-between px-6 md:px-12 sticky top-0 z-40 bg-darkBg/80 backdrop-blur-md">
                <div class="flex items-center gap-4">
                    <button id="openSidebar" class="md:hidden text-gray-300 hover:text-white bg-white/5 p-3 rounded-xl transition-colors">
                        <i class="ph ph-list text-2xl"></i>
                    </button>
                    <div class="hidden md:flex items-center text-sm font-medium text-gray-400 bg-white/5 py-2 px-4 rounded-full border border-white/5">
                        <i class="ph ph-code mr-2 text-orange-400 text-lg"></i> 
                        <span>Developer Environment</span>
                    </div>
                </div>
                
                <div class="flex items-center gap-4">
                    <button id="themeToggle" class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.02)] group">
                        <i class="ph-fill ph-sun text-2xl transition-transform group-hover:rotate-45" id="themeIcon"></i>
                    </button>
                </div>
            </header>

            <!-- Scrollable Content -->
            <div id="contentArea" class="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-12 lg:p-16 scroll-smooth">
                <div class="max-w-4xl mx-auto pb-40">
                    
                    <!-- Welcome Hero -->
                    <div class="mt-8 mb-16 text-center md:text-left">
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-widest mb-6">
                            <span class="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                            Live Learning Mode
                        </div>
                        <h1 class="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6 tracking-tighter">
                            Master <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">JavaScript</span> from Ground Up.
                        </h1>
                        <p class="text-lg text-gray-400 max-w-2xl leading-relaxed">
                            A comprehensive, interactive curriculum designed to take you from a complete beginner to solving advanced LeetCode problems. 
                        </p>
                    </div>

                    ${mainContent}
                </div>
            </div>
        </main>
    </div>

    <!-- Scripts -->
    <script src="script.js"></script>
</body>
</html>`;

fs.writeFileSync('index.html', newHtml);
console.log('Successfully written layout changes to index.html');
