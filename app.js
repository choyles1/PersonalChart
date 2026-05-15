const STORAGE_KEY = "personalchart.dev.v1";
const VAULT_META_KEY = "personalchart.vault.meta.v1";
const VAULT_STATE_ID = "app-state";
const BACKUP_FORMAT = "personalchart.backup.v1";
const PERSON_EXPORT_FORMAT = "personalchart.person.v1";
const DB_NAME = "personalchart-files";
const DB_VERSION = 2;
const FILE_STORE = "files";
const VAULT_STORE = "vault";
const AUTO_LOCK_MS = 5 * 60 * 1000;

const sectionConfig = {
  overview: {
    title: "Clinical snapshot",
    addLabel: "Edit demographics",
    collection: "demographics",
    fields: [
      ["fullName", "Full name"],
      ["dateOfBirth", "Date of birth", "date"],
      ["sex", "Sex"],
      ["address", "Address", "textarea"],
      ["phone", "Phone"],
      ["emergencyContact", "Emergency contact"],
      ["emergencyContactPhone", "Emergency contact phone"],
      ["allergies", "Allergies", "textarea"],
      ["baseline", "Baseline status", "textarea"]
    ]
  },
  medications: {
    title: "Medications",
    addLabel: "Add medication",
    collection: "medications",
    fields: [
      ["name", "Medication name"],
      ["status", "Medication status", "select"],
      ["dose", "Dose"],
      ["schedule", "Schedule"],
      ["reason", "Reason"],
      ["prescriber", "Prescriber"],
      ["pharmacy", "Pharmacy"],
      ["startDate", "Start date", "date"],
      ["stopDate", "Stop date", "date"],
      ["lastReviewed", "Last reviewed", "date"],
      ["changeReason", "Change reason"],
      ["notes", "Notes", "textarea"]
    ]
  },
  vitals: {
    title: "Vitals and trends",
    addLabel: "Add vital entry",
    collection: "vitals",
    fields: [
      ["date", "Date", "date"],
      ["time", "Time", "time"],
      ["bloodPressure", "Blood pressure"],
      ["pulse", "Pulse"],
      ["weight", "Weight"],
      ["glucose", "Glucose"],
      ["oxygen", "Oxygen %"],
      ["pain", "Pain 0-10"],
      ["notes", "Notes", "textarea"]
    ]
  },
  conditions: {
    title: "Diagnosis",
    addLabel: "Add diagnosis",
    collection: "diagnoses",
    fields: [
      ["name", "Diagnosis"],
      ["status", "Status"],
      ["onsetDate", "Onset date", "date"],
      ["clinician", "Managing clinician"],
      ["notes", "Notes", "textarea"]
    ]
  },
  procedures: {
    title: "Surgeries and procedures",
    addLabel: "Add surgery/procedure",
    collection: "procedures",
    fields: [
      ["name", "Surgery/procedure"],
      ["date", "Date", "date"],
      ["bodyArea", "Body area"],
      ["facility", "Facility"],
      ["clinician", "Clinician/surgeon"],
      ["reason", "Reason"],
      ["outcome", "Outcome"],
      ["notes", "Notes", "textarea"]
    ]
  },
  immunizations: {
    title: "Immunizations",
    addLabel: "Add immunization",
    collection: "immunizations",
    fields: [
      ["name", "Immunization"],
      ["date", "Date received", "date"],
      ["bodyArea", "Body area"],
      ["provider", "Provider/pharmacy"],
      ["manufacturer", "Manufacturer/brand"],
      ["lotNumber", "Lot number"],
      ["nextDue", "Next due", "date"],
      ["notes", "Notes", "textarea"]
    ]
  },
  insurance: {
    title: "Insurance",
    addLabel: "Add insurance",
    collection: "insurance",
    fields: [
      ["type", "Insurance type"],
      ["planName", "Plan name"],
      ["memberId", "Member ID"],
      ["groupNumber", "Group number"],
      ["policyholder", "Policyholder"],
      ["relationship", "Relationship"],
      ["phone", "Phone"],
      ["claimsAddress", "Claims address", "textarea"],
      ["effectiveDate", "Effective date", "date"],
      ["renewalDate", "Renewal/expiration date", "date"],
      ["caseManager", "Case manager/contact"],
      ["priorAuthNotes", "Prior authorization notes", "textarea"],
      ["notes", "Notes", "textarea"]
    ]
  },
  care: {
    title: "Care team",
    addLabel: "Add clinician",
    collection: "careTeam",
    fields: [
      ["name", "Name"],
      ["role", "Role"],
      ["organization", "Organization"],
      ["phone", "Phone"],
      ["email", "Email", "email"],
      ["address", "Address", "textarea"],
      ["notes", "Notes", "textarea"]
    ]
  },
  visits: {
    title: "Appointments and consults",
    addLabel: "Add visit",
    collection: "visits",
    fields: [
      ["date", "Date", "date"],
      ["type", "Type", "select"],
      ["clinician", "Clinician"],
      ["reason", "Reason for visit", "textarea"],
      ["outcome", "Outcome/instructions", "textarea"],
      ["followUp", "Follow-up tasks", "textarea"]
    ]
  },
  documents: {
    title: "Scanned documents",
    addLabel: "Scan/import document",
    collection: "documents",
    fields: [
      ["title", "Document title"],
      ["date", "Document date", "date"],
      ["type", "Type"],
      ["source", "Source"],
      ["file", "Scanned file", "file"],
      ["notes", "Notes", "textarea"]
    ]
  },
  resources: {
    title: "Preferences and resources",
    addLabel: "Add resource",
    collection: "resources",
    fields: [
      ["type", "Type", "select"],
      ["name", "Name"],
      ["phone", "Phone"],
      ["address", "Address", "textarea"],
      ["preference", "Preference notes", "textarea"]
    ]
  },
  legal: {
    title: "Legal and end-of-life",
    addLabel: "Add directive",
    collection: "legal",
    fields: [
      ["type", "Document/directive type"],
      ["status", "Status"],
      ["location", "Where it is stored"],
      ["contact", "Responsible contact"],
      ["notes", "Notes", "textarea"]
    ]
  }
};

const selectOptions = {
  medications: {
    status: ["Active", "On Hold", "Discontinued"]
  },
  resources: {
    type: ["Funeral Home", "Home Care", "Home Health", "Hospital", "Misc. Facility", "Other", "Pharmacy", "Urgent Care"]
  }
};

