const axios = require("axios");

const API_URL = "http://localhost:8000/api/";

let testingUser = null;
let testingMatchOne = null;
let testingMatchTwo = null;
let testingSession = null;

test("Register New User", async () => {
  // No Data Provided -> Return False
  await axios.post(API_URL + "registerNewUser").then((res) => {
    expect(res.data).toBe(false);
  });

  // Missing data provided -> Return False
  let userData = {
    firstName: "Test",
    lastName: "Jest",
    email: null,
    password: null,
  };
  await axios.post(API_URL + "registerNewUser", userData).then((res) => {
    expect(res.data).toBe(false);
  });

  // Missing data provided # 2 -> Return False
  userData = {
    firstName: "Test",
    lastName: "Jest",
    email: "test@jest.com",
    password: null,
  };
  await axios.post(API_URL + "registerNewUser", userData).then((res) => {
    expect(res.data).toBe(false);
  });

  // Valid data provided -> Return object
  userData = {
    firstName: "Test",
    lastName: "Jest",
    email: "test@jest.com",
    password: "testjest",
  };
  await axios.post(API_URL + "registerNewUser", userData).then((res) => {
    expect(res.data.firstName).toBe(userData.firstName);
    expect(res.data.lastName).toBe(userData.lastName);
    expect(res.data.email).toBe(userData.email);
    expect(res.data.password).toBe(userData.password);
    testingUser = res.data;
  });

  // Valid data but email exists in database -> Return false
  await axios.post(API_URL + "registerNewUser", userData).then((res) => {
    expect(res.data).toBe(false);
  });
});

test("Login User", async () => {
  // Missing data -> Return empty string
  let userData = {
    email: null,
    password: null,
  };
  await axios.post(API_URL + "loginUser", userData).then((res) => {
    expect(res.data).toBe("");
  });

  // Valid data but user not recognized in database -> Return false
  userData = {
    email: "wrong@email.com",
    password: "wrong_password",
  };
  await axios.post(API_URL + "loginUser", userData).then((res) => {
    expect(res.data).toBe(false);
  });

  // Valid data and user recognized in database -> Return object
  await axios
    .post(API_URL + "loginUser", {
      email: testingUser.email,
      password: testingUser.password,
    })
    .then((res) => {
      expect(res.data.firstName).toBe(testingUser.firstName);
      expect(res.data.lastName).toBe(testingUser.lastName);
      expect(res.data.email).toBe(testingUser.email);
      expect(res.data.password).toBe(testingUser.password);
    });
});

test("Find user by userId", async () => {
  // Missing data provided -> Return false
  let userId = null;
  await axios.post(API_URL + "getUserById", { userId }).then((res) => {
    expect(res.data).toBe(false);
  });

  // Invalid userId provided -> Return false
  userId = "invalid_user_id";
  await axios.post(API_URL + "getUserById", { userId }).then((res) => {
    expect(res.data).toBe(false);
  });

  // Valid userId provided -> Return object
  userId = testingUser._id;
  await axios.post(API_URL + "getUserById", { userId }).then((res) => {
    expect(res.data.firstName).toBe(testingUser.firstName);
    expect(res.data.lastName).toBe(testingUser.lastName);
    expect(res.data.email).toBe(testingUser.email);
    expect(res.data.password).toBe(testingUser.password);
  });
});

test("Update user profile", async () => {
  // Missing data provided -> Return false
  let userId = null;
  let data = null;
  await axios
    .post(API_URL + "updateUserProfile", { userId, data })
    .then((res) => {
      let resData = res.data;
      expect(resData).toBe(false);
    });

  // Partially missing data provided -> Return false
  userId = null;
  data = { firstName: "Updated" };
  await axios
    .post(API_URL + "updateUserProfile", { userId, data })
    .then((res) => {
      expect(res.data).toBe(false);
    });

  // Partially missing data provided # 2 -> Return false
  userId = testingUser._id;
  data = null;
  await axios
    .post(API_URL + "updateUserProfile", { userId, data })
    .then((res) => {
      expect(res.data).toBe(false);
    });

  // Valid data provided. Update user's firstName -> Return object
  userId = testingUser._id;
  data = { firstName: "Updated" };
  await axios
    .post(API_URL + "updateUserProfile", { userId, data })
    .then((res) => {
      testingUser = res.data;
      expect(res.data.firstName).toBe(testingUser.firstName);
    });

  // Valid data provided. Update user's lastName -> Return object
  userId = testingUser._id;
  data = { lastName: "Updated" };
  await axios
    .post(API_URL + "updateUserProfile", { userId, data })
    .then((res) => {
      testingUser = res.data;
      expect(res.data.lastName).toBe(testingUser.lastName);
    });

  // Valid data provided. Update user's email -> Return object
  userId = testingUser._id;
  data = { email: "updated@jest.com" };
  await axios
    .post(API_URL + "updateUserProfile", { userId, data })
    .then((res) => {
      testingUser = res.data;
      expect(res.data.email).toBe(testingUser.email);
    });

  // Valid data provided. Update user's password -> Return object
  userId = testingUser._id;
  data = { password: "updated_password" };
  await axios
    .post(API_URL + "updateUserProfile", { userId, data })
    .then((res) => {
      testingUser = res.data;
      expect(res.data.password).toBe(testingUser.password);
    });
});

