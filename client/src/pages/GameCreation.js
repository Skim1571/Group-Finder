export const GameCreation = ({ handleChange, onSubmit, formState }) => {
  return (
    <section className="gameCreation page">
      <h1>Game Creation Form</h1>
      <form onSubmit={(event) => onSubmit(event)}>
        <input
          type={'text'}
          placeholder="Enter Game Name"
          onChange={handleChange}
          required
        />
        <input
          type={'text'}
          name="image"
          placeholder="Enter Image Link"
          onChange={handleChange}
          required
        />
        <input
          type={'text'}
          name="platform"
          placeholder="Enter Your Platform"
          onChange={handleChange}
        />
        <input
          type={'text'}
          name="description"
          placeholder="Enter Your Game Description"
          onChange={handleChange}
          required
        />
        <button type='submit' >Submit</button>
      </form>
    </section>
  )
}