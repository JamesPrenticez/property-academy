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
    fname.placeholder='John'
    
    lname=document.createElement('input')
    lname.type='TEXT'
    lname.name='lname'
    lname.placeholder='Doe'

    email=document.createElement('input')
    email.type='TEXT'
    email.name='email'
    email.placeholder='JohnDoe@example.com'

    city=document.createElement('input')
    city.id='city'
    city.type='TEXT'
    city.name='city'
    city.placeholder='Auckland'

    subject=document.createElement('input')
    subject.type='TEXT'
    subject.name='subject'
    subject.placeholder='Hello, I would like to find out more about...'
    
    submit=document.createElement('input')
    submit.type='SUBMIT'
    submit.name='submit'
    submit.placeholder='Subscribe!'

    form.appendChild(fname)
    form.appendChild(lname)
    form.appendChild(email)
    form.appendChild(city)
    form.appendChild(subject)
    form.appendChild(submit)
    modal.appendChild(form)
    }
    
    function closepop(){
      document.getElementById('light').style.display='none';
      document.getElementById('fade').style.display='none';
    }


