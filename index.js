var form =document.querySelectorAll("form").length;

for (var i = 0; i < form; i++) {
    document.querySelectorAll("form")[i].addEventListener("submit", function name() {
        var buttonInnerHTML = this.innerHTML;

       switch (buttonInnerHTML) {
        case "subscribe":
            alert("you have successfuly subscribe");
            break;


       case "Submit":
            alert("Details submited.");
            break;

        default: console.log(buttonInnerHTML);
            
       }
    });
    
}


form.addEventListener("submit", function () {
    var form1 = new FormApplication("form");
    console.log(FormApplication.form);
});

// var log =document.querySelector("#log");


function FormApplication(form ){
    this.form = form;

}
