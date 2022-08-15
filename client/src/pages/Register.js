export const Register = ({ handleChange, handleSubmit }) => {
  return (
    <section className="register page">
      <h1>Registration Form</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type={'text'}
          name="username"
          placeholder=" Enter Your Username"
          onChange={handleChange}
          required
        />
        <input
          type={'text'}
          name="email"
          placeholder="Enter Your Email"
          onChange={handleChange}
          required
        />
        <input
          type={'text'}
          name="discord"
          placeholder="Enter Your Discord"
          onChange={handleChange}
        />
        <input
          type={'text'}
          name="password"
          placeholder="Enter Your Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}
