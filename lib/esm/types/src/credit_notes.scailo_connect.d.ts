import { CreditNote, CreditNoteAncillaryParameters, CreditNoteItem, CreditNoteItemHistoryRequest, CreditNoteItemProspectiveInfoRequest, CreditNoteItemsList, CreditNoteItemsSearchRequest, CreditNoteReference, CreditNoteReferencesList, CreditNoteReturnStatisticsList, CreditNotesList, CreditNotesServiceAlreadyAddedQuantityForSourceRequest, CreditNotesServiceAutofillRequest, CreditNotesServiceCountReq, CreditNotesServiceCreateRequest, CreditNotesServiceFilterReq, CreditNotesServiceItemCreateRequest, CreditNotesServiceItemUpdateRequest, CreditNotesServicePaginatedItemsResponse, CreditNotesServicePaginationReq, CreditNotesServicePaginationResponse, CreditNotesServiceReferenceCreateRequest, CreditNotesServiceSearchAllReq, CreditNotesServiceUpdateRequest } from "./credit_notes.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq, StandardFile, SumResponse } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each credit note
 *
 * @generated from service Scailo.CreditNotesService
 */
export declare const CreditNotesService: {
    readonly typeName: "Scailo.CreditNotesService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.CreditNotesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof CreditNotesServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.CreditNotesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof CreditNotesServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.CreditNotesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof CreditNotesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.CreditNotesService.SendForVerification
         */
        readonly sendForVerification: {
            readonly name: "SendForVerification";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Verify
         *
         * @generated from rpc Scailo.CreditNotesService.Verify
         */
        readonly verify: {
            readonly name: "Verify";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve
         *
         * @generated from rpc Scailo.CreditNotesService.Approve
         */
        readonly approve: {
            readonly name: "Approve";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send For Revision
         *
         * @generated from rpc Scailo.CreditNotesService.SendForRevision
         */
        readonly sendForRevision: {
            readonly name: "SendForRevision";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update revision
         *
         * @generated from rpc Scailo.CreditNotesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof CreditNotesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.CreditNotesService.Halt
         */
        readonly halt: {
            readonly name: "Halt";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Discard
         *
         * @generated from rpc Scailo.CreditNotesService.Discard
         */
        readonly discard: {
            readonly name: "Discard";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore
         *
         * @generated from rpc Scailo.CreditNotesService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Complete
         *
         * @generated from rpc Scailo.CreditNotesService.Complete
         */
        readonly complete: {
            readonly name: "Complete";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Repeat
         *
         * @generated from rpc Scailo.CreditNotesService.Repeat
         */
        readonly repeat: {
            readonly name: "Repeat";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reopen
         *
         * @generated from rpc Scailo.CreditNotesService.Reopen
         */
        readonly reopen: {
            readonly name: "Reopen";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add comment
         *
         * @generated from rpc Scailo.CreditNotesService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send Email
         *
         * @generated from rpc Scailo.CreditNotesService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the credit note
         *
         * @generated from rpc Scailo.CreditNotesService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof CreditNotesServiceAutofillRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create a magic link
         *
         * @generated from rpc Scailo.CreditNotesService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a credit note
         *
         * @generated from rpc Scailo.CreditNotesService.AddCreditNoteItem
         */
        readonly addCreditNoteItem: {
            readonly name: "AddCreditNoteItem";
            readonly I: typeof CreditNotesServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a credit note
         *
         * @generated from rpc Scailo.CreditNotesService.ModifyCreditNoteItem
         */
        readonly modifyCreditNoteItem: {
            readonly name: "ModifyCreditNoteItem";
            readonly I: typeof CreditNotesServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a credit note
         *
         * @generated from rpc Scailo.CreditNotesService.ApproveCreditNoteItem
         */
        readonly approveCreditNoteItem: {
            readonly name: "ApproveCreditNoteItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a credit note
         *
         * @generated from rpc Scailo.CreditNotesService.DeleteCreditNoteItem
         */
        readonly deleteCreditNoteItem: {
            readonly name: "DeleteCreditNoteItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a credit note
         *
         * @generated from rpc Scailo.CreditNotesService.ReorderCreditNoteItems
         */
        readonly reorderCreditNoteItems: {
            readonly name: "ReorderCreditNoteItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Credit Note Item by ID
         *
         * @generated from rpc Scailo.CreditNotesService.ViewCreditNoteItemByID
         */
        readonly viewCreditNoteItemByID: {
            readonly name: "ViewCreditNoteItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof CreditNoteItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved credit note items for given credit note ID
         *
         * @generated from rpc Scailo.CreditNotesService.ViewApprovedCreditNoteItems
         */
        readonly viewApprovedCreditNoteItems: {
            readonly name: "ViewApprovedCreditNoteItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof CreditNoteItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved credit note items for given credit note ID
         *
         * @generated from rpc Scailo.CreditNotesService.ViewUnapprovedCreditNoteItems
         */
        readonly viewUnapprovedCreditNoteItems: {
            readonly name: "ViewUnapprovedCreditNoteItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof CreditNoteItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the credit note item
         *
         * @generated from rpc Scailo.CreditNotesService.ViewCreditNoteItemHistory
         */
        readonly viewCreditNoteItemHistory: {
            readonly name: "ViewCreditNoteItemHistory";
            readonly I: typeof CreditNoteItemHistoryRequest;
            readonly O: typeof CreditNoteItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved credit note items for given credit note ID with pagination
         *
         * @generated from rpc Scailo.CreditNotesService.ViewPaginatedApprovedCreditNoteItems
         */
        readonly viewPaginatedApprovedCreditNoteItems: {
            readonly name: "ViewPaginatedApprovedCreditNoteItems";
            readonly I: typeof CreditNoteItemsSearchRequest;
            readonly O: typeof CreditNotesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved credit note items for given credit note ID with pagination
         *
         * @generated from rpc Scailo.CreditNotesService.ViewPaginatedUnapprovedCreditNoteItems
         */
        readonly viewPaginatedUnapprovedCreditNoteItems: {
            readonly name: "ViewPaginatedUnapprovedCreditNoteItems";
            readonly I: typeof CreditNoteItemsSearchRequest;
            readonly O: typeof CreditNotesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through credit note items with pagination
         *
         * @generated from rpc Scailo.CreditNotesService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof CreditNoteItemsSearchRequest;
            readonly O: typeof CreditNotesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file with the associated line items. The same file could then be used to upload line items.
         *
         * @generated from rpc Scailo.CreditNotesService.DownloadItemsAsCSV
         */
        readonly downloadItemsAsCSV: {
            readonly name: "DownloadItemsAsCSV";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the CSV template that could be used to upload items
         *
         * @generated from rpc Scailo.CreditNotesService.DownloadItemsTemplateAsCSV
         */
        readonly downloadItemsTemplateAsCSV: {
            readonly name: "DownloadItemsTemplateAsCSV";
            readonly I: typeof Empty;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Upload items using a CSV file. This is an idempotent operation. All the existing items are deleted before adding the items from the file.
         *
         * @generated from rpc Scailo.CreditNotesService.UploadCreditNoteItems
         */
        readonly uploadCreditNoteItems: {
            readonly name: "UploadCreditNoteItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a reference
         *
         * @generated from rpc Scailo.CreditNotesService.AddCreditNoteReference
         */
        readonly addCreditNoteReference: {
            readonly name: "AddCreditNoteReference";
            readonly I: typeof CreditNotesServiceReferenceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a reference
         *
         * @generated from rpc Scailo.CreditNotesService.ApproveCreditNoteReference
         */
        readonly approveCreditNoteReference: {
            readonly name: "ApproveCreditNoteReference";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a reference
         *
         * @generated from rpc Scailo.CreditNotesService.DeleteCreditNoteReference
         */
        readonly deleteCreditNoteReference: {
            readonly name: "DeleteCreditNoteReference";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View a reference for the given ID
         *
         * @generated from rpc Scailo.CreditNotesService.ViewCreditNoteReferenceByID
         */
        readonly viewCreditNoteReferenceByID: {
            readonly name: "ViewCreditNoteReferenceByID";
            readonly I: typeof Identifier;
            readonly O: typeof CreditNoteReference;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all references for given credit note ID
         *
         * @generated from rpc Scailo.CreditNotesService.ViewCreditNoteReferences
         */
        readonly viewCreditNoteReferences: {
            readonly name: "ViewCreditNoteReferences";
            readonly I: typeof Identifier;
            readonly O: typeof CreditNoteReferencesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.CreditNotesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof CreditNote;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.CreditNotesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof CreditNote;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by Reference ID (returns the latest record in case of duplicates)
         *
         * @generated from rpc Scailo.CreditNotesService.ViewByReferenceID
         */
        readonly viewByReferenceID: {
            readonly name: "ViewByReferenceID";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof CreditNote;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.CreditNotesService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof CreditNote;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.CreditNotesService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof CreditNote;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.CreditNotesService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof CreditNotesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the ancillary parameters (UUIDs of the internal references) by UUID
         *
         * @generated from rpc Scailo.CreditNotesService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof CreditNoteAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.CreditNotesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof CreditNotesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.CreditNotesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof CreditNotesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.CreditNotesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof CreditNotesServicePaginationReq;
            readonly O: typeof CreditNotesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given credit note
         *
         * @generated from rpc Scailo.CreditNotesService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: {
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Filter prospective families for the record represented by the given UUID identifier
         *
         * @generated from rpc Scailo.CreditNotesService.FilterProspectiveFamilies
         */
        readonly filterProspectiveFamilies: {
            readonly name: "FilterProspectiveFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective credit note item info for the given family ID and credit note ID
         *
         * @generated from rpc Scailo.CreditNotesService.ViewProspectiveCreditNoteItem
         */
        readonly viewProspectiveCreditNoteItem: {
            readonly name: "ViewProspectiveCreditNoteItem";
            readonly I: typeof CreditNoteItemProspectiveInfoRequest;
            readonly O: typeof CreditNotesServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View returned (sales return) statistics of the credit note
         *
         * @generated from rpc Scailo.CreditNotesService.ViewReturnedStatistics
         */
        readonly viewReturnedStatistics: {
            readonly name: "ViewReturnedStatistics";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof CreditNoteReturnStatisticsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the record is downloadable (checks if the custom download function has been implemented)
         *
         * @generated from rpc Scailo.CreditNotesService.IsDownloadable
         */
        readonly isDownloadable: {
            readonly name: "IsDownloadable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download credit note with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.CreditNotesService.DownloadByUUID
         */
        readonly downloadByUUID: {
            readonly name: "DownloadByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View already added quantities
         *
         * @generated from rpc Scailo.CreditNotesService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof CreditNotesServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof DualQuantitiesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.CreditNotesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof CreditNotesServiceSearchAllReq;
            readonly O: typeof CreditNotesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.CreditNotesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof CreditNotesServiceFilterReq;
            readonly O: typeof CreditNotesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.CreditNotesService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count all that match the given criteria
         *
         * @generated from rpc Scailo.CreditNotesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof CreditNotesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the sum of the total value of all the records that match the given criteria
         *
         * @generated from rpc Scailo.CreditNotesService.AccruedValue
         */
        readonly accruedValue: {
            readonly name: "AccruedValue";
            readonly I: typeof CreditNotesServiceCountReq;
            readonly O: typeof SumResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.CreditNotesService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof CreditNotesServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=credit_notes.scailo_connect.d.ts.map