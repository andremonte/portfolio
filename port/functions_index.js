function readMore() {
    var moreText = document.getElementById("readMore");
    var btnText = document.getElementById("ler");

    //if user press the button
    if(moreText.style.display === "none") {
        moreText.style.display = "inline";
        btnText.style.display = 'block';
        btnText.innerHTML = "read less";
    }
    //user don't want to read more.
    else {
        moreText.style.display = "none";
        btnText.innerHTML = "read more";
    }
    
}