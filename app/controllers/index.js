import Controller from '@ember/controller';

export default Controller.extend({
  
  actions: {
    searchWeatherForecast(city) {
      this.store.queryRecord('3hourly', {city:city}).then((weather) => {
        console.log(weather);
      });
    },
  },
});