import DS from 'ember-data';
export default DS.Model.extend({
    city: DS.belongsTo('city'),
    country: DS.belongsTo('country'),
    weather: DS.hasMany('weather')
});
