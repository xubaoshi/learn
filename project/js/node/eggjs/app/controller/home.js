module.exports = app => {
    class HomeController extends app.Controller {
        * index() {
            this.ctx.service.some.list();
            this.ctx.body = 'Hello world';
        }
    }
    return HomeController;
}