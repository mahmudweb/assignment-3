


function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile (20000);
console.log(result);
function woodCalculator(chair,table,khat) {
    var chairecount = chair * 1;
    var tablecount = table * 3;
    var khatcount = khat * 5;
    var totalwood = chairecount + tablecount + khatcount;
    return totalwood;
}


function tinyFriend(names) {
    
    var smallest = names[0].length;
    for(var i = 1; i < names.length; i++){

        var currentName  = names[i].length;
        if (currentName  < smallest){
            smallest = currentName;
        }

    }

      return smallest;


}
var smallestname = tinyFriend(['calam', 'dsa', 'abdullah']);
   console.log(smallestname);