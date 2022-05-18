let ActiveLanguage = localStorage.getItem("ActiveLangugae");
//

if (ActiveLanguage == null) {
  ActiveLanguage = "Hindi";
}

//

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
    Push: "যোগ",
    Function: "ফাংশন",
    Langugae: "Bengali",
  },
};

if (ActiveLanguage == "Hindi") {
  ActiveLangugaeKeywords = KalaamKeywords.Hindi;
}

if (ActiveLanguage == "Marathi") {
  ActiveLangugaeKeywords = KalaamKeywords.Marathi;
}
/* Bengali Added */

if (ActiveLanguage == "Bengali") {
  ActiveLangugaeKeywords = KalaamKeywords.Bengali;
}
//

export { ActiveLangugaeKeywords, KalaamKeywords };