const starterData = {
  activePersonId: "person-martha",
  people: [
    {
      id: "person-martha",
      demographics: {
        fullName: "Martha Ellis",
        dateOfBirth: "1942-08-17",
        sex: "Female",
        address: "1420 Alder Lane, Springfield",
        phone: "(555) 014-7280",
        emergencyContact: "Dana Ellis, daughter",
        emergencyContactPhone: "(555)-018-4400",
        allergies: "Penicillin rash; codeine nausea",
        baseline: "Lives at home with daytime caregiver support. Uses walker. Mild short-term memory impairment."
      },
      diagnoses: [
        {
          id: "condition-1",
          name: "Hypertension",
          status: "Active",
          onsetDate: "",
          clinician: "Dr. Alvarez",
          notes: "Blood pressure followed during primary care visits."
        },
        {
          id: "condition-2",
          name: "Type 2 diabetes",
          status: "Active",
          onsetDate: "",
          clinician: "Dr. Koh",
          notes: "A1C and CMP ordered for current monitoring."
        },
        {
          id: "condition-3",
          name: "Mild cognitive impairment",
          status: "Active",
          onsetDate: "",
          clinician: "Dr. Alvarez",
          notes: "Family assists with medication review and appointments."
        }
      ],
      procedures: [
        {
          id: "procedure-1",
          name: "Cataract surgery",
          date: "2022-06-15",
          bodyArea: "Right eye",
          facility: "Memorial Outpatient Surgery Center",
          clinician: "Dr. Patel",
          reason: "Vision impairment",
          outcome: "Completed without complications",
          notes: "Right eye."
        }
      ],
      immunizations: [
        {
          id: "immunization-1",
          name: "Influenza vaccine",
          date: "2025-10-03",
          bodyArea: "Left arm",
          provider: "Lakeview Pharmacy",
          manufacturer: "",
          lotNumber: "",
          nextDue: "2026-10-01",
          notes: "Annual flu shot."
        }
      ],
      insurance: [
        {
          id: "insurance-1",
          type: "Medicare",
          planName: "Original Medicare",
          memberId: "Sample only",
          groupNumber: "",
          policyholder: "Martha Ellis",
          relationship: "Self",
          phone: "(800) 633-4227",
          claimsAddress: "",
          effectiveDate: "2007-08-01",
          renewalDate: "",
          caseManager: "",
          priorAuthNotes: "",
          notes: "Fictional sample data only."
        }
      ],
      medications: [
        {
          id: "med-1",
          name: "Metformin",
          status: "Active",
          dose: "500 mg",
          schedule: "Twice daily with meals",
          reason: "Type 2 diabetes",
          prescriber: "Dr. Koh",
          pharmacy: "Lakeview Pharmacy",
          startDate: "2023-04-12",
          stopDate: "",
          lastReviewed: "2026-05-02",
          changeReason: "",
          changeHistory: [
            {
              id: "history-1",
              date: "2026-05-02",
              summary: "Medication reviewed during primary care follow-up."
            }
          ],
          notes: "Monitor GI tolerance."
        },
        {
          id: "med-2",
          name: "Lisinopril",
          status: "Active",
          dose: "10 mg",
          schedule: "Every morning",
          reason: "Blood pressure",
          prescriber: "Dr. Alvarez",
          pharmacy: "Lakeview Pharmacy",
          startDate: "2021-10-01",
          stopDate: "",
          lastReviewed: "2026-05-02",
          changeReason: "",
          changeHistory: [
            {
              id: "history-2",
              date: "2026-05-02",
              summary: "Medication reviewed; continue current dose."
            }
          ],
          notes: "Track cough or dizziness."
        }
      ],
      vitals: [
        {
          id: "vital-1",
          date: "2026-05-01",
          time: "08:15",
          systolic: "138",
          diastolic: "78",
          bloodPressure: "138/78",
          pulse: "72",
          weight: "146",
          glucose: "128",
          oxygen: "97",
          pain: "2",
          notes: "Morning readings before breakfast."
        },
        {
          id: "vital-2",
          date: "2026-05-08",
          time: "08:20",
          systolic: "132",
          diastolic: "76",
          bloodPressure: "132/76",
          pulse: "70",
          weight: "145",
          glucose: "121",
          oxygen: "98",
          pain: "1",
          notes: "Felt steady, no dizziness."
        }
      ],
      careTeam: [
        {
          id: "care-1",
          name: "Dr. Lena Alvarez",
          role: "Primary care",
          organization: "Northside Family Medicine",
          phone: "(555) 012-1188",
          email: "office@example.test",
          address: "20 Northside Plaza",
          notes: "Daughter has HIPAA release on file."
        }
      ],
      visits: [
        {
          id: "visit-1",
          date: "2026-05-02",
          type: "Primary care",
          clinician: "Dr. Lena Alvarez",
          reason: "Medication review and blood pressure follow-up",
          outcome: "Continue current medications. Labs ordered.",
          followUp: "Schedule A1C and CMP within two weeks."
        }
      ],
      documents: [
        {
          id: "doc-1",
          title: "Advance directive",
          date: "2025-11-14",
          type: "Legal",
          source: "Family binder",
          notes: "Signed copy stored in fireproof box."
        }
      ],
      resources: [
        {
          id: "resource-1",
          type: "Preferred hospital",
          name: "Memorial Regional",
          phone: "(555) 013-9000",
          address: "900 Health Parkway",
          preference: "Use unless trauma center is required."
        }
      ],
      legal: [
        {
          id: "legal-1",
          type: "DNR/POLST",
          status: "Discussed, not signed",
          location: "Pending PCP appointment",
          contact: "Dana Ellis",
          notes: "Confirm wishes at next care conference."
        }
      ]
    },
    {
      id: "person-robert",
      demographics: {
        fullName: "Robert Ellis",
        dateOfBirth: "1939-03-05",
        sex: "Male",
        address: "1420 Alder Lane, Springfield",
        phone: "(555) 014-7281",
        emergencyContact: "Dana Ellis, daughter",
        emergencyContactPhone: "(555)-018-4400",
        allergies: "No known drug allergies",
        baseline: "Independent with most activities. Drives locally during daytime."
      },
      diagnoses: [
        {
          id: "condition-4",
          name: "Atrial fibrillation",
          status: "Active",
          onsetDate: "",
          clinician: "",
          notes: ""
        },
        {
          id: "condition-5",
          name: "Arthritis",
          status: "Active",
          onsetDate: "",
          clinician: "",
          notes: ""
        }
      ],
      procedures: [],
      immunizations: [],
      insurance: [],
      medications: [],
      vitals: [],
      careTeam: [],
      visits: [],
      documents: [],
      resources: [],
      legal: []
    }
  ]
};

let vaultMeta = readVaultMeta();
let state = loadState();
let activeTab = "overview";

const profileList = document.querySelector("#profileList");
const personName = document.querySelector("#personName");
const patientSummary = document.querySelector("#patientSummary");
const workspace = document.querySelector("#workspace");
const dialog = document.querySelector("#recordDialog");
const recordForm = document.querySelector("#recordForm");
const formFields = document.querySelector("#formFields");
const dialogTitle = document.querySelector("#dialogTitle");
const addPersonBtn = document.querySelector("#addPersonBtn");
const enableVaultBtn = document.querySelector("#enableVaultBtn");
const lockVaultBtn = document.querySelector("#lockVaultBtn");
const secureDocsBtn = document.querySelector("#secureDocsBtn");
const essentialIntakeBtn = document.querySelector("#essentialIntakeBtn");
const printReportBtn = document.querySelector("#printReportBtn");
const emergencyPacketBtn = document.querySelector("#emergencyPacketBtn");
const exportPersonBtn = document.querySelector("#exportPersonBtn");
const importPersonInput = document.querySelector("#importPersonInput");
const exportBackupBtn = document.querySelector("#exportBackupBtn");
const importBackupInput = document.querySelector("#importBackupInput");
const previewDialog = document.querySelector("#previewDialog");
const previewTitle = document.querySelector("#previewTitle");
const previewMeta = document.querySelector("#previewMeta");
const previewBody = document.querySelector("#previewBody");
const closePreviewBtn = document.querySelector("#closePreviewBtn");
const openPreviewBtn = document.querySelector("#openPreviewBtn");
const printPreviewBtn = document.querySelector("#printPreviewBtn");
const vaultScreen = document.querySelector("#vaultScreen");
const vaultForm = document.querySelector("#vaultForm");
const vaultTitle = document.querySelector("#vaultTitle");
const vaultMessage = document.querySelector("#vaultMessage");
const vaultPassword = document.querySelector("#vaultPassword");

let dbPromise;
let currentPreviewUrl = "";
let vaultKey = null;
let vaultUnlocked = !vaultMeta?.enabled;
let autoLockTimer = null;

function loadState() {
  if (vaultMeta?.enabled) {
    return normalizeState(structuredClone(starterData));
  }
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    const initialState = normalizeState(structuredClone(starterData));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialState));
    return initialState;
  }
  const parsedState = normalizeState(JSON.parse(stored));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(parsedState));
  return parsedState;
}

