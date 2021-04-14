import DS from 'ember-data';
import { decamelize } from '@ember/string';

export default class IndexSerializer extends DS.JSONSerializer {
  keyForAttribute(key) {
    return decamelize(key);
  }
}
