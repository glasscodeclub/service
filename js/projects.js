var projects = document.querySelector('#project-wrapper')

$(document).ready(async () => {
    // console.log(target);
    // console.log(data.responseJSON);
    // console.log(window.location)
	let data = await $.getJSON('../data.json');
    data.map(details => {
        if(details.title){
        	projects.innerHTML += `
				<a href="${details.url}">
	        		<div class="project paragraph">
						<div class="row">
							<div class="col-md-4">
								<img src="${details.img}" alt="">
							</div>
							<div class="col-md-8">
								<h2>${details.title}</h2>
								<p>${details.desc}</p>
							</div>
						</div>
					</div>
				</a>
        	`
        }
    })
});