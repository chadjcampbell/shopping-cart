import { Stack } from "react-bootstrap";

export default function Home() {
  return (
    <Stack gap={3} className="col-md-5 mx-auto">
      <h3 className="mt-5 mx-auto">Welcome to</h3>
      <h1 className="mx-auto " style={{ fontSize: "5rem" }}>
        <span style={{ color: "pink" }}>Sweet</span> Deals
      </h1>
      <h1 className="mx-auto " style={{ fontSize: "5rem" }}>
        🤑
      </h1>
    </Stack>
  );
}
