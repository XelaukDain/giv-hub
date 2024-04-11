

// ________/\\\\\\\\\_____________________________________________________________________________        
//  _____/\\\////////_______________________________/\\\___________________________________________       
//   ___/\\\/_______________________________________\/\\\__________/\\\_____________________________      
//    __/\\\_________________/\\\\\________/\\\\\____\/\\\\\\\\____\///______/\\\\\\\\___/\\\\\\\\\\_     
//     _\/\\\_______________/\\\///\\\____/\\\///\\\__\/\\\////\\\___/\\\___/\\\/////\\\_\/\\\//////__    
//      _\//\\\_____________/\\\__\//\\\__/\\\__\//\\\_\/\\\\\\\\/___\/\\\__/\\\\\\\\\\\__\/\\\\\\\\\\_   
//       __\///\\\__________\//\\\__/\\\__\//\\\__/\\\__\/\\\///\\\___\/\\\_\//\\///////___\////////\\\_  
//        ____\////\\\\\\\\\__\///\\\\\/____\///\\\\\/___\/\\\_\///\\\_\/\\\__\//\\\\\\\\\\__/\\\\\\\\\\_ 
//         _______\/////////_____\/////________\/////_____\///____\///__\///____\//////////__\//////////__


//sets a cookie. d is how many days until the cookie expires
function scook(field, value, d) {
    d = d || 5;
    const d = new Date();
    d.setTime(d.getTime() + (d*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = field + "=" + value + ";" + expires + ";path=/";
}


//gets a cookie. field is the cookie being returned
//dc is the decoded cookie
function gcook(field) {
    let name = field + "=";
    let dc = decodeURIComponent(document.cookie);
    let dcOpen = dc.split(';');
    for(let i = 0; i<dcOpen.length; i++) {
      let c = dcOpen[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}


//checks if the user has input a name before
function checkName() {
    let username = getCookie("username");
    if (username != "") {
        // the alert here is temporary
        alert("Welcome again " + username);
    } else {
        // the prompt here is also temporary
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
      }
    }
}

