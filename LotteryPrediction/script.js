

const gameBtn = document.getElementById('btn');
let num = 1;
let numberInput = 0;

gameBtn.addEventListener('click', () => {
    // Creater a randomNumber as winning result
    let winningNumber = Math.ceil(Math.random() * 10);
    
    numberInput = document.getElementById('inputnumber').value;
    
    if(numberInput == winningNumber){
        alert('Bạn đã thắng trò chơi đoán số may mắn! Chúc Mừng bạn!')
        toBlankInput();
    } else {
        alert(`Bạn đã đoán sai ${num} lần và bạn còn ${3 - num} lần chơi nữa! con số may mắn là ${winningNumber}`);
        toBlankInput();
        num++;
        if(num > 3){
            num = 1;
            alert('Bạn đã hoàn toàn thua cuộc!')
        }
    }
})

function toBlankInput() {
    document.getElementById('inputnumber').value = '0';
}