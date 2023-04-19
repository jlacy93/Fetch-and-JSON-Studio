// TODO: add code here
window.addEventListener("load", function (){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            const container = document.getElementById("container");
            console.log(json)
            console.log(json[0])
            console.log(json[0].firstName)
            console.log(json.length)

            for(i=0;i<json.length;i++){
                container.innerHTML += `
                <div class ="astronaut">
                    <h2>${json[i].firstName} ${json[i].lastName}</h2>
                    <div class ="bio">
                        <ul>
                            <li>Hours in Space: ${json[i].hoursInSpace}</li>
                            <li>Active: ${json[i].active} </li>
                            <li>Skills: ${json[i].skills} </li>
                        </ul>
                    </div>
                    <img class="avatar" src=${json[i].picture}>
                    </div>
                `
            }

        })
    })

})