// {
//     paletteName: 'Caleb Widowghast Colors',
//     id: 'caleb-widowghast-colors',
//     emoji: '🔥',
//     colors: [
//       { name: 'WisdomSave', color: '#f88644' },
//       { name: 'VaultOfAmber', color: '#ab6b3f' },
//       { name: 'BookPage', color: '#867468' },
//       { name: 'FormerTeacher', color: '#d3d2d5' },
//       { name: 'Polymorph', color: '#9a4ae2' },
//       { name: 'Home', color: '#ff6700' },
//       { name: 'CatsPawOrange', color: '#703524' },
//       { name: 'LightBrown', color: '#5a3b2a' },
//       { name: 'DunamancyGrey', color: '#868a99' },
//       { name: 'EssekPurple', color: '#6e4b6e' },
//       { name: 'WidowghastsWebOfFire', color: '#e91f0f' },
//       { name: 'Leomands', color: '#492620' },
//       { name: 'Frumpkin', color: '#573823' },
//       { name: 'DeepRegretGrey', color: '#3f3936' },
//       { name: 'NineSidedTower', color: '#421e2a' },
//       { name: 'EmipreKid', color: '#631e1e' },
//       { name: 'DirtyCoatBrown', color: '#3e2d25' },
//       { name: 'CallianasWand', color: '#252e2d' },
//       { name: 'Vergesson', color: '#130b07' },
//       { name: 'Waldhexe', color: '#342430' },
//     ],
//   }

import chroma from 'chroma-js';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {},
  };
  for (let level of levels) {
    newPalette.colors[level] = [];
  }
  for (let color of starterPalette.colors) {
    let scale = getScale(color.color, 10).reverse();
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase(),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i]).css().replace('rgb', 'rgba').replace(')', ',1.0)'),
      });
    }
  }
  return newPalette;
}

function getRange(hexColor) {
  const end = '#fff';
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}

function getScale(hexColor, numberOfColors) {
  return chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors);
}
