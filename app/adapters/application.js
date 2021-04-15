import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.RESTAdapter.extend({
    host: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast',
    headers: computed(function() {
        return {
            "x-rapidapi-key": "0f7ba40775mshf71b39e0d5d52b4p173c04jsn457a2205e0a4",
            "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
            "useQueryString": true
        };
    }),
})