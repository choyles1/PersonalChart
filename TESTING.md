# PersonalChart Prototype Testing Guide

This prototype is intended for workflow testing with sample or fictional data only. Do not enter real medical information, real insurance details, real legal documents, or real scanned records during this phase.

## Local Testing

1. Clone the repository.
2. Open a terminal in the project folder.
3. Run:

```powershell
npm start
```

4. Open:

```text
http://localhost:4173
```

## GitHub Pages Testing

If GitHub Pages is enabled for the repository, testers can open the published Pages URL. Each tester's data will remain local to their own browser/device.

## Suggested Test Script

Use fictional data and try these workflows:

1. Add a new person.
2. Open Essential intake and fill missing items.
3. Add a medication, then edit it and change the status.
4. Add a condition.
5. Add a prior surgery/procedure with date and location.
6. Add vitals and review trend cards.
7. Add a care team member.
8. Add a legal/DNR/POLST note.
9. Upload a fake image or PDF in Documents.
10. Preview the uploaded document.
11. Open Emergency packet and print/save as PDF.
12. Create an encrypted backup.
13. Restore the encrypted backup in a different browser profile.
14. Enable the development vault.
15. Lock and unlock the vault.
16. Use Secure documents after the vault is enabled.

## Important Notes

- Data is stored in the browser/device running the app.
- Different browsers and devices will not share data automatically.
- Clearing browser site data can delete the prototype database.
- The development vault password cannot be recovered.
- This prototype is not production security and is not ready for real protected health information.
