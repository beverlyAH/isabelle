module.exports = () => {
  let now = new Date();
  let hrs = now.getHours();
  let msg = "";
  
  if (hrs >  0) msg = "Good evening, everyone!"; // REALLY early
  if (hrs >  6) msg = "Good morning, everyone!";      // After 6am
  if (hrs > 12) msg = "Good afternoon, everyone!";    // After 12pm
  if (hrs > 17) msg = "Good evening, everyone!";      // After 5pm
  if (hrs > 22) msg = "Good evening, everyone!";

  return msg
}