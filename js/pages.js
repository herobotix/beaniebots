ready(function (){
	
	pageBody = document.getElementById("pageBody");
	pages = {}
	pages.homepage = function() { /*homepage template*/
		page = document.getElementsByClassName("homepage template")[0].cloneNode(true);
		page.classList.remove("template");
		pageBody.textContent = "";
		pageBody.appendChild(page);
	}
	pages.blank = function() { /*blank template*/
		page = document.getElementsByClassName("blank template")[0].cloneNode(true);
		page.classList.remove("template");
		pageBody.textContent = "";
		pageBody.appendChild(page);
	}
	pages.members = function() { /*members template*/
		page = document.getElementsByClassName("members template")[0].cloneNode(true);
		page.classList.remove("template");
		pageBody.textContent = "";
		pageBody.appendChild(page);
	}
	pages.trophy_shelf = function() { /*trophy_shelf template*/
		page = document.getElementsByClassName("trophy_shelf template")[0].cloneNode(true);
		page.classList.remove("template");
		pageBody.textContent = "";
		pageBody.appendChild(page);
	}
	
	function drkmdtoggle(event) {
		document.body.classList.toggle("drkmd")
	}
	
	document.getElementById("drkmdbtnMenu").addEventListener("click", drkmdtoggle );
	document.getElementById("drkmdbtnTitle").addEventListener("click", drkmdtoggle );
		
	function onRedir () {
		if (location.hash === "#blank") pages.blank();
		else if (location.hash === "#members") pages.members();
		else if (location.hash === "#trophy_shelf") pages.trophy_shelf();
		else pages.homepage();
	}
	
	window.onhashchange = onRedir;
	
	window.onhashchange();
});
