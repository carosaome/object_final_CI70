class SubButton{
    
    
    container;
    icon;
    text;
    constructor(icon,text,cb){
         this.container = document.createElement('a')
         if(cb){
             this.container.addEventListener('click', cb)
         }
        this.icon = document.createElement('i')
        this.icon.classList.add(icon)
        this.text = document.createElement('span')
        this.text.innerText = text

    }

    render(){
        this.container.append(this.icon, this.text)

        return this.container
    }
}

export default SubButton