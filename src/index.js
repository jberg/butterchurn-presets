/* eslint-disable max-len */
let presets = {
  'Geiss - Cruzin': require('../presets/converted/Geiss - Cruzin'),
  'Eo.S. + Zylot - skylight (Stained Glass Majesty mix)': require('../presets/converted/Eo.S. + Zylot - skylight (Stained Glass Majesty mix)'),
  'Unchained - Unified Drag': require('../presets/converted/Unchained - Unified Drag'),
  'fiShbRaiN - witchcraft': require('../presets/converted/fiShbRaiN - witchcraft'),
  '27_super_goats-orbus_maximus': require('../presets/converted/27_super_goats-orbus_maximus'),
  'Geiss - Feedback 2': require('../presets/converted/Geiss - Feedback 2'),
  'shifter - lattice (eclipse) Phat + Eo.S. more color mix_v2': require('../presets/converted/shifter - lattice (eclipse) Phat + Eo.S. more color mix_v2'),
  'Stahlregen & flexi + Geiss + martin + Rovastar - Tides (martin′s metallics)': require('../presets/converted/Stahlregen & flexi + Geiss + martin + Rovastar - Tides (martin′s metallics)'),
  'Aderrasi - Halls Of Centrifuge': require('../presets/converted/Aderrasi - Halls Of Centrifuge'),
  'Bmelgren & Krash - Rainbow Orb Peacock (Lonely Signal Gone Mad Mix)': require('../presets/converted/Bmelgren & Krash - Rainbow Orb Peacock (Lonely Signal Gone Mad Mix)')
};
/* eslint-enable max-len */

export function getPresets () {
  return presets;
}

if (butterchurn2) {
  butterchurn2.addPresetPack(presets);
}
