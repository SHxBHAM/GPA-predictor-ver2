function calculatecgpa() {
    var cse101 = document.getElementById("cse101");
    var cse101 = parseInt(cse101.value)
    cse101 *= 3
    var cse121 = document.getElementById("cse121");
    var cse121 = parseInt(cse121.value)
    cse121 *= 1
    var Cse320 = document.getElementById("cse320");
    var cse320 = parseInt(Cse320.value)
    cse320 *= 3
    var int306 = document.getElementById("int306");
    var int306 = parseInt(int306.value)
    int306 *= 4
    var ece249 = document.getElementById("ece249");
    var ece249 = parseInt(ece249.value)
    ece249 *= 4
    var pel130 = document.getElementById("pel130");
    var pel130 = parseInt(pel130.value)
    pel130 *= 3
    var ece279 = document.getElementById("ece279");
    var ece279 = parseInt(ece279.value)
    ece279 *= 1
    var che110 = document.getElementById("che110");
    var che110 = parseInt(che110.value)
    che110 *= 4
    var mth401 = document.getElementById("mth401");
    var mth401 = parseInt(mth401.value)
    mth401 *= 3
    var final = (cse101+cse121+cse320+int306+che110+mth401+pel130+ece249+ece279)/26
    alert("your projected cgpa is:"+" "+final.toFixed(2) )
}