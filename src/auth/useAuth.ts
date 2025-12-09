import { onAuthStateChanged, signInAnonymously, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        const result = await signInAnonymously(auth);
        console.log("Signed in anonymously ✔", result.user.uid);
        setUser(result.user);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return { user, loading };
}
