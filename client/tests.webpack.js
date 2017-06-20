var context = require.context('./app/bundles/IMAPApp', true, /-test\.jsx?$/);
context.keys().forEach(context);
