import Route from '@ember/routing/route';

export default class AboutRoute extends Route {
    model(){
        return {
            someList:[1,2,3,4,5]
        };
    }
}
