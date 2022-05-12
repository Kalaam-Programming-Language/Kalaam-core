let ActiveLanguage = localStorage.getItem("ActiveLangugae");
//console.log("ActiveLangugae: ", ActiveLanguage);

if (ActiveLanguage == null) {
  ActiveLanguage = "Hindi";
}

//console.log('ActiveLangugae: ', ActiveLanguage);

var ActiveLangugaeKeywords = "";

var KalaamKeywords = {
  Hindi: {
    Print: "दिखाए", //Still have to change this manually where REGEX are implemented
    Input: "इनपुट",
    If: "अगर",
    For: "दुहराओ",
    While: "जबतक",
    Length: "संख्या",
    Push: "पुश",
    Function: "रचना",
    Langugae: "Hindi",
  },

  Marathi: {
    Print: "दाखवा", //Still have to change this manually where REGEX are implemented
    Input: "इनपुट",
    If: "जर",
    For: "दुहराओ",
    While: "जोपर्यंत",
    Length: "संख्या",
    Push: "पुश",
    Function: "रचना",
    Langugae: "Marathi",
  },
  Bengali: {
    Print: "দেখাও", //Still have to change this manually where REGEX are implemented
    Input: "নিবেশ",
    If: "যদি",
    For: "জন্য",
    While: "যখন",
    Length: "দৈর্ঘ্য",
    Push: "যুক্ত",
    Function: "পর্ব",
    Langugae: "Bengali",
  },
};

if (ActiveLanguage == "Hindi") {
  ActiveLangugaeKeywords = KalaamKeywords.Hindi;
}

if (ActiveLanguage == "Marathi") {
  ActiveLangugaeKeywords = KalaamKeywords.Marathi;
}

if (ActiveLanguage == "Bengali") {
  ActiveLangugaeKeywords = KalaamKeywords.Bengali;
}

//console.log('ActiveLangugaeKeywords: ', ActiveLangugaeKeywords);

export { ActiveLangugaeKeywords, KalaamKeywords };
