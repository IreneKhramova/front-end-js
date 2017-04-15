import showData from './show-data';

let busy = false;

document.addEventListener('scroll', function (e) {
  let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  let clientHeight = document.documentElement.clientHeight;
  let scrollTop = window.pageYOffset;

  if((scrollHeight - clientHeight) <= scrollTop + 170 && !busy)
    loadData().then(showData);
});

function loadData() {
  return new Promise(function(resolve, reject) {
      busy = true;

      let xhr = new XMLHttpRequest();
      xhr.open('GET', './data.json', true);

      xhr.onload = function () {
        if (xhr.status === 200 || xhr.status === 201) 
          resolve(xhr.responseText);
        else {
          var error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
        busy = false;
      }
      xhr.send();
    });
}