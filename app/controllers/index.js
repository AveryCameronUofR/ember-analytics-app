import Controller from '@ember/controller';

export default Controller.extend({
  
  actions: {
    searchWeatherForecast(search) {
      let inputs =['',''];
      inputs = search.split(',');
      inputs = inputs.map(inputParam=>(inputParam.trim()));
      this.store.queryRecord('3hourly', {city:inputs[0], country:inputs[1]}).then((weather) => {
        console.log(weather);
      });
    },
  },
});