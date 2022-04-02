import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Prueba en el archivo GifGridItem", () => {
  const title = "Título de prueba";
  const url = "https://localhost.jpg";

  let wrapper = shallow(<GifGridItem url={url} title={title} />);

  test("prueba de snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe devolver el title correctamente", () => {
    const p = wrapper.find("p");

    expect(p.text().trim()).toBe(title);
  });

  test("debe devolver el src y el alt correctamente", () => {
    const img = wrapper.find("img");

    expect(img.props().src).toBe(url);
    expect(img.props().alt).toBe(title);
  });

  test("debe devolver la clase animate__fadeInUpBig", () => {
    const div = wrapper.find("div");

    expect(div.hasClass("animate__fadeInUpBig")).toEqual(true);

  });
});
