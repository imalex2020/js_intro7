const schoolName = "TechGlobal";

function schoolProfile(){
    const schoolName = "GlobalTech";
    function saySchoolname(){
        const schoolName = "TechTechTech";
        function writeSchoolName(){
            return schoolName// "TechGlobal"
        }
        return writeSchoolName();
    }
    return saySchoolname();
}
//console.log(writeSchoolName())
console.log(schoolProfile())

//Scope chainig
//


//Define a function
function getCityName(){
    const cityName = "Des Plaines"
    return cityName;
}

function showAdddress(){
   return "2860 River rd " + getCityName()
}
console.log(showAdddress())

//Hosting
console.log(foo);
var foo = 'foo';



hello();
bye();

function hello(){
    console.log("hello");
    function bye(){
        console.log("bye")
    }
}

// Bind()
