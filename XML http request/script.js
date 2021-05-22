let main =document.createElement('div');
main.setAttribute('class',"main");
document.body.appendChild(main);
//imageContainer..
let requeste =new XMLHttpRequest();
requeste.open('GET', 'https://restcountries.eu/rest/v2/all', true);
requeste.send();
requeste.onload=()=>{
    let data=JSON.parse(requeste.response);  
        /// country Flags....
        let container=document.createElement('div');
        container.setAttribute('class','container');
        container.setAttribute('id','container');
        document.body.appendChild(container);
        //row..
        let row =document.createElement('div');
        row.setAttribute('class',"row row-cols-1 row-cols-lg-4 row-cols-md-3 g-4");
        container.appendChild(row);
        //main..js
        data.filter(items=>{
        //col..
        let col =document.createElement('div');
        col.setAttribute('class','col');
        row.appendChild(col);
        //card..
        let card =document.createElement('div');
        card.setAttribute('class','card');
        col.appendChild(card);
        //card Header..
        let cardHeader =document.createElement('div');
        cardHeader.setAttribute('class','card-header');
        cardHeader.innerText=items.name;
        card.appendChild(cardHeader);
        //imgTag...
        let imgTag =document.createElement('img');
        imgTag.setAttribute('src',items.flag);
        imgTag.setAttribute('class','card-img-top');
        imgTag.setAttribute('atl','Flags');
        cardHeader.appendChild(imgTag);
        //card-body...
        let cardBody =document.createElement('div');
        cardBody.setAttribute('class','card-body');
        cardHeader.appendChild(cardBody);
        //sapn...
        let capitals=document.createElement('span');
        capitals.setAttribute('class',"badge  text-dark my-auto");
        capitals.innerText="Capital :";
        cardBody.appendChild(capitals);
        //capitalNames..
        let capitalName=document.createElement('span');
        capitalName.innerText=items.capital;
        capitalName.setAttribute('class',"badge bg-success");
        cardBody.appendChild(capitalName);
        //br..
        let br=document.createElement('br');
        cardBody.appendChild(br);
        // //br..
        // let brr=document.createElement('br');
        // capitalName.appendChild(brr);

        //lai
        let regionName=document.createElement('span');
        regionName.innerText="Region :";
        cardBody.appendChild(regionName);
        //Regions...
        let capitalRegion=document.createElement('span');
        capitalRegion.innerText=items.region;
        capitalRegion.setAttribute('class','badge text-dark my-auto');
        cardBody.appendChild(capitalRegion);
        //br1
        //br..
        let br1=document.createElement('br');
        cardBody.appendChild(br1);
        
        //countryCode innerHtml..
        let countreCodeInner=document.createElement('span');
        countreCodeInner.innerText='CountryCode :';
        cardBody.appendChild(countreCodeInner);
        //countryCode..
        let CountryCode1=document.createElement('span');
        CountryCode1.innerText=items.alpha2Code;
        CountryCode1.setAttribute('class','badge text-dark my-auto');
        cardBody.appendChild(CountryCode1);
        let CountryCode2=document.createElement('span');
        CountryCode2.innerText=","+items.alpha3Code;
        CountryCode2.setAttribute('class','badge text-dark my-auto alpha3Code');
        cardBody.appendChild(CountryCode2);
        ///
        let br2=document.createElement('br');
        cardBody.appendChild(br2);
        // console.log(data)
        //Latlng...
        let lat=document.createElement('span');
        lat.innerText='LatLng :';
        cardBody.appendChild(lat);

        let latLng=document.createElement('span');
        latLng.innerText=","+items.latlng;
        latLng.setAttribute('class','badge text-dark my-auto alpha3Code');
        cardBody.appendChild(latLng);
    })   
};


