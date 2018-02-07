function greeter(person) {
    return "Hello" + person.Firstname + " " + person.LastName;
}
var user = { Firstname: "pintu", LastName: "Ravi" };
greeter(user);