test("Update user's prevSession field", async () => {
  // Missing data provided -> Return false
  let userId = null;
  let data = null;
  await axios
    .post(API_URL + "updatePrevSessionsForUserId", { userId, data })
    .then((res) => {
      expect(res.data).toBe(false);
    });

  // Partially missing data provided -> Return false
  userId = null;
  data = { status: "active" };
  await axios
    .post(API_URL + "updatePrevSessionsForUserId", { userId, data })
    .then((res) => {
      expect(res.data).toBe(false);
    });

  // Partially missing data provided # 2 -> Return false
  userId = testingUser._id;
  data = null;
  await axios
    .post(API_URL + "updatePrevSessionsForUserId", { userId, data })
    .then((res) => {
      expect(res.data).toBe(false);
    });

  // Valid data provided -> Return prevSession length equals 1
  userId = testingUser._id;
  data = { status: "active", rating: 5 };
  await axios
    .post(API_URL + "updatePrevSessionsForUserId", {
      userId: userId,
      data: data,
    })
    .then((res) => {
      testingUser = res.data;
      expect(res.data.prevSessions.length).toBe(1);
    });

  // Valid data provided -> Return prevSession length equals 2
  userId = testingUser._id;
  data = { status: "active", rating: 3 };
  await axios
    .post(API_URL + "updatePrevSessionsForUserId", {
      userId: userId,
      data: data,
    })
    .then((res) => {
      testingUser = res.data;
      expect(res.data.prevSessions.length).toBe(2);
    });
});

test("Add a new match object", async () => {
  // Missing data provided -> Return false
  matchData = {};
  await axios
    .post(API_URL + "addNewMatch", {
      matchData,
    })
    .then((res) => {
      expect(res.data).toBe(false);
    });

  // Partially missing data provided -> Return false
  matchData = { userId: testingUser._id };
  await axios
    .post(API_URL + "addNewMatch", {
      matchData,
    })
    .then((res) => {
      expect(res.data).toBe(false);
    });

  // Partially missing data provided # 2 -> Return false
  matchData = { userId: testingUser._id, userStatus: "helpee" };
  await axios
    .post(API_URL + "addNewMatch", {
      matchData,
    })
    .then((res) => {
      expect(res.data).toBe(false);
    });

  // Partially missing data provided # 3 -> Return false
  matchData = {
    userId: testingUser._id,
    userStatus: "helpee",
    technology: "ai",
  };
  await axios
    .post(API_URL + "addNewMatch", {
      matchData,
    })
    .then((res) => {
      expect(res.data).toBe(false);
    });

  // Valid data provided -> Return object
  matchData = {
    userId: testingUser._id,
    userStatus: "helpee",
    technology: "ai",
    language: "java",
  };
  await axios.post(API_URL + "addNewMatch", matchData).then((res) => {
    expect(res.data.userId).toBe(testingUser._id);
    expect(res.data.userStatus).toBe(matchData.userStatus);
    expect(res.data.technology).toBe(matchData.technology);
    expect(res.data.language).toBe(matchData.language);
    testingMatchOne = res.data;
  });

  // Valid data provided # 2 -> Return object
  matchData = {
    userId: testingUser._id + "helper",
    userStatus: "helper",
    technology: "ai",
    language: "java",
  };
  await axios.post(API_URL + "addNewMatch", matchData).then((res) => {
    expect(res.data.userId).toBe(matchData.userId);
    expect(res.data.userStatus).toBe(matchData.userStatus);
    expect(res.data.technology).toBe(matchData.technology);
    expect(res.data.language).toBe(matchData.language);
    testingMatchTwo = res.data;
  });
});

test("Find a match for an existing match object", async () => {
  // Missing data provided -> Return false
  let matchId = null;
  await axios.post(API_URL + "findMatchForId", { matchId }).then((res) => {
    expect(res.data).toBe(false);
  });

  // Incorrect data provided -> Return false
  matchId = "invalid_id";
  await axios.post(API_URL + "findMatchForId", { matchId }).then((res) => {
    expect(res.data).toBe(false);
  });

  // Valid data provided -> Return object
  matchId = testingMatchOne._id;
  await axios.post(API_URL + "findMatchForId", { matchId }).then((res) => {
    expect(res.data._id).toBe(testingMatchTwo._id);
    expect(res.data.userId).toBe(testingMatchTwo.userId);
    expect(res.data.userStatus).toBe(testingMatchTwo.userStatus);
    expect(res.data.technology).toBe(testingMatchTwo.technology);
    expect(res.data.language).toBe(testingMatchTwo.language);
  });
});

