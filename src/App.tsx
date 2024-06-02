import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzMg1bKldLa_Q26AAJXS5_AoHpB314Y9W9Lqh7_WONfrwiKCBNhGzS_k1O0gVFCVbv_/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    console.log(response);
  };
  return (
    <div className="container">
      <div className="logo">
        <img src="/logo-white.png" alt="silent noise logo" />
      </div>
      <article className="waitlist-content-wrapper">
        <div className="waitlist-content">
          <span>COMING SOON!</span>

          <span>PRE ORDER SALE OPENS XX/06/23 - 3PM LDN</span>

          <span>SIGN UP BELOW FOR NOTIFICATIONS WHEN WE LAUNCH</span>
        </div>
        <form className="waitlist-form" onSubmit={handleFormSubmit}>
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Notify Me</button>
        </form>
      </article>
      <footer>
        <p>This shop will be powered by Shopify</p>
      </footer>
    </div>
  );
}

export default App;
