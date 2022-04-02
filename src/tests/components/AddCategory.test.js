import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Prueba en el archivo <AddCategory />", () => {
  const setcategories = jest.fn();
  let wrapper = shallow(<AddCategory setcategories={setcategories}/>);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setcategories={setcategories}/>);
  });
  test("Debe devolver el componente renderizado correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  // test("Debe de cambiar la caja de texto", () => {
  //   const input = wrapper.find("input");
  //   const value = "soy un texto";
  //   input.simulate("change", { target: { value } });
  // });

  test("No debe de postear la informacion submit", () => {
    const form = wrapper.find("form");
    form.simulate("submit", { preventDefault() {} });

    expect(setcategories).not.toHaveBeenCalled();
  });
});
