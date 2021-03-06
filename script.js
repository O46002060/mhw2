document.body.onload = addElement;

function mostra(event) {
	const testo = event.currentTarget;
	
	if (testo.textContent === 'Clicca per dettagli'){
		testo.textContent = 'Nascondi Dettagli';
	} else {
		testo.textContent = 'Clicca per dettagli';
	}

	const ele = document.querySelectorAll('.hidden2');
	
	for (const el of ele){
		if (el.id === testo.parentNode.id){
			el.classList.remove('hidden2');
			el.classList.add('mostra');
		}
	}
  
	event.currentTarget.addEventListener('click', togli);
	event.currentTarget.removeEventListener('click', mostra);
}

function togli(event) {
	const testo = event.currentTarget;
	
	if (testo.textContent === 'Clicca per dettagli'){
		testo.textContent = 'Nascondi Dettagli';
	} else {
		testo.textContent = 'Clicca per dettagli';
	}

	const elem = document.querySelectorAll('.mostra');
	
	for (const e of elem){
		if (e.id === testo.parentNode.id){
			e.classList.remove('mostra');
			e.classList.add('hidden2');
		}
	}
	event.currentTarget.addEventListener('click', mostra);
	event.currentTarget.removeEventListener('click', togli);
}

function aggiungi(event){
	const element = event.currentTarget;

	const id = document.getElementById(element.parentNode.parentNode.id);

	const a = document.querySelector('.hidden1');
	if (a.className === 'hidden1'){
		a.id = 'id';
	}
	id.classList.remove('hidden');
	id.classList.add('griglia');
	
	element.removeEventListener('click', aggiungi);
	element.addEventListener('click', aggiungi);
}
    

function rimuovi(event){ 
  const element = event.currentTarget;
	
	const id = document.getElementById(element.parentNode.parentNode.id);
	
	const a = document.querySelector('.hidden1');
	if (a.className === 'hidden1'){
		a.id = 'id';
	}
    id.classList.remove('griglia');
    id.classList.add('hidden');

    //rimozione 
    const controlli = document.querySelectorAll('.container1 div');
    let i=0;
    for(const controllo of controlli){
      if(controllo.className === 'hidden'){
        i++;
      }
    }
   if(i=== controlli.length){
      a.removeAttribute('id');
    }

    }



    const input = document.querySelector("input");
    input.addEventListener('keyup', ricerca);

                     /* Funzione di ricerca */

function ricerca(event){
  const input = document.querySelector('input').value.toUpperCase();
  const cont = document.querySelectorAll('.container span')

  for(const c of cont){
    const t = c.textContent.toUpperCase();
    for(let i=0; i<t.length; i++){
      if(t.includes(input)){
        
      c.parentNode.classList.add('griglia')
      c.parentNode.classList.remove('hidden');
    }else{
      c.parentNode.classList.remove('griglia');
      c.parentNode.classList.add('hidden')
    }
    }
  }
}


function addElement() {

const div1 = document.createElement("div");
  div1.className = 'hidden1';
  const currentDiv = document.getElementById("el");
  document.body.insertBefore(div1, currentDiv);

  const h2 = document.createElement('h1');
  h2.textContent = 'Preferiti';
  h2.id='pref';
  div1.appendChild(h2);
  const sect1 = document.createElement('section');
  sect1.className = 'container1';
  div1.appendChild(sect1);
  

 // sezione nascosta

  for (let i = 0; i < contents.length; i++) {
    const div3 = document.createElement("div");
    div3.className = 'hidden';
    div3.id =  i;
    const spa1 = document.createElement('span');
    div3.appendChild(spa1);
    spa1.textContent = contents[i].chirurgo;
    const rem = document.createElement("img");
    rem.className = 'rimuovi';
    rem.src = 'rimuovi.png';
    rem.id = i;
    rem.addEventListener('click', rimuovi);
    const newIm = document.createElement("img");
    newIm.className = 'chirurgo'; 
    newIm.src = contents[i].immagine;
    spa1.appendChild(rem);
    div3.appendChild(newIm);
    const currentDiv3 = document.getElementById("p");
    document.body.insertBefore(div3, currentDiv3);
    const t41 = document.createElement('p');
    t41.addEventListener('click', mostra);
    t41.textContent = 'Clicca per dettagli';
    t41.className = 'vista1';
    t41.id = i;
    const t43 = document.createElement('p1');
    t43.textContent = contents[i].mail;
    t43.className = 'hidden2';
    t43.id = i;
    const t44 = document.createElement('p3');
    t44.textContent = contents[i].tipo;
    t44.className = 'hidden2';
    t44.id =i;
    sect1.appendChild(div3);
    div3.appendChild(t41);
    div3.appendChild(t43);
    div3.appendChild(t44);
  }


   //section contenitore principale
  const sect = document.createElement('section');
  sect.className = 'container';
  sect.id='main'
  const currentDiv2 = document.getElementById("p");
  document.body.insertBefore(sect, currentDiv2);

  for (let i = 0; i < contents.length; i++) {
    const div3 = document.createElement("div");
    div3.className = 'griglia';
    div3.id = i;
    const spa = document.createElement('span');
    div3.appendChild(spa);
    spa.textContent = contents[i].chirurgo;
    const add = document.createElement("img");
    add.className = 'aggiungi';
    add.src = 'aggiungi.png';
    add.id = i;
    add.addEventListener('click', aggiungi);
    const newIm = document.createElement("img");
    newIm.className = 'chirurgo'; 
    newIm.src = contents[i].immagine;
    
    spa.appendChild(add);
    div3.appendChild(newIm);
    const currentDiv3 = document.getElementById("p");
    document.body.insertBefore(div3, currentDiv3);
    const t = document.createElement('p');
    t.addEventListener('click', mostra);
    t.textContent = 'Clicca per dettagli';
    t.className = 'vista';
    t.id = i;
    const t2 = document.createElement('p1');
    t2.textContent = contents[i].mail;
    t2.className = 'hidden2';
    t2.id =i;
    const t3 = document.createElement('p3');
    t3.textContent = contents[i].tipo;
    t3.className = 'hidden2';
    t3.id =i;
    sect.appendChild(div3);
    div3.appendChild(t);
    div3.appendChild(t2);
    div3.appendChild(t3);
  }




    //footer

  const footer = document.createElement('footer');
  const currentDiv4 = document.getElementById("section");
  document.body.insertBefore(footer, currentDiv4);
  const ad = document.createElement('address');
  ad.textContent = 'DI BELLA DANILO O46002060';
  footer.appendChild(ad);
  const p = document.createElement('p');
  p.textContent = 'Web Programming A.A. 2020/2021';
  footer.appendChild(p);
}
