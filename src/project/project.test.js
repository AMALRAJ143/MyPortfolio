import React from "react";
import { shallow } from "enzyme";
import Project from "./project";

describe("Project", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Project />);
    expect(wrapper).toMatchSnapshot();
  });
});
