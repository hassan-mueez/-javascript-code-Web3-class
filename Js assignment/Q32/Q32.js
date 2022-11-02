var current_users = ['john', 'smith', 'jay', 'khan', 'ali'];
var new_users = ['shah', 'anus', 'jay', 'khan','mueez'];
for (var i = 0; i<new_users.length; i++) {


    if (current_users.includes(new_users[i].toLowerCase())) {
  console.log("try again");

    }
 else {
   console.log("name is available");
  
  }

}