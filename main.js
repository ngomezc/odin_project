$(function () {
    var $container = $("#container");
    makeGrid($container, 15, 15);

    $("#selectGrid").submit(function () {
        var $this = $(this),
            rows = $this.find("input[name='rows']").val(),
            cols = $this.find("input[name='cols']").val();
        makeGrid($container, rows, cols);
        return false;
    });
});

function makeGrid($container, rows, cols) {
    $container.empty();
    var style = "height: " + $container.innerHeight() / cols + "px; width: " + $container.innerWidth() / rows + "px;";
    for (var x = 0; x < cols * rows; x++) {
        $container.append("<div style='" + style + "' class='square transit'></div>");
    }

    $(".square").hover(function () {
        $(this).removeClass("transit");
    },function () {
        $(this).addClass("transit");
    });
}