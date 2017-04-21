import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i){ return `Strategy ${i}` },
  intlKey(i){ return `strategy-${i}` }
});
