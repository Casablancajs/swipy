AppBody = React.createClass({
    render() {
        return (
            <div className="ionic-body">
                <div className="bar bar-header bar-light">
                    test
                </div>
                <div className="view">
                    <div className="scroll-content ionic-scroll">
                        <div className="content overflow-scroll has-header">
                            <ReactRouter.RouteHandler />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});