function FormBgcolor() {
  const colorData = [
    { id: 0, color: "", title: "none", select: true },
    { id: 1, color: "#f368e0", title: "pink" },
    { id: 2, color: "#f5cd79", title: "yellow" },
    { id: 3, color: "#006266", title: "green" },
    { id: 4, color: "#2d98da", title: "blue" },
    { id: 5, color: "#ecf0f1", title: "white" },
    { id: 6, color: "#a058ac", title: "purple" },
  ];

  return (
    <>
      {colorData.map((data) => (
        <option value={data.color} selected={data.select}>
          {data.title}
        </option>
      ))}
    </>
  );
}
export default FormBgcolor;
