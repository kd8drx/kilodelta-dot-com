const whoamiObj = {
  "message" : [
    [
      "DID is about survival!",
      " – Deborah Bray Haddock",
      " – The Dissociative Identity Disorder Sourcebook"
    ],
    [
     "DID develops as a response to extreme trauma that occurs at",
     "an early age and usually over an extended period of time.",
     " – Deborah Bray Haddock",
     " – The Dissociative Identity Disorder Sourcebook"
    ],
    [
      "From the moment of seeking treatment for symptoms to the time",
      "of an accurate diagnosis of DID, individuals receive an average",
      "of four prior other diagnoses, inadequate pharmacological treatment,",
      "have several hospital admissions and consequently spend many years in",
      "mental health services.",
      " – Antje A. T. S. Reinders and Dick J. Veltman",
      " – DID: out of the shadows at last?"
      
    ],
    [
     "Is that like Sybil? Am I like the woman in The Three Faces of Eve?",
     "My head began to spin. What do I have inside of me? Is there a crazy",
     "person in there? What am I? I felt like a freak. I was afraid to have",
     "anyone know. I have a mental illness. People make fun of people like",
     "me. Upon hearing my diagnosis, I stopped thinking of myself as smart,",
     "creative, or clever.",
     " – Olga Trujillo",
     " – The Sum of My Parts: A Survivor's Story of DID" 
    ],
    [
     "I was overwhelmed by fear and shame. The words multiple personality",
     "disorder echoed in my mind. I thought of all the ways people with ",
     "multiple personalities were ridiculed and marginalized: They're locked",
     "away in mental institutions. They are really sick. I'm not going to be",
     "the subject of people's jokes. I am a lawyer. I work at the ",
     "U.S. Department of Justice.",
     " – Olga Trujillo",
     " – The Sum of My Parts: A Survivor's Story of DID"
    ],
  ],
}

export const createWhoami = () : string[] => {
  const whoami : string[] = [];  
  const r = Math.floor(Math.random() * whoamiObj.message.length);
  whoami.push("<br>");

  whoamiObj.message[r].forEach((ele, idx) => {
    whoami.push(ele);
  });

  whoami.push("<br>");

  return whoami
}
