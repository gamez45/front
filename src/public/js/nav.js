function myFunction() {
    var element =
        document.getElementById('navbarsExampleDefault');

    if (element.classList) {
        element.classList.toggle("open");
    } else {
        var classes = element.className.split(" ");
        var i = classes.indexOf("open");

        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push("open");
        element.className = classes.join(" ");
    }
}

function FunctionSearch() {
    var element =
        document.getElementById('navbarsSearch');

    if (element.classList) {
        element.classList.toggle("open");
    } else {
        var classes = element.className.split(" ");
        var i = classes.indexOf("open");

        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push("open");
        element.className = classes.join(" ");
    }
}