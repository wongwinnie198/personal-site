class App {
    constructor(props){
        this.state = props
    }
    _createElement(){
        const {customEle, customClass, customId} = this.state;
        const element = document.createElement(customEle.toString());
        Object.assign(element, {className: customClass, id: customId });
        return element;
    }
}

export default App;