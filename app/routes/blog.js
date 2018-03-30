import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        var url = "http://178.62.85.56/blog";
        return $.getJSON(url);
    } 
});
