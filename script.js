const container = document.querySelector('.l-containerMobile');
const rigthContent = document.querySelector('.r-contentMobile');
const openContainer = ()=>{
    container.style.display = 'flex';
}
const closeContainer = ()=>{
    container.style.display = 'none';
}
const opneBtn = document.querySelector('.navbarFirstItem');
opneBtn.addEventListener('click',openContainer);
rigthContent.addEventListener('click',closeContainer)