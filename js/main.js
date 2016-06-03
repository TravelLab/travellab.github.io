heightScaler = function(W,H){
    $(document).ready(function(){
        var heightResizer = function(){
            w = $(".wrapper").width();
            $(".wrapper").height(w*H/W );
        };
        $(window).load(heightResizer);
        $(window).resize(heightResizer);
    });
};