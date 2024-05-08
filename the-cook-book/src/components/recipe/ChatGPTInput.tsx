export default function ChatGPTInput() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("ChatGPTInput form submitted");
        console.log((e.target as HTMLFormElement)["prompt"].value);
        console.log(e.target);
      }}
    >
      <input type="text" name="prompt" />
      <button type="submit">Send</button>
    </form>
  );
}
