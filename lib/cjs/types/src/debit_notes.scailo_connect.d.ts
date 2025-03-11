import { DebitNote, DebitNoteAncillaryParameters, DebitNoteItem, DebitNoteItemHistoryRequest, DebitNoteItemProspectiveInfoRequest, DebitNoteItemsList, DebitNoteItemsSearchRequest, DebitNoteReference, DebitNoteReferencesList, DebitNotesList, DebitNotesServiceAlreadyAddedQuantityForSourceRequest, DebitNotesServiceAutofillRequest, DebitNotesServiceCountReq, DebitNotesServiceCreateRequest, DebitNotesServiceFilterReq, DebitNotesServiceItemCreateRequest, DebitNotesServiceItemUpdateRequest, DebitNotesServicePaginatedItemsResponse, DebitNotesServicePaginationReq, DebitNotesServicePaginationResponse, DebitNotesServiceReferenceCreateRequest, DebitNotesServiceSearchAllReq, DebitNotesServiceUpdateRequest } from "./debit_notes.scailo_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Identifier, IdentifierResponse, IdentifierUUID, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each debit note
 *
 * @generated from service Scailo.DebitNotesService
 */
export declare const DebitNotesService: {
    readonly typeName: "Scailo.DebitNotesService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.DebitNotesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof DebitNotesServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.DebitNotesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof DebitNotesServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.DebitNotesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof DebitNotesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.DebitNotesService.SendForVerification
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
         * @generated from rpc Scailo.DebitNotesService.Verify
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
         * @generated from rpc Scailo.DebitNotesService.Approve
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
         * @generated from rpc Scailo.DebitNotesService.SendForRevision
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
         * @generated from rpc Scailo.DebitNotesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof DebitNotesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.DebitNotesService.Halt
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
         * @generated from rpc Scailo.DebitNotesService.Discard
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
         * @generated from rpc Scailo.DebitNotesService.Restore
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
         * @generated from rpc Scailo.DebitNotesService.Complete
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
         * @generated from rpc Scailo.DebitNotesService.Repeat
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
         * @generated from rpc Scailo.DebitNotesService.Reopen
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
         * @generated from rpc Scailo.DebitNotesService.CommentAdd
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
         * @generated from rpc Scailo.DebitNotesService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the debit note
         *
         * @generated from rpc Scailo.DebitNotesService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof DebitNotesServiceAutofillRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a debit note
         *
         * @generated from rpc Scailo.DebitNotesService.AddDebitNoteItem
         */
        readonly addDebitNoteItem: {
            readonly name: "AddDebitNoteItem";
            readonly I: typeof DebitNotesServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a debit note
         *
         * @generated from rpc Scailo.DebitNotesService.ModifyDebitNoteItem
         */
        readonly modifyDebitNoteItem: {
            readonly name: "ModifyDebitNoteItem";
            readonly I: typeof DebitNotesServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a debit note
         *
         * @generated from rpc Scailo.DebitNotesService.ApproveDebitNoteItem
         */
        readonly approveDebitNoteItem: {
            readonly name: "ApproveDebitNoteItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a debit note
         *
         * @generated from rpc Scailo.DebitNotesService.DeleteDebitNoteItem
         */
        readonly deleteDebitNoteItem: {
            readonly name: "DeleteDebitNoteItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a debit note
         *
         * @generated from rpc Scailo.DebitNotesService.ReorderDebitNoteItems
         */
        readonly reorderDebitNoteItems: {
            readonly name: "ReorderDebitNoteItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Debit Note Item by ID
         *
         * @generated from rpc Scailo.DebitNotesService.ViewDebitNoteItemByID
         */
        readonly viewDebitNoteItemByID: {
            readonly name: "ViewDebitNoteItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof DebitNoteItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved debit note items for given debit note ID
         *
         * @generated from rpc Scailo.DebitNotesService.ViewApprovedDebitNoteItems
         */
        readonly viewApprovedDebitNoteItems: {
            readonly name: "ViewApprovedDebitNoteItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof DebitNoteItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved debit note items for given debit note ID
         *
         * @generated from rpc Scailo.DebitNotesService.ViewUnapprovedDebitNoteItems
         */
        readonly viewUnapprovedDebitNoteItems: {
            readonly name: "ViewUnapprovedDebitNoteItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof DebitNoteItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the debit note item
         *
         * @generated from rpc Scailo.DebitNotesService.ViewDebitNoteItemHistory
         */
        readonly viewDebitNoteItemHistory: {
            readonly name: "ViewDebitNoteItemHistory";
            readonly I: typeof DebitNoteItemHistoryRequest;
            readonly O: typeof DebitNoteItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved debit note items for given debit note ID with pagination
         *
         * @generated from rpc Scailo.DebitNotesService.ViewPaginatedApprovedDebitNoteItems
         */
        readonly viewPaginatedApprovedDebitNoteItems: {
            readonly name: "ViewPaginatedApprovedDebitNoteItems";
            readonly I: typeof DebitNoteItemsSearchRequest;
            readonly O: typeof DebitNotesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved debit note items for given debit note ID with pagination
         *
         * @generated from rpc Scailo.DebitNotesService.ViewPaginatedUnapprovedDebitNoteItems
         */
        readonly viewPaginatedUnapprovedDebitNoteItems: {
            readonly name: "ViewPaginatedUnapprovedDebitNoteItems";
            readonly I: typeof DebitNoteItemsSearchRequest;
            readonly O: typeof DebitNotesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through debit note items with pagination
         *
         * @generated from rpc Scailo.DebitNotesService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof DebitNoteItemsSearchRequest;
            readonly O: typeof DebitNotesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a reference
         *
         * @generated from rpc Scailo.DebitNotesService.AddDebitNoteReference
         */
        readonly addDebitNoteReference: {
            readonly name: "AddDebitNoteReference";
            readonly I: typeof DebitNotesServiceReferenceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a reference
         *
         * @generated from rpc Scailo.DebitNotesService.ApproveDebitNoteReference
         */
        readonly approveDebitNoteReference: {
            readonly name: "ApproveDebitNoteReference";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a reference
         *
         * @generated from rpc Scailo.DebitNotesService.DeleteDebitNoteReference
         */
        readonly deleteDebitNoteReference: {
            readonly name: "DeleteDebitNoteReference";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View a reference for the given ID
         *
         * @generated from rpc Scailo.DebitNotesService.ViewDebitNoteReferenceByID
         */
        readonly viewDebitNoteReferenceByID: {
            readonly name: "ViewDebitNoteReferenceByID";
            readonly I: typeof Identifier;
            readonly O: typeof DebitNoteReference;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all references for given debit note ID
         *
         * @generated from rpc Scailo.DebitNotesService.ViewDebitNoteReferences
         */
        readonly viewDebitNoteReferences: {
            readonly name: "ViewDebitNoteReferences";
            readonly I: typeof Identifier;
            readonly O: typeof DebitNoteReferencesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.DebitNotesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof DebitNote;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.DebitNotesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof DebitNote;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the ancillary parameters (UUIDs of the internal references) by UUID
         *
         * @generated from rpc Scailo.DebitNotesService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof DebitNoteAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.DebitNotesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof DebitNotesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.DebitNotesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof DebitNotesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.DebitNotesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof DebitNotesServicePaginationReq;
            readonly O: typeof DebitNotesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given debit note
         *
         * @generated from rpc Scailo.DebitNotesService.ViewProspectiveFamilies
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
         * @generated from rpc Scailo.DebitNotesService.FilterProspectiveFamilies
         */
        readonly filterProspectiveFamilies: {
            readonly name: "FilterProspectiveFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective debit note item info for the given family ID and debit note ID
         *
         * @generated from rpc Scailo.DebitNotesService.ViewProspectiveDebitNoteItem
         */
        readonly viewProspectiveDebitNoteItem: {
            readonly name: "ViewProspectiveDebitNoteItem";
            readonly I: typeof DebitNoteItemProspectiveInfoRequest;
            readonly O: typeof DebitNotesServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Other view operations
         * Download debit note with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.DebitNotesService.DownloadByUUID
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
         * @generated from rpc Scailo.DebitNotesService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof DebitNotesServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof DualQuantitiesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.DebitNotesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof DebitNotesServiceSearchAllReq;
            readonly O: typeof DebitNotesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.DebitNotesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof DebitNotesServiceFilterReq;
            readonly O: typeof DebitNotesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.DebitNotesService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given count criteria
         *
         * @generated from rpc Scailo.DebitNotesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof DebitNotesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=debit_notes.scailo_connect.d.ts.map