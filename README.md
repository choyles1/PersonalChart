# PersonalChart Development Prototype

PersonalChart is a local-first personal health record concept for caregivers and patients. This prototype is intentionally in development mode: it uses browser storage, seeded sample data, and a static frontend so the data model and workflows can change quickly.

> Do not use real medical data in this prototype. Use fictional data only.

## Current Prototype

- Multiple patient profiles
- Essential intake checklist with care-readiness scoring
- Optional development vault with password unlock and encrypted IndexedDB app-state storage
- Vault auto-lock after inactivity or when the app moves to the background
- Secure existing documents migration for older unencrypted IndexedDB file blobs
- Demographics, allergies, emergency contacts, baseline status
- Medications, diagnosis, surgeries/procedures, immunizations, insurance, care team, visits, documents, resources, and legal/end-of-life records
- Medication active/on hold/discontinued status fields and change history
- Vitals tracking with trend cards for blood pressure, pulse, weight, glucose, oxygen, and pain
- Edit and delete controls for record correction
- Print-friendly clinical summary
- Real scanned-file/document capture into local IndexedDB, with new document blobs encrypted when the development vault is enabled
- Image thumbnails and in-app document preview for stored image/PDF files
- Printable Emergency Packet for urgent handoffs
- Password-protected portable backup file using browser Web Crypto, including stored document files
- Password-protected one-person export/import for sharing a single profile across trusted people/devices
- Local-only storage in the current browser

## Run Locally

Run a simple local server from this folder:

```powershell
npm start
```

Then visit `http://localhost:4173`.

You can also open `index.html` directly in a browser, though a local server is recommended for more realistic testing.

## GitHub Pages

This repo includes a GitHub Pages workflow at `.github/workflows/pages.yml`.

To publish:

1. Push the project to a GitHub repository.
2. Go to repository Settings.
3. Open Pages.
4. Set Source to GitHub Actions.
5. Push to the `main` branch or run the workflow manually.

Each tester's app data remains local to their own browser/device.

## Tester Docs

- See `TESTING.md` for a suggested testing script.
- See `SECURITY.md` for prototype security limitations.
- See `PRIVACY.md` for prototype privacy notes.

## Notes

This is not production security. The development vault uses browser Web Crypto with PBKDF2/AES-GCM so we can validate the local encrypted-store workflow. A production version should use a reviewed encrypted local database and encrypted document store, stronger backup key derivation such as Argon2id or scrypt, biometric/PIN app lock, careful export controls, storage quota handling, and a formal privacy/security review.
