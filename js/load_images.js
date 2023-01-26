document.addEventListener('DOMContentLoaded', ev =>{
	let galCont = document.getElementById('galery');
	load_images(galCont);
});

async function load_images(container){
	let indice = 0;
	while (true){
		const uri = `img/dibujo${indice}.jpg`
		const myBlob = await fetch(uri)
		.then(r=>{
			if(r.ok){
				indice++;
				return r.blob();
			}
			return null;
		})

		if(myBlob === null)
			break;

		let link = document.createElement('a');
		link.href = uri;
		link.target = '_blank';
		
		let img = document.createElement('img');
		img.src = URL.createObjectURL(myBlob);
		
		link.appendChild(img);
		console.log(link);
		container.appendChild(link);

	}
}