const skillsJson = {
    'HTML': "300px",
    'CSS' : "250px",
    'Javascript' : "200px",
    'Java' : "200px",
    'Python' : "200px",
}

let chart = document.getElementById("skills-chart")

createChart(chart)

function createChart(chart){

    let temp;
    let j=0;
    const claves = Object.keys(skillsJson);

    for (let i in skillsJson) {
        temp = document.createElement("p");
        temp.className = "skills-yaxis";
        temp.innerText = claves[j]
        chart.appendChild(temp)

        temp = document.createElement("span");
        temp.className = "skills-bar";
        temp.style.width = skillsJson[claves[j]]
        console.log(temp)
        chart.appendChild(temp)

        j++
    }
}