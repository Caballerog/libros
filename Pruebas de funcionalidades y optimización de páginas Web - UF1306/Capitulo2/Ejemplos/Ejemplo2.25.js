var refWindow = window.open("", "refWindow", "width=200,height=200");
refWindow.opener.document.write("<p>Esta es la ventana que lanzó esta ventana</p>");
