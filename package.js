Package.describe({
  name: 'gwendall:blaze-to-react',
  summary: 'Turn any Blaze template into a React component',
  git: 'https://github.com/gwendall/meteor-blaze-to-react.git',
  version: '0.1.2'
});

Package.onUse(function(api, where) {
  api.versionsFrom('1.2');
  api.use([
    'react@0.14.1_1',
    'templating@1.1.5',
    'underscore@1.0.4'
  ]);
  api.addFiles('lib.jsx');
  api.export('BlazeToReact');
});
