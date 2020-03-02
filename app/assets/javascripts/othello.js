window.onload = function(){

  var $tableElements = document.getElementsByTagName('td');

  let order = true; //trueは黒（先行）
  let othelloWhite = '⚪️';
  let othelloBlack = '⚫️';
  let othelloColor = othelloBlack;

  for (let puts =0; puts < $tableElements.length; puts++) {
    $tableElements[puts].addEventListener('click', function(){
      //配列に変換する
      let tableElements = [].slice.call($tableElements);
      //クリックした位置の取得
      let index = tableElements.indexOf(this);
      putOthello(index);
      changeOrder();
    });
  }

  function putOthello(index) {
    $tableElements[index].innerHTML = othelloColor;
  }

  function changeOrder() {
    if (order) {
      othelloColor = othelloWhite;
      order = false;
    } else {
      othelloColor = othelloBlack;
      order = true;
    }
  }
}

changeOthello = (index) => {
  let prevLeftOthello = $tableElements[index - 2].innerHTML;
  let prevOthello = $tableElements[index - 1].innerHTML;
  let nextRightOthello = $tableElements[index + 2].innerHTML;
  let nextOthello = $tableElements[index + 1].innerHTML;

  if (prevLeftOthello.match(othelloBlack) && prevOthello.match(othelloWhite)) {
    let targetIndex = index - 1;
    putOthello(targetIndex, index);
  }

  if (nextRightOthello.match(othelloBlack) && nextOthello.match(othelloWhite)) {
    let targetIndex = index + 1;
    putOthello(targetIndex, index);
  }

  if (prevLeftOthello.match(othelloWhite) && prevOthello.match(othelloBlack)) {
    let targetIndex = index - 1;
    putOthello(targetIndex, index);
  }
  
  if (nextRightOthello.match(othelloWhite) && nextOthello.match(othelloBlack)) {
    let targetIndex = index + 1;
    putOthello(targetIndex, index);
  }
}