// assets/js/download.js

document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('download-pdf');
    const cvContent = document.getElementById('cv-content');

    // This safety check is crucial. It ensures this code only runs on pages
    // where the CV and download button exist, preventing errors on other pages.
    if (downloadBtn && cvContent && typeof html2pdf !== 'undefined') {

        downloadBtn.addEventListener('click', function() {
            // --- 1. Provide User Feedback ---
            // Store the button's original content
            const originalButtonContent = downloadBtn.innerHTML;
            // Update the button to show it's working and disable it
            downloadBtn.innerHTML = '<span class="animate-pulse">Generating PDF...</span>';
            downloadBtn.disabled = true;

            // --- 2. Prepare Content for PDF ---
            // Clone the CV content to avoid modifying the live page
            const contentForPdf = cvContent.cloneNode(true);
            // From the CLONED content, remove any elements you don't want in the PDF
            const elementsToRemove = contentForPdf.querySelectorAll('.no-print');
            elementsToRemove.forEach(el => el.remove());

            // --- 3. Generate the PDF ---
            html2pdf()
                .set({
                    margin: 15,
                    filename: 'SOEUNG-Phearaeron-CV.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: {
                        scale: 2,
                        useCORS: true,
                        letterRendering: true,
                        allowTaint: false
                    },
                    jsPDF: {
                        unit: 'mm',
                        format: 'a4',
                        orientation: 'portrait'
                    },
                    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
                })
                .from(contentForPdf)
                .save()
                .then(() => {
                    // --- 4. Success: Reset the button ---
                    downloadBtn.innerHTML = originalButtonContent;
                    downloadBtn.disabled = false;
                })
                .catch((error) => {
                    // --- 5. Error: Alert the user and reset the button ---
                    alert('An error occurred while generating the PDF. Please try again.');
                    downloadBtn.innerHTML = originalButtonContent;
                    downloadBtn.disabled = false;
                });
        });
    }
});