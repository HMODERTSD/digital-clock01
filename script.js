function updateClock() {

    const now = new Date();

    // الوقت
    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("time").textContent =
        `${hours}:${minutes}:${seconds}`;


    // التاريخ الميلادي
    const gregorianDate = now.toLocaleDateString("ar-SY", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    document.getElementById("date").textContent =
        gregorianDate;


    // التاريخ الهجري
    const hijriDate = new Intl.DateTimeFormat("ar-SA-u-ca-islamic", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }).format(now);

    document.getElementById("hijri-date").textContent =
        hijriDate;
}

updateClock();

setInterval(updateClock, 1000);