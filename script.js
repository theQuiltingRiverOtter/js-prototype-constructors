Array.prototype.count = function (term, strict = true) {
    let total = 0;
    if (strict) {
        for (i = 0; i < this.length; i++) {
            if (this[i] === term) {
                total++;
            }
        }
    } else {
        for (i = 0; i < this.length; i++) {
            let newTerm = this[i];
            if (typeof newTerm == "string") {
                newTerm = newTerm.toLowerCase();
                console.log(newTerm);
            }

            if (newTerm == term) {
                total++;


            }
        }
    }
    return total;
}

String.prototype.title = function () {
    const lowercase = ['a', 'an', 'the', 'for', 'and', 'nor', 'but', 'or',
        'yet', 'so', 'at', 'around', 'by', 'after', 'along',
        'for', 'from', 'of', 'on', 'to', 'with', 'without']
    if (this.indexOf(".") == -1) {
        let messageList = this.split(" ");
        let newMessageList = [];
        for (let [index, word] of messageList.entries()) {
            if (lowercase.indexOf(word) == -1 || index == 0 || index == messageList.length - 1) {
                let firstLetter = word[0];
                firstLetter = firstLetter.toUpperCase();
                let newWord = word.slice(1).toLowerCase();
                newWord = firstLetter + newWord;
                newMessageList.push(newWord)
            }
            else {
                newMessageList.push(word);
            }

        }
        newMessage = newMessageList.join(" ");
        return newMessage;
    } else {
        let sentences = this.split(".");
        sentences.pop();
        let newSentencesList = [];
        for (let sentence1 of sentences) {
            let sentence = sentence1.trim();
            let wordList = sentence.split(" ");
            let newWordList = [];
            for (let [index, word] of wordList.entries()) {
                if (lowercase.indexOf(word) == -1 || index == 0 || index == wordList.length - 1) {
                    let firstLetter = word[0];
                    firstLetter = firstLetter.toUpperCase();
                    let newWord = word.slice(1).toLowerCase();
                    newWord = firstLetter + newWord;
                    newWordList.push(newWord)

                } else {
                    newWordList.push(word)
                }
            }
            let newSentence = newWordList.join(" ");
            newSentencesList.push(newSentence);
        }
        let newMessage = newSentencesList.join(". ");
        return newMessage;
    }

}





