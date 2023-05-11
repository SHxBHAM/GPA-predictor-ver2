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
    var mec135 = document.getElementById("mec135");
    var mec135 = parseInt(mec135.value)
    mec135 *= 3
    var mth401 = document.getElementById("mth401");
    var mth401 = parseInt(mth401.value)
    mth401 *= 3
    var pel130 = document.getElementById("pel130");
    var pel130 = parseInt(pel130.value)
    pel130 *= 3
    var phy110 = document.getElementById("phy110");
    var phy110 = parseInt(phy110.value)
    phy110 *= 3
    var final = (cse101+cse121+cse320+int306+mec135+mth401+pel130+phy110)/23
    alert("your projected cgpa is:"+" "+final.toFixed(2) )
}