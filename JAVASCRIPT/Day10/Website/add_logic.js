const fs = require('fs');

const problems = {
    "Easy Level": [
        { title: "Even or Odd", code: "function checkEvenOdd(n) {\\n    return n % 2 === 0 ? 'Even' : 'Odd';\\n}\\nconsole.log(checkEvenOdd(7));", output: "'Odd'" },
        { title: "Positive, Negative, or Zero", code: "function checkSign(n) {\\n    if(n > 0) return 'Positive';\\n    if(n < 0) return 'Negative';\\n    return 'Zero';\\n}\\nconsole.log(checkSign(-5));", output: "'Negative'" },
        { title: "Largest of Two Numbers", code: "function maxOfTwo(a, b) {\\n    return a > b ? a : b;\\n}\\nconsole.log(maxOfTwo(10, 20));", output: "20" },
        { title: "Largest of Three Numbers", code: "function maxOfThree(a, b, c) {\\n    return Math.max(a, b, c);\\n}\\nconsole.log(maxOfThree(5, 12, 9));", output: "12" },
        { title: "Sum of Numbers", code: "function sumUpto(n) {\\n    let sum = 0;\\n    for(let i=1; i<=n; i++) sum += i;\\n    return sum;\\n}\\nconsole.log(sumUpto(5));", output: "15" },
        { title: "Multiplication Table", code: "function printTable(n) {\\n    for(let i=1; i<=3; i++) {\\n        console.log(`${n} x ${i} = ${n * i}`);\\n    }\\n}\\nprintTable(5);", output: "'5 x 1 = 5'\\n'5 x 2 = 10'\\n'5 x 3 = 15'" },
        { title: "Count Even Numbers", code: "function countEvens(arr) {\\n    return arr.filter(n => n % 2 === 0).length;\\n}\\nconsole.log(countEvens([1, 2, 3, 4, 5, 6]));", output: "3" },
        { title: "Sum of Odd Numbers", code: "function sumOdds(arr) {\\n    return arr.filter(n => n % 2 !== 0).reduce((acc, curr) => acc + curr, 0);\\n}\\nconsole.log(sumOdds([1, 2, 3, 4, 5]));", output: "9" },
        { title: "Factorial", code: "function factorial(n) {\\n    if(n === 0 || n === 1) return 1;\\n    return n * factorial(n - 1);\\n}\\nconsole.log(factorial(5));", output: "120" }
    ],
    "Medium Level": [
        { title: "Reverse a String", code: "function reverseString(str) {\\n    return str.split('').reverse().join('');\\n}\\nconsole.log(reverseString('hello'));", output: "'olleh'" },
        { title: "Palindrome Number", code: "function isPalindrome(n) {\\n    let reversed = n.toString().split('').reverse().join('');\\n    return n.toString() === reversed;\\n}\\nconsole.log(isPalindrome(121));", output: "true" },
        { title: "Prime Number", code: "function isPrime(n) {\\n    if (n < 2) return false;\\n    for (let i = 2; i <= Math.sqrt(n); i++) {\\n        if (n % i === 0) return false;\\n    }\\n    return true;\\n}\\nconsole.log(isPrime(7));", output: "true" },
        { title: "Fibonacci Series", code: "function fibonacci(n) {\\n    let fib = [0, 1];\\n    for(let i=2; i<n; i++) {\\n        fib[i] = fib[i-1] + fib[i-2];\\n    }\\n    return fib.slice(0, n);\\n}\\nconsole.log(fibonacci(5));", output: "[0, 1, 1, 2, 3]" },
        { title: "Count Vowels", code: "function countVowels(str) {\\n    let matches = str.match(/[aeiou]/gi);\\n    return matches ? matches.length : 0;\\n}\\nconsole.log(countVowels('javascript'));", output: "3" }
    ],
    "Difficult Level": [
        { title: "Largest Element in Array", code: "function largestElement(arr) {\\n    return Math.max(...arr);\\n}\\nconsole.log(largestElement([10, 5, 20, 8]));", output: "20" },
        { title: "Second Largest Number", code: "function secondLargest(arr) {\\n    let unique = [...new Set(arr)].sort((a, b) => b - a);\\n    return unique.length > 1 ? unique[1] : null;\\n}\\nconsole.log(secondLargest([10, 20, 20, 8]));", output: "10" },
        { title: "Remove Duplicate Elements", code: "function removeDuplicates(arr) {\\n    return [...new Set(arr)];\\n}\\nconsole.log(removeDuplicates([1, 2, 2, 3, 4, 4]));", output: "[1, 2, 3, 4]" },
        { title: "Character Frequency", code: "function charFrequency(str) {\\n    let freq = {};\\n    for(let char of str) {\\n        freq[char] = (freq[char] || 0) + 1;\\n    }\\n    return freq;\\n}\\nconsole.log(charFrequency('hello'));", output: "{ h: 1, e: 1, l: 2, o: 1 }" },
        { title: "Find Missing Number", code: "function missingNumber(arr, n) {\\n    let expectedSum = (n * (n + 1)) / 2;\\n    let actualSum = arr.reduce((a, b) => a + b, 0);\\n    return expectedSum - actualSum;\\n}\\nconsole.log(missingNumber([1, 2, 4, 5], 5));", output: "3" },
        { title: "Two Sum", code: "function twoSum(arr, target) {\\n    let map = new Map();\\n    for (let i = 0; i < arr.length; i++) {\\n        let complement = target - arr[i];\\n        if (map.has(complement)) return [map.get(complement), i];\\n        map.set(arr[i], i);\\n    }\\n    return null;\\n}\\nconsole.log(twoSum([2, 7, 11, 15], 9));", output: "[0, 1]" }
    ]
};

