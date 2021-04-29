const filterItem = document.querySelector('.items');
const filterImg = document.querySelectorAll('.image');
const sizeItem = document.querySelector('.sizes');
const circleItem = document.querySelector('.circles');

let colorFilter = 'any';
let sizeFilter = 'any';
let filterSize = [];
let filterName = [];
const images = document.querySelectorAll('.big');

images.forEach((image)=>{
		image.style.height ='100%';
		image.style.width ='40%';	
})

window.onload = () =>{
	
	circleItem.onclick = (selectedCircle) =>{
		if(selectedCircle.target.classList.contains("circle")){
			if(!selectedCircle.target.classList.contains('cactive')){
				if(IsColorPicked()){
					circleItem.querySelector('.cactive').classList.remove('cactive');
				}
				selectedCircle.target.classList.add('cactive');			
				colorFilter = selectedCircle.target.getAttribute('data-name');
				console.log(colorFilter);
			}else{
				selectedCircle.target.classList.remove("cactive");
				
				if(circleItem.querySelector('.cactive') == null){
					colorFilter = 'any';
					console.log(colorFilter);
				}
			}
		}

		filterImg.forEach((image)=>{
			FindAllFilters();
			if((sizeFilter == 'any' || sizeFilter == image.getAttribute('size')) 
									&& (filterName == "All" || isType(image)) 
									&& (colorFilter == 'any' || colorFilter == image.getAttribute('color'))){
				image.classList.remove("hide");
				image.classList.add("show");
			}else{
				image.classList.add("hide");
				image.classList.remove("show");
			}
		});
	}

	sizeItem.onclick = (selectedSize) =>{
		if(selectedSize.target.classList.contains("size")){
			if(!selectedSize.target.classList.contains('sactive')){
				if(IsSizePicked()){
					sizeItem.querySelector('.sactive').classList.remove('sactive');
				}
				selectedSize.target.classList.add("sactive");
				sizeFilter = selectedSize.target.getAttribute('data-name');
				console.log(sizeFilter);
			}else{
				selectedSize.target.classList.remove("sactive");
				if(sizeItem.querySelector('.sactive') == null ){
					sizeFilter = 'any';
					console.log(sizeFilter);
				}
			}
		}

		filterImg.forEach((image)=>{
			FindAllFilters();
			if((sizeFilter == 'any' || sizeFilter == image.getAttribute('size')) 
									&& (filterName == "All" || isType(image))
									&& (colorFilter == 'any' || colorFilter == image.getAttribute('color'))){
				image.classList.remove("hide");
				image.classList.add("show");
			}else{
				image.classList.add("hide");
				image.classList.remove("show");
			}
		});
	}


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
					filterItem.querySelector("[data-name = 'All']").classList.add('active');
					FindAllFilters();
				}
			}else{
				selectedItem.target.classList.add('active');
				filterName.push(selectedItem.target.getAttribute("data-name"));
			}            	
			filterImg.forEach((image)=>{
				if((sizeFilter == 'any' || sizeFilter == image.getAttribute('size')) 
									&& (filterName == "All" || isType(image))
									&& (colorFilter == 'any' || colorFilter == image.getAttribute('color'))){
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
		if(image.getAttribute("data-name").includes(item)){
			console.log(image.getAttribute("data-name").includes(item));
			console.log(image.getAttribute('size'));
			if(sizeFilter == 'any' || image.getAttribute('size') == sizeFilter){
				isExist = true;
			}
		}
	})
	return isExist;
}

function IsSizePicked(){
	return document.querySelector('.sactive') != null;
}

function IsColorPicked(){
	return document.querySelector('.cactive') != null;
}