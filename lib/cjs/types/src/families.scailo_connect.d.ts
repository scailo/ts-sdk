import { FamiliesList, FamiliesServiceCountReq, FamiliesServiceCreateRequest, FamiliesServiceFilterReq, FamiliesServiceImageCreateRequest, FamiliesServiceImageUpdateRequest, FamiliesServiceLabelCreateRequest, FamiliesServicePaginationReq, FamiliesServicePaginationResponse, FamiliesServiceQCGroupCreateRequest, FamiliesServiceSearchAllReq, FamiliesServiceStorageCreateRequest, FamiliesServiceUnitConversionCreateRequest, FamiliesServiceUnitConversionPresenceRequest, FamiliesServiceUpdateMinStockToMaintainRequest, FamiliesServiceUpdatePriceRequest, FamiliesServiceUpdateRequest, Family, FamilyImage, FamilyImagesList, FamilyLabel, FamilyLabelsList, FamilyQCGroup, FamilyQCGroupsList, FamilyStorage, FamilyStoragesList, FamilyTypesList, FamilyUnitConversion, FamilyUnitConversionsList } from "./families.scailo_pb.js";
import { ActiveStatus, AmendmentLogsList, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithUserComment, IdentifierWithUserComment, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each family
 *
 * @generated from service Scailo.FamiliesService
 */
export declare const FamiliesService: {
    readonly typeName: "Scailo.FamiliesService";
    readonly methods: {
        /**
         * Create and send for verification
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
         * Amend the family and send for revision
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
         * Updates the price of the family with the given UUID
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
         * Updates the price of all the families mentioned in the file
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
         * Updates the minimim stock to maintain for the family with the given UUID
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
         * Updates the minimum stock to maintain for all the families mentioned in the file
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
        /**
         * Add a storage
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
         * Approve a storage
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
         * Delete a storage
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
         * View a storage for the given ID
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
         * View all storages for given family ID
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
         * Add a label
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
         * Approve a label
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
         * Delete a label
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
         * View a label for the given ID
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
         * View all labels for given family ID
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
         * View all labels for given family IDs
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
         * Add a unit conversion
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
         * Approve a unit conversion
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
         * Delete a unit conversion
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
         * View a unit conversion for the given ID
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
         * View all unit conversions for given family ID
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
         * View the unit conversion for the given family ID and the given uom ID
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
         * Add a qc group
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
         * Approve a qc group
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
         * Delete a qc group
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
         * View a qc group for the given ID
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
         * View all qc groups for given family ID
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
         * Add a image
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
         * Modify an image
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
         * Approve a image
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
         * Delete a image
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
         * View a image for the given ID
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
         * View all images for given family ID
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
         * View public images for given family ID
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
         * View only essential components of the family (without logs)
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
         * View only essential components of the family (without logs) that matches the given code
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
         * View only essential components of the family (without logs) that matches the given UUID
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
         * View all families with the given IDs
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
         * View all families with required quantity greater than 0 from the given family types
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
         * View all the amendments made
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
    };
};
//# sourceMappingURL=families.scailo_connect.d.ts.map