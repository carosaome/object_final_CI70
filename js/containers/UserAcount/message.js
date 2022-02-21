import ButtonComponent from "../../components/button.js"
import MessageItem from "./message-item.js"

class MessageUserPage{
    container
    containerMessages
    listItems
    messages
    inputMessage
    btnSendMessage
    title
    constructor(){
        this.container = document.createElement('div')
        this.container.classList.add('div-messsage-user')
        
        this.imgIcon = document.createElement('img')
        this.imgIcon.classList.add('icon-messsage-user')
        this.imgIcon.src = 'https://shopfront-cdn.tekoapis.com/static/a8e347d31db4d701.png'
        this.imgIcon.addEventListener('click', this.openMessage)

        this.containerMessages = document.createElement('div')
        this.containerMessages.classList.add('container-messsages-user')
        this.containerMessages.innerText = ''

        
        this.listItems = document.createElement('div')
        this.listItems.classList.add('container-list-messsages')

        this.title = document.createElement('div')
        this.title.classList.add('title-message')
        this.inputMessage = document.createElement('input')
        this.inputMessage.classList.add('input-messsage-user')
        this.messages = new MessageItem()
        this.btnSendMessage = new ButtonComponent('','','btn-send-messgage','Send')
        
    }

    openMessage=()=>{
        let check = false

        if(check){
            this.container.remove(this.containerMessages)
            
            check = false
        }

        else{
            const temp = new Array(20).fill(1).map(()=> new MessageItem().render())
            this.listItems.append(...temp)
            this.containerMessages.append(this.title,this.listItems , this.inputMessage , this.btnSendMessage.render())
            this.container.append(this.containerMessages)
            check = true
        }
        // this.container.remove(this.imgIcon)
      
        
    }
    render(){
        
        this.container.append(this.imgIcon)
        return this.container
    }
}

export default MessageUserPage