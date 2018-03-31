import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  
  didTransition() {
        this._super(...arguments);
        window.scrollTo(0, 0);
  }


});

Router.map(function() {
    this.route('blog', function() {
        this.route('post', { path: '/:id' }); 
    }); 
});

export default Router;
