import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Prueba en el archivo useFetchGif", () => {
  test("Debe retornar el estado inicial", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("un  show mas")
    );

    const { data, laoding } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(laoding).toBe(true);
  });

  test("Debe retornar un arreglo de imgs y el loading en false", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("un  show mas"));

    await waitForNextUpdate();

    const { data, laoding } = result.current;

    expect( data.length ).toBe( 10 );
    expect( laoding ).toBe( false );
  });
});
