 
 
 if (sessionStorage.getItem("authenticated") !== "true") {
  window.location.href = "index.html"; // go back to login if not logged in
}
sessionStorage.removeItem("authenticated"); 
 
 