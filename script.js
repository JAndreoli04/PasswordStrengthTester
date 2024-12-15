document.getElementById("password").addEventListener("input", function() {
  const password = this.value;
  const feedback = document.getElementById("feedback");
  const strengthLevel = document.getElementById("strength-bar");


  let strength =0;

  //criteria for strength
  if(password.length >= 8) strength++;
  if(password.length >=12) strength+=2;
  if(/[A-Z]/.test(password)) strength++;
  if(/[a-z]/.test(password)) strength++;
  if(/[0-9]/.test(password)) strength++;
  if(/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;
  if(/\s/.test(password)) strength +=3;

  const strengthColors = ["#ff4d4d" , "#ff884d", "#ffd11a", "#9fdf9f", "#4dff4d",
  "#ff4d4d" , "#ff884d", "#ffd11a", "#9fdf9f", "#4dff4d"];
  const color = strengthColors[strength-1];

  strengthLevel.style.backgroundColor = color;
  strengthLevel.style.width = 10 * strength + "%";



  // Update feedback
  const feedbackMessages = [
    "Too Weak",
    "Too Weak",
    "You can do better",
    "Almost",
    "Ok",
    "GOOD",
    "GOOD",
    "Strong",
    "Strong",
    "Very Strong"
  ];
  feedback.textContent = feedbackMessages[strength - 1] || "";
  feedback.fontStyle.color = color;


});

