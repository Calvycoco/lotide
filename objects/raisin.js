const raisinAlarm = function(cookie) {
  for (const ingredients of cookie) {
    if (ingredients === "🍇") {
      return "Raisin alert!";
    }
  }
  return "All good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));



const raisinAlarmArray = function(cookies) {
  let alarmArray = [];
  for (const cookie of cookies) {
    let hasRaisins = false;
    for (const ingredients of cookie) {
      if (ingredients === "🍇") {
        alarmArray.push("Raisin alert!");
        hasRaisins = true;
        {break;}
      }
    }
    if (!hasRaisins) {
      alarmArray.push("All good!");
      hasRaisins = false;
    }
  }
  return alarmArray;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);