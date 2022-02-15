class InputComponent {

    input

    constructor(type, id, className, text, name){
        this.input = document.createElement('input')
        this.input.type = type;
        this.input.id = id
        this.input.classList.add(...className)
        this.input.placeholder = text
        this.input.name = name
    }

    render() {
        return this.input
    }


}

export default InputComponent