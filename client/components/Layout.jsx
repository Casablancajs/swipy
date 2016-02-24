HeaderBar = React.createClass({
    render(){
        return(
            <div className="bar bar-header bar-positive">
                <h1 className="title">{this.props.title}</h1>
            </div>
        )
    }
});

Tabs = React.createClass({
    render(){
        return(
            <div className="tabs">
                <a href={FlowHelpers.pathFor( 'home')} className="tab-item">
                    Home
                </a>
                <a href={FlowHelpers.pathFor( 'users')} className="tab-item">
                    Users
                </a>
                <a href={FlowHelpers.pathFor( 'settings')} className="tab-item">
                     Settings
                </a>
            </div>
        )
    }
})

AppBody = React.createClass({
    render() {
        return (

            <div className="ionic-body">
                <HeaderBar title="Swipy"/>
                <div className="view">
                    <div className="scroll-content ionic-scroll">
                        <div className="content overflow-scroll has-header">
                            {this.props.content}
                        </div>
                    </div>
                </div>
                <Tabs/>
            </div>
        )
    }
});