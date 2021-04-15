import Controller from '@ember/controller';

export default Controller.extend({
  
  actions: {
    async searchWeatherForecast(search) {
      let inputs =['',''];
      inputs = search.split(',').map(inputParam=>(inputParam.trim()));
      let weather = await this.store.queryRecord('3hourly', {city:inputs[0], country:inputs[1]}).then(function(data){
        console.log(data);
      });
      console.log(weather);
      return weather;
    },
  },
});