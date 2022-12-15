ready(function (){
	
	pageBody = document.getElementById("pageBody");
	pages = {}
	pages.homepage = function() { /*homepage template*/
		page = document.getElementsByClassName("homepage template")[0].cloneNode(true);
		page.classList.remove("template");
		pageBody.textContent = "";
		pageBody.appendChild(page);
	}
	pages.volunteer = function() { /*??? template*/
		page = document.getElementsByClassName("??? template")[0].cloneNode(true);
		page.classList.remove("template");
		pageBody.textContent = "";
		pageBody.appendChild(page);
	}
	
	function drkmdtoggle(event) {
		document.body.classList.toggle("drkmd")
	}
	
	document.getElementById("drkmdbtn").addEventListener("click", drkmdtoggle );
		
	function onRedir () {
		if (location.hash === "#???") pages.???();
		/*else if (location.hash === "#<unused>") pages.about();*/
		else pages.homepage();
	}
	
	window.onhashchange = onRedir;
	
	window.onhashchange();
});