function saveState() {
  if (vaultMeta?.enabled && vaultUnlocked) {
    persistVaultState();
    return;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function readVaultMeta() {
  try {
    return JSON.parse(localStorage.getItem(VAULT_META_KEY) || "null");
  } catch {
    return null;
  }
}

function writeVaultMeta(meta) {
  vaultMeta = meta;
  localStorage.setItem(VAULT_META_KEY, JSON.stringify(meta));
}

async function putVaultRecord(record) {
  const store = await vaultStore("readwrite");
  return new Promise((resolve, reject) => {
    const request = store.put(record);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

async function getVaultRecord(id) {
  const store = await vaultStore();
  return new Promise((resolve, reject) => {
    const request = store.get(id);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
}

async function persistVaultState() {
  if (!vaultKey) return;
  const encrypted = await encryptJson({ state, savedAt: new Date().toISOString() }, vaultKey);
  await putVaultRecord({ id: VAULT_STATE_ID, ...encrypted });
  localStorage.removeItem(STORAGE_KEY);
}

function isPhoneField(name) {
  return /phone/i.test(name);
}

function formatPhoneNumber(value) {
  const digits = String(value || "").replace(/\D/g, "").slice(0, 10);
  if (!digits) return "";
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)})-${digits.slice(3)}`;
  return `(${digits.slice(0, 3)})-${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function formatPhoneFields(record = {}) {
  Object.keys(record).forEach((key) => {
    if (isPhoneField(key)) record[key] = formatPhoneNumber(record[key]);
  });
  return record;
}

function normalizeState(candidate) {
  const nextState = candidate && Array.isArray(candidate.people) ? candidate : structuredClone(starterData);
  nextState.people.forEach((person) => {
    person.demographics = person.demographics || {};
    formatPhoneFields(person.demographics);
    person.diagnoses = normalizeDiagnoses(person.diagnoses);
    person.procedures = normalizeProcedures(person.procedures);
    person.immunizations = normalizeImmunizations(person.immunizations);
    person.medications = normalizeMedications(person.medications);
    person.vitals = normalizeVitals(person.vitals);
    person.careTeam = (person.careTeam || []).map(formatPhoneFields);
    person.visits = person.visits || [];
    person.documents = person.documents || [];
    person.insurance = (person.insurance || []).map(formatPhoneFields);
    person.resources = (person.resources || []).map(formatPhoneFields);
    person.legal = person.legal || [];
  });
  nextState.activePersonId = nextState.activePersonId || nextState.people[0]?.id || "";
  return nextState;
}

function normalizeMedications(medications = []) {
  return medications.map((medication) => {
    const lastReviewed = medication.lastReviewed || medication.startDate || "";
    const changeHistory = Array.isArray(medication.changeHistory) && medication.changeHistory.length
      ? medication.changeHistory
      : [{
        id: `history-${crypto.randomUUID()}`,
        date: lastReviewed || new Date().toISOString().slice(0, 10),
        summary: "Medication record initialized for tracking."
      }];
    return {
      ...medication,
      status: medication.status === "Paused" ? "On Hold" : medication.status || "Active",
      stopDate: medication.stopDate || "",
      lastReviewed,
      changeReason: medication.changeReason || "",
      changeHistory
    };
  });
}

function normalizeVitals(vitals = []) {
  return vitals.map((vital) => ({
    ...vital,
    bloodPressure: vital.bloodPressure || (vital.systolic && vital.diastolic ? `${vital.systolic}/${vital.diastolic}` : "")
  }));
}

function normalizeProcedures(procedures = []) {
  return procedures.map((procedure) => ({
    ...procedure,
    bodyArea: procedure.bodyArea || procedure.location || ""
  }));
}

function normalizeImmunizations(immunizations = []) {
  return immunizations.map((immunization) => ({
    ...immunization,
    bodyArea: immunization.bodyArea || immunization.location || ""
  }));
}

function normalizeDiagnoses(diagnoses = []) {
  return diagnoses.map((diagnosis, index) => {
    if (typeof diagnosis === "string") {
      return {
        id: `condition-${crypto.randomUUID()}`,
        name: diagnosis,
        status: "Active",
        onsetDate: "",
        clinician: "",
        notes: ""
      };
    }
    return {
      id: diagnosis.id || `condition-${index}-${crypto.randomUUID()}`,
      name: diagnosis.name || diagnosis.condition || diagnosis.title || "",
      status: diagnosis.status || "",
      onsetDate: diagnosis.onsetDate || diagnosis.date || "",
      clinician: diagnosis.clinician || "",
      notes: diagnosis.notes || ""
    };
  });
}

function openFileDb() {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(FILE_STORE)) {
        db.createObjectStore(FILE_STORE, { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains(VAULT_STORE)) {
        db.createObjectStore(VAULT_STORE, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  return dbPromise;
}

async function fileStore(mode = "readonly") {
  const db = await openFileDb();
  return db.transaction(FILE_STORE, mode).objectStore(FILE_STORE);
}

async function vaultStore(mode = "readonly") {
  const db = await openFileDb();
  return db.transaction(VAULT_STORE, mode).objectStore(VAULT_STORE);
}

async function putStoredFile(fileRecord) {
  const store = await fileStore("readwrite");
  const nextRecord = await prepareFileForStorage(fileRecord);
  return new Promise((resolve, reject) => {
    const request = store.put(nextRecord);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

async function deleteStoredFile(id) {
  if (!id) return;
  const store = await fileStore("readwrite");
  return new Promise((resolve, reject) => {
    const request = store.delete(id);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

async function getStoredFile(id) {
  if (!id) return null;
  const store = await fileStore();
  return new Promise((resolve, reject) => {
    const request = store.get(id);
    request.onsuccess = async () => {
      try {
        resolve(request.result ? await restoreStoredFile(request.result) : null);
      } catch (error) {
        reject(error);
      }
    };
    request.onerror = () => reject(request.error);
  });
}

async function getAllStoredFiles() {
  const store = await fileStore();
  return new Promise((resolve, reject) => {
    const request = store.getAll();
    request.onsuccess = async () => {
      try {
        resolve(await Promise.all((request.result || []).map(restoreStoredFile)));
      } catch (error) {
        reject(error);
      }
    };
    request.onerror = () => reject(request.error);
  });
}

async function clearStoredFiles() {
  const store = await fileStore("readwrite");
  return new Promise((resolve, reject) => {
    const request = store.clear();
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

async function getRawStoredFiles() {
  const store = await fileStore();
  return new Promise((resolve, reject) => {
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
}

async function prepareFileForStorage(fileRecord) {
  if (!vaultMeta?.enabled || !vaultUnlocked || !vaultKey) return fileRecord;
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encryptedBuffer = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, vaultKey, await fileRecord.blob.arrayBuffer());
  return {
    ...fileRecord,
    encrypted: true,
    iv: toBase64(iv),
    blob: new Blob([encryptedBuffer], { type: "application/octet-stream" })
  };
}

async function restoreStoredFile(fileRecord) {
  if (!fileRecord.encrypted) return fileRecord;
  if (!vaultKey) throw new Error("Vault is locked.");
  const decryptedBuffer = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: fromBase64(fileRecord.iv) },
    vaultKey,
    await fileRecord.blob.arrayBuffer()
  );
  return {
    ...fileRecord,
    blob: new Blob([decryptedBuffer], { type: fileRecord.type || "application/octet-stream" })
  };
}

function activePerson() {
  return state.people.find((person) => person.id === state.activePersonId) || state.people[0];
}

function render() {
  const person = activePerson();
  if (!person) return;
  personName.textContent = person.demographics.fullName || "Unnamed profile";
  renderProfiles();
  renderSummary(person);
  if (activeTab === "intake") {
    renderIntakeWorkspace(person);
  } else if (activeTab === "emergency") {
    renderEmergencyPacket(person);
  } else {
    renderWorkspace(person);
  }
}

function renderProfiles() {
  profileList.innerHTML = "";
  state.people.forEach((person) => {
    const button = document.createElement("button");
    button.className = `profile-button ${person.id === state.activePersonId ? "is-active" : ""}`;
    button.type = "button";
    button.innerHTML = `<strong>${escapeHtml(person.demographics.fullName || "Unnamed profile")}</strong><span>${escapeHtml(ageLine(person.demographics.dateOfBirth, person.demographics.sex))}</span>`;
    button.addEventListener("click", () => {
      state.activePersonId = person.id;
      saveState();
      render();
    });
    profileList.appendChild(button);
  });
}

function renderSummary(person) {
  const meds = person.medications.filter((medication) => (medication.status || "Active") === "Active").length;
  const visits = person.visits.length;
  const docs = person.documents.length;
  const legalStatus = person.legal.find((item) => /dnr|polst|molst/i.test(item.type || ""))?.status || "Not recorded";
  const diagnoses = person.diagnoses.map(conditionName).filter(Boolean);
  patientSummary.innerHTML = `
    <article class="summary-tile"><span>Date of birth</span><b>${escapeHtml(formatDate(person.demographics.dateOfBirth))}</b></article>
    <article class="summary-tile"><span>Active meds</span><b>${meds}</b></article>
    <article class="summary-tile"><span>Visits</span><b>${visits}</b></article>
    <article class="summary-tile"><span>DNR/POLST</span><b>${escapeHtml(legalStatus)}</b></article>
    <article class="summary-tile"><span>Allergies</span><b>${escapeHtml(person.demographics.allergies || "None recorded")}</b></article>
    <article class="summary-tile"><span>Emergency contact</span><b>${escapeHtml(formatEmergencyContact(person) || "Not recorded")}</b></article>
    <article class="summary-tile"><span>Documents</span><b>${docs}</b></article>
    <article class="summary-tile"><span>Diagnosis</span><b>${escapeHtml(diagnoses.join(", ") || "None recorded")}</b></article>
  `;
}

function renderWorkspace(person) {
  releaseWorkspaceObjectUrls();
  const config = sectionConfig[activeTab];
  if (activeTab === "vitals") {
    renderVitalsWorkspace(person, config);
    return;
  }
  const records = activeTab === "overview" ? [person.demographics] : person[config.collection] || [];
  workspace.innerHTML = `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h3>${config.title}</h3>
          <p class="record-meta">${activeTab === "overview" ? "Core demographics, allergies, emergency context, and baseline status." : `${records.length} record${records.length === 1 ? "" : "s"} stored locally in this browser.`}</p>
        </div>
        <button class="primary-action" data-action="add-record" type="button">${config.addLabel}</button>
      </div>
      ${renderRecords(person, config, records)}
    </section>
  `;
  workspace.querySelector("[data-action='add-record']").addEventListener("click", () => openRecordDialog(activeTab));
  hydrateDocumentPreviews();
}

function releaseWorkspaceObjectUrls() {
  workspace.querySelectorAll("[data-object-url]").forEach((node) => {
    URL.revokeObjectURL(node.dataset.objectUrl);
  });
}

function renderRecords(person, config, records) {
  if (activeTab === "overview") {
    return `
      ${renderEssentialPanel(person, "compact")}
      <div class="record-grid">
        <article class="record-card"><h4>Baseline</h4><p>${escapeHtml(person.demographics.baseline || "Not recorded")}</p></article>
        <article class="record-card"><h4>Address</h4><p>${escapeHtml(person.demographics.address || "Not recorded")}</p></article>
        <article class="record-card"><h4>Phone</h4><p>${escapeHtml(person.demographics.phone || "Not recorded")}</p></article>
        <article class="record-card"><h4>Emergency contact</h4><p>${escapeHtml(formatEmergencyContact(person) || "Not recorded")}</p></article>
        <article class="record-card"><h4>Diagnosis</h4><p>${escapeHtml((person.diagnoses || []).map(conditionName).filter(Boolean).join(", ") || "Not recorded")}</p></article>
      </div>`;
  }

  if (!records.length) {
    return `<div class="empty-state">No ${config.title.toLowerCase()} records yet. Add the first one when you are ready.</div>`;
  }

  return `<div class="record-grid">${records.map((record) => recordCard(record, config.collection)).join("")}</div>`;
}

function renderVitalsWorkspace(person, config) {
  const records = [...(person.vitals || [])].sort((a, b) => vitalTimestamp(b) - vitalTimestamp(a));
  workspace.innerHTML = `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h3>${config.title}</h3>
          <p class="record-meta">${records.length} vital entr${records.length === 1 ? "y" : "ies"} stored locally in this browser.</p>
        </div>
        <button class="primary-action" data-action="add-record" type="button">${config.addLabel}</button>
      </div>
      ${renderTrendDashboard(records)}
      ${records.length ? `<div class="record-grid">${records.map((record) => recordCard(record, "vitals")).join("")}</div>` : `<div class="empty-state">No vitals yet. Add blood pressure, pulse, glucose, weight, oxygen, pain, and notes when you have them.</div>`}
    </section>
  `;
  workspace.querySelector("[data-action='add-record']").addEventListener("click", () => openRecordDialog(activeTab));
}

function renderTrendDashboard(records) {
  const trendItems = [
    ["Blood pressure", "bloodPressure", bloodPressureSystolic, "mmHg", (record) => bpValue(record)],
    ["Pulse", "pulse", (record) => record.pulse, "bpm"],
    ["Weight", "weight", (record) => record.weight, "lb"],
    ["Glucose", "glucose", (record) => record.glucose, "mg/dL"],
    ["Oxygen", "oxygen", (record) => record.oxygen, "%"],
    ["Pain", "pain", (record) => record.pain, "/10"]
  ];
  return `
    <div class="trend-grid">
      ${trendItems.map(([label, key, accessor, unit, displayAccessor]) => renderTrendCard(label, key, records, accessor, unit, displayAccessor)).join("")}
    </div>`;
}

function renderIntakeWorkspace(person) {
  releaseWorkspaceObjectUrls();
  workspace.innerHTML = `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h3>Essential intake</h3>
          <p class="record-meta">Collect the few details most likely to matter in an appointment, ER visit, or caregiver handoff.</p>
        </div>
        <button class="primary-action" data-action="print-emergency-packet" type="button">Print emergency packet</button>
      </div>
      ${renderEssentialPanel(person, "full")}
    </section>
  `;
}

function renderEssentialPanel(person, mode = "compact") {
  const items = essentialItems(person);
  const complete = items.filter((item) => item.complete).length;
  const percent = Math.round((complete / items.length) * 100);
  const remaining = items.length - complete;
  const visibleItems = mode === "compact" ? items.slice(0, 6) : items;
  return `
    <section class="essentials ${mode === "full" ? "full" : ""}">
      <div class="essentials-header">
        <div>
          <p class="eyebrow">Care readiness</p>
          <h4>${percent}% complete</h4>
          <p class="record-meta">${remaining ? `${remaining} essential item${remaining === 1 ? "" : "s"} still need attention.` : "The core emergency handoff data is ready."}</p>
        </div>
        <div class="progress-ring" aria-label="${percent}% complete">
          <span>${percent}%</span>
        </div>
      </div>
      <div class="essential-list">
        ${visibleItems.map(renderEssentialItem).join("")}
      </div>
      ${mode === "compact" ? `<button class="mini-button" data-action="open-intake" type="button">Review all essential items</button>` : ""}
    </section>`;
}

function renderEssentialItem(item) {
  return `
    <article class="essential-item ${item.complete ? "done" : ""}">
      <div class="status-dot" aria-hidden="true"></div>
      <div>
        <h5>${escapeHtml(item.label)}</h5>
        <p>${escapeHtml(item.detail)}</p>
      </div>
      <button class="mini-button" data-action="${escapeHtml(item.action)}" data-tab="${escapeHtml(item.tab)}" type="button">${escapeHtml(item.complete ? "Review" : "Add")}</button>
    </article>`;
}

function essentialItems(person) {
  const demographics = person.demographics || {};
  const activeMeds = person.medications.filter((med) => (med.status || "Active") === "Active");
  const dnr = person.legal.find((item) => /dnr|polst|molst/i.test(item.type || ""));
  const primaryCare = person.careTeam.find((care) => /primary|pcp|family/i.test(`${care.role} ${care.notes}`)) || person.careTeam[0];
  const hospital = person.resources.find((resource) => /hospital/i.test(resource.type || ""));
  const pharmacy = person.resources.find((resource) => /pharmacy/i.test(`${resource.type} ${resource.name}`)) || activeMeds.find((med) => med.pharmacy);
  const keyDocument = person.documents.find((doc) => /advance|directive|dnr|polst|insurance|medicare|medicaid/i.test(`${doc.title} ${doc.type}`));
  const latestVital = [...(person.vitals || [])].sort((a, b) => vitalTimestamp(b) - vitalTimestamp(a))[0];
  return [
    {
      label: "Identity and emergency contact",
      complete: Boolean(demographics.fullName && demographics.dateOfBirth && demographics.emergencyContact && demographics.emergencyContactPhone),
      detail: formatEmergencyContact(person) || "Name, birth date, emergency contact, and contact phone are the first handoff basics.",
      action: "edit-overview",
      tab: "overview"
    },
    {
      label: "Allergies and baseline status",
      complete: Boolean(demographics.allergies && demographics.baseline),
      detail: demographics.allergies && demographics.baseline ? "Allergies and normal baseline are recorded." : "Record allergies and what normal looks like for this person.",
      action: "edit-overview",
      tab: "overview"
    },
    {
      label: "Current medications",
      complete: activeMeds.length > 0,
      detail: activeMeds.length ? `${activeMeds.length} active medication${activeMeds.length === 1 ? "" : "s"} recorded.` : "Add active meds with dose, schedule, reason, and prescriber.",
      action: "add-section-record",
      tab: "medications"
    },
    {
      label: "Diagnosis",
      complete: person.diagnoses.length > 0,
      detail: person.diagnoses.length ? `${person.diagnoses.length} diagnosis record${person.diagnoses.length === 1 ? "" : "s"} recorded.` : "Add active diagnoses and who manages them.",
      action: "add-section-record",
      tab: "conditions"
    },
    {
      label: "Prior surgeries/procedures",
      complete: person.procedures.length > 0,
      detail: person.procedures.length ? `${person.procedures.length} surgery/procedure record${person.procedures.length === 1 ? "" : "s"} added.` : "Add prior surgeries, procedures, dates, and body areas.",
      action: "add-section-record",
      tab: "procedures"
    },
    {
      label: "Immunizations",
      complete: person.immunizations.length > 0,
      detail: person.immunizations.length ? `${person.immunizations.length} immunization record${person.immunizations.length === 1 ? "" : "s"} added.` : "Add flu, COVID, pneumonia, shingles, tetanus, and other immunization dates.",
      action: "add-section-record",
      tab: "immunizations"
    },
    {
      label: "Insurance coverage",
      complete: person.insurance.length > 0,
      detail: person.insurance.length ? `${person.insurance.length} insurance record${person.insurance.length === 1 ? "" : "s"} added.` : "Add Medicare, Medicaid, supplemental, commercial, prescription, dental, or vision coverage.",
      action: "add-section-record",
      tab: "insurance"
    },
    {
      label: "Primary doctor or care team",
      complete: Boolean(primaryCare),
      detail: primaryCare ? `${primaryCare.name || "Care team member"}${primaryCare.phone ? `, ${primaryCare.phone}` : ""}` : "Add primary care, specialists, and key phone numbers.",
      action: "add-section-record",
      tab: "care"
    },
    {
      label: "DNR/POLST and legal wishes",
      complete: Boolean(dnr),
      detail: dnr ? `${dnr.type || "Directive"}: ${dnr.status || "recorded"}` : "Record whether DNR/POLST/advance directive exists and where it is stored.",
      action: "add-section-record",
      tab: "legal"
    },
    {
      label: "Preferred hospital and pharmacy",
      complete: Boolean(hospital && pharmacy),
      detail: hospital || pharmacy ? [hospital?.name, pharmacy?.name || pharmacy?.pharmacy].filter(Boolean).join(" / ") : "Add preferred hospital and pharmacy.",
      action: "add-section-record",
      tab: "resources"
    },
    {
      label: "Key documents",
      complete: Boolean(keyDocument),
      detail: keyDocument ? keyDocument.title || keyDocument.type : "Scan advance directive, insurance card, medication list, or recent visit paperwork.",
      action: "add-section-record",
      tab: "documents"
    },
    {
      label: "Recent vitals",
      complete: Boolean(latestVital),
      detail: latestVital ? `${formatDate(latestVital.date)} ${vitalSubtitle(latestVital)}` : "Add recent BP, pulse, weight, glucose, oxygen, pain, or notes.",
      action: "add-section-record",
      tab: "vitals"
    }
  ];
}

function renderTrendCard(label, key, records, accessor, unit, displayAccessor) {
  const points = records
    .slice()
    .reverse()
    .map((record) => ({ date: record.date, record, value: Number(accessor(record)) }))
    .filter((point) => Number.isFinite(point.value));
  const latest = points.at(-1);
  const previous = points.at(-2);
  const delta = latest && previous ? latest.value - previous.value : 0;
  const deltaText = latest && previous ? `${delta > 0 ? "+" : ""}${formatTrendNumber(delta)} since prior` : "No prior value";
  const displayValue = latest && displayAccessor ? displayAccessor(latest.record) : latest ? formatTrendNumber(latest.value) : "";
  return `
    <article class="trend-card">
      <span>${escapeHtml(label)}</span>
      <b>${latest ? `${escapeHtml(displayValue)} ${escapeHtml(unit)}` : "Not recorded"}</b>
      <div class="sparkline" aria-label="${escapeHtml(label)} trend">${renderSparkline(points, key)}</div>
      <p class="record-meta">${escapeHtml(deltaText)}</p>
    </article>`;
}

function renderSparkline(points, key) {
  if (points.length < 2) return `<div class="sparkline-empty">Add more readings</div>`;
  const values = points.map((point) => point.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const coordinates = points.map((point, index) => {
    const x = points.length === 1 ? 0 : (index / (points.length - 1)) * 100;
    const y = 34 - ((point.value - min) / range) * 28;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  return `<svg viewBox="0 0 100 40" role="img" focusable="false"><polyline class="sparkline-path ${escapeHtml(key)}" points="${coordinates}" /></svg>`;
}

function recordCard(record, collection) {
  const title = record.name || record.title || record.type || record.date || "Untitled record";
  const subtitle = collection === "vitals" ? vitalSubtitle(record) : procedureSubtitle(record, collection) || immunizationSubtitle(record, collection) || insuranceSubtitle(record, collection) || record.role || record.dose || record.status || record.clinician || record.source || record.phone || "";
  const body = collection === "medications" ? medicationBody(record) : record.notes || record.reason || record.outcome || record.preference || record.address || record.location || "";
  const date = record.date || record.startDate || record.onsetDate || "";
  const fileInfo = collection === "documents" && record.fileId
    ? `
      <div class="document-preview" data-thumbnail-id="${escapeHtml(record.fileId)}">
        <div class="document-placeholder">${escapeHtml(fileTypeLabel(record.fileType))}</div>
      </div>
      <button class="file-link" data-action="preview-file" data-file-id="${escapeHtml(record.fileId)}" type="button">Preview ${escapeHtml(record.fileName || "file")}</button>
      <span class="record-meta">${escapeHtml(formatBytes(record.fileSize))}</span>`
    : "";
  return `
    <article class="record-card">
      <div class="badge-row">
        ${date ? `<span class="badge">${escapeHtml(formatDate(date))}</span>` : ""}
        <span class="badge ${collection === "legal" ? "warn" : ""}">${escapeHtml(collectionLabel(collection))}</span>
      </div>
      <h4>${escapeHtml(title)}</h4>
      ${subtitle ? `<p class="record-meta">${escapeHtml(subtitle)}</p>` : ""}
      ${body ? `<p>${escapeHtml(body)}</p>` : ""}
      ${collection === "medications" ? renderMedicationHistory(record) : ""}
      ${fileInfo}
      <div class="record-actions">
        <button class="mini-button" data-action="edit-record" data-collection="${escapeHtml(collection)}" data-record-id="${escapeHtml(record.id)}" type="button">Edit</button>
        <button class="mini-button danger" data-action="delete-record" data-collection="${escapeHtml(collection)}" data-record-id="${escapeHtml(record.id)}" type="button">Delete</button>
      </div>
    </article>`;
}

function collectionLabel(collection) {
  return {
    medications: "Medication",
    vitals: "Vital",
    diagnoses: "Diagnosis",
    procedures: "Procedure",
    immunizations: "Immunization",
    insurance: "Insurance",
    careTeam: "Care team",
    visits: "Visit",
    documents: "Document",
    resources: "Resource",
    legal: "Directive"
  }[collection] || "Record";
}

function medicationBody(record) {
  const pieces = [
    record.schedule,
    record.reason ? `For ${record.reason}` : "",
    record.prescriber ? `Prescriber: ${record.prescriber}` : "",
    record.lastReviewed ? `Reviewed ${formatDate(record.lastReviewed)}` : "",
    record.stopDate ? `Stopped ${formatDate(record.stopDate)}` : "",
    record.notes
  ].filter(Boolean);
  return pieces.join(" | ");
}

function renderMedicationHistory(record) {
  const history = Array.isArray(record.changeHistory) ? record.changeHistory.slice(0, 3) : [];
  if (!history.length) return "";
  return `
    <details class="history">
      <summary>Change history</summary>
      <ul>
        ${history.map((item) => `<li><b>${escapeHtml(formatDate(item.date))}</b> ${escapeHtml(item.summary)}</li>`).join("")}
      </ul>
    </details>`;
}

function vitalSubtitle(record) {
  return [
    bpValue(record) ? `BP ${bpValue(record)}` : "",
    record.pulse ? `Pulse ${record.pulse}` : "",
    record.weight ? `Weight ${record.weight}` : "",
    record.glucose ? `Glucose ${record.glucose}` : "",
    record.oxygen ? `O2 ${record.oxygen}%` : "",
    record.pain ? `Pain ${record.pain}/10` : ""
  ].filter(Boolean).join(" | ");
}

function procedureSubtitle(record, collection) {
  if (collection !== "procedures") return "";
  return [
    record.facility,
    record.bodyArea || record.location,
    record.clinician
  ].filter(Boolean).join(" | ");
}

function immunizationSubtitle(record, collection) {
  if (collection !== "immunizations") return "";
  return [
    record.provider,
    record.bodyArea || record.location,
    record.nextDue ? `Next due ${formatDate(record.nextDue)}` : ""
  ].filter(Boolean).join(" | ");
}

function insuranceSubtitle(record, collection) {
  if (collection !== "insurance") return "";
  return [
    record.planName,
    record.memberId ? `ID ${record.memberId}` : "",
    record.phone
  ].filter(Boolean).join(" | ");
}

function formatEmergencyContact(person) {
  const demographics = person.demographics || {};
  return [demographics.emergencyContact, demographics.emergencyContactPhone].filter(Boolean).join(", ");
}

function openRecordDialog(tab, recordId = "") {
  const config = sectionConfig[tab];
  const person = activePerson();
  const existingRecord = recordId ? person[config.collection]?.find((record) => record.id === recordId) : null;
  dialogTitle.textContent = existingRecord ? `Edit ${collectionLabel(config.collection).toLowerCase()}` : config.addLabel;
  formFields.innerHTML = "";
  config.fields.forEach(([name, label, type = "text"]) => {
    const field = document.createElement("label");
    field.className = `field ${type === "textarea" ? "full" : ""}`;
    field.innerHTML = `<span class="field-label">${label}</span>${fieldControl(name, type, tab)}`;
    formFields.appendChild(field);
  });

  if (tab === "overview") {
    config.fields.forEach(([name]) => {
      const input = formFields.querySelector(`[name="${name}"]`);
      input.value = isPhoneField(name) ? formatPhoneNumber(person.demographics[name] || "") : person.demographics[name] || "";
    });
  } else if (existingRecord) {
    config.fields.forEach(([name, , type = "text"]) => {
      if (type === "file") return;
      const input = formFields.querySelector(`[name="${name}"]`);
      input.value = isPhoneField(name) ? formatPhoneNumber(existingRecord[name] || "") : existingRecord[name] || "";
    });
    if (tab === "documents" && existingRecord.fileName) {
      const fileInput = formFields.querySelector(`[name="file"]`);
      fileInput.insertAdjacentHTML(
        "afterend",
        `<span class="record-meta">Current file: ${escapeHtml(existingRecord.fileName)}. Choose a new file only if replacing it.</span>`
      );
    }
  }

  recordForm.dataset.tab = tab;
  recordForm.dataset.recordId = recordId;
  dialog.showModal();
}

function fieldControl(name, type, tab) {
  const options = selectOptions[tab]?.[name] || [];
  if (type === "select" && options.length) {
    return `<select name="${name}">${options.map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`).join("")}</select>`;
  }
  if (type === "textarea") return `<textarea name="${name}"></textarea>`;
  if (type === "file") return `<input name="${name}" type="file" accept="image/*,application/pdf" capture="environment" />`;
  if (isPhoneField(name)) return `<input name="${name}" type="tel" inputmode="numeric" autocomplete="tel" data-phone-field="true" />`;
  return `<input name="${name}" type="${type === "select" ? "text" : type}" />`;
}

recordForm.addEventListener("input", (event) => {
  const input = event.target.closest("[data-phone-field='true']");
  if (!input) return;
  input.value = formatPhoneNumber(input.value);
});

recordForm.addEventListener("submit", async (event) => {
  if (event.submitter?.value === "cancel") return;
  event.preventDefault();
  const tab = recordForm.dataset.tab;
  const recordId = recordForm.dataset.recordId;
  const config = sectionConfig[tab];
  const person = activePerson();
  const formData = new FormData(recordForm);
  const record = Object.fromEntries(formData.entries());
  delete record.file;
  formatPhoneFields(record);

  if (tab === "overview") {
    person.demographics = { ...person.demographics, ...record };
  } else {
    const existingRecord = recordId ? person[config.collection].find((item) => item.id === recordId) : null;
    const nextRecord = existingRecord ? { ...existingRecord, ...record } : { ...record, id: `${config.collection}-${crypto.randomUUID()}` };
    if (tab === "medications") {
      nextRecord.status = nextRecord.status || "Active";
      nextRecord.changeHistory = medicationChangeHistory(existingRecord, nextRecord);
      nextRecord.changeReason = "";
    }
    if (tab === "documents") {
      const file = formData.get("file");
      if (file && file.size > 0) {
        if (existingRecord?.fileId) await deleteStoredFile(existingRecord.fileId);
        nextRecord.fileId = `file-${crypto.randomUUID()}`;
        nextRecord.fileName = file.name;
        nextRecord.fileType = file.type || "application/octet-stream";
        nextRecord.fileSize = file.size;
        nextRecord.capturedAt = new Date().toISOString();
        await putStoredFile({
          id: nextRecord.fileId,
          personId: person.id,
          documentId: nextRecord.id,
          name: file.name,
          type: nextRecord.fileType,
          size: file.size,
          blob: file,
          createdAt: nextRecord.capturedAt
        });
      }
    }
    if (existingRecord) {
      person[config.collection] = person[config.collection].map((item) => (item.id === recordId ? nextRecord : item));
    } else {
      person[config.collection].unshift(nextRecord);
    }
  }

  saveState();
  dialog.close();
  render();
});

document.querySelector(".tabs").addEventListener("click", (event) => {
  const tab = event.target.closest(".tab");
  if (!tab) return;
  const nextTab = tab.dataset.tab;
  if (!sectionConfig[nextTab]) {
    workspace.innerHTML = `<section class="panel"><div class="empty-state">This section is not available in the loaded app script. Refresh the page and try again.</div></section>`;
    return;
  }
  activeTab = nextTab;
  setActiveTabButton(activeTab);
  renderWorkspace(activePerson());
});

function setActiveTabButton(tabName) {
  document.querySelectorAll(".tab").forEach((item) => item.classList.toggle("is-active", item.dataset.tab === tabName));
}

addPersonBtn.addEventListener("click", () => {
  const fullName = prompt("Profile name");
  if (!fullName) return;
  const person = {
    id: `person-${crypto.randomUUID()}`,
    demographics: { fullName, dateOfBirth: "", sex: "", address: "", phone: "", emergencyContact: "", emergencyContactPhone: "", allergies: "", baseline: "" },
    diagnoses: [],
    medications: [],
    vitals: [],
    procedures: [],
    immunizations: [],
    insurance: [],
    careTeam: [],
    visits: [],
    documents: [],
    resources: [],
    legal: []
  };
  state.people.push(person);
  state.activePersonId = person.id;
  saveState();
  render();
});

enableVaultBtn.addEventListener("click", enableDevelopmentVault);
lockVaultBtn.addEventListener("click", lockVault);
secureDocsBtn.addEventListener("click", secureExistingDocuments);
vaultForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await unlockVault(vaultPassword.value);
});

["click", "keydown", "pointerdown", "input"].forEach((eventName) => {
  window.addEventListener(eventName, resetAutoLockTimer, { passive: true });
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden && vaultMeta?.enabled && vaultUnlocked) {
    lockVault("Vault locked because the app went into the background.");
  }
});

printReportBtn.addEventListener("click", () => window.print());
essentialIntakeBtn.addEventListener("click", () => {
  activeTab = "intake";
  document.querySelectorAll(".tab").forEach((item) => item.classList.remove("is-active"));
  renderIntakeWorkspace(activePerson());
});
emergencyPacketBtn.addEventListener("click", () => {
  activeTab = "emergency";
  document.querySelectorAll(".tab").forEach((item) => item.classList.remove("is-active"));
  renderEmergencyPacket(activePerson());
});
exportPersonBtn.addEventListener("click", exportEncryptedPerson);
importPersonInput.addEventListener("change", importEncryptedPerson);
exportBackupBtn.addEventListener("click", exportEncryptedBackup);
importBackupInput.addEventListener("change", importEncryptedBackup);
workspace.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const { action, collection, recordId, fileId } = button.dataset;

  if (action === "preview-file") {
    await openDocumentPreview(fileId);
  }

  if (action === "edit-record") {
    const tab = tabForCollection(collection);
    if (tab) openRecordDialog(tab, recordId);
  }

  if (action === "delete-record") {
    await deleteRecord(collection, recordId);
  }

  if (action === "open-intake") {
    activeTab = "intake";
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("is-active"));
    renderIntakeWorkspace(activePerson());
  }

  if (action === "edit-overview") {
    activeTab = "overview";
    setActiveTabButton("overview");
    renderWorkspace(activePerson());
    openRecordDialog("overview");
  }

  if (action === "add-section-record") {
    const targetTab = button.dataset.tab;
    activeTab = targetTab;
    setActiveTabButton(targetTab);
    renderWorkspace(activePerson());
    openRecordDialog(targetTab);
  }

  if (action === "print-emergency-packet") {
    activeTab = "emergency";
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("is-active"));
    renderEmergencyPacket(activePerson());
    window.print();
  }
});

async function deleteRecord(collection, recordId) {
  const person = activePerson();
  const record = person[collection]?.find((item) => item.id === recordId);
  if (!record) return;
  const title = record.name || record.title || record.type || "this record";
  const confirmed = confirm(`Delete ${title}? This cannot be undone.`);
  if (!confirmed) return;
  if (collection === "documents" && record.fileId) {
    await deleteStoredFile(record.fileId);
  }
  person[collection] = person[collection].filter((item) => item.id !== recordId);
  saveState();
  render();
}

function tabForCollection(collection) {
  return Object.entries(sectionConfig).find(([, config]) => config.collection === collection)?.[0] || "";
}

function medicationChangeHistory(existingRecord, nextRecord) {
  const history = Array.isArray(existingRecord?.changeHistory) ? [...existingRecord.changeHistory] : [];
  const today = new Date().toISOString().slice(0, 10);
  const changes = [];
  if (!existingRecord) {
    changes.push("Medication added.");
  } else {
    ["status", "dose", "schedule", "prescriber", "pharmacy", "stopDate"].forEach((field) => {
      if ((existingRecord[field] || "") !== (nextRecord[field] || "")) {
        changes.push(`${fieldLabel(field)} changed from "${existingRecord[field] || "blank"}" to "${nextRecord[field] || "blank"}".`);
      }
    });
  }
  if (nextRecord.changeReason) changes.push(`Reason: ${nextRecord.changeReason}.`);
  if (!changes.length) changes.push("Medication reviewed with no major field changes.");
  return [
    {
      id: `history-${crypto.randomUUID()}`,
      date: nextRecord.lastReviewed || today,
      summary: changes.join(" ")
    },
    ...history
  ].slice(0, 12);
}

function fieldLabel(field) {
  return {
    stopDate: "stop date"
  }[field] || field;
}

async function initializeApp() {
  await openFileDb();
  updateVaultUi();
  if (vaultMeta?.enabled) {
    showVaultScreen("Unlock PersonalChart", "Enter the local vault password to decrypt this device's records.");
    return;
  }
  hideVaultScreen();
  render();
}

async function enableDevelopmentVault() {
  if (vaultMeta?.enabled) return;
  const password = prompt("Create a local vault password. This password cannot be recovered if forgotten.");
  if (!password) return;
  if (password.length < 8) {
    alert("Use at least 8 characters for this development vault password.");
    return;
  }
  const confirmation = prompt("Confirm the local vault password.");
  if (password !== confirmation) {
    alert("Passwords did not match. Vault was not enabled.");
    return;
  }
  const salt = crypto.getRandomValues(new Uint8Array(16));
  vaultKey = await deriveKey(password, salt);
  writeVaultMeta({
    enabled: true,
    createdAt: new Date().toISOString(),
    kdf: "PBKDF2-SHA256-250000",
    cipher: "AES-GCM",
    salt: toBase64(salt)
  });
  vaultUnlocked = true;
  await persistVaultState();
  hideVaultScreen();
  updateVaultUi();
  resetAutoLockTimer();
  alert("Development vault enabled. App records are now saved encrypted in IndexedDB on this device.");
}

async function unlockVault(password) {
  if (!password || !vaultMeta?.enabled) return;
  try {
    vaultKey = await deriveKey(password, fromBase64(vaultMeta.salt));
    const record = await getVaultRecord(VAULT_STATE_ID);
    if (!record) {
      throw new Error("Vault data was not found.");
    }
    const payload = await decryptJson(record, vaultKey);
    state = normalizeState(payload.state);
    vaultUnlocked = true;
    vaultPassword.value = "";
    hideVaultScreen();
    updateVaultUi();
    resetAutoLockTimer();
    render();
  } catch (error) {
    vaultKey = null;
    vaultUnlocked = false;
    vaultMessage.textContent = "Unlock failed. Check the password and try again.";
  }
}

function lockVault(message = "Enter the local vault password to continue.") {
  if (!vaultMeta?.enabled) return;
  clearTimeout(autoLockTimer);
  vaultKey = null;
  vaultUnlocked = false;
  state = normalizeState(structuredClone(starterData));
  releaseWorkspaceObjectUrls();
  workspace.innerHTML = "";
  patientSummary.innerHTML = "";
  profileList.innerHTML = "";
  personName.textContent = "Vault locked";
  showVaultScreen("Vault locked", message);
  updateVaultUi();
}

function showVaultScreen(title, message) {
  vaultTitle.textContent = title;
  vaultMessage.textContent = message;
  vaultScreen.classList.remove("is-hidden");
  vaultPassword.focus();
}

function hideVaultScreen() {
  vaultScreen.classList.add("is-hidden");
}

function updateVaultUi() {
  enableVaultBtn.classList.toggle("is-hidden", Boolean(vaultMeta?.enabled));
  lockVaultBtn.classList.toggle("is-hidden", !vaultMeta?.enabled || !vaultUnlocked);
  secureDocsBtn.classList.toggle("is-hidden", !vaultMeta?.enabled || !vaultUnlocked);
}

function resetAutoLockTimer() {
  clearTimeout(autoLockTimer);
  if (!vaultMeta?.enabled || !vaultUnlocked) return;
  autoLockTimer = setTimeout(() => {
    lockVault("Vault locked after 5 minutes of inactivity.");
  }, AUTO_LOCK_MS);
}

async function secureExistingDocuments() {
  if (!vaultMeta?.enabled || !vaultUnlocked || !vaultKey) return;
  const rawFiles = await getRawStoredFiles();
  const unencryptedFiles = rawFiles.filter((file) => !file.encrypted);
  if (!unencryptedFiles.length) {
    alert("All stored document files are already encrypted in the development vault.");
    return;
  }
  const confirmed = confirm(`Encrypt ${unencryptedFiles.length} existing document file${unencryptedFiles.length === 1 ? "" : "s"} now?`);
  if (!confirmed) return;
  for (const file of unencryptedFiles) {
    await putStoredFile(file);
  }
  alert("Existing document files have been encrypted in local storage.");
  render();
}

async function encryptJson(value, key) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encoded = new TextEncoder().encode(JSON.stringify(value));
  const encrypted = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, encoded);
  return {
    iv: toBase64(iv),
    data: toBase64(new Uint8Array(encrypted))
  };
}

async function decryptJson(record, key) {
  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: fromBase64(record.iv) },
    key,
    fromBase64(record.data)
  );
  return JSON.parse(new TextDecoder().decode(decrypted));
}

function renderEmergencyPacket(person) {
  const dnr = person.legal.find((item) => /dnr|polst|molst/i.test(item.type || ""));
  const primaryCare = person.careTeam.find((care) => /primary|pcp|family/i.test(`${care.role} ${care.notes}`)) || person.careTeam[0];
  const hospital = person.resources.find((resource) => /hospital/i.test(resource.type || ""));
  const pharmacy = person.resources.find((resource) => /pharmacy/i.test(`${resource.type} ${resource.name}`));
  workspace.innerHTML = `
    <section class="panel emergency-packet">
      <div class="packet-heading">
        <div>
          <p class="eyebrow">Emergency Packet</p>
          <h3>${escapeHtml(person.demographics.fullName || "Unnamed profile")}</h3>
          <p class="record-meta">Generated ${escapeHtml(new Date().toLocaleString())}</p>
        </div>
        <button class="primary-action" type="button" onclick="window.print()">Print packet</button>
      </div>
      <div class="packet-grid">
        ${packetSection("Identity", [
          ["Date of birth", formatDate(person.demographics.dateOfBirth)],
          ["Age/sex", ageLine(person.demographics.dateOfBirth, person.demographics.sex)],
          ["Phone", person.demographics.phone],
          ["Address", person.demographics.address]
        ])}
        ${packetSection("Critical Alerts", [
          ["Allergies", person.demographics.allergies || "None recorded"],
          ["DNR/POLST", dnr ? `${dnr.status || "Recorded"} (${dnr.location || "location not recorded"})` : "Not recorded"],
          ["Baseline", person.demographics.baseline]
        ])}
        ${packetSection("Emergency Contacts", [
          ["Primary contact", formatEmergencyContact(person)],
          ["Primary care", primaryCare ? `${primaryCare.name || ""} ${primaryCare.phone || ""}` : "Not recorded"],
          ["Preferred hospital", hospital ? `${hospital.name || ""} ${hospital.phone || ""}` : "Not recorded"]
        ])}
        ${packetSection("Preferences", [
          ["Pharmacy", pharmacy ? `${pharmacy.name || ""} ${pharmacy.phone || ""}` : preferredPharmacy(person)],
          ["Hospital", hospital ? `${hospital.name || ""} - ${hospital.preference || hospital.address || ""}` : "Not recorded"]
        ])}
      </div>
      ${packetList("Diagnosis", person.diagnoses || [], formatCondition)}
      ${packetList("Surgeries/Procedures", person.procedures || [], formatProcedure)}
      ${packetList("Immunizations", person.immunizations || [], formatImmunization)}
      ${packetList("Insurance", person.insurance || [], formatInsurance)}
      ${packetList("Current Medications", person.medications.filter((med) => (med.status || "Active") === "Active"), (med) => `${med.name || "Unnamed"} - ${med.dose || "dose not recorded"} - ${med.schedule || "schedule not recorded"}${med.reason ? ` (${med.reason})` : ""}`)}
      ${packetList("Recent Vitals", [...(person.vitals || [])].sort((a, b) => vitalTimestamp(b) - vitalTimestamp(a)).slice(0, 3), (vital) => `${formatDate(vital.date)} ${vital.time || ""} - ${vitalSubtitle(vital) || "details not recorded"}`)}
      ${packetList("Care Team", person.careTeam, (care) => `${care.name || "Unnamed"} - ${care.role || "role not recorded"} - ${care.phone || "phone not recorded"}`)}
      ${packetList("Recent Visits", person.visits.slice(0, 5), (visit) => `${formatDate(visit.date)} - ${visit.type || "Visit"} - ${visit.reason || visit.outcome || "details not recorded"}`)}
      ${packetList("Key Documents", person.documents.slice(0, 8), (doc) => `${formatDate(doc.date)} - ${doc.title || doc.type || "Document"}${doc.fileName ? ` - file stored locally: ${doc.fileName}` : ""}`)}
    </section>
  `;
}

function packetSection(title, rows) {
  return `
    <article class="packet-section">
      <h4>${escapeHtml(title)}</h4>
      ${rows.map(([label, value]) => `<div class="packet-row"><span>${escapeHtml(label)}</span><b>${escapeHtml(value || "Not recorded")}</b></div>`).join("")}
    </article>`;
}

function packetList(title, items, formatter) {
  return `
    <article class="packet-section wide">
      <h4>${escapeHtml(title)}</h4>
      ${items.length ? `<ul>${items.map((item) => `<li>${escapeHtml(formatter(item))}</li>`).join("")}</ul>` : `<p class="record-meta">None recorded.</p>`}
    </article>`;
}

function preferredPharmacy(person) {
  const medicationPharmacy = person.medications.find((med) => med.pharmacy)?.pharmacy;
  return medicationPharmacy || "Not recorded";
}

function conditionName(condition) {
  return typeof condition === "string" ? condition : condition?.name || "";
}

function formatCondition(condition) {
  if (typeof condition === "string") return condition;
  const detail = [condition.status, condition.clinician].filter(Boolean).join(", ");
  return `${condition.name || "Unnamed diagnosis"}${detail ? ` - ${detail}` : ""}`;
}

function formatProcedure(procedure) {
  const bodyArea = procedure.bodyArea || procedure.location || "";
  return `${formatDate(procedure.date)} - ${procedure.name || "Unnamed procedure"}${bodyArea ? ` - ${bodyArea}` : ""}${procedure.facility ? ` - ${procedure.facility}` : ""}`;
}

function formatImmunization(immunization) {
  const bodyArea = immunization.bodyArea || immunization.location || "";
  return `${formatDate(immunization.date)} - ${immunization.name || "Unnamed immunization"}${bodyArea ? ` - ${bodyArea}` : ""}${immunization.provider ? ` - ${immunization.provider}` : ""}${immunization.nextDue ? ` - next due ${formatDate(immunization.nextDue)}` : ""}`;
}

function formatInsurance(insurance) {
  return `${insurance.type || "Insurance"} - ${insurance.planName || "plan not recorded"}${insurance.memberId ? ` - ID ${insurance.memberId}` : ""}${insurance.phone ? ` - ${insurance.phone}` : ""}`;
}

function vitalTimestamp(record) {
  return new Date(`${record.date || "1900-01-01"}T${record.time || "00:00"}`).getTime();
}

function bpValue(record) {
  return record.bloodPressure || (record.systolic && record.diastolic ? `${record.systolic}/${record.diastolic}` : "");
}

function bloodPressureSystolic(record) {
  const value = bpValue(record);
  const match = String(value).match(/\d+/);
  return match ? match[0] : "";
}

function formatTrendNumber(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

async function hydrateDocumentPreviews() {
  const previewNodes = [...workspace.querySelectorAll("[data-thumbnail-id]")];
  await Promise.all(previewNodes.map(async (node) => {
    const storedFile = await getStoredFile(node.dataset.thumbnailId);
    if (!storedFile) {
      node.innerHTML = `<div class="document-placeholder">Missing file</div>`;
      return;
    }
    if (storedFile.type?.startsWith("image/")) {
      const url = URL.createObjectURL(storedFile.blob);
      node.innerHTML = `<img src="${url}" alt="${escapeHtml(storedFile.name)} thumbnail" />`;
      node.dataset.objectUrl = url;
      return;
    }
    node.innerHTML = `<div class="document-placeholder">${escapeHtml(fileTypeLabel(storedFile.type))}</div>`;
  }));
}

async function openDocumentPreview(fileId) {
  const storedFile = await getStoredFile(fileId);
  if (!storedFile) {
    alert("This file was not found in local document storage.");
    return;
  }
  if (currentPreviewUrl) URL.revokeObjectURL(currentPreviewUrl);
  currentPreviewUrl = URL.createObjectURL(storedFile.blob);
  previewTitle.textContent = storedFile.name || "Stored document";
  previewMeta.textContent = `${fileTypeLabel(storedFile.type)} / ${formatBytes(storedFile.size)}`;
  previewBody.innerHTML = storedFile.type?.startsWith("image/")
    ? `<img src="${currentPreviewUrl}" alt="${escapeHtml(storedFile.name)}" />`
    : `<iframe title="${escapeHtml(storedFile.name)}" src="${currentPreviewUrl}"></iframe>`;
  previewDialog.showModal();
}

closePreviewBtn.addEventListener("click", closeDocumentPreview);
previewDialog.addEventListener("close", closeDocumentPreview);
openPreviewBtn.addEventListener("click", () => {
  if (currentPreviewUrl) window.open(currentPreviewUrl, "_blank", "noopener");
});
printPreviewBtn.addEventListener("click", () => {
  if (!currentPreviewUrl) return;
  const printWindow = window.open(currentPreviewUrl, "_blank", "noopener");
  if (printWindow) {
    printWindow.addEventListener("load", () => printWindow.print(), { once: true });
  }
});

function closeDocumentPreview() {
  if (previewDialog.open) previewDialog.close();
  previewBody.innerHTML = "";
  if (currentPreviewUrl) {
    URL.revokeObjectURL(currentPreviewUrl);
    currentPreviewUrl = "";
  }
}

async function exportEncryptedBackup() {
  const password = prompt("Create a backup password. This password is not stored and cannot be recovered.");
  if (!password) return;
  const files = await Promise.all((await getAllStoredFiles()).map(serializeStoredFile));
  const payload = new TextEncoder().encode(JSON.stringify({ state, files }));
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(password, salt);
  const encrypted = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, payload);
  const backup = {
    format: BACKUP_FORMAT,
    createdAt: new Date().toISOString(),
    kdf: "PBKDF2-SHA256-250000",
    cipher: "AES-GCM",
    salt: toBase64(salt),
    iv: toBase64(iv),
    data: toBase64(new Uint8Array(encrypted))
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const anchor = document.createElement("a");
  anchor.href = URL.createObjectURL(blob);
  anchor.download = `personalchart-backup-${new Date().toISOString().slice(0, 10)}.pchart`;
  anchor.click();
  URL.revokeObjectURL(anchor.href);
}

async function exportEncryptedPerson() {
  const person = activePerson();
  if (!person) return;
  const password = prompt(`Create a password for ${person.demographics.fullName || "this person"}'s encrypted export. This password is not stored.`);
  if (!password) return;
  const allFiles = await getAllStoredFiles();
  const personFileIds = new Set((person.documents || []).map((document) => document.fileId).filter(Boolean));
  const files = await Promise.all(allFiles.filter((file) => personFileIds.has(file.id)).map(serializeStoredFile));
  const payload = new TextEncoder().encode(JSON.stringify({
    person,
    files,
    exportedAt: new Date().toISOString(),
    app: "PersonalChart",
    format: PERSON_EXPORT_FORMAT
  }));
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(password, salt);
  const encrypted = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, payload);
  const exportFile = {
    format: PERSON_EXPORT_FORMAT,
    createdAt: new Date().toISOString(),
    patientName: person.demographics.fullName || "Unnamed profile",
    documentCount: files.length,
    kdf: "PBKDF2-SHA256-250000",
    cipher: "AES-GCM",
    salt: toBase64(salt),
    iv: toBase64(iv),
    data: toBase64(new Uint8Array(encrypted))
  };
  const blob = new Blob([JSON.stringify(exportFile, null, 2)], { type: "application/json" });
  const anchor = document.createElement("a");
  anchor.href = URL.createObjectURL(blob);
  anchor.download = `personalchart-person-${slugify(person.demographics.fullName || "profile")}-${new Date().toISOString().slice(0, 10)}.pchart-person`;
  anchor.click();
  URL.revokeObjectURL(anchor.href);
}

async function importEncryptedPerson(event) {
  const file = event.target.files?.[0];
  event.target.value = "";
  if (!file) return;
  const password = prompt("Enter the person export password.");
  if (!password) return;
  try {
    const exportFile = JSON.parse(await file.text());
    if (exportFile.format !== PERSON_EXPORT_FORMAT) throw new Error("Unsupported person export format.");
    const key = await deriveKey(password, fromBase64(exportFile.salt));
    const decrypted = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: fromBase64(exportFile.iv) },
      key,
      fromBase64(exportFile.data)
    );
    const payload = JSON.parse(new TextDecoder().decode(decrypted));
    const importedPerson = normalizeState({ activePersonId: payload.person.id, people: [payload.person] }).people[0];
    const importedFiles = payload.files || [];
    const existingIndex = state.people.findIndex((person) => person.id === importedPerson.id || person.demographics.fullName === importedPerson.demographics.fullName);
    const action = choosePersonImportAction(importedPerson, existingIndex, importedFiles.length, exportFile.createdAt);
    if (!action) return;
    const finalPerson = action === "new" ? clonePersonWithNewIds(importedPerson) : importedPerson;
    if (action === "replace" && existingIndex >= 0) {
      await removePersonDocumentFiles(state.people[existingIndex]);
      state.people[existingIndex] = finalPerson;
    } else if (action === "merge" && existingIndex >= 0) {
      state.people[existingIndex] = mergePersonRecords(state.people[existingIndex], finalPerson);
    } else {
      state.people.push(finalPerson);
    }
    for (const storedFile of importedFiles) {
      await putStoredFile(await deserializeStoredFile(storedFile));
    }
    state.activePersonId = finalPerson.id;
    saveState();
    render();
    alert(`${finalPerson.demographics.fullName || "Person"} imported.`);
  } catch (error) {
    alert(`Person import failed: ${error.message}`);
  }
}

function choosePersonImportAction(person, existingIndex, fileCount, createdAt) {
  const name = person.demographics.fullName || "Unnamed profile";
  const summary = `Import ${name}?\n\nExport date: ${createdAt ? new Date(createdAt).toLocaleString() : "Unknown"}\nDocuments: ${fileCount}`;
  if (existingIndex < 0) {
    return confirm(`${summary}\n\nThis will create a new profile.`) ? "new" : "";
  }
  const choice = prompt(`${summary}\n\nA matching profile already exists.\nType one option:\n\nnew = create separate copy\nreplace = replace existing profile\nmerge = merge records into existing profile`);
  const normalized = (choice || "").trim().toLowerCase();
  return ["new", "replace", "merge"].includes(normalized) ? normalized : "";
}

function clonePersonWithNewIds(person) {
  return {
    ...structuredClone(person),
    id: `person-${crypto.randomUUID()}`,
    demographics: {
      ...person.demographics,
      fullName: `${person.demographics.fullName || "Imported profile"} (Imported)`
    }
  };
}

function mergePersonRecords(existingPerson, importedPerson) {
  const collections = ["diagnoses", "procedures", "immunizations", "insurance", "medications", "vitals", "careTeam", "visits", "documents", "resources", "legal"];
  const merged = {
    ...existingPerson,
    demographics: {
      ...existingPerson.demographics,
      ...Object.fromEntries(Object.entries(importedPerson.demographics || {}).filter(([, value]) => value))
    }
  };
  collections.forEach((collection) => {
    const current = merged[collection] || [];
    const incoming = importedPerson[collection] || [];
    const currentIds = new Set(current.map((record) => record.id));
    merged[collection] = [
      ...current,
      ...incoming.filter((record) => !currentIds.has(record.id))
    ];
  });
  return merged;
}

async function removePersonDocumentFiles(person) {
  const fileIds = (person.documents || []).map((document) => document.fileId).filter(Boolean);
  await Promise.all(fileIds.map(deleteStoredFile));
}

async function importEncryptedBackup(event) {
  const file = event.target.files?.[0];
  event.target.value = "";
  if (!file) return;
  const password = prompt("Enter the backup password.");
  if (!password) return;
  try {
    const backup = JSON.parse(await file.text());
    if (backup.format !== BACKUP_FORMAT) throw new Error("Unsupported backup format.");
    const salt = fromBase64(backup.salt);
    const iv = fromBase64(backup.iv);
    const encrypted = fromBase64(backup.data);
    const key = await deriveKey(password, salt);
    const decrypted = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, encrypted);
    const restoredPayload = JSON.parse(new TextDecoder().decode(decrypted));
    const restored = normalizeState(restoredPayload.state || restoredPayload);
    const restoredFiles = restoredPayload.files || [];
    const names = restored.people.map((person) => person.demographics.fullName || "Unnamed").join(", ");
    const confirmed = confirm(`Restore backup from ${new Date(backup.createdAt).toLocaleString()}?\n\nProfiles: ${names}\nFiles: ${restoredFiles.length}\n\nThis replaces the current development data and local document files.`);
    if (!confirmed) return;
    await clearStoredFiles();
    for (const file of restoredFiles) {
      await putStoredFile(await deserializeStoredFile(file));
    }
    state = restored;
    saveState();
    render();
  } catch (error) {
    alert(`Backup restore failed: ${error.message}`);
  }
}

async function serializeStoredFile(file) {
  return {
    ...file,
    blob: await blobToBase64(file.blob)
  };
}

async function deserializeStoredFile(file) {
  return {
    ...file,
    blob: base64ToBlob(file.blob, file.type || "application/octet-stream")
  };
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1]);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

function base64ToBlob(base64, type) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return new Blob([bytes], { type });
}

async function deriveKey(password, salt) {
  const baseKey = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveKey"]);
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: 250000, hash: "SHA-256" },
    baseKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

function toBase64(bytes) {
  return btoa(String.fromCharCode(...bytes));
}

function fromBase64(value) {
  return Uint8Array.from(atob(value), (char) => char.charCodeAt(0));
}

function formatBytes(value) {
  if (!value) return "";
  if (value < 1024) return `${value} B`;
  if (value < 1024 * 1024) return `${Math.round(value / 1024)} KB`;
  return `${(value / 1024 / 1024).toFixed(1)} MB`;
}

function fileTypeLabel(type = "") {
  if (type.startsWith("image/")) return "Image";
  if (type === "application/pdf") return "PDF";
  return "File";
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48) || "profile";
}

function formatDate(value) {
  if (!value) return "Not recorded";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

function ageLine(dateOfBirth, sex) {
  const parts = [];
  if (dateOfBirth) {
    const today = new Date();
    const birth = new Date(`${dateOfBirth}T00:00:00`);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDelta = today.getMonth() - birth.getMonth();
    if (monthDelta < 0 || (monthDelta === 0 && today.getDate() < birth.getDate())) age -= 1;
    parts.push(`${age} years old`);
  }
  if (sex) parts.push(sex);
  return parts.join(" / ") || "Demographics incomplete";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

initializeApp();
