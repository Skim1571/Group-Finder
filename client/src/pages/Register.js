export const Register = ({ handleChange, onSubmit, formState }) => {
  return (
    <section className="register page">
      <h1>Registration Form</h1>
      <form onSubmit={(event) => onSubmit(event)}>
        <input
          type={'text'}
          name="username"
          value={formState.name}
          placeholder="Input Your Username"
          onChange={handleChange}
          required
        />
        <input
          type={'text'}
          name="email"
          value={formState.email}
          placeholder="Input Your Email"
          onChange={handleChange}
          required
        />
        <input
          type={'text'}
          name="discord"
          value={formState.discord}
          placeholder="Input Your Discord"
          onChange={handleChange}
        />
        <input
          type={'text'}
          name="password"
          value={formState.passcode}
          placeholder="Input Your Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}
