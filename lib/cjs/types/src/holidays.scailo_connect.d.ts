import { Holiday, HolidayShiftGroup, HolidaysList, HolidaysServiceCountReq, HolidaysServiceCreateRequest, HolidaysServiceFilterReq, HolidaysServicePaginationReq, HolidaysServicePaginationResponse, HolidaysServiceSearchAllReq, HolidaysServiceShiftGroupCreateRequest, HolidaysServiceShiftGroupUpdateRequest, HolidaysServiceUpdateRequest, HolidaysServiceViewHolidaysOnTimestampRequest, HolidaysShiftsGroupsHistoryRequest, HolidaysShiftsGroupsList } from "./holidays.scailo_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithUserComment, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each shift group
 *
 * @generated from service Scailo.HolidaysService
 */
export declare const HolidaysService: {
    readonly typeName: "Scailo.HolidaysService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.HolidaysService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof HolidaysServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.HolidaysService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof HolidaysServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.HolidaysService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof HolidaysServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.HolidaysService.SendForVerification
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
         * @generated from rpc Scailo.HolidaysService.Verify
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
         * @generated from rpc Scailo.HolidaysService.Approve
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
         * @generated from rpc Scailo.HolidaysService.SendForRevision
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
         * @generated from rpc Scailo.HolidaysService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof HolidaysServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.HolidaysService.Halt
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
         * @generated from rpc Scailo.HolidaysService.Discard
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
         * @generated from rpc Scailo.HolidaysService.Restore
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
         * @generated from rpc Scailo.HolidaysService.Complete
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
         * @generated from rpc Scailo.HolidaysService.Repeat
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
         * @generated from rpc Scailo.HolidaysService.CommentAdd
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
         * @generated from rpc Scailo.HolidaysService.AddHolidayShiftGroup
         */
        readonly addHolidayShiftGroup: {
            readonly name: "AddHolidayShiftGroup";
            readonly I: typeof HolidaysServiceShiftGroupCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify a shift in a shift group
         *
         * @generated from rpc Scailo.HolidaysService.ModifyHolidayShiftGroup
         */
        readonly modifyHolidayShiftGroup: {
            readonly name: "ModifyHolidayShiftGroup";
            readonly I: typeof HolidaysServiceShiftGroupUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a shift in a shift group
         *
         * @generated from rpc Scailo.HolidaysService.ApproveHolidayShiftGroup
         */
        readonly approveHolidayShiftGroup: {
            readonly name: "ApproveHolidayShiftGroup";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a shift in a shift group
         *
         * @generated from rpc Scailo.HolidaysService.DeleteHolidayShiftGroup
         */
        readonly deleteHolidayShiftGroup: {
            readonly name: "DeleteHolidayShiftGroup";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder shifts in a shift group
         *
         * @generated from rpc Scailo.HolidaysService.ReorderHolidayShiftsGroups
         */
        readonly reorderHolidayShiftsGroups: {
            readonly name: "ReorderHolidayShiftsGroups";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Holiday Shift Group by ID
         *
         * @generated from rpc Scailo.HolidaysService.ViewHolidayShiftGroupByID
         */
        readonly viewHolidayShiftGroupByID: {
            readonly name: "ViewHolidayShiftGroupByID";
            readonly I: typeof Identifier;
            readonly O: typeof HolidayShiftGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved holiday shift groups for given shift group ID
         *
         * @generated from rpc Scailo.HolidaysService.ViewApprovedHolidayShiftsGroups
         */
        readonly viewApprovedHolidayShiftsGroups: {
            readonly name: "ViewApprovedHolidayShiftsGroups";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof HolidaysShiftsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved holiday shift groups for given shift group ID
         *
         * @generated from rpc Scailo.HolidaysService.ViewUnapprovedHolidayShiftsGroups
         */
        readonly viewUnapprovedHolidayShiftsGroups: {
            readonly name: "ViewUnapprovedHolidayShiftsGroups";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof HolidaysShiftsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the shift group shift
         *
         * @generated from rpc Scailo.HolidaysService.ViewHolidayShiftsGroupsHistory
         */
        readonly viewHolidayShiftsGroupsHistory: {
            readonly name: "ViewHolidayShiftsGroupsHistory";
            readonly I: typeof HolidaysShiftsGroupsHistoryRequest;
            readonly O: typeof HolidaysShiftsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.HolidaysService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Holiday;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.HolidaysService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Holiday;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.HolidaysService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof Holiday;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.HolidaysService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Holiday;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.HolidaysService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof HolidaysList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.HolidaysService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof HolidaysList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.HolidaysService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof HolidaysList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.HolidaysService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof HolidaysServicePaginationReq;
            readonly O: typeof HolidaysServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all the holidays on the given timestamp
         *
         * @generated from rpc Scailo.HolidaysService.ViewHolidaysOn
         */
        readonly viewHolidaysOn: {
            readonly name: "ViewHolidaysOn";
            readonly I: typeof HolidaysServiceViewHolidaysOnTimestampRequest;
            readonly O: typeof HolidaysList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.HolidaysService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof HolidaysServiceSearchAllReq;
            readonly O: typeof HolidaysList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.HolidaysService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof HolidaysServiceFilterReq;
            readonly O: typeof HolidaysList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.HolidaysService.CountInStatus
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
         * @generated from rpc Scailo.HolidaysService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof HolidaysServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=holidays.scailo_connect.d.ts.map