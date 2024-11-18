// restart game button
var restart=document.querySelector('#b')
var squares=document.querySelectorAll('td')

//Grabs all the squares
var squares=document.querySelectorAll('td')



//Clear the squares
function clearall(){
    for(var i=0;i<squares.length;i++){
        squares[i].textContent=''
    }
}
restart.addEventListener('click',clearall)

// var cellone=document.querySelector('#one')
// cellone.addEventListener('click',function(){
//     if (cellone.textContent===''){
//         cellone.textContent='X'
//     }else if(cellone.textContent==='X'){
//         cellone.textContent='O'
//     }else{
//         cellone.textContent=''
//     }
// })
//// function to change the content of table data
function changer(){
    if (this.textContent===''){
        this.textContent='X'
    }else if(this.textContent==='X'){
        this.textContent='O'
    }else{
        this.textContent=''
    }
}
for(var i=0;i<squares.length;i++){
    squares[i].addEventListener('click',changer)
}





//For loop to add event listeners to all the squares
