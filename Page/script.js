window.addEventListener('load', function () {

    let d = new Date();
    let day = new Array("Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота");

    let days = document.getElementsByTagName("th");
    console.log(days[0].innerHTML);
    console.log(day[d.getDay()])
    for (let i = 0; i < days.length; i++) {
        if (day[d.getDay()] == days[i].innerHTML) {
            days[i].style.backgroundColor = "gray";
        }
    }
    console.log(days);
})