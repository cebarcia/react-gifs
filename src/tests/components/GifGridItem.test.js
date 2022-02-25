import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import React from "react";
import { GifGridItem } from "../../components/GifGridItem";

describe("Test GifGridItem ", () => {
  const title = "A title";
  const url = "https://localhost/something.jpg";

  let wrapper = shallow(<GifGridItem title={title} url={url} />);
  test("Test if GifGridItem is showing correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("the title must have a paragraph", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("must have an image with the same way of url and an alt iin the props", () => {
    const img = wrapper.find("img");

    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("must have animate__fadeIn", () => {
    const div = wrapper.find("div");

    expect(div.props("className").className).toContain("animate__faceIn");
  });
});
