const btn = document.getElementById("login");
const message = document.getElementById("message");

btn.addEventListener("click", async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  try {
    const res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key":  "pro_12dc7016cac784870527d5db88948fbb26840035670cbef7ea2d86d3bc26c398"
      },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (res.ok && data.token) {
      message.style.color = "green";
      message.textContent = "✅ Login Successful!";
    } else {
      message.style.color = "red";
      message.textContent = "❌ " + (data.error || "Login failed");
    }
} catch (err) {
    console.log("Error:", err);
    message.style.color = "orange";
    message.textContent = "⚠️Network error";
  }
});