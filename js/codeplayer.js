// update output
function updateOutput(){
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");

    document.getElementById('outputPanel').contentWindow.eval($('#javascriptPanel').val());
  
}

// highlight nav classes

$(".toggleButton").hover(function(){
    $(this).addClass("highlightedButton");
}, function(){
    $(this).removeClass("highlightedButton");
});

// Remove the blue active colour when button isnt selected
// show and hide the toggle button
$(".toggleButton").click(function(){
    $(this).toggleClass("active");
    $(this).removeClass("highlightedButton");
    let panelId = $(this).attr("id") + "Panel";
    $('#' + panelId).toggleClass('hidden');
    let numberOfActivePanels = 4 - $('.hidden').length;
    
    $('.panel').width(($(window).width() / numberOfActivePanels) - 10);
})

// Change height and width of textareas
$(".panel").height($(window).height() - $("#header").height() - 15);
$(".panel").width($(window).width() / 2) - 10;

updateOutput();

// Find html and update output as user types his/her code
$("textarea").on('change keyup paste', function(){
    updateOutput();
});