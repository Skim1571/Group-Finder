export const GameCreation = () => {
  return (
    <section className="gameCreation page">
      <h1>GameCreation Form</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type={'text'}
          name="Game Name"
          placeholder=" Enter Game Name"
          onChange={handleChange}
          required
        />
        <input
          type={'text'}
          name="image"
          placeholder="Enter Platform"
          onChange={handleChange}
          required
        />
        <input
          type={'text'}
          name="groupsize"
          placeholder="Enter Your Group Size"
          onChange={handleChange}
        />
        <input
          type={'text'}
          name="description"
          placeholder="Enter Your Game Description"
          onChange={handleChange}
          required
        />
        <button>Submit</button>
      </form>
    </section>
  )
}