test("Delete match object using matchId", async () => {
  // Missing data provided -> Return false
  let matchId = null;
  await axios.post(API_URL + "deleteMatchById", { matchId }).then((res) => {
    expect(res.data).toBe(false);
  });

  // Incorrect data provided -> Return false
  matchId = "invalid_id";
  await axios.post(API_URL + "deleteMatchById", { matchId }).then((res) => {
    expect(res.data).toBe(false);
  });

  // Correct data provided -> Return true
  matchId = testingMatchOne._id;
  await axios.post(API_URL + "deleteMatchById", { matchId }).then((res) => {
    expect(res.data).toBe(true);
  });

  // Correct data provided #2 -> Return true
  matchId = testingMatchTwo._id;
  await axios.post(API_URL + "deleteMatchById", { matchId }).then((res) => {
    expect(res.data).toBe(true);
  });
});

test("Creating new session objects", async () => {
  // Missing data provided -> return false
  let sessionData = null;
  await axios.post(API_URL + "createNewSession", sessionData).then((res) => {
    expect(res.data).toBe(false);
  });

  // Partially missing data provided -> return false
  sessionData = { currentMatchQuery: { userId: testingUser._id } };
  await axios.post(API_URL + "createNewSession", sessionData).then((res) => {
    expect(res.data).toBe(false);
  });

  // Partially missing data provided # 2 -> return false
  sessionData = {
    currentMatchQuery: { userId: testingUser._id },
    matchFound: { userId: testingUser._id },
  };
  await axios.post(API_URL + "createNewSession", sessionData).then((res) => {
    expect(res.data).toBe(false);
  });

  // Correct data provided -> return Object
  sessionData = {
    currentMatchQuery: { userId: testingUser._id },
    matchFound: { userId: testingUser._id },
    roomNumber: "123321",
  };
  await axios
    .post(API_URL + "createNewSession", { sessionData: { ...sessionData } })
    .then((res) => {
      expect(res.data.currentMatchQuery.userId).toBe(
        sessionData.currentMatchQuery.userId
      );
      expect(res.data.matchFound.userId).toBe(sessionData.matchFound.userId);
      expect(res.data.roomNumber).toBe(sessionData.roomNumber);
      testingSession = res.data;
    });
});

test("Attach session object to user's activeSession field", async () => {
  // Missing data provided -> Return false
  let userId = null;
  let sessionObject = null;
  await axios
    .post(API_URL + "addSessionToUser", {
      userId: userId,
      sessionObject: { ...sessionObject },
    })
    .then((res) => {
      expect(res.data).toBe(false);
    });

  // Partially missing data provided -> Return false
  userId = testingUser._id;
  sessionObject = null;
  await axios
    .post(API_URL + "addSessionToUser", {
      userId: userId,
      sessionObject: null,
    })
    .then((res) => {
      expect(res.data).toBe(false);
    });

  // Partially missing data provided # 2 -> Return false
  userId = null;
  sessionObject = testingSession;
  await axios
    .post(API_URL + "addSessionToUser", {
      userId: userId,
      sessionObject: { ...sessionObject },
    })
    .then((res) => {
      expect(res.data).toBe(false);
    });

  // Valid data provided -> Return Object
  userId = testingUser._id;
  sessionObject = testingSession;
  await axios
    .post(API_URL + "addSessionToUser", {
      userId: userId,
      sessionObject: sessionObject,
    })
    .then((res) => {
      expect(res.data.activeSession._id).toBe(sessionObject._id);
      expect(res.data.activeSession.roomNumber).toBe(sessionObject.roomNumber);
    });
});

test("Delete session object using roomNumber", async () => {
  // Missing data provided -> return false
  let roomId = null;
  await axios.post(API_URL + "deleteSession", { roomId }).then((res) => {
    expect(res.data).toBe(false);
  });

  // Correct data provided -> return Object
  roomId = "123321";
  await axios.post(API_URL + "deleteSession", { roomId }).then((res) => {
    expect(res.data).toBe(true);
  });
});

test("Delte user object using userId", async () => {
  // Correct data provided -> return true
  let userId = testingUser._id;
  await axios.post(API_URL + "deleteUser", { userId }).then((res) => {
    expect(res.data).toBe(true);
  });
});
