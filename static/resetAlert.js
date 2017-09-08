/**
 * Created by liuxiaomeng on 2017/9/8.
 */
/*
 * 重置原生alert方法
 * */
window.alert = function(name){
  var iframe = document.createElement("IFRAME");
  iframe.style.display="none";
  iframe.setAttribute("src", 'data:text/plain,');
  document.documentElement.appendChild(iframe);
  window.frames[0].window.alert(name);
  iframe.parentNode.removeChild(iframe);
};

/*
 * 重置原生confirm方法
 * */
window.confirm = function (message) {
  var iframe = document.createElement("IFRAME");
  iframe.style.display = "none";
  iframe.setAttribute("src", 'data:text/plain,');
  document.documentElement.appendChild(iframe);
  var alertFrame = window.frames[0];
  var result = alertFrame.window.confirm(message);
  iframe.parentNode.removeChild(iframe);
  return result;
};
