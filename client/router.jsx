const {Router, Route} = ReactRouter;

const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)()

Home = React.createClass({
    render() {
        return <h1>Home</h1>
    }
});

const routes = (
    <Route name="root" handler={AppBody}>
        <Route name="home" path="/" handler={Home} />
        <Route name="other" path="/other" handler={Other} />
        <Route name="settings" path="/settings" handler={Settings} />
        <Router.DefaultRoute handler={AppLoading} />
        <Router.NotFoundRoute handler={AppNotFound} />
    </Route>
);
Meteor.startup(function () {
    const root = document.createElement('app');
    root.setAttribute('id', 'root');
    document.body.appendChild(root);
    ReactDOM.render(<Router>{routes}</Router>,document.getElementById("app"));
});