//as a user, i should be taken to the home page
describe("home page open", function () {
  it("should open the app", function () {
    browser.get("http://localhost:8000");
  });
  it("should take user to home page", function () {
    browser
      .get("http://localhost:8000/home")
      .expect(200, console.log("hello world"));
  });
});
