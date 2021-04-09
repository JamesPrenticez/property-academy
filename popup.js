function openpop(){
    console.log('hi')
    modal=document.getElementById('modal')

    form = document.createElement('form')
    form.name='popup'
    form.method='POST'
    form.action='/popup.php'

    fname=document.createElement('input')
    fname.type='TEXT'
    fname.name='fname'
    fname.value='fname'
    fname.placeholder='John'
    
    lname=document.createElement('input')
    lname.type='TEXT'
    lname.name='lname'
    lname.value='lname'
    lname.placeholder='Doe'

    email=document.createElement('input')
    email.type='TEXT'
    email.name='email'
    email.value='email'
    email.placeholder='JohnDoe@example.com'

    city=document.createElement('input')
    city.type='TEXT'
    city.name='city'
    city.value='city'
    city.placeholder='Christchurch'

    subject=document.createElement('input')
    subject.type='TEXT'
    subject.name='subject'
    subject.value='subject'
    subject.placeholder='Hello, I would like to find out more about...'
    
    form.appendChild(fname, lname, email, city, subject)
    modal.appendChild(form)
    }
    
    function closepop(){
      document.getElementById('light').style.display='none';
      document.getElementById('fade').style.display='none';
    }

    // http://www.learningaboutelectronics.com/Articles/How-to-create-a-newsletter-from-scratch-using-PHP-and-MySQL.php
    // https://stackoverflow.com/questions/3991204/how-to-create-a-form-dynamically-using-javascript