let htmlContent = \`
<section class="glass-card section-observer opacity-0 translate-y-4 mb-10 p-8 md:p-10 rounded-[32px] relative overflow-hidden group border border-white/5 shadow-2xl transition-all duration-700 hover:shadow-orange-500/10 pointer-events-auto bg-gradient-to-br from-white/[0.02] to-transparent">
    <h2 class="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-rose-400 to-purple-500 mb-8 font-display tracking-tight drop-shadow-sm">Logical Problem Implementations</h2>
    <p class="text-gray-400 mb-8 max-w-2xl text-[15px] leading-relaxed">Here are practical logical coding problems categorized by difficulty. Each example includes the function logic and output to run in your developer environment.</p>
\`;

for (const [level, prods] of Object.entries(problems)) {
    // Generate icons for levels
    let icon = level === 'Easy Level' ? 'ph-plant' : level === 'Medium Level' ? 'ph-fire' : 'ph-lightning';
    let color = level === 'Easy Level' ? 'text-green-400' : level === 'Medium Level' ? 'text-orange-400' : 'text-rose-500';
    
    htmlContent += \`\\n    <h3 class="text-xl font-semibold text-gray-100 mb-5 mt-10 border-b border-white/10 pb-3 flex items-center gap-2"><i class="ph \${icon} \${color} text-2xl"></i>\${level}</h3>\\n\`;
    
    prods.forEach(prob => {
        // Ensure multiline output looks good or strings are handled ok
        htmlContent += \`
    <div class="mb-8">
        <h4 class="text-sm font-medium text-purple-300 mb-4 mt-8 uppercase tracking-[0.15em] flex items-center gap-2"><i class="ph ph-terminal-window"></i> \${prob.title}</h4>
        <div class="code-block bg-[#050505] p-6 rounded-t-xl border border-white/10 font-mono text-sm md:text-base text-emerald-400 leading-relaxed overflow-x-auto">
            <pre><code>\${prob.code}</code></pre>
        </div>
        <div class="bg-[#0f0f11] p-4 rounded-b-xl border border-t-0 border-white/10 flex items-start gap-3">
            <i class="ph ph-caret-right text-gray-500 mt-0.5"></i>
            <div class="font-mono text-sm text-gray-300">
                <span class="text-gray-500">Output:</span> <br>
                \${prob.output.replace(/\\n/g, '<br>')}
            </div>
        </div>
    </div>\`;
    });
}
htmlContent += \`\\n</section>\`;

let fileData = fs.readFileSync('index.html', 'utf8');

// Replace the existing Section 17 with the new generated HTML
// Section 17 is: <section class="..."><h2 class="...">17. 🧠 JavaScript Logical Problems</h2> ... </section>
// Let's use a regex to match the entire section 17 block.
const section17Regex = /<section[^>]*>(?:(?!<\/section>)[\s\S])*17\. 🧠 JavaScript Logical Problems(?:(?!<\/section>)[\s\S])*<\/section>/;

if (section17Regex.test(fileData)) {
    fileData = fileData.replace(section17Regex, htmlContent);
    fs.writeFileSync('index.html', fileData);
    console.log("Successfully replaced Section 17.");
} else {
    // If not found, inject it right before section 18
    const section18Start = /<section[^>]*>(?:(?!<\/section>)[\s\S])*18\. 🧩 LeetCode Preparation/;
    if (section18Start.test(fileData)) {
       fileData = fileData.replace(section18Start, htmlContent + '\\n\\n$&');
       fs.writeFileSync('index.html', fileData);
       console.log("Successfully inserted new section before Section 18.");
    } else {
       console.log("Could not find section 17 or 18. Appending at the end of content area...");
       // append right before </div></div></main>
       fileData = fileData.replace(/(<\/div>\s*<\/div>\s*<\/main>)/, htmlContent + '\\n$1');
       fs.writeFileSync('index.html', fileData);
    }
}
