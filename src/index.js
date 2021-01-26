import basePresets from './base.js'
import extraPresets from './extra.js'
import imagePresets from './image.js'
import md1 from './md1.js'
import minimal from './minimal.js'
import nonMinimal from './nonMinimal.js'

export default {
  ...basePresets,
  ...extraPresets,
  ...imagePresets,
  ...md1,
  ...minimal,
  ...nonMinimal,
}
