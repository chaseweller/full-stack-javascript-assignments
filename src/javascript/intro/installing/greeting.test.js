import Test from 'ava';
import * as Greeting from './greeting';

Test('greeting is accessible', t => {
    t.truthy(Greeting.say);

});
