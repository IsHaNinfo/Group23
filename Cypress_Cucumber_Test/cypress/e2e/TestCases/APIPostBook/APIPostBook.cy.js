import { Given, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../../API/Login/login.cy";
import Books from "../../API/Books/books.cy";

let response;

function performLogin(role) {
  return login.loginAuth(role, "password").then((res) => {
    expect(res.status).to.eq(200);
    response = res;
    return res;
  });
}

Given("user is authenticated as {string}", (role) => {
  performLogin(role);
});

When(
  "the user makes a POST request to create a new book using the provided details:",
  (dataTable) => {
    const book = dataTable.hashes()[0];
    Books.addBook(book).then((res) => {
      response = res;
    });
    console.log("www", response);
  }
);

Then("the response status should  {int}", (statusCode) => {
  console.log("sss", statusCode);
  console.log("nne",response)
  expect(response.status).to.eq(statusCode);
});

And(
  "the responses should contain the inserted title and author",
  (dataTable) => {
    const expectedData = dataTable.hashes()[0];
    expect(response.body.title).to.eq(expectedData.title);
    expect(response.body.author).to.eq(expectedData.author);
  }
);
