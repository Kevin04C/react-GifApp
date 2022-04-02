import React from "react";
import { shallow } from "enzyme";
import { GifsGrid } from "../../components/GifsGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("Prubea en el componente <GifsGrid />", () => {
  test("Debe devolver un snapshot del componente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      laoding: true,
    });

    const wrapper = shallow(<GifsGrid category="un show mas" />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar los items cuando se carga la informacion", () => {
    const imgs = [
      {
        id: "ABC",
        url: "https://locahost/cualquiercosa.jpg",
        title: "Cualquier cosa",
      },
      {
        id: "123",
        url: "https://locahost/cualquiercosa.jpg",
        title: "Cualquier cosa",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: imgs,
      laoding: true,
    });
    const wrapper = shallow(<GifsGrid category="un show mas" />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect( wrapper.find('GifGridItem').length ).toBe(imgs.length);


  });
});
