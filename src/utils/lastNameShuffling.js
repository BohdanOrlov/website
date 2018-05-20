
import styles from "../pages/index.module.css";

var content = [
    "ORLOV",
    "iOS Engineer",
    "Traveler",
    "Writer",
    "Rider",
    "Speaker",
];
var contentStyles = [
    styles.lastName,
    styles.engineer,
    styles.traveler,
    styles.writer,
    styles.rider,
    styles.speaker,
];
var msgPtr = 0;

function change() {
    var container = document.getElementById('variableLastName')
    if (!container.classList.contains(styles.nameAppear)) {
        var newMsg = content[msgPtr];
        var newStyle = contentStyles[msgPtr];
        contentStyles.forEach(element => {
            container.classList.remove(element);
        });
        container.classList.add(newStyle);
        container.classList.add(styles.nameAppear);
        container.innerHTML = newMsg;
        msgPtr++; msgPtr = (msgPtr % content.length);
        container.classList.remove(styles.nameDisappear);
        container.classList.add(styles.nameAppear);
    } else {
        container.classList.remove(styles.nameAppear);
        container.classList.add(styles.nameDisappear);
    }
}

export default function () {
    var container = document.getElementById('variableLastName')
    container.style.opacity = 0;
    setTimeout(change, 1);
    setInterval(change, 1000);
}