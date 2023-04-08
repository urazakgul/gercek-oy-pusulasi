const previewImage = (inputId, imgId) => {
  const input = document.getElementById(inputId);
  const img = document.getElementById(imgId);
  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    img.src = e.target.result;
    input.value = "";
    input.style.color = "white";
    input.style.backgroundColor = "transparent";
  };
  reader.readAsDataURL(file);
};

const download = (url) => {
  let a = document.createElement("a");
  a.style.display = "none";
  a.id = "js-downloder";
  a.href = url;
  a.download = "gercek_oy_pusulasi.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

const saveCapture = (element) => {
  html2canvas(element).then((canvas) => {
    download(canvas.toDataURL("image/png"));
  });
};

document.getElementById("btn-download").addEventListener("click", function () {
  let element = document.querySelector(".download-div");
  saveCapture(element);
});