const countries = [
    { name: "Canada", continent: "North America", cities: ["Calgary","Montreal","Toronto"], photos: ["canada1.jpg","canada2.jpg","canada3.jpg"] },
    { name: "United States", continent: "North America", cities: ["Boston","Chicago","New York","Seattle","Washington"], photos: ["us1.jpg","us2.jpg"] },
    { name: "Italy", continent: "Europe", cities: ["Florence","Milan","Naples","Rome"], photos: ["italy1.jpg","italy2.jpg","italy3.jpg","italy4.jpg","italy5.jpg","italy6.jpg"] },
    { name: "Spain", continent: "Europe", cities: ["Almeria","Barcelona","Madrid"], photos: ["spain1.jpg","spain2.jpg"] }
];
for(let i=0;i<countries.length;i++){
  let divitem=document.createElement("div");
  divitem.className="item";
  let name=document.createElement("h2");
  let namenode=document.createTextNode(countries[i].name);
  name.appendChild(namenode);
  divitem.appendChild(name);
  let continent=document.createElement("p");
  let continentnode=document.createTextNode(countries[i].continent);
  continent.appendChild(continentnode);
  divitem.appendChild(continent);
  let cities=document.createElement("div");
  cities.className="inner-box";
  let citiestitle=document.createElement("h3");
  let citiestitlenode=document.createTextNode("Cities");
  citiestitle.appendChild(citiestitlenode);
  cities.appendChild(citiestitle);
  let citiesdetails=document.createElement("ul");
  for(let j=0;j<countries[i].cities.length;j++){
    let citiesdetailsitem=document.createElement("li");
    let citiesdetailsitemnode=document.createTextNode(countries[i].cities[j]);
    citiesdetailsitem.appendChild(citiesdetailsitemnode);
    citiesdetails.appendChild(citiesdetailsitem);
  }
  cities.appendChild(citiesdetails);
  divitem.appendChild(cities);
  let photos=document.createElement("div");
  photos.className="inner-box";
  let photostitle=document.createElement("h3");
  let photostitlenode=document.createTextNode("Popular Photos");
  photostitle.appendChild(photostitlenode);
  photos.appendChild(photostitle);
  let photosimg=document.createElement("ul");
  for(let j=0;j<countries[i].photos.length;j++){
    let photosimgitem=document.createElement("img");
    photosimgitem.className="photo"
    photosimgitem.src="./images/"+countries[i].photos[j];
    photosimg.appendChild(photosimgitem);
  }
  photos.appendChild(photosimg);
  divitem.appendChild(photos);
  let visitbutton=document.createElement("button");
  let visitbuttonnode=document.createTextNode("Visit");
  visitbutton.appendChild(visitbuttonnode);
  divitem.appendChild(visitbutton);
  let element1=document.getElementsByClassName("flex-container");
  element1[0].appendChild(divitem);
}
