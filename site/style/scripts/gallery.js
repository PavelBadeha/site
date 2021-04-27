const filterItem = document.querySelector('.items');
const filterImg = document.querySelectorAll('.image');

		let filterName = [];
		
window.onload = () =>{
    filterItem.onclick = (selectedItem)=>{
        if(selectedItem.target.classList.contains("item")){
			if(filterItem.querySelector('.active').getAttribute('data-name') == 'All'){
				filterItem.querySelector('.active').classList.remove('active');
				filterName.splice(0,1);
				FindAllFilters();
			}
			if(selectedItem.target.getAttribute('data-name') == 'All'){
				filterName = [];
				filterItem.querySelectorAll('.active').forEach((item)=>{
					item.classList.remove('active');
				});
				FindAllFilters();
			}
			if(selectedItem.target.classList.contains("active")){	
				filterName.splice(filterName.indexOf(selectedItem.target.getAttribute('data-name'),1));
				selectedItem.target.classList.remove("active");	
				FindAllFilters();	
				if(filterName.length == 0){
					console.log(filterName.length);
					filterItem.querySelector("[data-name = 'All']").classList.add('active');
					FindAllFilters();
				}
			}else{
				selectedItem.target.classList.add('active');
				filterName.push(selectedItem.target.getAttribute("data-name"));
			}            	
			filterImg.forEach((image)=>{
				let filterImages = image.getAttribute("data-name");
				if(isType(filterImages)|| filterName == "All"){
					image.classList.remove("hide");
					image.classList.add("show");
				}else{
					image.classList.add("hide");
					image.classList.remove("show");
				}
			});
        } 
    }
}
 

function FindAllFilters(){
	filterName = [];
	filterItem.querySelectorAll('.active').forEach((item)=>{
		filterName.push(item.getAttribute('data-name'));
	});
}

function isType(image){
	let isExist = false;
	filterName.forEach((item)=>{
		if(image.includes(item)){
			isExist = true;
		}
	})
	return isExist;
}