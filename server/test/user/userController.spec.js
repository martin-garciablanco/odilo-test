const { updateUser } = require("../../src/users/userController")
const user = require("../../src/users/userModel")
const mockingoose = require('mockingoose')


describe("UserController", () => {
  it("should update an user", async () => {
    const userToUpdate = {
      displayName: "john-doe",
      email: "john@doe.com",
      username: "john-doe",
      password: "abc123.",
      favouriteClubs: []
    }
    const userUpdatedMock = { ...userToUpdate, displayName: "updatedDisplayName" }
    mockingoose(user).toReturn(userUpdatedMock, 'findOneAndUpdate')

    const userUpdated = await updateUser(userToUpdate.username, userToUpdate);
    expect(userUpdated.username).toEqual(userUpdatedMock.username)
  })
})