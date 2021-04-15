import RESTSerializer from '@ember-data/serializer/rest';

export default class ApplicationSerializer extends RESTSerializer {
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        //pair down API response to match model
        payload.city = {name: payload.city_name, id: 0}
        payload.country = {name: payload.country_code, id:0} 
        let {data, ...payloadCopy} = payload;
        let weather = Object.keys(data).map(datum=>({temp:data[datum].temp, timezone:data[datum].timestamp_local, id: datum}));
        payload.weather = weather;

        delete payload.data;
        delete payload.city_name;
        delete payload.lat;
        delete payload.lon;
        delete payload.country_code;
        delete payload.state_code;
        delete payload.timezone;
        return super.normalizeResponse(...arguments);
    }
}
