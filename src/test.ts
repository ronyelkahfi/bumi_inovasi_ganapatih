import request from "supertest";
import * as app from "./app";

describe("Test Endpoint: Registration user by phone number", () => {
  it("should return 200 OK", async () => {
    const response = await request(app).post("/users/register").send({
      phoneNumber: "1234567890",
      name: "John Doe",
      password: "password123",
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("userId");
  });
});

describe("Test Endpoint: Chat", () => {
  it("should return 200 OK", async () => {
    // Lakukan permintaan GET atau POST ke endpoint Chat yang sesuai
    // dan tambahkan pengujian yang sesuai
  });
});

describe("Test Endpoint: Group Chat", () => {
  it("should return 200 OK", async () => {
    // Lakukan permintaan GET atau POST ke endpoint Group Chat yang sesuai
    // dan tambahkan pengujian yang sesuai
  });
});

describe("Test Endpoint: Upload Image", () => {
  it("should return 200 OK", async () => {
    // Lakukan permintaan POST ke endpoint Upload Image yang sesuai
    // dan tambahkan pengujian yang sesuai
  });
});

describe("Test Endpoint: Delete chat for me", () => {
  it("should return 200 OK", async () => {
    // Lakukan permintaan DELETE ke endpoint Delete chat for me yang sesuai
    // dan tambahkan pengujian yang sesuai
  });
});

describe("Test Endpoint: Delete chat for all", () => {
  it("should return 200 OK", async () => {
    // Lakukan permintaan DELETE ke endpoint Delete chat for all yang sesuai
    // dan tambahkan pengujian yang sesuai
  });
});
