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
4. Add a diagnosis.
5. Add a prior surgery/procedure with date and body area.
6. Add an immunization with date, body area, and next due date.
7. Add insurance coverage using fictional member details.
8. Add vitals and review trend cards.
9. Add a care team member.
10. Add a legal/DNR/POLST note.
11. Upload a fake image or PDF in Documents.
12. Preview the uploaded document.
13. Open Emergency packet and print/save as PDF.
14. Export one person into an encrypted `.pchart-person` file.
15. Import the encrypted person file in another browser profile.
16. Create an encrypted full backup.
17. Restore the encrypted full backup in a different browser profile.
18. Enable the development vault.
19. Lock and unlock the vault.
20. Use Secure documents after the vault is enabled.

## Important Notes

- Data is stored in the browser/device running the app.
- Different browsers and devices will not share data automatically.
- Clearing browser site data can delete the prototype database.
- The development vault password cannot be recovered.
- This prototype is not production security and is not ready for real protected health information.
