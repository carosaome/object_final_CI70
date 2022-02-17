
function  changeScreen(screeen){

    const containerBody = document.getElementById('body')

    if(screeen){
       containerBody.innerHTML = ''
       containerBody.append(screeen.render())
    }
    else{
       containerBody.append(this.body.render())

    }
}

export default changeScreen