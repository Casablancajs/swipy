


Reaktor.init(
    <Router>
        <Route name="home" path="/" layout ={AppBody} content={Home} />
        <Route name="other" path="/other" layout ={AppBody} content={Other} />
        <Route name="settings" path="/settings"  layout ={AppBody} content={Settings} />

    </Router>
);


Meteor.startup(function () {
    const root = document.createElement('app');
    root.setAttribute('id', 'root');
    document.body.appendChild(root);
   // ReactDOM.render(routes,document.getElementById("app"));
});