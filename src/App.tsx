import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://getform.io/f/pbgxrvoa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      console.log(result);
      setMessage("Thank you for signing up🎉🎉🎉");
      setEmail("");
    } catch (error) {
      setMessage("Error submitting the email");
    }
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
          <button type="submit" disabled={email === ""}>
            {" "}
            Notify Me{" "}
          </button>
        </form>
        {message && <p> {message} </p>}
      </article>
      <footer>
        <p>This shop will be powered by Shopify</p>
      </footer>
    </div>
  );
}

export default App;
