class InputComponent {
    container
    containerIcon
    icon
    message

    input

    error

    constructor(imgIcon, classContainer, type, id, className, text, name) {
        this.container = document.createElement('div')
        this.container.classList.add(classContainer)

        this.containerIcon = document.createElement('span')
        this.containerIcon.classList.add('register-icon')
        this.icon = document.createElement('i')
        this.icon.classList.add(imgIcon)


        this.input = document.createElement('input')
        this.input.type = type;
        this.input.id = id
        this.input.classList.add(className)
        this.input.placeholder = text
        this.input.name = name

        this.message = document.createElement('span')
        this.message.classList.add('form-message')

        this.error = document.createElement("div");
        this.error.classList.add("error", "mt-2", "d-none");
    }

    setError(mess) {
        this.message.innerText = mess;
      
    }

    setAttribute(name, value) {
        this.input.setAttribute(name, value);
    }

    setEventListener(event, callBackFn) {
        this.input.addEventListener(event, callBackFn);
    }

    render() {
        this.containerIcon.appendChild(this.icon)

        this.container.append(this.containerIcon, this.input, this.message)
        return this.container
    }


}

export default InputComponent