let now = moment();
let christmas = moment("12/25", "MM DD");
if (christmas.isBefore(now, "days")) {
    christmas = christmas.add(1, "years");
}
let diff = christmas.diff(now, "days");
const countdown = document.getElementById("countdown");
countdown.innerHTML = diff;