export default function MenuOptions({ name, icon }) {
  return (
    <>
      <div className="flex p-2 mx-2 items-center hover:bg-sky-600 rounded-md">
        <img src={icon} className=" mx-3  h-4 w-4" alt="" />
        <p>{name}</p>
      </div>
    </>
  );
}
