import { ShiftGroup, ShiftGroupShift, ShiftsGroupsList, ShiftsGroupsServiceCountReq, ShiftsGroupsServiceCreateRequest, ShiftsGroupsServiceFilterReq, ShiftsGroupsServicePaginationReq, ShiftsGroupsServicePaginationResponse, ShiftsGroupsServiceSearchAllReq, ShiftsGroupsServiceShiftGroupCreateRequest, ShiftsGroupsServiceShiftGroupUpdateRequest, ShiftsGroupsServiceUpdateRequest, ShiftsGroupsShiftsHistoryRequest, ShiftsGroupsShiftsList } from "./shifts_groups.scailo_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithUserComment, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each shift group
 *
 * @generated from service Scailo.ShiftsGroupsService
 */
export declare const ShiftsGroupsService: {
    readonly typeName: "Scailo.ShiftsGroupsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.ShiftsGroupsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof ShiftsGroupsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.ShiftsGroupsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof ShiftsGroupsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.ShiftsGroupsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof ShiftsGroupsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.ShiftsGroupsService.SendForVerification
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
         * @generated from rpc Scailo.ShiftsGroupsService.Verify
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
         * @generated from rpc Scailo.ShiftsGroupsService.Approve
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
         * @generated from rpc Scailo.ShiftsGroupsService.SendForRevision
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
         * @generated from rpc Scailo.ShiftsGroupsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof ShiftsGroupsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.ShiftsGroupsService.Halt
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
         * @generated from rpc Scailo.ShiftsGroupsService.Discard
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
         * @generated from rpc Scailo.ShiftsGroupsService.Restore
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
         * @generated from rpc Scailo.ShiftsGroupsService.Complete
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
         * @generated from rpc Scailo.ShiftsGroupsService.Repeat
         */
        readonly repeat: {
            readonly name: "Repeat";
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
         * @generated from rpc Scailo.ShiftsGroupsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a shift to a shift group
         *
         * @generated from rpc Scailo.ShiftsGroupsService.AddShiftGroupShift
         */
        readonly addShiftGroupShift: {
            readonly name: "AddShiftGroupShift";
            readonly I: typeof ShiftsGroupsServiceShiftGroupCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify a shift in a shift group
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ModifyShiftGroupShift
         */
        readonly modifyShiftGroupShift: {
            readonly name: "ModifyShiftGroupShift";
            readonly I: typeof ShiftsGroupsServiceShiftGroupUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a shift in a shift group
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ApproveShiftGroupShift
         */
        readonly approveShiftGroupShift: {
            readonly name: "ApproveShiftGroupShift";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a shift in a shift group
         *
         * @generated from rpc Scailo.ShiftsGroupsService.DeleteShiftGroupShift
         */
        readonly deleteShiftGroupShift: {
            readonly name: "DeleteShiftGroupShift";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder shifts in a shift group
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ReorderShiftGroupShifts
         */
        readonly reorderShiftGroupShifts: {
            readonly name: "ReorderShiftGroupShifts";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Shift Group Shift by ID
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ViewShiftGroupShiftByID
         */
        readonly viewShiftGroupShiftByID: {
            readonly name: "ViewShiftGroupShiftByID";
            readonly I: typeof Identifier;
            readonly O: typeof ShiftGroupShift;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved shift group shifts for given shift group ID
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ViewApprovedShiftGroupShifts
         */
        readonly viewApprovedShiftGroupShifts: {
            readonly name: "ViewApprovedShiftGroupShifts";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ShiftsGroupsShiftsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved shift group shifts for given shift group ID
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ViewUnapprovedShiftGroupShifts
         */
        readonly viewUnapprovedShiftGroupShifts: {
            readonly name: "ViewUnapprovedShiftGroupShifts";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ShiftsGroupsShiftsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the shift group shift
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ViewShiftGroupShiftsHistory
         */
        readonly viewShiftGroupShiftsHistory: {
            readonly name: "ViewShiftGroupShiftsHistory";
            readonly I: typeof ShiftsGroupsShiftsHistoryRequest;
            readonly O: typeof ShiftsGroupsShiftsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof ShiftGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ShiftGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof ShiftGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ShiftGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof ShiftsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof ShiftsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ShiftsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.ShiftsGroupsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof ShiftsGroupsServicePaginationReq;
            readonly O: typeof ShiftsGroupsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.ShiftsGroupsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof ShiftsGroupsServiceSearchAllReq;
            readonly O: typeof ShiftsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.ShiftsGroupsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof ShiftsGroupsServiceFilterReq;
            readonly O: typeof ShiftsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.ShiftsGroupsService.CountInStatus
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
         * @generated from rpc Scailo.ShiftsGroupsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof ShiftsGroupsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=shifts_groups.scailo_connect.d.ts.map