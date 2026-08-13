import { Team, TeamMember, TeamMemberHistoryRequest, TeamMembersSearchRequest, TeamsList, TeamsMembersList, TeamsServiceCountReq, TeamsServiceCreateRequest, TeamsServiceFilterReq, TeamsServiceMemberCreateRequest, TeamsServiceMemberUpdateRequest, TeamsServicePaginatedMembersResponse, TeamsServicePaginationReq, TeamsServicePaginationResponse, TeamsServiceSearchAllReq, TeamsServiceUpdateRequest } from "./teams.scailo_pb.js";
import { ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithUserComment, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { VaultFolderAttachRequest } from "./vault_folders.scailo_pb.js";
/**
 *
 * The TeamsService manages the full lifecycle of team records.
 * It provides standard CRUD operations alongside a robust state machine for
 * verification, manager approval, and completion.
 *
 * @generated from service Scailo.TeamsService
 */
export declare const TeamsService: {
    readonly typeName: "Scailo.TeamsService";
    readonly methods: {
        /**
         * Creates a new record and immediately moves it to the verification workflow.
         *
         * This method validates all required fields.
         * The record is created with a `STANDARD_LIFECYCLE_STATUS.PREVERIFY` status.
         *
         * **Side Effects:**
         * - Generates a unique system UUID.
         * - Records an audit log for the "Create" action.
         * - May trigger automated verification workflows.
         *
         * **Errors:**
         * - `INVALID_ARGUMENT`: If validation rules fail (e.g., negative quantity, invalid timestamps).
         *
         * @generated from rpc Scailo.TeamsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof TeamsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Saves a new record as a draft without triggering side effects.
         *
         * Use this method when you have incomplete information but wish to persist
         * the record for later completion. The record remains in a `DRAFT` state.
         *
         * **Note:** Some strict validation rules may be relaxed in the backend for drafts compared to `Create`.
         *
         * **Side Effects:**
         * - Generates a unique system UUID.
         * - Records an audit log for the "Draft" action.
         *
         * **Errors:**
         * - `INVALID_ARGUMENT`: If critical system fields are missing.
         *
         * @generated from rpc Scailo.TeamsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof TeamsServiceCreateRequest;
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
         * @generated from rpc Scailo.TeamsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof TeamsServiceUpdateRequest;
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
         * @generated from rpc Scailo.TeamsService.SendForVerification
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
         * @generated from rpc Scailo.TeamsService.Verify
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
         * @generated from rpc Scailo.TeamsService.Approve
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
         * @generated from rpc Scailo.TeamsService.SendForRevision
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
         * @generated from rpc Scailo.TeamsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof TeamsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.TeamsService.Halt
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
         * @generated from rpc Scailo.TeamsService.Discard
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
         * @generated from rpc Scailo.TeamsService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Marks the record as finalized and fully processed.
         *
         * **Status Transition:** -> `COMPLETED`
         *
         * **Side Effects:**
         * - Locks the record from further modification.
         *
         * @generated from rpc Scailo.TeamsService.Complete
         */
        readonly complete: {
            readonly name: "Complete";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Creates a new record based on an existing one (cloning).
         *
         * This is useful for repeating records or correcting finalized records by starting fresh.
         *
         * @generated from rpc Scailo.TeamsService.Repeat
         */
        readonly repeat: {
            readonly name: "Repeat";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reopens a finalized or closed record for further modifications.
         *
         * **Status Transition:** -> `REVISION`
         *
         * **Side Effects:**
         * - Unlocks the record to allow edits.
         * - Logs the required user comment into the audit trail for compliance tracking.
         *
         * @generated from rpc Scailo.TeamsService.Reopen
         */
        readonly reopen: {
            readonly name: "Reopen";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Adds an audit comment to the record's history without changing its current lifecycle status.
         *
         * Send Email
         * rpc SendEmail (IdentifierWithEmailAttributes) returns (IdentifierResponse);
         *
         * @generated from rpc Scailo.TeamsService.CommentAdd
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
         * @generated from rpc Scailo.TeamsService.AttachVaultFolder
         */
        readonly attachVaultFolder: {
            readonly name: "AttachVaultFolder";
            readonly I: typeof VaultFolderAttachRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Initiates the creation of a new record by duplicating the structural properties of an existing record.
         *
         * **Side Effects:**
         * - Provisions a new record populated with the metadata and configurations of the source record.
         * - Does not clone operational transactions or historical logs of the source.
         * - Appends an audit trail entry tracking the cloning operation and justification.
         *
         * @generated from rpc Scailo.TeamsService.Clone
         */
        readonly clone: {
            readonly name: "Clone";
            readonly I: typeof CloneRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Associates a user with an existing team, formally adding them to the group's roster.
         *
         * **Side Effects:**
         * - Validates the structural relationship and checks for duplicate associations.
         * - Depending on system configurations, may place this new member association into a pending approval state before granting full access.
         *
         * @generated from rpc Scailo.TeamsService.AddTeamMember
         */
        readonly addTeamMember: {
            readonly name: "AddTeamMember";
            readonly I: typeof TeamsServiceMemberCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Updates the metadata or configuration of an existing team member association.
         *
         * **Side Effects:**
         * - Modifies the member's association attributes (e.g., custom fields).
         * - May trigger a re-approval workflow depending on the severity of the modifications.
         * - Appends an audit trail entry tracking the change.
         *
         * @generated from rpc Scailo.TeamsService.ModifyTeamMember
         */
        readonly modifyTeamMember: {
            readonly name: "ModifyTeamMember";
            readonly I: typeof TeamsServiceMemberUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approves a pending team member association, finalizing their inclusion in the team.
         *
         * **Side Effects:**
         * - Activates the user's mapping, formally granting them team-level access, context, or routing capabilities.
         * - Appends the required approval metadata, timestamp, and audit comment to the record's history.
         *
         * @generated from rpc Scailo.TeamsService.ApproveTeamMember
         */
        readonly approveTeamMember: {
            readonly name: "ApproveTeamMember";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Permanently removes or deactivates a user association from a team profile.
         *
         * **Side Effects:**
         * - Revokes any team-specific context, routing assignments, and data access previously linked to this user.
         * - Logs the deletion justification comment into the system compliance log.
         *
         * @generated from rpc Scailo.TeamsService.DeleteTeamMember
         */
        readonly deleteTeamMember: {
            readonly name: "DeleteTeamMember";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorders the sequence or hierarchy of members within a team.
         *
         * **Side Effects:**
         * - Mutates the display sequence or hierarchical priority of the specified team members in bulk.
         * - Primarily affects how the team roster is presented in administrative and frontend views.
         *
         * @generated from rpc Scailo.TeamsService.ReorderTeamMembers
         */
        readonly reorderTeamMembers: {
            readonly name: "ReorderTeamMembers";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the complete, granular details of a specific team member association by its internal sequence ID.
         *
         * This is a read-only operation that fetches full metadata, mapping context, and approval histories.
         *
         * @generated from rpc Scailo.TeamsService.ViewTeamMemberByID
         */
        readonly viewTeamMemberByID: {
            readonly name: "ViewTeamMemberByID";
            readonly I: typeof Identifier;
            readonly O: typeof TeamMember;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists all active, fully approved member associations mapped to a specific team ID.
         *
         * This read-only query is optimized for operational routing and directory lookups, returning only the personnel who are officially authorized as part of the team.
         *
         * @generated from rpc Scailo.TeamsService.ViewApprovedTeamMembers
         */
        readonly viewApprovedTeamMembers: {
            readonly name: "ViewApprovedTeamMembers";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof TeamsMembersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists pending or unapproved member associations mapped to a specific team ID.
         *
         * This read-only query is utilized primarily by team leads and administrators to quickly identify and review personnel awaiting onboarding authorization.
         *
         * @generated from rpc Scailo.TeamsService.ViewUnapprovedTeamMembers
         */
        readonly viewUnapprovedTeamMembers: {
            readonly name: "ViewUnapprovedTeamMembers";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof TeamsMembersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the historical audit trail and lifecycle changes of a specific team member record.
         *
         * This read-only operation aggregates the chronological evolution of the user's association with the team, tracking role shifts and approval state changes.
         *
         * @generated from rpc Scailo.TeamsService.ViewTeamMemberHistory
         */
        readonly viewTeamMemberHistory: {
            readonly name: "ViewTeamMemberHistory";
            readonly I: typeof TeamMemberHistoryRequest;
            readonly O: typeof TeamsMembersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists active, approved team member associations using robust pagination controls.
         *
         * This read-only query is optimized for frontend data grids viewing large teams, supporting explicit windowing parameters (count and offset) while restricting results to fully authorized members.
         *
         * @generated from rpc Scailo.TeamsService.ViewPaginatedApprovedTeamMembers
         */
        readonly viewPaginatedApprovedTeamMembers: {
            readonly name: "ViewPaginatedApprovedTeamMembers";
            readonly I: typeof TeamMembersSearchRequest;
            readonly O: typeof TeamsServicePaginatedMembersResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists pending or unapproved team member associations using robust pagination controls.
         *
         * This read-only query is optimized for administrative review dashboards handling high volumes of onboarding requests.
         *
         * @generated from rpc Scailo.TeamsService.ViewPaginatedUnapprovedTeamMembers
         */
        readonly viewPaginatedUnapprovedTeamMembers: {
            readonly name: "ViewPaginatedUnapprovedTeamMembers";
            readonly I: typeof TeamMembersSearchRequest;
            readonly O: typeof TeamsServicePaginatedMembersResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Searches through all team member records using advanced filters, status flags, and pagination tokens.
         *
         * This read-only query is the primary entry point for complex, multi-attribute personnel lookups within a team, commonly utilized by HR and administrative reporting views.
         *
         * @generated from rpc Scailo.TeamsService.SearchMembersWithPagination
         */
        readonly searchMembersWithPagination: {
            readonly name: "SearchMembersWithPagination";
            readonly I: typeof TeamMembersSearchRequest;
            readonly O: typeof TeamsServicePaginatedMembersResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves all team profiles that a specified user is associated with as a standard member.
         *
         * This read-only query executes a reverse lookup to determine a user's cross-functional footprint within the organization. It explicitly excludes teams where the user is designated strictly as the top-level Team Lead.
         *
         * @generated from rpc Scailo.TeamsService.ViewTeamsForMember
         */
        readonly viewTeamsForMember: {
            readonly name: "ViewTeamsForMember";
            readonly I: typeof Identifier;
            readonly O: typeof TeamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.TeamsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Team;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.TeamsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Team;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.TeamsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof Team;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.TeamsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Team;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.TeamsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof TeamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.TeamsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof TeamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.TeamsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof TeamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.TeamsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof TeamsServicePaginationReq;
            readonly O: typeof TeamsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a free-text search across records using a search key.
         *
         * @generated from rpc Scailo.TeamsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof TeamsServiceSearchAllReq;
            readonly O: typeof TeamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.TeamsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof TeamsServiceFilterReq;
            readonly O: typeof TeamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.TeamsService.CountInStatus
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
         * @generated from rpc Scailo.TeamsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof TeamsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.TeamsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof TeamsServiceFilterReq;
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
         * @generated from rpc Scailo.TeamsService.ImportFromCSV
         */
        readonly importFromCSV: {
            readonly name: "ImportFromCSV";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=teams.scailo_connect.d.ts.map