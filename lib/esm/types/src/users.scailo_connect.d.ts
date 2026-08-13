import { User, UsersList, UsersServiceCountReq, UsersServiceCreateRequest, UsersServiceFilterReq, UsersServicePaginationReq, UsersServicePaginationResponse, UsersServicePasswordResetReq, UsersServiceRegisterMobileDeviceRequest, UsersServiceSearchAllReq, UsersServiceUpdateRequest } from "./users.scailo_pb.js";
import { ActiveStatus, Base64String, CountInSLCStatusRequest, CountResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithUserComment, IdentifierZeroable, ImageResponse, MonthAndDayFilter, SimpleSearchReq, StandardFile, StringResponse, StringsList, UpdateOwnPasswordReq, UpdatePasswordReq, UploadPictureReq } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { VaultFolderAttachRequest } from "./vault_folders.scailo_pb.js";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
/**
 *
 * The UsersService manages the full lifecycle of users.
 * It provides standard CRUD operations alongside a robust state machine for
 * verification, manager approval, and completion.
 *
 * @generated from service Scailo.UsersService
 */
export declare const UsersService: {
    readonly typeName: "Scailo.UsersService";
    readonly methods: {
        /**
         * Registers a user's mobile device to enable push notifications.
         *
         * **Side Effects:**
         * - Binds the device token to the authenticated user's session profile.
         * - Invalidates previous device tokens if maximum device limits per user are exceeded.
         *
         * Returns the unique identifier response of the newly registered user device record.
         *
         * @generated from rpc Scailo.UsersService.RegisterMobileDevice
         */
        readonly registerMobileDevice: {
            readonly name: "RegisterMobileDevice";
            readonly I: typeof UsersServiceRegisterMobileDeviceRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Creates a new user and initiates the verification workflow.
         *
         * This method validates all required fields.
         * The user record is created with a `STANDARD_LIFECYCLE_STATUS.PREVERIFY` status.
         *
         * **Side Effects:**
         * - Generates a unique system UUID.
         * - Records an audit log for the "Create" action.
         *
         * **Errors:** // - `ALREADY_EXISTS`: If the `username`, `code`, or `email` is already taken.
         * - `INVALID_ARGUMENT`: If validation rules (e.g., `buf.validate`) fail.
         *
         * @generated from rpc Scailo.UsersService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof UsersServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Saves a new user record as a draft without triggering side effects.
         *
         * Use this method when you have incomplete information but wish to persist
         * the record for later completion. The user cannot log in while the record is in a `DRAFT` state.
         *
         * **Note:** Some strict validation rules may be relaxed in the backend for drafts
         *
         * @generated from rpc Scailo.UsersService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof UsersServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Updates an existing record that is currently in `DRAFT` status.
         *
         * This method allows modification of all primary attributes while the record is not yet verified.
         *
         * **Errors:**
         * - `FAILED_PRECONDITION`: If the record is not in a `DRAFT` state.
         * - `NOT_FOUND`: If the provided ID does not exist.
         *
         * @generated from rpc Scailo.UsersService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof UsersServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Submits a record in `DRAFT` or `REVISION` status for verification.
         *
         * This triggers the first stage of the approval workflow.
         *
         * **Status Transition:** -> `PREVERIFY`
         *
         * **Side Effects:**
         * - Notifies designated verifiers or approvers.
         * - Locks certain fields from being updated without returning to `REVISION`.
         *
         * @generated from rpc Scailo.UsersService.SendForVerification
         */
        readonly sendForVerification: {
            readonly name: "SendForVerification";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Marks a record as verified, signaling that it is ready for final approval.
         *
         * **Status Transition:** -> `VERIFIED`
         *
         * **Side Effects:**
         * - Records the verifying user and timestamp in the audit logs.
         *
         * @generated from rpc Scailo.UsersService.Verify
         */
        readonly verify: {
            readonly name: "Verify";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Officially approves the record.
         *
         * **Status Transition:** -> `STANDING`
         *
         * **Side Effects:**
         * - Finalizes the `final_ref_number`.
         * - Records the approver's identity and timestamp.
         *
         * @generated from rpc Scailo.UsersService.Approve
         */
        readonly approve: {
            readonly name: "Approve";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Sends the record back to the creator for corrections.
         *
         * Use this if details are incorrect or supporting documents (in the vault) are missing.
         *
         * **Status Transition:** -> `REVISION`
         *
         * **Side Effects:**
         * - Notifies the record creator that changes are required.
         *
         * @generated from rpc Scailo.UsersService.SendForRevision
         */
        readonly sendForRevision: {
            readonly name: "SendForRevision";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Updates a record that has been sent back for `REVISION`.
         *
         * **Side Effects:**
         * - Re-validates the updated fields.
         *
         * @generated from rpc Scailo.UsersService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof UsersServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.UsersService.Halt
         */
        readonly halt: {
            readonly name: "Halt";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Permanently cancels the record.
         *
         * Records in this state are typically ignored.
         *
         * **Status Transition:** -> `DISCARDED`
         *
         * @generated from rpc Scailo.UsersService.Discard
         */
        readonly discard: {
            readonly name: "Discard";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restores a previously `DISCARDED` or `HALTED` record.
         *
         * **Side Effects:**
         * - Moves the record back to `PREVERIFY` and sends for verification.
         *
         * @generated from rpc Scailo.UsersService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Adds an audit comment to the record's history without changing its current lifecycle status.
         *
         * Send Email
         * rpc SendEmail (Identifier) returns (IdentifierResponse);
         *
         * @generated from rpc Scailo.UsersService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Attaches a specified folder directly to a record without requiring a full revision workflow.
         *
         * This is a convenience API designed to bypass the traditional multi-step modification lifecycle
         * (e.g., creating a revision, updating data, submitting for verification, and awaiting approval).
         * It allows for the immediate, single-step association of a vault folder.
         *
         * **Side Effects & Lifecycle:**
         * * The overall status of the record remains unchanged.
         * * The record's modification timestamp is automatically updated to the current time.
         * * An entry is appended to the record's audit log tracking this attachment.
         *
         * @generated from rpc Scailo.UsersService.AttachVaultFolder
         */
        readonly attachVaultFolder: {
            readonly name: "AttachVaultFolder";
            readonly I: typeof VaultFolderAttachRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Generates a secure, short-lived magic link allowing the user to securely upload their signature.
         *
         * **Side Effects:**
         * - Creates a time-bounded resource access token in the system database.
         *
         * @generated from rpc Scailo.UsersService.CreateMagicLinkForSignature
         */
        readonly createMagicLinkForSignature: {
            readonly name: "CreateMagicLinkForSignature";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Administrative override method to forcefully update a user's password.
         *
         * This is typically invoked by an administrator or helpdesk agent.
         *
         * **Side Effects:**
         * - Overwrites the existing password hash.
         * - Triggers a security notification email to the target user notifying them of the change.
         * - Terminates all active sessions for the target user, forcing a re-login.
         *
         * **Errors:**
         * - `PERMISSION_DENIED`: If the calling user lacks administrative password modification privileges.
         *
         * @generated from rpc Scailo.UsersService.UpdatePassword
         */
        readonly updatePassword: {
            readonly name: "UpdatePassword";
            readonly I: typeof UpdatePasswordReq;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Allows the currently authenticated user to update their own account password.
         *
         * This method strictly enforces a check against the user's current password to prevent hijacking.
         *
         * **Side Effects:**
         * - Updates the password hash in the secure identity vault.
         * - Revokes all other active login tokens/sessions except for the current operational session.
         *
         * **Errors:**
         * - `INVALID_ARGUMENT`: If the new password fails system complexity guidelines.
         *
         * @generated from rpc Scailo.UsersService.UpdateOwnPassword
         */
        readonly updateOwnPassword: {
            readonly name: "UpdateOwnPassword";
            readonly I: typeof UpdateOwnPasswordReq;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Initiates the self-service password recovery workflow for a specific username.
         *
         * **Side Effects:**
         * - If the username is matched, asynchronously dispatches a structured reset email containing a token.
         * - Appends a tracking entry to the system security logs.
         *
         * **Note:** To prevent user enumeration attacks, this endpoint may return a successful status
         * even if the provided username does not exist in the system.
         *
         * @generated from rpc Scailo.UsersService.RequestPasswordResetEmail
         */
        readonly requestPasswordResetEmail: {
            readonly name: "RequestPasswordResetEmail";
            readonly I: typeof UsersServicePasswordResetReq;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Updates the profile picture associated with the user account.
         *
         * **Side Effects:**
         * - Uploads the binary payload to the secure object store.
         * - Automatically triggers an asynchronous background job to generate standardized thumbnails.
         *
         * **Errors:**
         * - `INVALID_ARGUMENT`: If the file format is unsupported or file size limits are exceeded.
         *
         * @generated from rpc Scailo.UsersService.UpdateProfilePicture
         */
        readonly updateProfilePicture: {
            readonly name: "UpdateProfilePicture";
            readonly I: typeof UploadPictureReq;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Updates the user's official signature resource.
         *
         * **Side Effects:**
         * - Overwrites the existing signature image artifact.
         * - Logs a compliance entry in the audit trail indicating a credential/signature modification.
         *
         * @generated from rpc Scailo.UsersService.UpdateSignature
         */
        readonly updateSignature: {
            readonly name: "UpdateSignature";
            readonly I: typeof UploadPictureReq;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Enables Multi-Factor Authentication (MFA) for the specified user account.
         *
         * **Side Effects:**
         * - Initializes a new cryptographic seed for the user.
         * - Generates a setup QR code image payload required to configure authenticator applications.
         *
         * @generated from rpc Scailo.UsersService.MFAEnable
         */
        readonly mFAEnable: {
            readonly name: "MFAEnable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Disables and resets the Multi-Factor Authentication configuration for a user.
         *
         * **Side Effects:**
         * - Completely clears the assigned cryptographic seed from the user's profile.
         * - Reverts the account authentication requirement back to single-factor (password only).
         * - Records a high-severity entry in the system compliance log.
         *
         * **Errors:**
         * - `PERMISSION_DENIED`: If the action is not performed by an authorized security administrator.
         *
         * @generated from rpc Scailo.UsersService.MFAReset
         */
        readonly mFAReset: {
            readonly name: "MFAReset";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID (returns the entire information about the user, including the logs)
         *
         * @generated from rpc Scailo.UsersService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof IdentifierZeroable;
            readonly O: typeof User;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID (logs aren't returned)
         *
         * @generated from rpc Scailo.UsersService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof User;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.UsersService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof User;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.UsersService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof User;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single user record utilizing their unique username.
         *
         * This is a high-performance, read-only query designed for quick profile validation.
         *
         * **Note:** High-volume compliance data, audit records, and system logs are excluded from the response payload.
         *
         * **Errors:**
         * - `NOT_FOUND`: If the provided username does not match an active user record.
         *
         * @generated from rpc Scailo.UsersService.ViewByUsername
         */
        readonly viewByUsername: {
            readonly name: "ViewByUsername";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof User;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record via the assigned internal code.
         *
         * **Note:** High-volume compliance data, audit records, and system logs are excluded from the response payload.
         *
         * **Errors:**
         * - `NOT_FOUND`: If the provided internal code does not exist.
         *
         * @generated from rpc Scailo.UsersService.ViewByCode
         */
        readonly viewByCode: {
            readonly name: "ViewByCode";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof User;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.UsersService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof UsersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.UsersService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof UsersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.UsersService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof UsersServicePaginationReq;
            readonly O: typeof UsersServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all users with the given IDs
         *
         * @generated from rpc Scailo.UsersService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof UsersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all users with the given UUIDs
         *
         * @generated from rpc Scailo.UsersService.ViewFromUUIDs
         */
        readonly viewFromUUIDs: {
            readonly name: "ViewFromUUIDs";
            readonly I: typeof IdentifierUUIDsList;
            readonly O: typeof UsersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Resolves and returns a collection of user records corresponding to an explicit list of usernames.
         *
         * This query handles multi-record fetching efficiently and will return empty entries or skip
         * usernames that fail to map to a valid record.
         *
         * @generated from rpc Scailo.UsersService.ViewFromUsernames
         */
        readonly viewFromUsernames: {
            readonly name: "ViewFromUsernames";
            readonly I: typeof StringsList;
            readonly O: typeof UsersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the contextual profile details of the currently authenticated system caller.
         *
         * This serves as the primary endpoint for populating active user dashboards and checking current permissions.
         *
         * **Errors:**
         * - `UNAUTHENTICATED`: If the calling context lacks valid session tokens.
         *
         * @generated from rpc Scailo.UsersService.ViewSelf
         */
        readonly viewSelf: {
            readonly name: "ViewSelf";
            readonly I: typeof Empty;
            readonly O: typeof User;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Filters and returns all user records whose birthday falls on the specified month and day.
         *
         * This read-only utility API is typically utilized for scheduling automated cultural or internal system greetings.
         *
         * @generated from rpc Scailo.UsersService.ViewBirthdaysOn
         */
        readonly viewBirthdaysOn: {
            readonly name: "ViewBirthdaysOn";
            readonly I: typeof MonthAndDayFilter;
            readonly O: typeof UsersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Fetches the user's official signature rendered as a Base64 encoded string format.
         *
         * This is optimized for inline document embedding and programmatic PDF signing processes.
         *
         * @generated from rpc Scailo.UsersService.ViewSignature
         */
        readonly viewSignature: {
            readonly name: "ViewSignature";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Base64String;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the primary full-resolution profile picture artifact mapped to the user UUID.
         *
         * @generated from rpc Scailo.UsersService.ViewProfilePicture
         */
        readonly viewProfilePicture: {
            readonly name: "ViewProfilePicture";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the optimized, low-bandwidth thumbnail image variant of the user's profile picture.
         *
         * This operation is heavily optimized for rendering lists, directory grids, and navigation bars.
         *
         * @generated from rpc Scailo.UsersService.ViewThumbnailPicture
         */
        readonly viewThumbnailPicture: {
            readonly name: "ViewThumbnailPicture";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Generates and returns a standard electronic business card (VCard) structure formatted as an image asset.
         *
         * @generated from rpc Scailo.UsersService.ViewVCard
         */
        readonly viewVCard: {
            readonly name: "ViewVCard";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the user's unique identification QR Code rendered cleanly as an image asset.
         *
         * Useful for displaying physical scanning cards within mobile user interfaces.
         *
         * @generated from rpc Scailo.UsersService.ViewQRImage
         */
        readonly viewQRImage: {
            readonly name: "ViewQRImage";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the text payload or URL represented within the user's identification QR code.
         *
         * @generated from rpc Scailo.UsersService.ViewQRString
         */
        readonly viewQRString: {
            readonly name: "ViewQRString";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StringResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs biometric identification against a tightly pre-cropped image focusing solely on a single human face.
         *
         * The backend processes the facial vector characteristics to identify the target system user.
         *
         * **Errors:**
         * - `NOT_FOUND`: If the biometric scan cannot securely match the facial vector against the active registry.
         * - `INVALID_ARGUMENT`: If multiple faces or no recognizable facial features are discovered in the image template.
         *
         * @generated from rpc Scailo.UsersService.IdentifyCroppedFace
         */
        readonly identifyCroppedFace: {
            readonly name: "IdentifyCroppedFace";
            readonly I: typeof StandardFile;
            readonly O: typeof User;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs biometric identification against a standard or full-scale multi-context photograph.
         *
         * **Side Effects:**
         * - The backend automatically applies edge-detection algorithms to locate, isolate, and crop the face before running validation.
         *
         * **Errors:**
         * - `NOT_FOUND`: If no corresponding user identity maps to the isolated face vector.
         * - `INVALID_ARGUMENT`: If the photo contains multiple conflicting subjects or formatting anomalies.
         *
         * @generated from rpc Scailo.UsersService.IdentifyFullFace
         */
        readonly identifyFullFace: {
            readonly name: "IdentifyFullFace";
            readonly I: typeof StandardFile;
            readonly O: typeof User;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a free-text search across records using a search key.
         *
         * @generated from rpc Scailo.UsersService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof UsersServiceSearchAllReq;
            readonly O: typeof UsersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.UsersService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof UsersServiceFilterReq;
            readonly O: typeof UsersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.UsersService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total count of records matching the given complex filter criteria.
         *
         * @generated from rpc Scailo.UsersService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof UsersServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.UsersService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof UsersServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Bulk imports records from a provided CSV file.
         * Behavior:
         * - Deduplication: Skips entries where the `code` already exists in the system.
         * - Atomicity: This is an "all-or-nothing" operation; if any part of the
         *   import fails, no changes are committed.
         * - Idempotency: Multiple calls with the same CSV result in the same state.
         * Returns a list of UUIDs for all successfully processed or existing records.
         *
         * @generated from rpc Scailo.UsersService.ImportFromCSV
         */
        readonly importFromCSV: {
            readonly name: "ImportFromCSV";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=users.scailo_connect.d.ts.map