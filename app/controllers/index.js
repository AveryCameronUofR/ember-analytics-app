import Controller from '@ember/controller';

export default Controller.extend({
  
  actions: {
    searchWeatherForecast(search) {
      let inputs =['',''];
      inputs = search.split(',').map(inputParam=>(inputParam.trim()));
      let innerThis = this;
      this.store.queryRecord('3hourly', {city:inputs[0], country:inputs[1]}).then(function(forecast){
        innerThis.store.push(forecast);
      });
    },
  },
});