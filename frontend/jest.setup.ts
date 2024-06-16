import "@testing-library/jest-dom";

jest.mock("./src/consts/environment", () => ({
  PROD: "development",
}));
