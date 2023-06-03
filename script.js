const inputText = document.getElementById('inputText')
const inputNumber = document.getElementById('inputNumber')
const output = document.getElementById('output')
const longTextForm = document.getElementById("longTextForm")

const Calculate = (event) => {  
  event.preventDefault()

  let loongTeext = "", 
      outputText = inputText.value, 
      N = Number(inputNumber.value)

  for(let i = 0; i < outputText.length; i++) {
    switch(outputText[i].toLowerCase()) {
      case "a":
        case "b":
          case "c":
            case "d":
              case "e":
                case "f":
                  case "g":
                    case "h":
                      case "i":
                        case "j":
                          case "k":
                            case "l":
                              case "m":
                                case "n":
                                  case "o":
                                    case "p":
                                      case "q":
                                        case "r":
                                          case "s":
                                            case "t":
                                              case "u":
                                                case "v":
                                                  case "w":
                                                    case "x":
                                                      case "y":
                                                        case "z":
        for(let j = 0; j < N; j++) {
          loongTeext += outputText[i]
        }
        break;
      default:
        loongTeext += outputText[i]
    }
  }
  
  output.innerText = loongTeext;
}

longTextForm.addEventListener('submit', Calculate)