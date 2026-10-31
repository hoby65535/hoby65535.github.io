for (const [buttonSelector, dialogSelector] of [
  ['[data-open-architecture]', '#architecture-dialog'],
  ['[data-open-deployment]', '#deployment-dialog'],
  ['[data-open-image-processing]', '#image-processing-dialog'],
  ['[data-open-ai-integration]', '#ai-integration-dialog'],
  ['[data-open-cost-compute]', '#cost-compute-dialog'],
  ['[data-open-cost-static]', '#cost-static-dialog'],
  ['[data-open-cost-sp]', '#cost-sp-dialog'],
  ['[data-open-wemix-overview]', '#wemix-overview-dialog'],
  ['[data-open-metadium-overview]', '#metadium-overview-dialog'],
  ['[data-open-security-overview]', '#security-overview-dialog'],
  ['[data-open-network-overview]', '#network-overview-dialog'],
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
