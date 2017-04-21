export default function(server) {

  server.create('strategy', {
    name: "First Strategy"
  });
  server.create('strategy', {
    name: "Second Strategy"
  });
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('post', 10);
}
