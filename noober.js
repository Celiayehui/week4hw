async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  // function renderride(ride){
   
  // }
  
  let rides=json
  
  

  for (let i=0;i<rides.length;i++){
    let ride=rides[i]

    for (let j=0;j<ride.length;j++){
      let rideoption=ride[j]
    
    if (ride.length > 1) {
      levelOfService = "Noober Pool"
    // } else if (rideoption.purpleRequested = true){
    //   levelOfService = "Nooble Purple"
    } else if (ride[0].numberOfPassengers > 3){
      levelOfService = "Noober XL"
    } else if (ride[0].purpleRequested = true){
      levelOfService = "Noober Purple" // 为什么只显示purple? 不显示XL/X
    }  else {
      levelOfService = "Noober X"
    }
  
    if (levelOfService=="Noober Purple"){
      style1 = "border-purple-900"
      style2 = "bg-purple-600"
    } else {
      style1 = "border-gray-900"
      style2 = "bg-gray-600"
    }

        let outputElement = document.querySelector('.rides')  
        outputElement.insertAdjacentHTML('beforeend',`
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-car-side"></i>
          <span>${levelOfService}</span>
        </h1>
          

       

        <div class="border-4 ${style1} p-4 my-4 text-left">
            <div class="flex">
              <div class="w-1/2">
                <h2 class="text-2xl py-1"> ${rideoption.passengerDetails.first} ${rideoption.passengerDetails.last} </h2>
                <p class="font-bold text-gray-600">${rideoption.passengerDetails.phoneNumber}</p>
              </div>
              <div class="w-1/2 text-right">
                <span class="rounded-xl ${style2} text-white p-2">
                  ${ride.length} passengers
                </span>
              </div>
            </div>
            <div class="mt-4 flex">
              <div class="w-1/2">
                <div class="text-sm font-bold text-gray-600">PICKUP</div>
                <p>${rideoption.pickupLocation.address}</p>
                <p>${rideoption.pickupLocation.city}, ${rideoption.pickupLocation.state} ${rideoption.pickupLocation.zip}</p>
              </div>
              <div class="w-1/2">
                <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                <p>${rideoption.dropoffLocation.address}</p>
                <p>${rideoption.dropoffLocation.city}, ${rideoption.dropoffLocation.state} ${rideoption.dropoffLocation.zip}</p>
              </div>
            </div>
          </div>   


     
      
    
      `)  

  
    }
  }  
  
    // let ride=json
    // let renderride=json[i] 
    

  

}



window.addEventListener('DOMContentLoaded', pageLoaded)

