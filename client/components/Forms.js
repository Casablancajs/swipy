AddItem = React.createClass({
    render(){
        return(
            <div class="list">
                <label class="item item-input">
                    <input type="text" placeholder="First Name"/>
                </label>
                <label class="item item-input">
                    <input type="text" placeholder="Last Name"/>
                </label>
                <label class="item item-input">
                    <textarea placeholder="Comments"></textarea>
                </label>
            </div>
        )
    }
});