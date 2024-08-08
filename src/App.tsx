import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://getform.io/f/zaxdxxwa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      console.log(result);
      setMessage("THANK YOU FOR SIGNING UP!🎉🎉🎉");
      setEmail("");
    } catch (error) {
      setMessage("THANK YOU FOR SIGNING UP!🎉🎉🎉");
      setEmail("");
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

          <span>
            PRE ORDER SALE OPENS{" "}
            <span className="bold">12/08/24 - 3PM LDN</span>{" "}
          </span>

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
            NOTIFY ME{" "}
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
