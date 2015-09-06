(function() {
    alert("Auto Buy has started!");
    $(".item[data-value='2']").click(function() { 
        alert("clicked");
    });
}).call(this);
