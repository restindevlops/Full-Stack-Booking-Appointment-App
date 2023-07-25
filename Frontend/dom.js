var form=document.getElementById('my-form');

form.addEventListener('submit',SaveToLocalStorage);

function SaveToLocalStorage(event){
    event.preventDefault();

    const name=event.target.username.value;
    const email=event.target.useremail.value;
    const number=event.target.userphonno.value;

    const obj= { 
        name,
        email,
        number
    }
    
    axios.post("http://localhost:3000/user/add-user",obj)
    .then((response)=>{
        // console.log(response)
        const data=response.data.newUserDetail
       
        showUserOnScreen(data)
        
    })
    .catch((err)=>{
        document.body.innerHTML+="<h2>Something went Wrong</h2>";
        console.log(err);
    })

}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("http://localhost:3000/user/get-users")
    .then((response)=>{
        for (var i=0;i<response.data.allUsers.length;i++){
            showUserOnScreen(response.data.allUsers[i])
        }
    })
    .catch((err)=>{
        console.log(err);
    })
})

function showUserOnScreen(obj){
    const parentElem=document.getElementById('userlist');
    const childElem=document.createElement('li');
    childElem.textContent=obj.name +" - "+ obj.email+" - "+obj.phoneno;

    const deleteButton=document.createElement('input');
    deleteButton.type='button';
    deleteButton.value='DELETE';
    deleteButton.onclick=()=>{
        parentElem.removeChild(childElem);
        axios.delete(`http://localhost:3000/user/delete-user/${obj.id}`)
    .then((response)=>{
        
    })
    .catch((err)=>{
        document.body.innerHTML+="<h2>Something went Wrong</h2>";
        console.log(err);
    })
    
    }
   
    childElem.appendChild(deleteButton);
    parentElem.appendChild(childElem);

}

    