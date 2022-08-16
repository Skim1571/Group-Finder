export const GroupCreation = ({ handleChange, onSubmit }) => {

  return (
    <section className="groupCreation page">
      <h1>Group Creation Form</h1>
      <form onSubmit={(event) => onSubmit(event)}>
        <input
          type={'text'}
          name="Title"
          placeholder=" Enter Title"
          onChange={handleChange}
          required
        />
        <input
          type={'Date'}
          name="Date"
          placeholder="mm/dd/yyyy"
          onChange={handleChange}
          required
        />
        <input
          type={'text'}
          name="groupsize"
          placeholder="Enter Your group size"
          onChange={handleChange}
        />
        <input
          type={'text'}
          name="description"
          placeholder="Enter Your Group Description"
          onChange={handleChange}
          required
        />
        <button>Submit</button>
      </form>
    </section>
  )
}