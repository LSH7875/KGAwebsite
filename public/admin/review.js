// let mypage = 3;

// let pageNum = Math.ceil(총갯수/10)
// let list = 10;

// function pageAlgo(total, bottomSize, listSize, cursor){
//     //total = 총 갯수
//     //bottomSize = 하단크기
//     //listSize = 화면에서 보여줄 크기
//     //cursor = 현재 나의 페이지

//     let totalPageSize = Math.ceil(total / listSize)  //한 화면에 보여줄 갯수에서 구한 하단 총 갯수 

//     let firstBottomNumber = cursor - cursor % bottomSize + 1;  //하단 최초 숫자
//     let lastBottomNumber = cursor - cursor % bottomSize + bottomSize;  //하단 마지막 숫자

//     if(lastBottomNumber > totalPageSize) lastBottomNumber = totalPageSize  //총 갯수보다 큰 경우 방지

//     return {
//         firstBottomNumber,
//         lastBottomNumber,
//         totalPageSize,
//         total,
//         bottomSize,
//         listSize,
//         cursor
//     }
// }

// //280개의 데이터, 하단에는 20개씩, 1개화면에는 10개, 지금 나의페이지는 21
// let info = pageAlgo(280, 20, 10, 21)  


// //실제 출력하는 방법 샘플
// for(let i = info.firstBottomNumber ; i <= info.lastBottomNumber; i++){
//     i == info.cursor ? console.log(`<span>cur : ${i}</span>`) : console.log(`<span>${i}</span>`)
// }

