function openpop(){
    perspective=document.getElementById('perspective')
    newsletterButton=document.getElementById('newsletterButton')
    newsletterButton.style.display = "none";
    perspective.style.display = "none";

    console.log('hi')
    modal=document.getElementById('container')
    modal.style.width = '80vw'

    form = document.createElement('form')
    form.name='popup'
    form.method='POST'
    form.action='/popup.php'

    fname=document.createElement('input')
    fname.type='TEXT'
    fname.name='fname'
    fname.placeholder='first name'
    
    lname=document.createElement('input')
    lname.type='TEXT'
    lname.name='lname'
    lname.placeholder='last name'

    email=document.createElement('input')
    email.type='TEXT'
    email.name='email'
    email.placeholder='email'
    
    cellphone=document.createElement('input')
    cellphone.type='TEXT'
    cellphone.name='cellphone'
    cellphone.placeholder='phone number'

    city=document.createElement('input')
    city.id='city'
    city.type='TEXT'
    city.name='city'
    city.placeholder='Auckland'

    letter=document.createElement('input')
    letter.type='TEXT'
    letter.name='letter'
    letter.placeholder='Hello, I would like to find out more about...'
    
    submit=document.createElement('input')
    submit.type='SUBMIT'
    submit.name='submit'
    submit.placeholder='Subscribe!'

    form.appendChild(fname)
    form.appendChild(lname)
    form.appendChild(email)
    form.appendChild(cellphone)
    form.appendChild(city)
    form.appendChild(letter)
    form.appendChild(submit)
    modal.appendChild(form)
    }
    
    function closepop(){
      document.getElementById('light').style.display='none';
      document.getElementById('fade').style.display='none';
    }


