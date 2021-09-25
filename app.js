function gettime(){
    var hour = document.getElementById("hour")
    var min = document.getElementById("minute")
    var sec = document.getElementById("sec")

    var date = document.getElementById("datee")
    var month = document.getElementById("month")
    var year = document.getElementById("year")
    var day = document.getElementById("day")

    var week = new Date().getDay()
    if (week == 0){
        day.innerHTML = "Sunday"
    }
    else if (week == 1){
        day.innerHTML = "Monday"
    }
    else if (week == 2){
        day.innerHTML = "Tuesday"
    }
    else if (week == 3){
        day.innerHTML = "Wednesday"
    }
    else if (week == 4){
        day.innerHTML = "Thursday"
    }
    else if (week == 5){
        day.innerHTML = "Friday"
    }
    else if (week == 6){
        day.innerHTML = "Saturday"
    }


    hour.innerHTML = new Date().getHours()
    min.innerHTML = new Date().getMinutes()
    sec.innerHTML = new Date().getSeconds()

    date.innerHTML = new Date().getUTCDate()

    var monthdis = new Date().getMonth()
    //   month.innerHTML = new Date().getMonth()
    if (monthdis == 0){
        month.innerHTML = "Jan"
    }
    else if (monthdis == 1){
        month.innerHTML = "Feb"
    }
    else if (monthdis == 2){
        month.innerHTML = "Mar"
    }
    else if (monthdis == 3){
        month.innerHTML = "Apr"
    }
    else if (monthdis == 4){
        month.innerHTML = "May"
    }
    else if (monthdis == 5){
        month.innerHTML = "June"
    }
    else if (monthdis == 6){
        month.innerHTML = "July"
    }
    else if (monthdis == 7){
        month.innerHTML = "Aug"
    }
    else if (monthdis == 8){
        month.innerHTML = "Sept"
    }
    else if (monthdis == 9){
        month.innerHTML = "Dec"
    }
    else if (monthdis == 10){
        month.innerHTML = "Oct"
    }
    else if (monthdis == 11){
        month.innerHTML = "Nov"
    }

      
    year.innerHTML = new Date().getFullYear()
      

   
    return
}
gettime()