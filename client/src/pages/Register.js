export const Register = () => {

  return (
    <section className="register page">
      <h1>Registration Form</h1>
      <form>
        <input type={"text"} name="username" placeholder=" Enter Your Username" required />
        <input type={"text"} name="email" placeholder="Enter Your Email" required />
        <input type={"text"} name="discord" placeholder="Enter Your Discord" />
        <input type={"text"} name="password" placeholder="Enter Your Password" required />
      </form>
    </section>
  )
}