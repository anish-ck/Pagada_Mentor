const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.resolveRequest = (context, moduleName, platform) => {
    if (moduleName === 'web-streams-polyfill/ponyfill/es6') {
        return {
            type: 'sourceFile',
            filePath: require.resolve('web-streams-polyfill/dist/ponyfill.mjs'),
        };
    }
    return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
