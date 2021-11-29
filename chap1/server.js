// let a = 5
// let b = '6'
// console.log(a + b)
function canDrive(usr) {
    console.log("user is", usr.name);
    if (usr.age >= 18) {
        console.log("user can drive");
    }
    else {
        console.log("user cannot drive");
    }
}
var user = {
    name: 'John',
    age: 22
};
canDrive(user);
