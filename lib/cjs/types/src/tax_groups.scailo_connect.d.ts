import { TaxGroup, TaxGroupItem, TaxGroupItemHistoryRequest, TaxGroupsItemsList, TaxGroupsList, TaxGroupsServiceCountReq, TaxGroupsServiceCreateRequest, TaxGroupsServiceFilterReq, TaxGroupsServiceItemCreateRequest, TaxGroupsServiceItemUpdateRequest, TaxGroupsServicePaginationReq, TaxGroupsServicePaginationResponse, TaxGroupsServiceSearchAllReq, TaxGroupsServiceUpdateRequest } from "./tax_groups.scailo_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithUserComment, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each tax group
 *
 * @generated from service Scailo.TaxGroupsService
 */
export declare const TaxGroupsService: {
    readonly typeName: "Scailo.TaxGroupsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.TaxGroupsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof TaxGroupsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.TaxGroupsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof TaxGroupsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.TaxGroupsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof TaxGroupsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.TaxGroupsService.SendForVerification
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
         * @generated from rpc Scailo.TaxGroupsService.Verify
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
         * @generated from rpc Scailo.TaxGroupsService.Approve
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
         * @generated from rpc Scailo.TaxGroupsService.SendForRevision
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
         * @generated from rpc Scailo.TaxGroupsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof TaxGroupsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.TaxGroupsService.Halt
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
         * @generated from rpc Scailo.TaxGroupsService.Discard
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
         * @generated from rpc Scailo.TaxGroupsService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add comment
         *
         * Send Email
         * rpc SendEmail (Identifier) returns (IdentifierResponse);
         *
         * @generated from rpc Scailo.TaxGroupsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a param to a tax group
         *
         * @generated from rpc Scailo.TaxGroupsService.AddTaxGroupItem
         */
        readonly addTaxGroupItem: {
            readonly name: "AddTaxGroupItem";
            readonly I: typeof TaxGroupsServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify a param in a tax group
         *
         * @generated from rpc Scailo.TaxGroupsService.ModifyTaxGroupItem
         */
        readonly modifyTaxGroupItem: {
            readonly name: "ModifyTaxGroupItem";
            readonly I: typeof TaxGroupsServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a param in a tax group
         *
         * @generated from rpc Scailo.TaxGroupsService.ApproveTaxGroupItem
         */
        readonly approveTaxGroupItem: {
            readonly name: "ApproveTaxGroupItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a param in a tax group
         *
         * @generated from rpc Scailo.TaxGroupsService.DeleteTaxGroupItem
         */
        readonly deleteTaxGroupItem: {
            readonly name: "DeleteTaxGroupItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder params in a tax group
         *
         * @generated from rpc Scailo.TaxGroupsService.ReorderTaxGroupItems
         */
        readonly reorderTaxGroupItems: {
            readonly name: "ReorderTaxGroupItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Tax Group Item by ID
         *
         * @generated from rpc Scailo.TaxGroupsService.ViewTaxGroupItemByID
         */
        readonly viewTaxGroupItemByID: {
            readonly name: "ViewTaxGroupItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof TaxGroupItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved tax group params for given tax group ID
         *
         * @generated from rpc Scailo.TaxGroupsService.ViewApprovedTaxGroupItems
         */
        readonly viewApprovedTaxGroupItems: {
            readonly name: "ViewApprovedTaxGroupItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof TaxGroupsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved tax group params for given tax group ID
         *
         * @generated from rpc Scailo.TaxGroupsService.ViewUnapprovedTaxGroupItems
         */
        readonly viewUnapprovedTaxGroupItems: {
            readonly name: "ViewUnapprovedTaxGroupItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof TaxGroupsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the tax group item
         *
         * @generated from rpc Scailo.TaxGroupsService.ViewTaxGroupItemHistory
         */
        readonly viewTaxGroupItemHistory: {
            readonly name: "ViewTaxGroupItemHistory";
            readonly I: typeof TaxGroupItemHistoryRequest;
            readonly O: typeof TaxGroupsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.TaxGroupsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof TaxGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.TaxGroupsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof TaxGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.TaxGroupsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof TaxGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.TaxGroupsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof TaxGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.TaxGroupsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof TaxGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.TaxGroupsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof TaxGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.TaxGroupsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof TaxGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.TaxGroupsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof TaxGroupsServicePaginationReq;
            readonly O: typeof TaxGroupsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.TaxGroupsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof TaxGroupsServiceSearchAllReq;
            readonly O: typeof TaxGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.TaxGroupsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof TaxGroupsServiceFilterReq;
            readonly O: typeof TaxGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.TaxGroupsService.CountInStatus
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
         * @generated from rpc Scailo.TaxGroupsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof TaxGroupsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.TaxGroupsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof TaxGroupsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Import records using a CSV file (duplicate codes will be skipped)
         *
         * @generated from rpc Scailo.TaxGroupsService.ImportFromCSV
         */
        readonly importFromCSV: {
            readonly name: "ImportFromCSV";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=tax_groups.scailo_connect.d.ts.map