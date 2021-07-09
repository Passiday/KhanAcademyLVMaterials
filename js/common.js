function showHide(showLst, hideLst) {
  if (showLst) showLst.forEach((id) => document.getElementById(id).style.display = "block");
  if (hideLst) hideLst.forEach((id) => document.getElementById(id).style.display = "none");
}