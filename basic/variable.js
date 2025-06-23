const accountId = 12345
let email = "sk@1234"
var accountPassward = "12345"
accountCity = "japiur";
let accountState;

//accountId=2
email = "sk@12345"
accountPassward = "05221"
accountCity = "Bengular"

//console.log(accountId);
//console.table([accountId,email,accountPassward,accountCity,accountState]);

const Student = {
    fullname: "Sonu kumar",
    age: 25,
    isPass: true,
    cgpa: 9.4
};

Student["age"] = Student["age"] + 1;

console.log(Student);
// console.log(Student.isPass);
// console.log(Student.fullname);

//     Student.isPass=false;
//     console.log(Student.isPass);
//console.log(Student.cgpa);

// Student.fullname="Sonu Advance & spring Boot"
// console.log(Student.fullname);


//Let's Practice

const profile = {
    userName: "Shradhakhapra",
    isFollow: true,
    Message: "Any Douts ask message",
    post: 195,
    follower: 599,
    following: 4,
    profilename: "shadha Khapra",
};
// console.log(profile);
// 

let str = "";
for (let i = 1; i <= 4; i++) {
    str = '';
    let k = 4;
    for (j = i; j <= 4; j++) {
        str = str + " " + k;
        k--;
    }
    console.log(str);
}

console.log(typeof " Sonu kumar");
console.log(typeof null);//object 
