import { async } from "regenerator-runtime";
export const getJSON = async function (url) {
  try {
    const res = await fetch(`${url}`);
    if (!res.ok) throw new Error("Request down, please try another URL");
    return await res.json();
  } catch (err) {
    console.error(err);
  }
};

///////////////////////////
const bookMarksBtn = document.querySelector(".list-item--bookmarks");
const bookMarks = document.querySelector(".bookmarks");

bookMarksBtn.addEventListener("mouseover", function () {
  bookMarks.style.opacity = "1";
});
bookMarksBtn.addEventListener("mouseout", function () {
  bookMarks.style.opacity = "0";
});
