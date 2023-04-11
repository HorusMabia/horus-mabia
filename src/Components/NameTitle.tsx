
const NameTitle = () => {
  const title = document.querySelector(".title");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  title?.addEventListener("mouseenter", () => {
    setTimeout(() => {
      title.innerHTML = "Horus";
    }, 500);
  });

  return (
    <div>
      <h1 className='title'>Horus Mabia</h1>
    </div>
  )
}

export default NameTitle
