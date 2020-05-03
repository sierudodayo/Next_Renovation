;(function($){
    var map;
 
    $(document).ready( function(){
        var mapOptions = {
            center: new google.maps.LatLng( 35.8627054,139.8321601 ),
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
         
        /* "markers_sample" を自分が作成するhtmlに合わせること */
        map = new google.maps.Map(document.getElementById( "map_canvas" ),
                                  mapOptions);
 
         
        /******************************/
        /* 一つのマーカを表示する処理 */
        /******************************/
 
        /* マーカーの座標 */
        var myhomeLatLng = new google.maps.LatLng( 35.8627054,139.8321601 );//35.8627054,139.8321601
 
        /* マーカーを表示、タイトルは "My Home" */
        var myhomeMarker = new google.maps.Marker( {
            position: myhomeLatLng,
            map: map,
            title: "Next_Renovation"
        });
 
        /* ２つめ以降はここに作成 */
 
    });
})(jQuery);