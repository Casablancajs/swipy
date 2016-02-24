FlowRouter.route("/", {
    name:"home",
    action: function() {
        ReactLayout.render(AppBody, {
            content: <Items />
        });
    }
});

FlowRouter.route("/users", {
    name:"users",
    action: function() {
        ReactLayout.render(AppBody, {
            content: <Users />
        });
    }
});

FlowRouter.route("/Settings", {
    name:"settings",
    action: function() {
        ReactLayout.render(AppBody, {
            content: <Settings />
        });
    }
});
