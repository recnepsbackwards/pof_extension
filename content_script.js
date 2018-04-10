setInterval(function(){
  if (document.querySelector('#meet-me-control-form') !== null) {
    var elem = document.querySelector('#meet-me-control-form');
    var firstElem = elem.querySelector('#meet-me-button-yes-var');
    firstElem.click();
    console.log('clicked button!');
  }
}, 1000);
