var context = require.context('./app/bundles/HelloWorld', true, /-test\.jsx?$/);
context.keys().forEach(context);
