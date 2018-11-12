//答えを用意
var number = Math.floor(Math.ramdom()*3)
var answer = parseInt(window.prompt('数あてゲー。0~2の数を入力してください！'));

var message;
if(answer === number){
  message = 'あたり！';
}else if(answer < number){
  message = '残念！もっと大きいです';
}else if(number < answer){
  message = '残念！もっと小さいです';
}else{
  message = '0~2の数字を入力してください';
}

//結果を表示
document.getElementById('choice').textComent = message;
