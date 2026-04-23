const { searchColor } = require("../public/js/code.js");

describe("searchColor() JSON response handling", () => {

  test("handles API response containing results array", () => {

    // mock DOM elements used inside searchColor()
    document.body.innerHTML = `
      <input id="searchText" value="red" />
      <div id="colorSearchResult"></div>
      <p></p>
    `;

    // mock XMLHttpRequest response
    const mockResponse = {
      results: ["Red", "Dark Red"]
    };

    // fake XMLHttpRequest behavior
    global.XMLHttpRequest = function () {
      return {
        open: jest.fn(),
        setRequestHeader: jest.fn(),
        send: function () {
          this.readyState = 4;
          this.status = 200;
          this.responseText = JSON.stringify(mockResponse);
          this.onreadystatechange();
        },
        onreadystatechange: function () {}
      };
    };

    // run function
    searchColor();

    // verify results rendered correctly
    expect(document.getElementsByTagName("p")[0].innerHTML)
      .toContain("Red");

  });

});