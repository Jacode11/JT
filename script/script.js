///step 1: get DOM
//let nextDom = document.getElementById('next');
//let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
//let listItemDom = document.querySelector('.carousel .list');
//let thumbnailDom = document.querySelector('.carousel .thumbnail');
//let thumbnailDom = document.querySelectorAll('.item');
//let timeDom = document.querySelector('.carousel .time');

//thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
//let timeRunning = 3000;
//let timeAutoNext = 7000;

//nextDom.onclick = function(){
    //showSlider('next');    
//}
//prevDom.onclick = function(){
    //showSlider('prev');    
//}

let timeRunning = 1000;
let runTimeOut;



//let runTimeOut;
//let runNextAuto = setTimeout(() => {
    //next.click();
//, timeAutoNext)
//function showSlider(type){
    //let itemSlider = document.querySelectorAll('.carousel .list .item');
    //let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');
    
    //if(type === 'next'){
        //listItemDom.appendChild(itemSlider[0]);
        //thumbnailDom.appendChild(itemThumbnail[0]);
        //carouselDom.classList.add('next');
    //}else{
        //let positionLastItem = itemSlider.length - 1;
        //listItemDom.prepend(itemSlider[positionLastItem]);
        //thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        //carouselDom.classList.add('prev');
    //}
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning)

    //clearTimeout(runNextAuto);
    //runNextAuto = setTimeout(() => {
        //next.click();
    //}, timeAutoNext)
//}
let items = document.querySelectorAll('.carousel .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

/// config param///
let countItem = items.length;
let itemActive = 0;
/// event next click///
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
///event prev click///
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
/// auto run slider///
//let refreshInterval = setInterval(() => {
    //next.click();
//}, 5000)
function showSlider(){
    /// remove item active old///
    let itemActiveOld = document.querySelector('.carousel .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    /// active new item///
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    /// clear auto time run slider///
    //clearInterval(refreshInterval);
    //refreshInterval = setInterval(() => {
        //next.click();
    //}, 5000)
}

/// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})
