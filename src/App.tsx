import CustormEditor from "./editor/CustomEditor";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <div style={{ minWidth: "50%", minHeight: "50%" }}>
          <CustormEditor />
        </div>
      </div>
    </>
  );
}

export default App;
