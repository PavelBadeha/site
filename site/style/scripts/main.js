let mainFilters = document.querySelector(".slider");

export let data = '';
if(mainFilters !=null){
		mainFilters.onclick = (mFilter) =>{
		data = mFilter.target.getAttribute('data');
	}
}
