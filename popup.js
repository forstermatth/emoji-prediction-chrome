
var html_string= "<html><body></body></html>";
var iframe = document.createElement("iframe");

iframe.setAttribute("id", "emoji_frame");
iframe.setAttribute("scrolling", "No");
iframe.setAttribute("frameborder", "0");


iframe.src = "data:text/html;charset=utf-8," + escape(html_string);
document.body.appendChild(iframe);

