const webpackMerge = require("webpack-merge");

const applyPresets = (env) => {
  const presets = env.presets || [];
  /** @type [string[]] */
  const mergePresets = [].concat(...[presets]);
  console.log(mergePresets);
  const mergedConfigs = mergePresets.map((presetName) =>
    require(`./presets/webpack.${presetName}`)(env)
  );

  return webpackMerge({}, ...mergedConfigs);
};

module.exports = applyPresets;
