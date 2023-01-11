import { render } from "@testing-library/react";
import Footer from "../../components/Footer";

describe("Footer renders", () => {
  it("matches snapshot", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
