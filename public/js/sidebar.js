/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
var configMenuBtn = true;
var stateContainerMenuBtn = false;

/*function openCloseConfigMenu() {
    document.getElementById("configMenuSidebar").style.width = (configMenuBtn) ? "0" : "250px";
    document.getElementById("main-content").style.marginLeft = (configMenuBtn) ? "0" : "250px";
    document.getElementById("configMenuBtn").style.marginLeft = (configMenuBtn) ? "0" : "250px";
    configMenuBtn = !configMenuBtn;
  }*/

  function openCloseStateContainerMenu() {
    document.getElementById("stateContainerMenuSidebar").style.width = (stateContainerMenuBtn) ? "0" : "500px";
    document.getElementById("main-content").style.marginRight = (stateContainerMenuBtn) ? "0" : "500px";
    document.getElementById("stateContainerMenuBtn").style.marginRight = (stateContainerMenuBtn) ? "0" : "500px";
    stateContainerMenuBtn = !stateContainerMenuBtn;
  }
