interface Person{
    Firstname : string;
    LastName : string;
}
function greeter(person : Person){
    return "Hello" + person.Firstname + " " + person.LastName;
}
let user = {Firstname : "pintu", LastName : "Ravi"};
greeter(user);