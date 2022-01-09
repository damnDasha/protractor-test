describe("Protractor baby steps", function () {
  it("Open Angular js website", function () {
    //write your protractor raw code
  });

  //Each it block will be called as a spec

  it("close browser", function () {
    // code to close browser
  });
});

// describe -- test suite

// it -- test case

// spec -- test file
//every spec should have describe and it blocks
//configuration file -- will include all spec file names

describe("A suite is just a function", function () {
  const a;

  it("and so is a spec", function () {
    a = true;

    expect(a).toBe(true);
  });
});