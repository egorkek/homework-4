const deepChild = document.querySelector('.deepChild');
const colors=['red','blue','black','yellow', 'green', 'orange', 'grey', 'pink']


function movingToTop(el) {
    const parent = el.parentElement;
    if (parent.className ===''){
        deepChild.innerText += ` ${el.tagName}`;
        parent.style.border = `1px solid ${colors[Math.floor(Math.random() * colors.length)]}`;

        setTimeout(()=>
        {
            movingToTop(parent);
        },600)
    }

    
}
movingToTop(deepChild);