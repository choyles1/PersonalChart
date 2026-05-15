# Security Notes

PersonalChart is currently a development prototype. It should not be used with real patient data, real medical records, insurance documents, legal documents, or protected health information.

## Current Security Model

- Data is local-first and stored in the browser.
- Structured records are stored locally.
- Documents are stored in IndexedDB.
- Encrypted backup files use browser Web Crypto.
- Optional development vault mode stores app state encrypted in IndexedDB.
- New document blobs are encrypted when the development vault is enabled and unlocked.

## Development Vault Caveats

The development vault uses PBKDF2-SHA256 with AES-GCM through browser Web Crypto. This is useful for validating workflow and architecture, but it is not a substitute for a production security review.

Production security should include:

- A reviewed local encrypted database design.
- Argon2id or scrypt key derivation where supported.
- Platform keychain/keystore integration for desktop/mobile wrappers.
- Inactivity locking and lifecycle hardening.
- Storage quota and corruption handling.
- Formal threat modeling.
- Dependency review.
- Independent security assessment before use with real health data.

## Reporting Issues

For now, use GitHub Issues for prototype bugs. Do not include real medical data or sensitive personal information in issue reports.
