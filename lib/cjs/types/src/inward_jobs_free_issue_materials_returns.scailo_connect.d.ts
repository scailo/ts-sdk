import { InwardJobFreeIssueMaterialReturn, InwardJobFreeIssueMaterialReturnAncillaryParameters, InwardJobFreeIssueMaterialReturnItem, InwardJobFreeIssueMaterialReturnItemHistoryRequest, InwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest, InwardJobFreeIssueMaterialReturnItemsSearchRequest, InwardJobsFreeIssueMaterialsReturnsItemsList, InwardJobsFreeIssueMaterialsReturnsList, InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest, InwardJobsFreeIssueMaterialsReturnsServiceCountReq, InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest, InwardJobsFreeIssueMaterialsReturnsServiceFilterReq, InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest, InwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest, InwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse, InwardJobsFreeIssueMaterialsReturnsServicePaginationReq, InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse, InwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq, InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest } from "./inward_jobs_free_issue_materials_returns.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each inward job free issue material return
 *
 * @generated from service Scailo.InwardJobsFreeIssueMaterialsReturnsService
 */
export declare const InwardJobsFreeIssueMaterialsReturnsService: {
    readonly typeName: "Scailo.InwardJobsFreeIssueMaterialsReturnsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.SendForVerification
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.Verify
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.Approve
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.SendForRevision
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.Halt
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.Discard
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.Restore
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.Complete
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.Repeat
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.Reopen
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.CommentAdd
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Inward Job Free Issue Material Return can be marked as completed
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a inward job free issue material return
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.AddInwardJobFreeIssueMaterialReturnItem
         */
        readonly addInwardJobFreeIssueMaterialReturnItem: {
            readonly name: "AddInwardJobFreeIssueMaterialReturnItem";
            readonly I: typeof InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a inward job free issue material return
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ModifyInwardJobFreeIssueMaterialReturnItem
         */
        readonly modifyInwardJobFreeIssueMaterialReturnItem: {
            readonly name: "ModifyInwardJobFreeIssueMaterialReturnItem";
            readonly I: typeof InwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a inward job free issue material return
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ApproveInwardJobFreeIssueMaterialReturnItem
         */
        readonly approveInwardJobFreeIssueMaterialReturnItem: {
            readonly name: "ApproveInwardJobFreeIssueMaterialReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a inward job free issue material return
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.DeleteInwardJobFreeIssueMaterialReturnItem
         */
        readonly deleteInwardJobFreeIssueMaterialReturnItem: {
            readonly name: "DeleteInwardJobFreeIssueMaterialReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a inward job free issue material return
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ReorderInwardJobFreeIssueMaterialReturnItems
         */
        readonly reorderInwardJobFreeIssueMaterialReturnItems: {
            readonly name: "ReorderInwardJobFreeIssueMaterialReturnItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Inward Job Free Issue Material Return Item by ID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewInwardJobFreeIssueMaterialReturnItemByID
         */
        readonly viewInwardJobFreeIssueMaterialReturnItemByID: {
            readonly name: "ViewInwardJobFreeIssueMaterialReturnItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof InwardJobFreeIssueMaterialReturnItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Inward Job Free Issue Material Return Item by Inventory Hash
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewInwardJobFreeIssueMaterialReturnItemByInventoryHash
         */
        readonly viewInwardJobFreeIssueMaterialReturnItemByInventoryHash: {
            readonly name: "ViewInwardJobFreeIssueMaterialReturnItemByInventoryHash";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof InwardJobFreeIssueMaterialReturnItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved inward job free issue material return items for given inward job free issue material return ID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewApprovedInwardJobFreeIssueMaterialReturnItems
         */
        readonly viewApprovedInwardJobFreeIssueMaterialReturnItems: {
            readonly name: "ViewApprovedInwardJobFreeIssueMaterialReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof InwardJobsFreeIssueMaterialsReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved inward job free issue material return items for given inward job free issue material return ID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewUnapprovedInwardJobFreeIssueMaterialReturnItems
         */
        readonly viewUnapprovedInwardJobFreeIssueMaterialReturnItems: {
            readonly name: "ViewUnapprovedInwardJobFreeIssueMaterialReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof InwardJobsFreeIssueMaterialsReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the inward job free issue material return item
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewInwardJobFreeIssueMaterialReturnItemHistory
         */
        readonly viewInwardJobFreeIssueMaterialReturnItemHistory: {
            readonly name: "ViewInwardJobFreeIssueMaterialReturnItemHistory";
            readonly I: typeof InwardJobFreeIssueMaterialReturnItemHistoryRequest;
            readonly O: typeof InwardJobsFreeIssueMaterialsReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved inward job free issue material return items for given inward job free issue material return ID with pagination
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewPaginatedApprovedInwardJobFreeIssueMaterialReturnItems
         */
        readonly viewPaginatedApprovedInwardJobFreeIssueMaterialReturnItems: {
            readonly name: "ViewPaginatedApprovedInwardJobFreeIssueMaterialReturnItems";
            readonly I: typeof InwardJobFreeIssueMaterialReturnItemsSearchRequest;
            readonly O: typeof InwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved inward job free issue material return items for given inward job free issue material return ID with pagination
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewPaginatedUnapprovedInwardJobFreeIssueMaterialReturnItems
         */
        readonly viewPaginatedUnapprovedInwardJobFreeIssueMaterialReturnItems: {
            readonly name: "ViewPaginatedUnapprovedInwardJobFreeIssueMaterialReturnItems";
            readonly I: typeof InwardJobFreeIssueMaterialReturnItemsSearchRequest;
            readonly O: typeof InwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through inward job free issue material return items with pagination
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof InwardJobFreeIssueMaterialReturnItemsSearchRequest;
            readonly O: typeof InwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof InwardJobFreeIssueMaterialReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJobFreeIssueMaterialReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof InwardJobFreeIssueMaterialReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJobFreeIssueMaterialReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof InwardJobsFreeIssueMaterialsReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the ancillary parameters (UUIDs of the internal references) by UUID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJobFreeIssueMaterialReturnAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof InwardJobsFreeIssueMaterialsReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJobsFreeIssueMaterialsReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof InwardJobsFreeIssueMaterialsReturnsServicePaginationReq;
            readonly O: typeof InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given inward job free issue material return
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewProspectiveFamilies
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.FilterProspectiveFamilies
         */
        readonly filterProspectiveFamilies: {
            readonly name: "FilterProspectiveFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective inward job free issue material return item info for the given family ID and inward job free issue material return ID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewProspectiveInwardJobFreeIssueMaterialReturnItem
         */
        readonly viewProspectiveInwardJobFreeIssueMaterialReturnItem: {
            readonly name: "ViewProspectiveInwardJobFreeIssueMaterialReturnItem";
            readonly I: typeof InwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest;
            readonly O: typeof InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Other view operations
         * Download inward job free issue material return with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.DownloadByUUID
         */
        readonly downloadByUUID: {
            readonly name: "DownloadByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the label for the inward job free issue material return with the given IdentifierUUID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.DownloadLabelByUUID
         */
        readonly downloadLabelByUUID: {
            readonly name: "DownloadLabelByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View already added quantities
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof DualQuantitiesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof InwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq;
            readonly O: typeof InwardJobsFreeIssueMaterialsReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof InwardJobsFreeIssueMaterialsReturnsServiceFilterReq;
            readonly O: typeof InwardJobsFreeIssueMaterialsReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.CountInStatus
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof InwardJobsFreeIssueMaterialsReturnsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof InwardJobsFreeIssueMaterialsReturnsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=inward_jobs_free_issue_materials_returns.scailo_connect.d.ts.map