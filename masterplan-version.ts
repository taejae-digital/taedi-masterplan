export const MASTERPLAN_VERSION = "v0.12.10";
export const MASTERPLAN_ROUTE = "/mp121";
export const MASTERPLAN_PDF_DIR = "archive/pdf";

export const MASTERPLAN_COMPACT_VERSION = MASTERPLAN_VERSION
  .replace(/^v/, "")
  .split(".")
  .map((part, index) => (index === 0 ? part : part.padStart(2, "0")))
  .join("")
  .replace(/^0/, "0");

export const MASTERPLAN_COMPONENT_DIR = `app/components/masterplan-v${MASTERPLAN_COMPACT_VERSION}`;
export const MASTERPLAN_PDF_FILENAME = `masterplan-${MASTERPLAN_VERSION}.pdf`;
export const MASTERPLAN_PDF_PATH = `${MASTERPLAN_PDF_DIR}/${MASTERPLAN_PDF_FILENAME}`;
