var context = require.context('./app/bundles/IMAPAppClient', true, /-test\.jsx?$/);
context.keys().forEach(context);
