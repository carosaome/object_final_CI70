class Search{
    container;
    form;
    input;
    button;
    icon;

    constructor(){
        this.container = document.createElement('div')
        this.container.classList.add('header-search')

        this.form = document.createElement('form')

        this.input = document.createElement('input')
        this.input.type ='text'
        this.input.placeholder = 'Nhap vao day de tim kiem'
        this.input.classList.add('header-section-search')
        
        this.button = document.createElement('button')
        this.button.classList.add('button-search')
        this.icon = document.createElement('i')
        this.icon.classList.add('ti-search')
        this.icon.style.position = "absolute:top"

    }
    render(){
        this.button.append(this.icon);
        this.form.append(this.input, this.button)
        this.container.append(this.form)
        
        return this.container
    }
}

export default Search