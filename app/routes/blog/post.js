import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        console.log("params:", params);
        var url = "http://178.62.85.56/post/" + params.id;
        console.log(url);
        return $.getJSON(url);
    }
});
