Package.describe({
  name: 'gwendall:blaze-to-react',
  summary: 'Turn any Blaze template into a React component',
  git: 'https://github.com/gwendall/meteor-blaze-to-react.git',
  version: '1.0.0'
});

Package.onUse(function(api, where) {
  api.versionsFrom('1.3-rc.0');
  api.use([ 'ecmascript', 'templating', 'underscore', 'react-meteor-data' ]);
  api.mainModule('lib.jsx', 'client');
  api.export('BlazeToReact');
});
