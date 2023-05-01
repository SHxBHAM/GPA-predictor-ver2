function calculatecgpa() {
    var mec135 = document.getElementById("mec135");
    var mec135 = parseInt(mec135.value)
    mec135 *= 3
    var Cse111 = document.getElementById("cse111");
    var cse111 = parseInt(Cse111.value)
    cse111 *= 2
    var Cse326 = document.getElementById("cse326");
    var cse326 = parseInt(Cse326.value)
    cse326 *= 2
    var phy110 = document.getElementById("phy110");
    var phy110 = parseInt(phy110.value)
    phy110 *= 3
    var int108 = document.getElementById("int108");
    var int108 = parseInt(int108.value)
    int108 *= 4
    var mth174 = document.getElementById("mth174");
    var mth174 = parseInt(mth174.value)
    mth174 *= 4
    var pes318 = document.getElementById("pes318");
    var pes318 = parseInt(pes318.value)
    pes318 *= 3
    var final = (mec135+cse111+cse326+int108+mth174+pes318+phy110)/21
    alert("your projected cgpa is:"+" "+final.toFixed(2) )
}