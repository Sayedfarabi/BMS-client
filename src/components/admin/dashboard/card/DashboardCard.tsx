const DashboardCard = ({ title, count }: { title: string; count: number }) => {
  return (
    <div
      style={{
        width: "120px",
        height: "120px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 2px 4px 2px #d1c1e3",
        marginRight: "auto",
        marginLeft: "auto",
        textAlign: "center",
      }}
    >
      <div>
        <h4 style={{ fontSize: "1rem" }}>{title}</h4>
        <p style={{ fontSize: "2rem" }}>{count}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
