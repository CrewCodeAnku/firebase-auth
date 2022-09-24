import { auth, db } from "./index";

export const signIn = async ({ email, password }) => {
  return await auth.signInWithEmailAndPassword(email, password);
};

export const getIdToken = async (user) => {
  return await user.getIdToken();
};

export const getCurrentUserToken = async () => {
  if (auth.currentUser) {
    let idToken = await auth.currentUser.getIdToken(true);
    return idToken;
  } else {
    return null;
  }
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  console.log("User Auth", userAuth.uid);
  const userRef = db.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email } = userAuth;
    try {
      await userRef.set({
        email,
        role: "user",
        createdAt: Date.now(),
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
};

export const sendVerificationEmail = async () => {
  return await auth.currentUser?.sendEmailVerification().then(() => {
    console.log("Verification email has been sent");
  });
};

export const sendResetPasswordEmail = async (email) => {
  return await auth.sendPasswordResetEmail(email).then(() => {
    console.log("Password reset email has been sent");
  });
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
