function calculatecgpa() {
    var Che110 = document.getElementById("che110");
    var che110 = parseInt(Che110.value)
    che110 *= 4
    var Cse111 = document.getElementById("cse111");
    var cse111 = parseInt(Cse111.value)
    cse111 *= 2
    var Cse326 = document.getElementById("cse326");
    var cse326 = parseInt(Cse326.value)
    cse326 *= 2
    var ece249 = document.getElementById("ece249");
    var ece249 = parseInt(ece249.value)
    ece249 *= 4
    var ece279 = document.getElementById("ece279");
    var ece279 = parseInt(ece279.value)
    ece279 *= 1
    var int108 = document.getElementById("int108");
    var int108 = parseInt(int108.value)
    int108 *= 4
    var mth174 = document.getElementById("mth174");
    var mth174 = parseInt(mth174.value)
    mth174 *= 4
    var pes318 = document.getElementById("pes318");
    var pes318 = parseInt(pes318.value)
    pes318 *= 4
    var final = (che110+cse111+cse326+ece249+ece279+int108+pes318)/24
    console.log(final)
}