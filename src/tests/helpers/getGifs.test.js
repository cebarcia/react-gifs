import { getGifs } from "../../helpers/getGifs";

describe("Test with getGifs Fecth", () => {
  test("should bring ten elemnts", async () => {
    const gifs = await getGifs("One Punch");

    expect(gifs.length).toBe(10);
  });

  test("should bring zero elemnts if don't sent the category", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
