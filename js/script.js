console.log('処理1');
console.log('処理2');
console.log('処理3');

setTimeout(() => {
    console.log('処理4：非同期');
}, 2000);
console.log('処理5');
console.log('処理6');


// const btn = document.getElementById('output-btn');

// btn?.addEventListener('click', () => {
//     console.log('click!');
// });

// const btn2 = document.getElementById('add-btn');
// const parentList = document.getElementById('parent-list');
// btn2?.addEventListener('click', () => {
//     const element = document.createElement('li');
//     element.textContent = 'new list';
//     parentList?.appendChild(element);
// });

// const count = document.getElementById('count-btn');
// count?.addEventListener('click', () => {
//     // @ts-ignore
//     const value = document.forms.textForm.textBox.value;
//     console.log(value.length + '文字');
// });

// const areaBtn = document.getElementById('area-btn');
// areaBtn?.addEventListener('click', () => {
//     // @ts-ignore
//     const value = document.forms.areaForm.area.value;
//     console.log(value);
// });

// const checkBtn = document.getElementById('os-btn');
// checkBtn?.addEventListener('click', () => {
//     // @ts-ignore
//     const checkbox = document.forms.osForm.os;
//     for (let i = 0; i < checkbox.length; i++) {
//         if (checkbox[i].checked) {
//             console.log(checkbox[i].value);
//         }
//     }
// });

// const backBtn = document.getElementById('back-btn');
// // window.addEventListener('scroll', () => {
// //     const scrollValue = document.scrollingElement?.scrollTop ?? 0;
// //     if (scrollValue >= 300) {
// //         backBtn.style.display = 'inline';
// //     } else {
// //         backBtn.style.display = 'none';
// //     }
// // });

// if (backBtn) {
//     window.addEventListener('scroll', () => {
//         const scrollValue = document.scrollingElement?.scrollTop ?? 0;
//         backBtn.style.display = scrollValue >= 300 ? 'inline' : 'none';
//     });
// }