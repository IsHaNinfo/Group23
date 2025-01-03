import { Given, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../../API/Login/login.cy";
import Books from "../../API/Books/books.cy";

let response;

Given('user is authenticated as "admin" with password "password"', () => {
  login.loginAuth("admin", "password").then((res) => {
    expect(res.status).to.eq(200);
  });
});

Given(
  "the user sends a POST request to create a new book with invalid data",
  () => {
    const invalidBookData = {
      id: "abc",
      title: true,
      author: false,
    };

    Books.addBook(invalidBookData).then((res) => {
      response = res;
    });
  }
);

Then("the response status should be 400 Bad Request", () => {
  expect(response.status).to.eq(400);
});

And(
  "the response should contain an error message indicating that the `id`, `title`, and `author` are invalid",
  () => {
    expect(response.requestBody).to.include("id");
    expect(response.requestBody).to.include("title");
    expect(response.requestBody).to.include("author");
  }
);
