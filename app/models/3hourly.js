import DS from 'ember-data';
export default DS.Model.extend({
    city_name: DS.attr('string'),
    //state_code: DS.attr('string'),
    country_code: DS.attr('string'),
    lat: DS.attr('string'),
    lon: DS.attr('string'),
});
