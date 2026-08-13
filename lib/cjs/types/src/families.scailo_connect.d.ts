import { FamiliesList, FamiliesServiceCountReq, FamiliesServiceCreateRequest, FamiliesServiceFilterReq, FamiliesServiceImageCreateRequest, FamiliesServiceImageUpdateRequest, FamiliesServiceLabelCreateRequest, FamiliesServicePaginationReq, FamiliesServicePaginationResponse, FamiliesServiceQCGroupCreateRequest, FamiliesServiceSearchAllReq, FamiliesServiceStorageCreateRequest, FamiliesServiceUnitConversionCreateRequest, FamiliesServiceUnitConversionPresenceRequest, FamiliesServiceUpdateIdentityRequest, FamiliesServiceUpdateMinStockToMaintainRequest, FamiliesServiceUpdatePriceRequest, FamiliesServiceUpdateRequest, Family, FamilyImage, FamilyImagesList, FamilyLabel, FamilyLabelsList, FamilyQCGroup, FamilyQCGroupsList, FamilyStorage, FamilyStoragesList, FamilyTypesList, FamilyUnitConversion, FamilyUnitConversionsList } from "./families.scailo_pb.js";
import { ActiveStatus, AmendmentLogsList, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithUserComment, IdentifierWithUserComment, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { VaultFolderAttachRequest } from "./vault_folders.scailo_pb.js";
/**
 *
 * The FamiliesService manages the full lifecycle of family records.
 * It provides standard CRUD operations alongside a robust state machine for
 * verification, manager approval, and completion.
 *
 * @generated from service Scailo.FamiliesService
 */
export declare const FamiliesService: {
    readonly typeName: "Scailo.FamiliesService";
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
         * - `INVALID_ARGUMENT`: If validation rules fail.
         *
         * @generated from rpc Scailo.FamiliesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof FamiliesServiceCreateRequest;
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
         * @generated from rpc Scailo.FamiliesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof FamiliesServiceCreateRequest;
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
         * @generated from rpc Scailo.FamiliesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof FamiliesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Code Generation Logic:
         * If `parent_id` > 0, the system automatically prefixes the parent family's
         * code to the provided `code` before persistence (e.g., "PARENT_CODE.SUB_CODE").
         *
         * Preconditions:
         * - The family must be in `DRAFT` or `REVISION` state.
         * - The family `amendment_count` must be 0 (never previously approved).
         *
         * Errors:
         * - `FAILED_PRECONDITION`: If the family has been approved previously (amendment_count > 0).
         * - `INVALID_ARGUMENT`: If the hierarchy (parent_id/is_leaf) is self-referential or cyclic.
         * - `NOT_FOUND`: If the Family ID or the specified `parent_id` does not exist.
         *
         * @generated from rpc Scailo.FamiliesService.UpdateIdentity
         */
        readonly updateIdentity: {
            readonly name: "UpdateIdentity";
            readonly I: typeof FamiliesServiceUpdateIdentityRequest;
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
         * @generated from rpc Scailo.FamiliesService.SendForVerification
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
         * @generated from rpc Scailo.FamiliesService.Verify
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
         * @generated from rpc Scailo.FamiliesService.Approve
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
         * @generated from rpc Scailo.FamiliesService.SendForRevision
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
         * @generated from rpc Scailo.FamiliesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof FamiliesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.FamiliesService.Halt
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
         * @generated from rpc Scailo.FamiliesService.Discard
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
         * @generated from rpc Scailo.FamiliesService.Restore
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
         * @generated from rpc Scailo.FamiliesService.CommentAdd
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
         * @generated from rpc Scailo.FamiliesService.AttachVaultFolder
         */
        readonly attachVaultFolder: {
            readonly name: "AttachVaultFolder";
            readonly I: typeof VaultFolderAttachRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Initiates a formal amendment process for a specific record, transitioning it into a structured revision workflow.
         *
         * This API is utilized when substantive modifications are required for an already finalized or approved record.
         * Rather than mutating the active data directly, it explicitly triggers a compliance-driven revision cycle,
         * ensuring that all proposed changes are tracked and undergo standard review and authorization procedures.
         *
         * **Side Effects & Lifecycle:**
         * * The record's internal amendment count property is strictly incremented by 1.
         * * The record is placed into a pending revision state, typically preserving the availability of the currently approved version until the amendment is finalized.
         * * The optional user comment is permanently appended to the record's audit log as the formal justification for initiating the change.
         *
         * @generated from rpc Scailo.FamiliesService.Amend
         */
        readonly amend: {
            readonly name: "Amend";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Updates the standard base unit price of an existing family identified by its UUID.
         *
         * **Side Effects:**
         * - Mutates the active unit price configuration for the family.
         * - Appends an audit trail entry tracking the price change and the justification comment.
         *
         * @generated from rpc Scailo.FamiliesService.UpdatePrice
         */
        readonly updatePrice: {
            readonly name: "UpdatePrice";
            readonly I: typeof FamiliesServiceUpdatePriceRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Processes a batch ingestion to update unit prices across multiple families via a CSV file.
         *
         * **Side Effects:**
         * - Parses the uploaded document and applies the respective price updates in bulk.
         * - Validates the payload structure and triggers audit trail logging for each successfully modified record.
         *
         * @generated from rpc Scailo.FamiliesService.UploadPrices
         */
        readonly uploadPrices: {
            readonly name: "UploadPrices";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Updates the minimum inventory threshold (safety stock) required for a family identified by its UUID.
         *
         * **Side Effects:**
         * - Mutates the active minimum stock configuration.
         * - May influence downstream automated restock alerts or procurement triggers based on the new threshold.
         * - Appends an audit trail entry tracking the threshold change.
         *
         * @generated from rpc Scailo.FamiliesService.UpdateMinStockToMaintain
         */
        readonly updateMinStockToMaintain: {
            readonly name: "UpdateMinStockToMaintain";
            readonly I: typeof FamiliesServiceUpdateMinStockToMaintainRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Processes a batch ingestion to update safety stock thresholds across multiple families via a CSV file.
         *
         * **Side Effects:**
         * - Parses the uploaded document and applies the respective threshold updates in bulk.
         * - Validates the payload and triggers audit trail logging for each successfully modified record.
         *
         * @generated from rpc Scailo.FamiliesService.UploadMinStockToMaintain
         */
        readonly uploadMinStockToMaintain: {
            readonly name: "UploadMinStockToMaintain";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Associates a specific storage location with a family.
         *
         * **Side Effects:**
         * - Creates a structural mapping dictating where items of this family are authorized to be stored.
         * - Depending on system configurations, may place this mapping into a pending approval state.
         *
         * @generated from rpc Scailo.FamiliesService.AddStorage
         */
        readonly addStorage: {
            readonly name: "AddStorage";
            readonly I: typeof FamiliesServiceStorageCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approves a pending storage location mapping, finalizing its availability for inventory placement.
         *
         * **Side Effects:**
         * - Activates the storage mapping for downstream warehousing and put-away workflows.
         * - Appends the required approval metadata and audit comment to the record history.
         *
         * @generated from rpc Scailo.FamiliesService.ApproveStorage
         */
        readonly approveStorage: {
            readonly name: "ApproveStorage";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Permanently removes or deactivates a storage location association from a family profile.
         *
         * **Side Effects:**
         * - Revokes authorization to utilize this specific storage node for this family.
         * - Logs the deletion justification comment into the system compliance log.
         *
         * @generated from rpc Scailo.FamiliesService.DeleteStorage
         */
        readonly deleteStorage: {
            readonly name: "DeleteStorage";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the granular details of a specific family storage association by its internal sequence ID.
         *
         * This is a read-only operation that fetches the complete mapping metadata and approval history.
         *
         * @generated from rpc Scailo.FamiliesService.ViewStorageByID
         */
        readonly viewStorageByID: {
            readonly name: "ViewStorageByID";
            readonly I: typeof Identifier;
            readonly O: typeof FamilyStorage;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists all authorized and pending storage locations mapped to a specific family.
         *
         * This read-only query is optimized for warehousing operations to determine valid put-away or picking destinations.
         *
         * @generated from rpc Scailo.FamiliesService.ViewStorages
         */
        readonly viewStorages: {
            readonly name: "ViewStorages";
            readonly I: typeof Identifier;
            readonly O: typeof FamilyStoragesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Associates a categorization label or taxonomy tag with a family.
         *
         * **Side Effects:**
         * - Creates a structural mapping used for reporting and filtering.
         * - May place this mapping into a pending approval state based on configuration.
         *
         * @generated from rpc Scailo.FamiliesService.AddLabel
         */
        readonly addLabel: {
            readonly name: "AddLabel";
            readonly I: typeof FamiliesServiceLabelCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approves a pending label mapping, finalizing its application to the family.
         *
         * **Side Effects:**
         * - Activates the label association for downstream search and filtering workflows.
         * - Appends the required approval metadata and audit comment.
         *
         * @generated from rpc Scailo.FamiliesService.ApproveLabel
         */
        readonly approveLabel: {
            readonly name: "ApproveLabel";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Permanently removes a categorization label association from a family profile.
         *
         * **Side Effects:**
         * - Revokes the taxonomy tag from the family.
         * - Logs the deletion justification comment into the compliance log.
         *
         * @generated from rpc Scailo.FamiliesService.DeleteLabel
         */
        readonly deleteLabel: {
            readonly name: "DeleteLabel";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the granular details of a specific family label association by its internal sequence ID.
         *
         * This is a read-only operation that fetches the mapping metadata and approval history.
         *
         * @generated from rpc Scailo.FamiliesService.ViewLabelByID
         */
        readonly viewLabelByID: {
            readonly name: "ViewLabelByID";
            readonly I: typeof Identifier;
            readonly O: typeof FamilyLabel;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists all categorization labels mapped to a specific family.
         *
         * This read-only query aggregates the active tags utilized for reporting and display purposes for a single family.
         *
         * @generated from rpc Scailo.FamiliesService.ViewLabels
         */
        readonly viewLabels: {
            readonly name: "ViewLabels";
            readonly I: typeof Identifier;
            readonly O: typeof FamilyLabelsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists all categorization labels mapped across an array of specified families.
         *
         * This read-only bulk query is optimized for data grids and broad catalog views, fetching taxonomy tags for multiple families simultaneously to reduce round-trips.
         *
         * @generated from rpc Scailo.FamiliesService.ViewLabelsForFamilyIDs
         */
        readonly viewLabelsForFamilyIDs: {
            readonly name: "ViewLabelsForFamilyIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof FamilyLabelsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Associates a mathematical unit conversion rule (base UOM to alternate UOM) with a family.
         *
         * **Side Effects:**
         * - Validates the structural integrity of the multiplication/division factors.
         * - May place the conversion rule into a pending approval state to ensure procurement accuracy.
         *
         * @generated from rpc Scailo.FamiliesService.AddUnitConversion
         */
        readonly addUnitConversion: {
            readonly name: "AddUnitConversion";
            readonly I: typeof FamiliesServiceUnitConversionCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approves a pending unit conversion rule, finalizing its availability for procurement and inventory math.
         *
         * **Side Effects:**
         * - Activates the conversion rule for downstream ordering and multi-unit transactional workflows.
         * - Appends the required approval metadata and audit comment.
         *
         * @generated from rpc Scailo.FamiliesService.ApproveUnitConversion
         */
        readonly approveUnitConversion: {
            readonly name: "ApproveUnitConversion";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Permanently removes a unit conversion rule from a family profile.
         *
         * **Side Effects:**
         * - Revokes the ability to conduct transactions in the specified alternate unit.
         * - Logs the deletion justification comment into the compliance log.
         *
         * @generated from rpc Scailo.FamiliesService.DeleteUnitConversion
         */
        readonly deleteUnitConversion: {
            readonly name: "DeleteUnitConversion";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the granular details of a specific unit conversion rule by its internal sequence ID.
         *
         * This read-only operation fetches the complete mathematical factors and approval state of the rule.
         *
         * @generated from rpc Scailo.FamiliesService.ViewUnitConversionByID
         */
        readonly viewUnitConversionByID: {
            readonly name: "ViewUnitConversionByID";
            readonly I: typeof Identifier;
            readonly O: typeof FamilyUnitConversion;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists all defined unit conversion rules mapped to a specific family.
         *
         * This read-only query aggregates all alternative units in which this family can be transacted.
         *
         * @generated from rpc Scailo.FamiliesService.ViewUnitConversions
         */
        readonly viewUnitConversions: {
            readonly name: "ViewUnitConversions";
            readonly I: typeof Identifier;
            readonly O: typeof FamilyUnitConversionsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a specific unit conversion rule mapping between a given family and a target alternate UOM.
         *
         * This read-only operation is designed for defensive checking by client applications prior to permitting an order in an alternative unit.
         *
         * @generated from rpc Scailo.FamiliesService.ViewUnitConversionFor
         */
        readonly viewUnitConversionFor: {
            readonly name: "ViewUnitConversionFor";
            readonly I: typeof FamiliesServiceUnitConversionPresenceRequest;
            readonly O: typeof FamilyUnitConversion;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Associates a Quality Control (QC) compliance group with a family.
         *
         * **Side Effects:**
         * - Dictates the specific inspection and compliance workflows required for items within this family.
         * - May place this association into a pending approval state.
         *
         * @generated from rpc Scailo.FamiliesService.AddQCGroup
         */
        readonly addQCGroup: {
            readonly name: "AddQCGroup";
            readonly I: typeof FamiliesServiceQCGroupCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approves a pending QC group association, finalizing its enforcement on the family.
         *
         * **Side Effects:**
         * - Activates the QC requirement for downstream intake, production, or fulfillment workflows.
         * - Appends the required approval metadata and audit comment.
         *
         * @generated from rpc Scailo.FamiliesService.ApproveQCGroup
         */
        readonly approveQCGroup: {
            readonly name: "ApproveQCGroup";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Permanently removes a QC group association from a family profile.
         *
         * **Side Effects:**
         * - Revokes the specified inspection workflow requirement from this family.
         * - Logs the deletion justification comment into the compliance log.
         *
         * @generated from rpc Scailo.FamiliesService.DeleteQCGroup
         */
        readonly deleteQCGroup: {
            readonly name: "DeleteQCGroup";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the granular details of a specific family QC group association by its internal sequence ID.
         *
         * This read-only operation fetches the complete mapping metadata and approval history.
         *
         * @generated from rpc Scailo.FamiliesService.ViewQCGroupByID
         */
        readonly viewQCGroupByID: {
            readonly name: "ViewQCGroupByID";
            readonly I: typeof Identifier;
            readonly O: typeof FamilyQCGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists all Quality Control groups mapped to a specific family.
         *
         * This read-only query aggregates the suite of compliance inspections mandated for this family.
         *
         * @generated from rpc Scailo.FamiliesService.ViewQCGroups
         */
        readonly viewQCGroups: {
            readonly name: "ViewQCGroups";
            readonly I: typeof Identifier;
            readonly O: typeof FamilyQCGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Attaches an uploaded visual asset (vault file) to a family.
         *
         * **Side Effects:**
         * - Binds a document vault file to the family.
         * - Defines the image's display sequence and visibility scope (internal vs. public).
         * - May place the image association into a pending approval state.
         *
         * @generated from rpc Scailo.FamiliesService.AddImage
         */
        readonly addImage: {
            readonly name: "AddImage";
            readonly I: typeof FamiliesServiceImageCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Updates the display sequence or public visibility flag of an existing family image attachment.
         *
         * **Side Effects:**
         * - Modifies the presentation metadata without replacing the underlying vault file.
         * - Appends an audit trail entry tracking the metadata shift.
         *
         * @generated from rpc Scailo.FamiliesService.UpdateImage
         */
        readonly updateImage: {
            readonly name: "UpdateImage";
            readonly I: typeof FamiliesServiceImageUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approves a pending image attachment, finalizing its visibility.
         *
         * **Side Effects:**
         * - Activates the visual asset for display in catalogs and technical reference views.
         * - Appends the required approval metadata and audit comment.
         *
         * @generated from rpc Scailo.FamiliesService.ApproveImage
         */
        readonly approveImage: {
            readonly name: "ApproveImage";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Permanently removes a visual asset attachment from a family profile.
         *
         * **Side Effects:**
         * - Revokes catalog visibility for the image and breaks the linkage to the vault file.
         * - Logs the deletion justification comment into the compliance log.
         *
         * @generated from rpc Scailo.FamiliesService.DeleteImage
         */
        readonly deleteImage: {
            readonly name: "DeleteImage";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the granular details and metadata of a specific image attachment by its internal sequence ID.
         *
         * This read-only operation fetches the vault file reference, visibility flags, and approval state.
         *
         * @generated from rpc Scailo.FamiliesService.ViewImageByID
         */
        readonly viewImageByID: {
            readonly name: "ViewImageByID";
            readonly I: typeof Identifier;
            readonly O: typeof FamilyImage;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists all images (both internal and public) attached to a specific family.
         *
         * This read-only query is optimized for internal administrative dashboards and catalog management workflows.
         *
         * @generated from rpc Scailo.FamiliesService.ViewImages
         */
        readonly viewImages: {
            readonly name: "ViewImages";
            readonly I: typeof Identifier;
            readonly O: typeof FamilyImagesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists only the publicly flagged images attached to a specific family.
         *
         * This read-only query is optimized for external, customer-facing storefronts and public catalogs, guaranteeing internal assets remain hidden.
         *
         * @generated from rpc Scailo.FamiliesService.ViewPublicImages
         */
        readonly viewPublicImages: {
            readonly name: "ViewPublicImages";
            readonly I: typeof Identifier;
            readonly O: typeof FamilyImagesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.FamiliesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Family;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.FamiliesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Family;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.FamiliesService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof Family;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by its unique code excluding high-volume fields like logs.
         *
         * @generated from rpc Scailo.FamiliesService.ViewEssentialByCode
         */
        readonly viewEssentialByCode: {
            readonly name: "ViewEssentialByCode";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof Family;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.FamiliesService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Family;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.FamiliesService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.FamiliesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.FamiliesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.FamiliesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof FamiliesServicePaginationReq;
            readonly O: typeof FamiliesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves all family records across specified family types that currently have an operational deficit (required quantity > 0).
         *
         * This read-only query is utilized heavily by procurement and manufacturing dashboards to identify and track pending demand, material shortages, and active requisitions.
         *
         * @generated from rpc Scailo.FamiliesService.ViewAllRequirable
         */
        readonly viewAllRequirable: {
            readonly name: "ViewAllRequirable";
            readonly I: typeof FamilyTypesList;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the comprehensive, chronological history of formal amendments applied to a specific record.
         *
         * This read-only query exposes the complete audit trail of revision workflows that the entity has undergone.
         * It is explicitly designed to support compliance checks, historical tracking, and administrative reviews by
         * detailing exactly how and when a record evolved over its lifecycle.
         *
         * **Side Effects & Lifecycle:**
         * * This is a strictly read-only operation; the underlying record and its current lifecycle state remain entirely unchanged.
         * * Aggregates and returns a sequential log of amendment events, which typically include revision counts, initiation timestamps, and the justification comments provided when the amendments were triggered.
         *
         * @generated from rpc Scailo.FamiliesService.ViewAmendments
         */
        readonly viewAmendments: {
            readonly name: "ViewAmendments";
            readonly I: typeof Identifier;
            readonly O: typeof AmendmentLogsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a free-text search across records using a search key.
         *
         * @generated from rpc Scailo.FamiliesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof FamiliesServiceSearchAllReq;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.FamiliesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof FamiliesServiceFilterReq;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all families for purchase that match the given search key
         *
         * @generated from rpc Scailo.FamiliesService.SearchForPurchase
         * @deprecated
         */
        readonly searchForPurchase: {
            readonly name: "SearchForPurchase";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all families for sale that match the given search key
         *
         * @generated from rpc Scailo.FamiliesService.SearchForSale
         * @deprecated
         */
        readonly searchForSale: {
            readonly name: "SearchForSale";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all families for production that match the given search key
         *
         * @generated from rpc Scailo.FamiliesService.SearchForProduction
         * @deprecated
         */
        readonly searchForProduction: {
            readonly name: "SearchForProduction";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all families for replaceables that match the given search key
         *
         * @generated from rpc Scailo.FamiliesService.SearchForReplaceables
         * @deprecated
         */
        readonly searchForReplaceables: {
            readonly name: "SearchForReplaceables";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all families for equation family that match the given search key
         *
         * @generated from rpc Scailo.FamiliesService.SearchForEquationFamily
         * @deprecated
         */
        readonly searchForEquationFamily: {
            readonly name: "SearchForEquationFamily";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all families for equation replaceable that match the given search key
         *
         * @generated from rpc Scailo.FamiliesService.SearchForEquationReplaceable
         * @deprecated
         */
        readonly searchForEquationReplaceable: {
            readonly name: "SearchForEquationReplaceable";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all families for equation sales bundle that match the given search key
         *
         * @generated from rpc Scailo.FamiliesService.SearchForEquationSalesBundle
         * @deprecated
         */
        readonly searchForEquationSalesBundle: {
            readonly name: "SearchForEquationSalesBundle";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.FamiliesService.CountInStatus
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
         * @generated from rpc Scailo.FamiliesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof FamiliesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of families according to the given filter request. The same file could also be used as a template for uploading families
         *
         * @generated from rpc Scailo.FamiliesService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof FamiliesServiceFilterReq;
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
         * @generated from rpc Scailo.FamiliesService.ImportFromCSV
         */
        readonly importFromCSV: {
            readonly name: "ImportFromCSV";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=families.scailo_connect.d.ts.map