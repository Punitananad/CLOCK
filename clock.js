let ate;
let styledate;
let clock;
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
         ate = new Date();
         styledate = ate.toLocaleDateString(undefined,options)
         clock = ate.getHours() + ':' + ate.getMinutes() + ':' + ate.getSeconds();
        document.getElementById('DTS').innerHTML =  styledate + "<br>on" +" " + clock;
}, 1000);



