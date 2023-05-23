function FormBgcolor() {
  const colorData = [
    { id: 1, color: "pink" },
    { id: 2, color: "yellow" },
    { id: 3, color: "green" },
    { id: 4, color: "blue" },
    { id: 5, color: "white" },
  ];
  return (
    <>
      {colorData.map((data) => (
        <option value={data.color}>{data.color}</option>
      ))}
    </>
  );
}
export default FormBgcolor;
