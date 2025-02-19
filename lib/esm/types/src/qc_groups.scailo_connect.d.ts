import { QCGroup, QCGroupItem, QCGroupItemHistoryRequest, QCGroupItemsSearchRequest, QCGroupsItemsList, QCGroupsList, QCGroupsServiceCountReq, QCGroupsServiceCreateRequest, QCGroupsServiceFilterReq, QCGroupsServiceItemCreateRequest, QCGroupsServiceItemUpdateRequest, QCGroupsServicePaginatedItemsResponse, QCGroupsServicePaginationReq, QCGroupsServicePaginationResponse, QCGroupsServiceSearchAllReq, QCGroupsServiceUpdateRequest } from "./qc_groups.scailo_pb.js";
import { ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each qc group
 *
 * @generated from service Scailo.QCGroupsService
 */
export declare const QCGroupsService: {
    readonly typeName: "Scailo.QCGroupsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.QCGroupsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof QCGroupsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.QCGroupsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof QCGroupsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.QCGroupsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof QCGroupsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.QCGroupsService.SendForVerification
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
         * @generated from rpc Scailo.QCGroupsService.Verify
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
         * @generated from rpc Scailo.QCGroupsService.Approve
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
         * @generated from rpc Scailo.QCGroupsService.SendForRevision
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
         * @generated from rpc Scailo.QCGroupsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof QCGroupsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.QCGroupsService.Halt
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
         * @generated from rpc Scailo.QCGroupsService.Discard
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
         * @generated from rpc Scailo.QCGroupsService.Restore
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
         * @generated from rpc Scailo.QCGroupsService.Complete
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
         * @generated from rpc Scailo.QCGroupsService.Repeat
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
         * @generated from rpc Scailo.QCGroupsService.Reopen
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
         * Send Email
         * rpc SendEmail (IdentifierWithEmailAttributes) returns (IdentifierResponse);
         *
         * @generated from rpc Scailo.QCGroupsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Clone qc group from an existing qc group (denoted by the identifier)
         *
         * @generated from rpc Scailo.QCGroupsService.Clone
         */
        readonly clone: {
            readonly name: "Clone";
            readonly I: typeof CloneRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a param to a qc group
         *
         * @generated from rpc Scailo.QCGroupsService.AddQCGroupItem
         */
        readonly addQCGroupItem: {
            readonly name: "AddQCGroupItem";
            readonly I: typeof QCGroupsServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify a param in a qc group
         *
         * @generated from rpc Scailo.QCGroupsService.ModifyQCGroupItem
         */
        readonly modifyQCGroupItem: {
            readonly name: "ModifyQCGroupItem";
            readonly I: typeof QCGroupsServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a param in a qc group
         *
         * @generated from rpc Scailo.QCGroupsService.ApproveQCGroupItem
         */
        readonly approveQCGroupItem: {
            readonly name: "ApproveQCGroupItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a param in a qc group
         *
         * @generated from rpc Scailo.QCGroupsService.DeleteQCGroupItem
         */
        readonly deleteQCGroupItem: {
            readonly name: "DeleteQCGroupItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder params in a qc group
         *
         * @generated from rpc Scailo.QCGroupsService.ReorderQCGroupItems
         */
        readonly reorderQCGroupItems: {
            readonly name: "ReorderQCGroupItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View QC Group Item by ID
         *
         * @generated from rpc Scailo.QCGroupsService.ViewQCGroupItemByID
         */
        readonly viewQCGroupItemByID: {
            readonly name: "ViewQCGroupItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof QCGroupItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved qc group params for given qc group ID
         *
         * @generated from rpc Scailo.QCGroupsService.ViewApprovedQCGroupItems
         */
        readonly viewApprovedQCGroupItems: {
            readonly name: "ViewApprovedQCGroupItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof QCGroupsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved qc group params for given qc group ID
         *
         * @generated from rpc Scailo.QCGroupsService.ViewUnapprovedQCGroupItems
         */
        readonly viewUnapprovedQCGroupItems: {
            readonly name: "ViewUnapprovedQCGroupItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof QCGroupsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the qc group item
         *
         * @generated from rpc Scailo.QCGroupsService.ViewQCGroupItemHistory
         */
        readonly viewQCGroupItemHistory: {
            readonly name: "ViewQCGroupItemHistory";
            readonly I: typeof QCGroupItemHistoryRequest;
            readonly O: typeof QCGroupsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved qc group items for given qc group ID with pagination
         *
         * @generated from rpc Scailo.QCGroupsService.ViewPaginatedApprovedQCGroupItems
         */
        readonly viewPaginatedApprovedQCGroupItems: {
            readonly name: "ViewPaginatedApprovedQCGroupItems";
            readonly I: typeof QCGroupItemsSearchRequest;
            readonly O: typeof QCGroupsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved qc group items for given qc group ID with pagination
         *
         * @generated from rpc Scailo.QCGroupsService.ViewPaginatedUnapprovedQCGroupItems
         */
        readonly viewPaginatedUnapprovedQCGroupItems: {
            readonly name: "ViewPaginatedUnapprovedQCGroupItems";
            readonly I: typeof QCGroupItemsSearchRequest;
            readonly O: typeof QCGroupsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through qc group items with pagination
         *
         * @generated from rpc Scailo.QCGroupsService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof QCGroupItemsSearchRequest;
            readonly O: typeof QCGroupsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that could be used to upload items from the filled CSV file. The same file can also be used as a template when there are no existing records
         *
         * @generated from rpc Scailo.QCGroupsService.DownloadItemsAsCSV
         */
        readonly downloadItemsAsCSV: {
            readonly name: "DownloadItemsAsCSV";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Upload items using a CSV file. This is an idempotent operation. All the existing items are deleted before adding the items from the file.
         *
         * @generated from rpc Scailo.QCGroupsService.UploadQCGroupItems
         */
        readonly uploadQCGroupItems: {
            readonly name: "UploadQCGroupItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.QCGroupsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof QCGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.QCGroupsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QCGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.QCGroupsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof QCGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.QCGroupsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QCGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.QCGroupsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof QCGroupsServicePaginationReq;
            readonly O: typeof QCGroupsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.QCGroupsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof QCGroupsServiceSearchAllReq;
            readonly O: typeof QCGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.QCGroupsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof QCGroupsServiceFilterReq;
            readonly O: typeof QCGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.QCGroupsService.CountInStatus
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
         * @generated from rpc Scailo.QCGroupsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof QCGroupsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.QCGroupsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof QCGroupsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Import records using a CSV file (duplicate codes will be skipped)
         *
         * @generated from rpc Scailo.QCGroupsService.Import
         */
        readonly import: {
            readonly name: "Import";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=qc_groups.scailo_connect.d.ts.map