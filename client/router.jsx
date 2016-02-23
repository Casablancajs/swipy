FlowRouter.route("/", {
    action: function() {
        ReactLayout.render(AppBody, {
            content: <Home />
        });
    }
});

FlowRouter.route("/other", {
    action: function() {
        ReactLayout.render(AppBody, {
            content: <Other />
        });
    }
});

FlowRouter.route("/Settings", {
    action: function() {
        ReactLayout.render(AppBody, {
            content: <Settings />
        });
    }
});
