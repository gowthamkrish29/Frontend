import re

html_content = r"""
<section class="glass-card section-observer opacity-0 translate-y-4 mb-10 p-8 md:p-10 rounded-[32px] relative overflow-hidden group border border-white/5 shadow-2xl transition-all duration-700 hover:shadow-orange-500/10 pointer-events-auto bg-gradient-to-br from-white/[0.02] to-transparent">
    <h2 class="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-rose-400 to-purple-500 mb-8 font-display tracking-tight drop-shadow-sm">17. 🧩 Logic Problems & Solutions</h2>
    <p class="text-gray-400 mb-8 max-w-2xl text-[15px] leading-relaxed">Here are practical logical coding problems categorized by difficulty. Each example includes the function logic and output to run in your developer environment.</p>

    <h3 class="text-xl font-semibold text-gray-100 mb-5 mt-10 border-b border-white/10 pb-3 flex items-center gap-2"><i class="ph ph-plant text-green-400 text-2xl"></i>Easy Level</h3>
    
    <div class="mb-8">
        <h4 class="text-sm font-medium text-purple-300 mb-4 mt-8 uppercase tracking-[0.15em] flex items-center gap-2"><i class="ph ph-terminal-window"></i> Even or Odd</h4>
        <div class="code-block bg-[#050505] p-6 rounded-t-xl border border-white/10 font-mono text-sm md:text-base text-emerald-400 leading-relaxed overflow-x-auto">
            <pre><code>function checkEvenOdd(n) {
    return n % 2 === 0 ? 'Even' : 'Odd';
}
console.log(checkEvenOdd(7));</code></pre>
        </div>
        <div class="bg-[#0f0f11] p-4 rounded-b-xl border border-t-0 border-white/10 flex items-start gap-3">
            <i class="ph ph-caret-right text-gray-500 mt-0.5"></i>
            <div class="font-mono text-sm text-gray-300"><span class="text-gray-500">Output:</span> <br>'Odd'</div>
        </div>
    </div>

    <div class="mb-8">
        <h4 class="text-sm font-medium text-purple-300 mb-4 mt-8 uppercase tracking-[0.15em] flex items-center gap-2"><i class="ph ph-terminal-window"></i> Positive, Negative or Zero</h4>
        <div class="code-block bg-[#050505] p-6 rounded-t-xl border border-white/10 font-mono text-sm md:text-base text-emerald-400 leading-relaxed overflow-x-auto">
            <pre><code>function checkSign(n) {
    if(n > 0) return 'Positive';
    if(n < 0) return 'Negative';
    return 'Zero';
}
console.log(checkSign(-5));</code></pre>
        </div>
        <div class="bg-[#0f0f11] p-4 rounded-b-xl border border-t-0 border-white/10 flex items-start gap-3">
            <i class="ph ph-caret-right text-gray-500 mt-0.5"></i>
            <div class="font-mono text-sm text-gray-300"><span class="text-gray-500">Output:</span> <br>'Negative'</div>
        </div>
    </div>

    <div class="mb-8">
        <h4 class="text-sm font-medium text-purple-300 mb-4 mt-8 uppercase tracking-[0.15em] flex items-center gap-2"><i class="ph ph-terminal-window"></i> Largest of Two Numbers</h4>
        <div class="code-block bg-[#050505] p-6 rounded-t-xl border border-white/10 font-mono text-sm md:text-base text-emerald-400 leading-relaxed overflow-x-auto">
            <pre><code>function maxOfTwo(a, b) {
    return a > b ? a : b;
}
console.log(maxOfTwo(10, 20));</code></pre>
        </div>
        <div class="bg-[#0f0f11] p-4 rounded-b-xl border border-t-0 border-white/10 flex items-start gap-3">
            <i class="ph ph-caret-right text-gray-500 mt-0.5"></i>
            <div class="font-mono text-sm text-gray-300"><span class="text-gray-500">Output:</span> <br>20</div>
        </div>
    </div>

    <div class="mb-8">
        <h4 class="text-sm font-medium text-purple-300 mb-4 mt-8 uppercase tracking-[0.15em] flex items-center gap-2"><i class="ph ph-terminal-window"></i> Largest of Three Numbers</h4>
        <div class="code-block bg-[#050505] p-6 rounded-t-xl border border-white/10 font-mono text-sm md:text-base text-emerald-400 leading-relaxed overflow-x-auto">
            <pre><code>function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}
console.log(maxOfThree(5, 12, 9));</code></pre>
        </div>
        <div class="bg-[#0f0f11] p-4 rounded-b-xl border border-t-0 border-white/10 flex items-start gap-3">
            <i class="ph ph-caret-right text-gray-500 mt-0.5"></i>
            <div class="font-mono text-sm text-gray-300"><span class="text-gray-500">Output:</span> <br>12</div>
        </div>
    </div>

    <div class="mb-8">
        <h4 class="text-sm font-medium text-purple-300 mb-4 mt-8 uppercase tracking-[0.15em] flex items-center gap-2"><i class="ph ph-terminal-window"></i> Sum of Numbers</h4>
        <div class="code-block bg-[#050505] p-6 rounded-t-xl border border-white/10 font-mono text-sm md:text-base text-emerald-400 leading-relaxed overflow-x-auto">
            <pre><code>function sumUpto(n) {
    let sum = 0;
    for(let i=1; i<=n; i++) sum += i;
    return sum;
}
console.log(sumUpto(5));</code></pre>
        </div>
        <div class="bg-[#0f0f11] p-4 rounded-b-xl border border-t-0 border-white/10 flex items-start gap-3">
            <i class="ph ph-caret-right text-gray-500 mt-0.5"></i>
            <div class="font-mono text-sm text-gray-300"><span class="text-gray-500">Output:</span> <br>15</div>
        </div>
    </div>

    <div class="mb-8">
        <h4 class="text-sm font-medium text-purple-300 mb-4 mt-8 uppercase tracking-[0.15em] flex items-center gap-2"><i class="ph ph-terminal-window"></i> Multiplication Table</h4>
        <div class="code-block bg-[#050505] p-6 rounded-t-xl border border-white/10 font-mono text-sm md:text-base text-emerald-400 leading-relaxed overflow-x-auto">
            <pre><code>function printTable(n) {
    for(let i=1; i<=3; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
printTable(5);</code></pre>
        </div>
        <div class="bg-[#0f0f11] p-4 rounded-b-xl border border-t-0 border-white/10 flex items-start gap-3">
            <i class="ph ph-caret-right text-gray-500 mt-0.5"></i>
            <div class="font-mono text-sm text-gray-300"><span class="text-gray-500">Output:</span> <br>'5 x 1 = 5'<br>'5 x 2 = 10'<br>'5 x 3 = 15'</div>
        </div>
    </div>

    <div class="mb-8">
        <h4 class="text-sm font-medium text-purple-300 mb-4 mt-8 uppercase tracking-[0.15em] flex items-center gap-2"><i class="ph ph-terminal-window"></i> Count Even Numbers</h4>
        <div class="code-block bg-[#050505] p-6 rounded-t-xl border border-white/10 font-mono text-sm md:text-base text-emerald-400 leading-relaxed overflow-x-auto">
            <pre><code>function countEvens(arr) {
    return arr.filter(n => n % 2 === 0).length;
}
console.log(countEvens([1, 2, 3, 4, 5, 6]));</code></pre>
        </div>
        <div class="bg-[#0f0f11] p-4 rounded-b-xl border border-t-0 border-white/10 flex items-start gap-3">
            <i class="ph ph-caret-right text-gray-500 mt-0.5"></i>
            <div class="font-mono text-sm text-gray-300"><span class="text-gray-500">Output:</span> <br>3</div>
        </div>
    </div>

    <div class="mb-8">
        <h4 class="text-sm font-medium text-purple-300 mb-4 mt-8 uppercase tracking-[0.15em] flex items-center gap-2"><i class="ph ph-terminal-window"></i> Sum of Odd Numbers</h4>
        <div class="code-block bg-[#050505] p-6 rounded-t-xl border border-white/10 font-mono text-sm md:text-base text-emerald-400 leading-relaxed overflow-x-auto">
            <pre><code>function sumOdds(arr) {
    return arr.filter(n => n % 2 !== 0).reduce((acc, curr) => acc + curr, 0);
}
console.log(sumOdds([1, 2, 3, 4, 5]));</code></pre>
        </div>
        <div class="bg-[#0f0f11] p-4 rounded-b-xl border border-t-0 border-white/10 flex items-start gap-3">
            <i class="ph ph-caret-right text-gray-500 mt-0.5"></i>
            <div class="font-mono text-sm text-gray-300"><span class="text-gray-500">Output:</span> <br>9</div>
        </div>
    </div>

    <div class="mb-8">
        <h4 class="text-sm font-medium text-purple-300 mb-4 mt-8 uppercase tracking-[0.15em] flex items-center gap-2"><i class="ph ph-terminal-window"></i> Factorial</h4>
        <div class="code-block bg-[#050505] p-6 rounded-t-xl border border-white/10 font-mono text-sm md:text-base text-emerald-400 leading-relaxed overflow-x-auto">
            <pre><code>function factorial(n) {
    if(n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));</code></pre>
        </div>
        <div class="bg-[#0f0f11] p-4 rounded-b-xl border border-t-0 border-white/10 flex items-start gap-3">
            <i class="ph ph-caret-right text-gray-500 mt-0.5"></i>
            <div class="font-mono text-sm text-gray-300"><span class="text-gray-500">Output:</span> <br>120</div>
        </div>
    </div>

    
    <h3 class="text-xl font-semibold text-gray-100 mb-5 mt-10 border-b border-white/10 pb-3 flex items-center gap-2"><i class="ph ph-fire text-orange-400 text-2xl"></i>Medium Level</h3>

    <div class="mb-8">
        <h4 class="text-sm font-medium text-purple-300 mb-4 mt-8 uppercase tracking-[0.15em] flex items-center gap-2"><i class="ph ph-terminal-window"></i> Reverse a String</h4>
        <div class="code-block bg-[#050505] p-6 rounded-t-xl border border-white/10 font-mono text-sm md:text-base text-emerald-400 leading-relaxed overflow-x-auto">
            <pre><code>function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('hello'));</code></pre>
        </div>
        <div class="bg-[#0f0f11] p-4 rounded-b-xl border border-t-0 border-white/10 flex items-start gap-3">
            <i class="ph ph-caret-right text-gray-500 mt-0.5"></i>
            <div class="font-mono text-sm text-gray-300"><span class="text-gray-500">Output:</span> <br>'olleh'</div>
        </div>
    </div>

    <div class="mb-8">
        <h4 class="text-sm font-medium text-purple-300 mb-4 mt-8 uppercase tracking-[0.15em] flex items-center gap-2"><i class="ph ph-terminal-window"></i> Palindrome Number</h4>
        <div class="code-block bg-[#050505] p-6 rounded-t-xl border border-white/10 font-mono text-sm md:text-base text-emerald-400 leading-relaxed overflow-x-auto">
            <pre><code>function isPalindrome(n) {
    let reversed = n.toString().split('').reverse().join('');
    return n.toString() === reversed;
}
console.log(isPalindrome(121));</code></pre>
        </div>
        <div class="bg-[#0f0f11] p-4 rounded-b-xl border border-t-0 border-white/10 flex items-start gap-3">
            <i class="ph ph-caret-right text-gray-500 mt-0.5"></i>
            <div class="font-mono text-sm text-gray-300"><span class="text-gray-500">Output:</span> <br>true</div>
        </div>
    </div>

    <div class="mb-8">
        <h4 class="text-sm font-medium text-purple-300 mb-4 mt-8 uppercase tracking-[0.15em] flex items-center gap-2"><i class="ph ph-terminal-window"></i> Prime Number</h4>
        <div class="code-block bg-[#050505] p-6 rounded-t-xl border border-white/10 font-mono text-sm md:text-base text-emerald-400 leading-relaxed overflow-x-auto">
            <pre><code>function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7));</code></pre>
        </div>
        <div class="bg-[#0f0f11] p-4 rounded-b-xl border border-t-0 border-white/10 flex items-start gap-3">
            <i class="ph ph-caret-right text-gray-500 mt-0.5"></i>
            <div class="font-mono text-sm text-gray-300"><span class="text-gray-500">Output:</span> <br>true</div>
        </div>
    </div>

    <div class="mb-8">
        <h4 class="text-sm font-medium text-purple-300 mb-4 mt-8 uppercase tracking-[0.15em] flex items-center gap-2"><i class="ph ph-terminal-window"></i> Fibonacci Series</h4>
        <div class="code-block bg-[#050505] p-6 rounded-t-xl border border-white/10 font-mono text-sm md:text-base text-emerald-400 leading-relaxed overflow-x-auto">
            <pre><code>function fibonacci(n) {
    let fib = [0, 1];
    for(let i=2; i<n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib.slice(0, n);
}
console.log(fibonacci(5));</code></pre>
        </div>
        <div class="bg-[#0f0f11] p-4 rounded-b-xl border border-t-0 border-white/10 flex items-start gap-3">
            <i class="ph ph-caret-right text-gray-500 mt-0.5"></i>
            <div class="font-mono text-sm text-gray-300"><span class="text-gray-500">Output:</span> <br>[0, 1, 1, 2, 3]</div>
        </div>
    </div>

    <div class="mb-8">
        <h4 class="text-sm font-medium text-purple-300 mb-4 mt-8 uppercase tracking-[0.15em] flex items-center gap-2"><i class="ph ph-terminal-window"></i> Count Vowels</h4>
        <div class="code-block bg-[#050505] p-6 rounded-t-xl border border-white/10 font-mono text-sm md:text-base text-emerald-400 leading-relaxed overflow-x-auto">
            <pre><code>function countVowels(str) {
    let matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
console.log(countVowels('javascript'));</code></pre>
        </div>
        <div class="bg-[#0f0f11] p-4 rounded-b-xl border border-t-0 border-white/10 flex items-start gap-3">
            <i class="ph ph-caret-right text-gray-500 mt-0.5"></i>
            <div class="font-mono text-sm text-gray-300"><span class="text-gray-500">Output:</span> <br>3</div>
        </div>
    </div>


    <h3 class="text-xl font-semibold text-gray-100 mb-5 mt-10 border-b border-white/10 pb-3 flex items-center gap-2"><i class="ph ph-lightning text-rose-500 text-2xl"></i>Difficult Level</h3>

    <div class="mb-8">
        <h4 class="text-sm font-medium text-purple-300 mb-4 mt-8 uppercase tracking-[0.15em] flex items-center gap-2"><i class="ph ph-terminal-window"></i> Largest Element in Array</h4>
        <div class="code-block bg-[#050505] p-6 rounded-t-xl border border-white/10 font-mono text-sm md:text-base text-emerald-400 leading-relaxed overflow-x-auto">
            <pre><code>function largestElement(arr) {
    return Math.max(...arr);
}
console.log(largestElement([10, 5, 20, 8]));</code></pre>
        </div>
        <div class="bg-[#0f0f11] p-4 rounded-b-xl border border-t-0 border-white/10 flex items-start gap-3">
            <i class="ph ph-caret-right text-gray-500 mt-0.5"></i>
            <div class="font-mono text-sm text-gray-300"><span class="text-gray-500">Output:</span> <br>20</div>
        </div>
    </div>

    <div class="mb-8">
        <h4 class="text-sm font-medium text-purple-300 mb-4 mt-8 uppercase tracking-[0.15em] flex items-center gap-2"><i class="ph ph-terminal-window"></i> Second Largest Number</h4>
        <div class="code-block bg-[#050505] p-6 rounded-t-xl border border-white/10 font-mono text-sm md:text-base text-emerald-400 leading-relaxed overflow-x-auto">
            <pre><code>function secondLargest(arr) {
    let unique = [...new Set(arr)].sort((a, b) => b - a);
    return unique.length > 1 ? unique[1] : null;
}
console.log(secondLargest([10, 20, 20, 8]));</code></pre>
        </div>
        <div class="bg-[#0f0f11] p-4 rounded-b-xl border border-t-0 border-white/10 flex items-start gap-3">
            <i class="ph ph-caret-right text-gray-500 mt-0.5"></i>
            <div class="font-mono text-sm text-gray-300"><span class="text-gray-500">Output:</span> <br>10</div>
        </div>
    </div>

    <div class="mb-8">
        <h4 class="text-sm font-medium text-purple-300 mb-4 mt-8 uppercase tracking-[0.15em] flex items-center gap-2"><i class="ph ph-terminal-window"></i> Remove Duplicate Elements</h4>
        <div class="code-block bg-[#050505] p-6 rounded-t-xl border border-white/10 font-mono text-sm md:text-base text-emerald-400 leading-relaxed overflow-x-auto">
            <pre><code>function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));</code></pre>
        </div>
        <div class="bg-[#0f0f11] p-4 rounded-b-xl border border-t-0 border-white/10 flex items-start gap-3">
            <i class="ph ph-caret-right text-gray-500 mt-0.5"></i>
            <div class="font-mono text-sm text-gray-300"><span class="text-gray-500">Output:</span> <br>[1, 2, 3, 4]</div>
        </div>
    </div>

    <div class="mb-8">
        <h4 class="text-sm font-medium text-purple-300 mb-4 mt-8 uppercase tracking-[0.15em] flex items-center gap-2"><i class="ph ph-terminal-window"></i> Character Frequency</h4>
        <div class="code-block bg-[#050505] p-6 rounded-t-xl border border-white/10 font-mono text-sm md:text-base text-emerald-400 leading-relaxed overflow-x-auto">
            <pre><code>function charFrequency(str) {
    let freq = {};
    for(let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
}
console.log(charFrequency('hello'));</code></pre>
        </div>
        <div class="bg-[#0f0f11] p-4 rounded-b-xl border border-t-0 border-white/10 flex items-start gap-3">
            <i class="ph ph-caret-right text-gray-500 mt-0.5"></i>
            <div class="font-mono text-sm text-gray-300"><span class="text-gray-500">Output:</span> <br>{ h: 1, e: 1, l: 2, o: 1 }</div>
        </div>
    </div>

    <div class="mb-8">
        <h4 class="text-sm font-medium text-purple-300 mb-4 mt-8 uppercase tracking-[0.15em] flex items-center gap-2"><i class="ph ph-terminal-window"></i> Find Missing Number</h4>
        <div class="code-block bg-[#050505] p-6 rounded-t-xl border border-white/10 font-mono text-sm md:text-base text-emerald-400 leading-relaxed overflow-x-auto">
            <pre><code>function missingNumber(arr, n) {
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((a, b) => a + b, 0);
    return expectedSum - actualSum;
}
console.log(missingNumber([1, 2, 4, 5], 5));</code></pre>
        </div>
        <div class="bg-[#0f0f11] p-4 rounded-b-xl border border-t-0 border-white/10 flex items-start gap-3">
            <i class="ph ph-caret-right text-gray-500 mt-0.5"></i>
            <div class="font-mono text-sm text-gray-300"><span class="text-gray-500">Output:</span> <br>3</div>
        </div>
    </div>

    <div class="mb-8">
        <h4 class="text-sm font-medium text-purple-300 mb-4 mt-8 uppercase tracking-[0.15em] flex items-center gap-2"><i class="ph ph-terminal-window"></i> Two Sum</h4>
        <div class="code-block bg-[#050505] p-6 rounded-t-xl border border-white/10 font-mono text-sm md:text-base text-emerald-400 leading-relaxed overflow-x-auto">
            <pre><code>function twoSum(arr, target) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if (map.has(complement)) return [map.get(complement), i];
        map.set(arr[i], i);
    }
    return null;
}
console.log(twoSum([2, 7, 11, 15], 9));</code></pre>
        </div>
        <div class="bg-[#0f0f11] p-4 rounded-b-xl border border-t-0 border-white/10 flex items-start gap-3">
            <i class="ph ph-caret-right text-gray-500 mt-0.5"></i>
            <div class="font-mono text-sm text-gray-300"><span class="text-gray-500">Output:</span> <br>[0, 1]</div>
        </div>
    </div>

</section>
"""

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace the HTML block starting with Section 17
# Look for <section ... >...17. 🧠 JavaScript Logical Problems...</section>
import re
pattern = re.compile(
    r'<section class="glass-card section-observer opacity-0 translate-y-4 mb-10 p-8 md:p-10 rounded-\[32px\] relative overflow-hidden group border border-white/5 shadow-2xl transition-all duration-700 hover:shadow-orange-500/10 pointer-events-auto bg-gradient-to-br from-white/\[0\.02\] to-transparent">\s*<h2[^>]*>.*?(?:17|18)\..*?(?:Logical Problems|LeetCode Preparation).*?</h2>\s*<(?:p|ul|div|h3|h4)[^>]*>[\s\S]*?</section>',
    re.IGNORECASE 
)

# find all sections
sections = re.findall(r'<section class="glass-card.*?<\/section>', text, re.DOTALL)

for sec in sections:
    if "17. 🧠 JavaScript Logical Problems" in sec:
        text = text.replace(sec, html_content)
        print("Replaced section successfully!")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(text)
