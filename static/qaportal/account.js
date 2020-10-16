function getCookie(name) {
    if (!document.cookie) {
      return null;
    }
  
    const csrfCookies = document.cookie.split(';')
      .map(c => c.trim())
      .filter(c => c.startsWith(name + '='));
  
    if (csrfCookies.length === 0) {
      return null;
    }
    return decodeURIComponent(csrfCookies[0].split('=')[1]);
  }
  

function newtopic(id){
    let topic = document.getElementById('topic').value;
    let opinion = document.getElementById('opinion').innerHTML;
    console.log(id);
    console.log(topic);
    console.log(opinion);
    
    let details = {
        uid :id,
        t : topic,
        op : opinion,
    }
    const csrfToken = getCookie('CSRF-TOKEN');
    fetch('/newtopic' , {
        //method: "POST",
        credentials: "include",
        body: JSON.stringify(details),
        cache: "no-cache",
        headers: new Headers({
            //'X-CSRF-TOKEN': csrfToken,
            'content-type': "application/json"
            'X-Requested-With' : 'XMLHttpRequest',
            'Accept' : 'application/json'

        })
    })
    .then(function(response){
        if(response.status !== 200){
            console.log('problem');
            return;
        }
        response.json().then(function(data){
            d= data;
            console.log(d);
        })
    })
}