import styles from "../pages/index.module.css";

export default function() {
    var boxes = document.getElementsByClassName(styles.headerContainer)
    Array.prototype.forEach.call(boxes, box => {

        var boxRect = box.getBoundingClientRect();
        var rect = box.parentElement.getBoundingClientRect();
        if (rect.top > 0) {
            box.style.position = "absolute"
            box.style.top = "0px"
        } else if (rect.bottom < boxRect.height) {
            box.style.position = "absolute"
            box.style.top = "auto"
        }
        else {
            box.style.position = "fixed"
        }
    });
};
