const Loading = ({ color }: { color: string }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ color: `${color}` }}>Loading...</p>
    </div>
  );
};

export default Loading;
