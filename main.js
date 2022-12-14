const getCountyInfo = countryName => {
    axios
        .get(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(response => {

            const countryDetails = response.data

            countryDetails.forEach(country => {
                let countrysBox= document.createElement('div')
                document.querySelector("body").appendChild(countrysBox)
                countrysBox.innerHTML =`<h2 id="country-name">${country.name.common}</h2>
                <img src="${country.flags.png}" alt="" id="country-flag">`

                country.borders.forEach(border=>{
                    bordersList=document.createElement('ul')
                    countrysBox.appendChild(bordersList)
                    bordersList.innerHTML=`<li>${border}</li>`
                })

            })
        })
        
    
}


const countryBtn = document.querySelector('#get-country-btn')

countryBtn.addEventListener('click', () => {
    
    const userInput = document.querySelector('#country-name-input').value
   
    getCountyInfo(userInput)

})