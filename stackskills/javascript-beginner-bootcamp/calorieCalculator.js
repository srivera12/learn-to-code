// doesn't feel super efficient to have to change calorie amounts within the function, but maybe
// we aren't really able to do that yet

// sets input to lowercase, and returns calorie amount
function getCaloriesByDay(day) {
  day = day.toLowerCase();
  if (day === "monday") {
    return 3500;
  } else if (day === "tuesday") {
    return 1200;
  } else if (day === "wednesday") {
    return 3500;
  } else if (day === "thursday") {
    return 3500;
  } else if (day === "friday") {
    return 3500;
  } else if (day === "saturday") {
    return 3500;
  } else if (day === "sunday") {
    return 3500;
  } else {
    console.log("Please enter a valid day of the week.");
  }
}

// add up all calories to get weekly total
function getTotalCalories() {
  return (
    getCaloriesByDay("monday") +
    getCaloriesByDay("tuesday") +
    getCaloriesByDay("wednesday") +
    getCaloriesByDay("thursday") +
    getCaloriesByDay("friday") +
    getCaloriesByDay("saturday") +
    getCaloriesByDay("sunday")
  );
}

// sets weekly goal
function getIdealCalories() {
  const idealDailyCalories = 1850;
  return idealDailyCalories * 7;
}

// puts it all together and gives feedback based on if you met your goal or not
function calculateHealthPlan() {
  const actualCalories = getTotalCalories();
  const idealCalories = getIdealCalories();
  if (actualCalories === idealCalories) {
    console.log("Great job, you met your goal!");
  } else if (actualCalories > idealCalories) {
    console.log("It's time to head to the gym!");
  } else {
    console.log("Time for seconds!");
  }
}

calculateHealthPlan();
