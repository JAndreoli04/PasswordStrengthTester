document.getElementById("password").addEventListener("input", function() {
  const password = this.value;
  const feedback = document.getElementById("feedback");
  const strengthLevel = document.getElementById("strength-level");
  const strengthColor = document.getElementById("strength-bar");
  const input = document.getElementById("input");

  let strength =0;

  //criteria for strength
  if(password.length >= 8) strength++;
  //if(password.length >= 12) strenght++;
  //if(password.lenght >= 16) strenght++;

  if(/[A-Z]/.test(password)) strength++;
  if(/[a-z]/.test(password)) strength++;
  if(/[0-9]/.test(password)) strength++;
  if(/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

  const strengthColors = ["#ff4d4d" , "#ff884d", "#ffd11a", "#9fdf9f", "#4dff4d"];
  const color = strengthColors[strength-1];
  strengthLevel.style.width = '${strength * 20}%';
  strengthColor.style.backgroundColor = color;


  // Update feedback
  const feedbackMessages = [
    "Very Weak",
    "Weak",
    "Fair",
    "Strong",
    "Very Strong"
  ];
  feedback.textContent = feedbackMessages[strength - 1] || "";
  feedback.fontStyle.color = color;

});
