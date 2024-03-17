

// Example usage

document.getElementById('but').addEventListener('click',() => {
    const selectElement = document.getElementById('branch').value
    if(selectElement === 'None'){
        document.getElementById('viewp').style.display = "block"
    }
    else if(document.getElementById('username').value==''){
        document.getElementById('viewp').style.display = "block"
    }
    else if(document.getElementById('Password').value===''){
        document.getElementById('viewp').style.display = "block"
    }
    else{
        document.getElementById('viewp').style.display = "none"
        const password = document.getElementById('Password').value;
    const hashedPassword = btoa(password);
    window.location.href = `${document.getElementById('branch').value}/login/${document.getElementById('username').value}/${hashedPassword}}` }
    }
    )
    
    
    


