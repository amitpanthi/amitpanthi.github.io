const jsonFile = fetch('https://amitpanthi.github.io/data/devlog.json')
.then(res => res.json())
.then(logData => 
    logData.forEach(devLog => {
        const logId = devLog.date.replaceAll("-", "");
        const container = document.getElementById("log-container");
    
        const div = document.createElement('div');
        div.innerHTML = `
        <span class="dev-log-header">${devLog.date}</span><br>
        <span>${devLog.content}</span>
        `
        div.classList.add("dev-log-item")
        div.id = logId
    
        container.appendChild(div)
    }));

// console.log(jsonFile)