// This guy uses not only var, but also ==
const isPremiumUser = false;
if (isPremiumUser === true) {
  document.write("Thanks for being a loyal customer" + "<br/>");
} else {
  document.write(
    "Would you like to sign up for our Premium membership to unlock more amazing features?" + "<br/>"
  );
}
for (let i = 0; i < 10; i++) {
  document.write("Current value i is " + i + " <br/>");
}
