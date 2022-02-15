class Ads {
    container;
    ads;
    leftAds;
    leftImg
    rightAds;
    rightImg

    constructor() {
        this.container = document.createElement('div')
        this.container.classList.add('contai-ads')

        this.ads = document.createElement('div')
        this.ads.classList.add('ads')
        
        this.leftAds = document.createElement('div')
        this.leftAds.classList.add('ads-left')
        this.leftImg = document.createElement('img')
        this.leftImg.src ='https://theme.hstatic.net/1000026716/1000440777/14/stk-bn-left.png?v=22462'
        this.rightAds = document.createElement('div')
        this.rightAds.classList.add('ads-right')
        this.rightImg = document.createElement('img')
        this.rightImg.src = 'https://theme.hstatic.net/1000026716/1000440777/14/stk-bn-right.png?v=22462'

    }

    render(){
        this.leftAds.append(this.leftImg)
        this.rightAds.append(this.rightImg)

        this.ads.append(this.leftAds, this.rightAds)
        this.container.append(this.ads)
        return this.container
    }

}

export default Ads