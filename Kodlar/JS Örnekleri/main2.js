// get current time
var dateInfo = new Date();
var hr =
    dateInfo.getHours() > 12 ? dateInfo.getHours() - 12 : dateInfo.getHours(),
  min = dateInfo.getMinutes(),
  sec = dateInfo.getSeconds(),
  milsec = dateInfo.getMilliseconds();

/*
1 hr = 30°, 1 min = 6°, 1 sec = 6°, 1 millisec = 0.36°
Even though we can calculate the proper angles of the hour, minute, and second hands, we can determine more accurately where the hands are between the current and next ticks. For example, if it is 6:30, we know that the hour hand is at least 180°, yet it should be between the 6 and 7. To get that, we divide the angle of the current minute by 12 ((30 * 6°) / 12) and add the result (15) to 180. Therefore, the hour hand should be at 195°.
*/
var hrAngle = hr * 30 + (min * 6) / 12,
  minAngle = min * 6 + (sec * 6) / 60,
  secAngle = sec * 6 + (milsec * 0.36) / 1000;

// set initial angles of the hand wrappers
function setAngle(wrapper, angle) {
  document.querySelector("." + wrapper).style.transform =
    "rotate(" + angle + "deg)";
}
setAngle("hr-wrapper", hrAngle);
setAngle("min-wrapper", minAngle);
setAngle("sec-wrapper", secAngle)
