const fs = require('fs');

const file = fs.readFileSync('pattern_drills.js', 'utf8');

// Extract all patterns
const origRegex = /original:\s*"([^"]+)"/g;
const targetRegex = /target:\s*"([^"]+)"/g;

const originals = [];
const targets = [];

let m;
while ((m = origRegex.exec(file)) !== null) {
    originals.push(m[1]);
}
while ((m = targetRegex.exec(file)) !== null) {
    targets.push(m[1]);
}

console.log('Total original phrases:', originals.length);
console.log('Total target phrases:', targets.length);

const allPhrases = [];
for (let i = 0; i < originals.length; i++) {
    allPhrases.push({
        idx: i + 1,
        original: originals[i],
        target: targets[i]
    });
}

fs.writeFileSync('scripts/drill_phrases.json', JSON.stringify(allPhrases, null, 2), 'utf8');
console.log('Saved to scripts/drill_phrases.json');
