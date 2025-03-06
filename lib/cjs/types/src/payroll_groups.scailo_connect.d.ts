import { PayrollGroup, PayrollGroupItem, PayrollGroupItemHistoryRequest, PayrollGroupsItemsList, PayrollGroupsList, PayrollGroupsServiceCountReq, PayrollGroupsServiceCreateRequest, PayrollGroupsServiceFilterReq, PayrollGroupsServiceItemCreateRequest, PayrollGroupsServiceItemUpdateRequest, PayrollGroupsServicePaginationReq, PayrollGroupsServicePaginationResponse, PayrollGroupsServiceSearchAllReq, PayrollGroupsServiceUpdateRequest } from "./payroll_groups.scailo_pb.js";
import { ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each payroll group
 *
 * @generated from service Scailo.PayrollGroupsService
 */
export declare const PayrollGroupsService: {
    readonly typeName: "Scailo.PayrollGroupsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.PayrollGroupsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof PayrollGroupsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.PayrollGroupsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof PayrollGroupsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.PayrollGroupsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof PayrollGroupsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.PayrollGroupsService.SendForVerification
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
         * @generated from rpc Scailo.PayrollGroupsService.Verify
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
         * @generated from rpc Scailo.PayrollGroupsService.Approve
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
         * @generated from rpc Scailo.PayrollGroupsService.SendForRevision
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
         * @generated from rpc Scailo.PayrollGroupsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof PayrollGroupsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.PayrollGroupsService.Halt
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
         * @generated from rpc Scailo.PayrollGroupsService.Discard
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
         * @generated from rpc Scailo.PayrollGroupsService.Restore
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
         * @generated from rpc Scailo.PayrollGroupsService.Complete
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
         * @generated from rpc Scailo.PayrollGroupsService.Repeat
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
         * @generated from rpc Scailo.PayrollGroupsService.Reopen
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
         * @generated from rpc Scailo.PayrollGroupsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Clone payroll group from an existing payroll group (denoted by the identifier)
         *
         * @generated from rpc Scailo.PayrollGroupsService.Clone
         */
        readonly clone: {
            readonly name: "Clone";
            readonly I: typeof CloneRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a param to a payroll group
         *
         * @generated from rpc Scailo.PayrollGroupsService.AddPayrollGroupItem
         */
        readonly addPayrollGroupItem: {
            readonly name: "AddPayrollGroupItem";
            readonly I: typeof PayrollGroupsServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify a param in a payroll group
         *
         * @generated from rpc Scailo.PayrollGroupsService.ModifyPayrollGroupItem
         */
        readonly modifyPayrollGroupItem: {
            readonly name: "ModifyPayrollGroupItem";
            readonly I: typeof PayrollGroupsServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a param in a payroll group
         *
         * @generated from rpc Scailo.PayrollGroupsService.ApprovePayrollGroupItem
         */
        readonly approvePayrollGroupItem: {
            readonly name: "ApprovePayrollGroupItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a param in a payroll group
         *
         * @generated from rpc Scailo.PayrollGroupsService.DeletePayrollGroupItem
         */
        readonly deletePayrollGroupItem: {
            readonly name: "DeletePayrollGroupItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder params in a payroll group
         *
         * @generated from rpc Scailo.PayrollGroupsService.ReorderPayrollGroupItems
         */
        readonly reorderPayrollGroupItems: {
            readonly name: "ReorderPayrollGroupItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Payroll Group Item by ID
         *
         * @generated from rpc Scailo.PayrollGroupsService.ViewPayrollGroupItemByID
         */
        readonly viewPayrollGroupItemByID: {
            readonly name: "ViewPayrollGroupItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof PayrollGroupItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved payroll group params for given payroll group ID
         *
         * @generated from rpc Scailo.PayrollGroupsService.ViewApprovedPayrollGroupItems
         */
        readonly viewApprovedPayrollGroupItems: {
            readonly name: "ViewApprovedPayrollGroupItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof PayrollGroupsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved payroll group params for given payroll group ID
         *
         * @generated from rpc Scailo.PayrollGroupsService.ViewUnapprovedPayrollGroupItems
         */
        readonly viewUnapprovedPayrollGroupItems: {
            readonly name: "ViewUnapprovedPayrollGroupItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof PayrollGroupsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the payroll group item
         *
         * @generated from rpc Scailo.PayrollGroupsService.ViewPayrollGroupItemHistory
         */
        readonly viewPayrollGroupItemHistory: {
            readonly name: "ViewPayrollGroupItemHistory";
            readonly I: typeof PayrollGroupItemHistoryRequest;
            readonly O: typeof PayrollGroupsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that could be used to upload items from the filled CSV file. The same file can also be used as a template when there are no existing records
         *
         * @generated from rpc Scailo.PayrollGroupsService.DownloadItemsAsCSV
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
         * @generated from rpc Scailo.PayrollGroupsService.UploadPayrollGroupItems
         */
        readonly uploadPayrollGroupItems: {
            readonly name: "UploadPayrollGroupItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.PayrollGroupsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof PayrollGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.PayrollGroupsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PayrollGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.PayrollGroupsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof PayrollGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.PayrollGroupsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PayrollGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.PayrollGroupsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof PayrollGroupsServicePaginationReq;
            readonly O: typeof PayrollGroupsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.PayrollGroupsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof PayrollGroupsServiceSearchAllReq;
            readonly O: typeof PayrollGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.PayrollGroupsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof PayrollGroupsServiceFilterReq;
            readonly O: typeof PayrollGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.PayrollGroupsService.CountInStatus
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
         * @generated from rpc Scailo.PayrollGroupsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof PayrollGroupsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.PayrollGroupsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof PayrollGroupsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Import records using a CSV file (duplicate codes will be skipped)
         *
         * @generated from rpc Scailo.PayrollGroupsService.ImportFromCSV
         */
        readonly importFromCSV: {
            readonly name: "ImportFromCSV";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=payroll_groups.scailo_connect.d.ts.map