import { getGift } from '../../helpers/getGift'

describe("Pruebas en el archivo useFetchGifs", () => {
  test("Debe devolver 10 elementos", async () => {

    const data = await getGift("un show mas ");

    expect(data.length).toBe( 10 );
  });
});
