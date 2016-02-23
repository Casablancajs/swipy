AppBody = React.createClass({
    render() {
        return (
            <div className="ionic-body">
                <div className="bar bar-header bar-light">
                   <a href="test" >test</a>
                </div>
                <div className="view">
                    <div className="scroll-content ionic-scroll">
                        <div className="content overflow-scroll has-header">
                            {this.props.content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});