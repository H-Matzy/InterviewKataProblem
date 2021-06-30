function convertTimeToWords(hours, minutes) {
    let wordTime = ["o' clock", "one", "two", "three", "four",
    "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen",
    "fourteen", "fifteen", "sixteen", "seventeen",
    "eighteen", "nineteen", "twenty", "twenty one",
    "twenty two", "twenty three", "twenty four",
    "twenty five", "twenty six", "twenty seven",
    "twenty eight", "twenty nine"];
    if (hours === 12 && minutes === 45) {
        return `quarter to one`
    }
    else if (hours === 12 && minutes > 30) {
        return `${wordTime[60 - minutes]} minutes to one`
    }
    else if (minutes === 0) {
        return `${wordTime[hours]} ${wordTime[minutes]}`
    } else if (minutes === 15) {
        return `quarter past ${wordTime[hours]}`
    } else if (minutes === 30) {
        return `half past ${wordTime[hours]}`
    } else if (minutes === 45) {
        return `quarter to ${wordTime[hours + 1]}`
    } else if (minutes <= 30) {
        return `${wordTime[minutes]} minutes past ${wordTime[hours]}`
    } else if (minutes > 30) {
        return `${wordTime[60 - minutes]} minutes to ${wordTime[hours + 1]}`
    }
}

console.log(convertTimeToWords(7, 45));