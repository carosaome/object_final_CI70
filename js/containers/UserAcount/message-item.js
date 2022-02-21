class MessageItem {
    container;
    name;
    content

    constructor() {
        this.container = document.createElement("div");
        this.container.classList.add("msg-item-container");

        
        this.name = document.createElement("div");
        this.name.classList.add("msg-item-name");
        this.name.innerText = 'Dat d'
        
        this.content = document.createElement("div");
        this.content.classList.add("msg-item-content");
        this.content.innerText = 'huhu'



    }

    render(){
        this.container.append(this.name, this.content)
        return this.container
    }
}

export default MessageItem 