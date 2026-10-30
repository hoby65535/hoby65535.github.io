for (const [buttonSelector, dialogSelector] of [
  ['[data-open-architecture]', '#architecture-dialog'],
  ['[data-open-deployment]', '#deployment-dialog'],
]) {
  const dialog = document.querySelector(dialogSelector);
  const opener = document.querySelector(buttonSelector);
  if (!dialog || !opener) continue;
  opener.addEventListener('click', () => dialog.showModal());
  dialog.querySelector('.close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
}
