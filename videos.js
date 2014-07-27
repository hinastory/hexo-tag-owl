var iframe_config = 'frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen';

// ------------------------------------
// youtube 9:16
// ------------------------------------
module.exports.youtube = function (args, content) {
  var id = args[0];
  return '<div class="owl-media owl-video owl-youtube"><iframe src="//www.youtube.com/embed/' + id + '" ' + iframe_config + '></iframe></div>';
}
// ------------------------------------
// niconico
// ------------------------------------
module.exports.niconico = function (args, content) {
  var id = args[0],
      type = args[1] || 'thumb';
  // thumb
  if (type == 'thumb') {
    return '<div class="owl-media owl-video owl-niconico niconico-thumb"><iframe src="http://ext.nicovideo.jp/thumb/' + id + '" scrolling="no" style="border:solid 1px #CCC;" ' + iframe_config + '></iframe></div>';
  }
  // watch
  return '<div class="owl-media owl-video owl-niconico niconico-watch"><script type="text/javascript" src="http://ext.nicovideo.jp/thumb_watch/' + id + '"></script></div>';
}
// ------------------------------------
// bilibili
// ------------------------------------
module.exports.bilibili = function (args, content) {
  var id = args[0].match(/^(av|)(\d+)$/);
  if (id == null)
  	throw 'error! incorrect bilibibli id.';
  return '<div class="owl-media owl-video owl-bilibili"><embed height="452" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="http://share.acg.tv/flash.swf" flashvars="aid=' + id[2] + '&page=1" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed></div>';
}
// ------------------------------------
// vimeo
// ------------------------------------
module.exports.vimeo = function (args, content) {
  var id = args[0];
  return '<div class="owl-media owl-video owl-vimeo"><iframe src="//player.vimeo.com/video/' + id + '" ' + iframe_config + '></iframe></div>';
}
// ------------------------------------
// tudou
// ------------------------------------
module.exports.tudou = function (args, content) {
  var id = args[0];
  return '<div class="owl-media owl-video owl-tudou"><embed src="http://www.tudou.com/v/' + id + '/&bid=05&resourceId=0_05_05_99/v.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" wmode="opaque" width="480" height="400"></embed></div>';
}
// ------------------------------------
// youku
// ------------------------------------
module.exports.youku = function (args, content) {
  var id = args[0].match(/^(id_|)(.+)$/);
  return '<div class="owl-media owl-video owl-youku"><iframe src="http://player.youku.com/embed/' + id[2] + '" ' + iframe_config + '></iframe></div>';
}