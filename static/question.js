/**
 * 
 * @param {HTMLElement} resultArea
 */
const handleActionResponse = async (resultArea) => {
  const resp = await fetch("/action", { method: "POST" })
  resultArea.innerHTML = await resp.text();
}

document.addEventListener("DOMContentLoaded", () => {
  /**
   * @type {HTMLFormElement | null}
   */
  const form = document.querySelector("form");
  if (form == null) throw new TypeError("form should exists");

  const resultArea = document.getElementById("exam-answer-result");
  if (resultArea == null) throw new TypeError("exam-answer-result should exists")


  form.addEventListener("submit", e => {
    e.preventDefault();

    handleActionResponse(resultArea);
  });
});
