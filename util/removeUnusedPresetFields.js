const fs = require("fs");

async function removeUnusedPresetFields() {
  const files = await fs.promises.readdir("presets/full");

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    let presetData = fs.readFileSync(`presets/full/${file}`);
    let preset = JSON.parse(presetData);

    delete preset.warp_hlsl;
    delete preset.comp_hlsl;
    delete preset.init_eqs_str;
    delete preset.frame_eqs_str;
    delete preset.pixel_eqs_str;

    for (let j = 0; j < preset.shapes.length; j++) {
      const shape = preset.shapes[j];
      if ("init_eqs_str" in shape) {
        delete shape.init_eqs_str;
      }
      if ("frame_eqs_str" in shape) {
        delete shape.frame_eqs_str;
      }
    }

    for (let j = 0; j < preset.waves.length; j++) {
      const wave = preset.waves[j];
      if ("init_eqs_str" in wave) {
        delete wave.init_eqs_str;
      }
      if ("frame_eqs_str" in wave) {
        delete wave.frame_eqs_str;
      }
      if ("point_eqs_str" in wave) {
        delete wave.point_eqs_str;
      }
    }

    fs.writeFileSync(`presets/converted/${file}`, JSON.stringify(preset));
  }
}

removeUnusedPresetFields();
