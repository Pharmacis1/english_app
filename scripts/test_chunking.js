const { ELDRIN_AUDIOBOOK } = require('../eldrin_story.js');

ELDRIN_AUDIOBOOK.chapters.forEach(ch => {
    const chunks = [];
    let cur = null;

    ch.sentences.forEach(s => {
        if (!cur || cur.speaker !== s.speaker) {
            if (cur) chunks.push(cur);
            cur = {
                speaker: s.speaker,
                voice: s.voice,
                en: s.en,
                ru: s.ru,
                count: 1
            };
        } else {
            cur.en += ' ' + s.en;
            cur.ru += ' ' + s.ru;
            cur.count++;
        }
    });
    if (cur) chunks.push(cur);

    console.log(`Chapter ${ch.number}: "${ch.titleEn}" -> ${ch.sentences.length} sentences compressed into ${chunks.length} speaker chunks!`);
});
