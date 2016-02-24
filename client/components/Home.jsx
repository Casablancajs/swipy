Items = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            items: Posts.find().fetch()
        }
    },
    render() {
        let list = this.data.items.map(function(item) {
            return (
              <div key={item._id}>
                <div className="item item-avatar" >
                    <img src={item.avatar}/>
                    <h2>{item.author}</h2>
                    <h2>{item.date.toString()}</h2>


                </div>
                    <div className="item item-body">
                        <img className="full-image" src={item.image}/>
                            <p>
                                {item.description}
                            </p>

                    </div>
                </div>




            )
        })
        return (
            <div className="list">
                {list}
            </div>
        )
    }
});