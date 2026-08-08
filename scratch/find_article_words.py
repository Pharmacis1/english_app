import re

with open('heroes.js', 'r', encoding='utf-8') as f:
    text = f.read()

entries = re.findall(r'\[\s*"([^"]+)"\s*,\s*"([^"]*)"\s*,\s*"([^"]*)"', text)
article_words = []

for entry in entries:
    word = entry[0]
    if word.lower().startswith("a ") or word.lower().startswith("an "):
        article_words.append(entry)

print(f"Found {len(article_words)} words starting with A/An:")
for w in article_words:
    print(w[0], "-->", w[2])
