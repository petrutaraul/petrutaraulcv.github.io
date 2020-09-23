export const getRaulData = async () => {
  const res = await fetch("https://api.jsonbin.io/b/5f6a6cef302a837e956ba6a6");
  return res.json();
};
