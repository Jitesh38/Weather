function get() {
    let input=document.getElementById("city").value
    if(input.trim()==""){
        alert("Enter valid input")
        return
    }
    let p = fetch(`https://goweather.herokuapp.com/weather/${input}`)
    console.log(`fetching ${input} weather`)
    p.then((response)=>{
        return response.json()
    }).then((response)=>{
        console.log(response)
        console.log(response.temperature)
        document.getElementById("temperature").innerHTML=response.temperature
        document.getElementById("wind").innerHTML=response.wind
        document.getElementById("desc").innerHTML=response.description
    })
    p.catch((err)=>{
        alert(err)
        document.getElementById("temperature").innerHTML="Error"

    })

}


