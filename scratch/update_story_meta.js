const fs = require('fs');
const path = require('path');
const { STORY_ACTS, STORY_CHAPTERS } = require('../story_campaign.js');

const sceneIllustrationMap = {
    1: 'images/story/ch1_scene.jpg',
    2: 'images/story/ch2_scene.jpg',
    3: 'images/story/ch3_scene.jpg',
    4: 'images/story/ch4_scene.jpg',
    5: 'images/story/ch5_scene.jpg'
};

STORY_CHAPTERS.forEach(ch => {
    if (sceneIllustrationMap[ch.number]) {
        ch.sceneIllustrationImg = sceneIllustrationMap[ch.number];
    }
});

const fileHeader = `/**
 * STORY CAMPAIGN: THE OATH OF SEVEN WINDS (A1 Full Campaign - 40 Chapters)
 * CEFR A1 Story Campaign for EnglishPulse RPG with Visual Scene Illustrations
 */

const STORY_ACTS = ` + JSON.stringify(STORY_ACTS, null, 4) + `;\n\nconst STORY_CHAPTERS = ` + JSON.stringify(STORY_CHAPTERS, null, 4) + `;\n\nconst HERO_ORIGINAL_PORTRAITS = {
    valerius: 'images/characters_orig/valerius_orig.jpg',
    astraea: 'images/characters_orig/astraea_orig.jpg',
    zephyr: 'images/characters_orig/zephyr_orig.png',
    ignis: 'images/characters_orig/ignis_orig.jpg',
    frostina: 'images/characters_orig/frostina_orig.jpg',
    thorin: 'images/characters_orig/thorin_orig.png',
    selene: 'images/characters_orig/selene_orig.png',
    oberon: 'images/characters_orig/oberon_orig.jpg',
    freya: 'images/characters_orig/freya_orig.jpg',
    eldrin: 'images/characters_orig/eldrin_orig.jpg'
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { STORY_ACTS, STORY_CHAPTERS, HERO_ORIGINAL_PORTRAITS };
}
`;

fs.writeFileSync(path.join(__dirname, '../story_campaign.js'), fileHeader, 'utf8');
console.log('SUCCESS: story_campaign.js updated with sceneIllustrationImg links!');
