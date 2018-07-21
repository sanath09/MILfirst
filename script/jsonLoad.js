function loadCustomer(e) {
    const xhr = new XMLHttpRequest();
  
    xhr.open('GET', 'profileInfo.json', true);
  
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
  
        document.getElementById('profileName').innerHTML = `${person.name}`;
      }
    }
  
    xhr.send();
  }
  