function getHitokoto() {
  fetch('https://v1.hitokoto.cn')
    .then(function (res){
      return res.json();
    })
    .then(function (data) {
      var viewer = document.getElementById('viewer');
      viewer.innerText = data.hitokoto; 
    })
    .catch(function (err) {
      console.error(err);
    })
}

function hitokotoApi() {
	fetch('https://vi.hitokot.cn')
	  .then(function (res){
	  	return res.json();
	  })
	  .then(function (data){
	  	var returnObj = {hitokoto: "", from: ""};
	  	returnObj.hitokoto = data.hitokoto;
	  	returnObj.from = data.from;
	  	return returnObj;
	  })
	  .catch(function (err) {
        console.error(err);
      })
}