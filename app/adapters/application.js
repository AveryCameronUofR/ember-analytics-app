import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.RESTAdapter.extend({
    host: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast',
    headers: computed(function() {
        return {
            "x-rapidapi-key": "d82f81da83msh4bcbc76a26225f9p16316ejsn7f9d90c37f72",
            "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
            "useQueryString": true
        };
    }),
})