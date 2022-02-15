class ButtonComponent{
    button;
    constructor(type, id, className, text, cb){
        this.button = document.createElement('button')
        this.button.type = type
        this.button.id = id
        this.button.classList.add(...className)
        this.button.innerText = text
        

        if (cb) {
            this.button.addEventListener("click", cb);
          }
    }
}

export default ButtonComponent