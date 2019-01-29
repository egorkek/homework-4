// const parent = document.querySelector('.parent');
// function goingDownToDeepChid(parent) {
//     const child = [...parent.children];
//
//
//     for(let a in child){
//         if(child[a].className === '') {
//             goingDownToDeepChid(child[a])
//         }
//         if(child[a].classList.contains('first')){
//             goingDownToDeepChid(child[a])
//
//         }
//         if (child[a].classList.contains('deepChild')) {
//             movingToTop(child[a]);
//
//
//
//
//         }
//
//     }
//
// }
// function movingToTop(el) {
//     const parent = el.parentElement;
//     if (parent.className ===''){
//         parent.style.border = '1px solid red';
//
//         setTimeout(()=>
//         {
//             movingToTop(parent);
//
//         },600)
//     }
//     if (parent.classList.contains('first')){
//
//
//     }
//
//
//
//
// }
// function toSecondBottom(el) {
//     const child = [...el.children];
//     child ? toSecondBottom()
//
//
//
// }
//
//
//
//
// goingDownToDeepChid(parent);
const Deeps=document.querySelectorAll('.deepChild');
function movingToTop(el) {
    el.style.border = '1px solid red'
    const parent = el.parentElement;
    if (parent.className ===''){
        parent.style.border = '1px solid red';

        setTimeout(()=>
        {
            movingToTop(parent);
        },600)

    }
    parent.classList.contains('first') ? movingToTheBottom(parent.nextElementSibling) : null;




}

function movingToTheBottom(el){
    childs = [...el.children];
    if (childs){
        for (let obj in childs){
            childs[obj].style.border = '1px solid green';
            setTimeout(()=>{
                movingToTheBottom(childs[obj])
            }, 600)


        }

    }

}

movingToTop(Deeps[0]);