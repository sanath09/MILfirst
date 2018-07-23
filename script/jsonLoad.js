function loadProfile() {
    const xhr = new XMLHttpRequest();
  
    xhr.open('GET', './../json/profileInfo.json', true);
  
    xhr.onload = function(){
      if(this.status === 200) {
        // console.log(this.responseText);
  
        const person = JSON.parse(this.responseText);
  
        // const output = `
        //   <ul>
        //     <li>ID: ${customer.id}</li>
        //     <li>Name: ${customer.name}</li>
        //     <li>Company: ${customer.company}</li>
        //     <li>Phone: ${customer.phone}</li>
        //   </ul>
        // `;
  
        document.getElementById('profileName').innerHTML = `${person[0].name}`;
        document.getElementById('profilePic').innerHTML = `${person[0].img}`;
        document.getElementById('profileLogInfo').innerHTML = `${person[0].login}`;
        document.getElementById('balFig').innerHTML = `${person[0].balance}`;
        document.getElementById('balDate').innerHTML = `${person[0].balDate}`;
      }
    }
  
    xhr.send();
  }
  