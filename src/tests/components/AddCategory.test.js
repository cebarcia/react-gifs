import { shallow } from "enzyme";
import React from "react";
import { AddCategory } from "../../components/AddCategory";
import "@testing-library/jest-dom";

describe("Tests in <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("should show correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should change the box text", () => {
    const input = wrapper.find("input");
    const value = "holamundo";

    input.simulate("change", { target: { value } });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("Shouldn't post information on submit", () => {
    wrapper.find("form", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("should call setCategory and clean the text box", () => {
    const input = wrapper.find("input");
    const value = "holamundo";
    input.simulate("change", { target: { value } });

    wrapper.find("form").simulate("submit", { preventDefault() {} });
    // input.simulate("submit");

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop("value")).toBe("");
  });
});
