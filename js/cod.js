
var container = document.getElementById('container'),
		
		firstStep = document.getElementById('first-step'),
		secondStepContent = `
													<div id="second-step">
														<p>Second Step</p>
													</div>`,
		thirdStepContent = `
													<div id="third-step">
														<p>Third Step</p>
													</div>`,
		playBtn = document.getElementById('play-btn');

		playBtn.addEventListener('click', function(e) {
			e.preventDefault();
			firstStep.remove();

			var div = document.createElement('div');
			div.innerHTML = secondStepContent;
			container.appendChild(div);
		});




// var username = document.getElementById("warname").name;
// console.log(username);
// var check = function (username){
// 	if(username.length<3){
// 		alert("Please Enetr a valid name");
// 	}else if(username[0]==0||username[0]==1||username[0]==2||username[0]==3||username[0]==4||username[0]==5||username[0]==6||username[0]==7||username[0]==8||username[0]==9)
// 	{
// 		alert("Please enter a valid war name");
// 	}
// }

// var modal = document.getElementById('modal-wrapper');
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }