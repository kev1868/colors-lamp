const { readCookie } = require("../public/js/code.js");

describe("readCookie()", () => {

  test("correctly parses cookie without redirecting when userId is valid", () => {
    document.cookie = "firstName=Kevin,lastName=Estrada,userId=42";

    delete window.location;
    window.location = { href: "" };

    readCookie();

    expect(window.location.href).not.toBe("index.html");
  });

});