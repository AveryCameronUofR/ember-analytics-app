import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    model(){
        return this.store.queryRecord('3hourly', {city:"Regina", country:"Canada"}).then(function(forecast){
        });
    }
}
