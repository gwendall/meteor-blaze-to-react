Package.describe({
  name: 'gwendall:blaze-to-react',
  summary: 'Turn any Blaze template into a React component',
  git: 'https://github.com/gwendall/meteor-blaze-to-react.git',
  version: '0.1.2'
});

Package.onUse(function(api, where) {
  api.use('react-runtime@15.0.1');
  api.use([
    'templating@1.1.5',
    'underscore@1.0.4'
  ]);

  api.addFiles('lib.js', ['client']);
  api.export('BlazeToReact');
});
