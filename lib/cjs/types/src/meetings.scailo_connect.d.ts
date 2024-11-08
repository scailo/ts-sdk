import { Meeting, MeetingActionable, MeetingActionableHistoryRequest, MeetingActionablesList, MeetingActionablesSearchRequest, MeetingAssociate, MeetingAssociatesList, MeetingEmployee, MeetingEmployeesList, MeetingsList, MeetingsServiceActionableCreateRequest, MeetingsServiceActionableUpdateRequest, MeetingsServiceAssociateCreateRequest, MeetingsServiceCountReq, MeetingsServiceCreateRequest, MeetingsServiceEmployeeCreateRequest, MeetingsServiceFilterReq, MeetingsServiceImportEmployeesRequest, MeetingsServicePaginatedActionablesResponse, MeetingsServicePaginationReq, MeetingsServicePaginationResponse, MeetingsServiceSearchAllReq, MeetingsServiceSetRSVPRequest, MeetingsServiceUpdateRequest } from "./meetings.scailo_pb.js";
import { ActiveStatus, CountResponse, Identifier, IdentifierResponse, IdentifierUUID, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each meeting
 *
 * @generated from service Scailo.MeetingsService
 */
export declare const MeetingsService: {
    readonly typeName: "Scailo.MeetingsService";
    readonly methods: {
        /**
         * Create
         *
         * @generated from rpc Scailo.MeetingsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof MeetingsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update
         *
         * @generated from rpc Scailo.MeetingsService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof MeetingsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Cancel
         *
         * @generated from rpc Scailo.MeetingsService.Cancel
         */
        readonly cancel: {
            readonly name: "Cancel";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Complete
         *
         * @generated from rpc Scailo.MeetingsService.Complete
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
         * @generated from rpc Scailo.MeetingsService.Repeat
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
         * @generated from rpc Scailo.MeetingsService.CommentAdd
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
         * @generated from rpc Scailo.MeetingsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Request RSVPs from all the participants
         *
         * @generated from rpc Scailo.MeetingsService.RequestRSVP
         */
        readonly requestRSVP: {
            readonly name: "RequestRSVP";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send all the actionables in an email
         *
         * @generated from rpc Scailo.MeetingsService.SendActionables
         */
        readonly sendActionables: {
            readonly name: "SendActionables";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an actionable to a meeting
         *
         * @generated from rpc Scailo.MeetingsService.AddActionable
         */
        readonly addActionable: {
            readonly name: "AddActionable";
            readonly I: typeof MeetingsServiceActionableCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an actionable in a meeting
         *
         * @generated from rpc Scailo.MeetingsService.ModifyActionable
         */
        readonly modifyActionable: {
            readonly name: "ModifyActionable";
            readonly I: typeof MeetingsServiceActionableUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an actionable in a meeting
         *
         * @generated from rpc Scailo.MeetingsService.DeleteActionable
         */
        readonly deleteActionable: {
            readonly name: "DeleteActionable";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder actionables in a meeting
         *
         * @generated from rpc Scailo.MeetingsService.ReorderActionables
         */
        readonly reorderActionables: {
            readonly name: "ReorderActionables";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Meeting Actionable by ID
         *
         * @generated from rpc Scailo.MeetingsService.ViewActionableByID
         */
        readonly viewActionableByID: {
            readonly name: "ViewActionableByID";
            readonly I: typeof Identifier;
            readonly O: typeof MeetingActionable;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all actionables for given meeting ID
         *
         * @generated from rpc Scailo.MeetingsService.ViewActionables
         */
        readonly viewActionables: {
            readonly name: "ViewActionables";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof MeetingActionablesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the meeting actionable
         *
         * @generated from rpc Scailo.MeetingsService.ViewActionableHistory
         */
        readonly viewActionableHistory: {
            readonly name: "ViewActionableHistory";
            readonly I: typeof MeetingActionableHistoryRequest;
            readonly O: typeof MeetingActionablesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View meeting actionables for given meeting ID with pagination
         *
         * @generated from rpc Scailo.MeetingsService.ViewPaginatedActionables
         */
        readonly viewPaginatedActionables: {
            readonly name: "ViewPaginatedActionables";
            readonly I: typeof MeetingActionablesSearchRequest;
            readonly O: typeof MeetingsServicePaginatedActionablesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through meeting actionables with pagination
         *
         * @generated from rpc Scailo.MeetingsService.SearchActionablesWithPagination
         */
        readonly searchActionablesWithPagination: {
            readonly name: "SearchActionablesWithPagination";
            readonly I: typeof MeetingActionablesSearchRequest;
            readonly O: typeof MeetingsServicePaginatedActionablesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an employee
         *
         * @generated from rpc Scailo.MeetingsService.AddEmployee
         */
        readonly addEmployee: {
            readonly name: "AddEmployee";
            readonly I: typeof MeetingsServiceEmployeeCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an employee
         *
         * @generated from rpc Scailo.MeetingsService.DeleteEmployee
         */
        readonly deleteEmployee: {
            readonly name: "DeleteEmployee";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View an employee for the given ID
         *
         * @generated from rpc Scailo.MeetingsService.ViewEmployeeByID
         */
        readonly viewEmployeeByID: {
            readonly name: "ViewEmployeeByID";
            readonly I: typeof Identifier;
            readonly O: typeof MeetingEmployee;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all employees for given meeting ID
         *
         * @generated from rpc Scailo.MeetingsService.ViewEmployees
         */
        readonly viewEmployees: {
            readonly name: "ViewEmployees";
            readonly I: typeof Identifier;
            readonly O: typeof MeetingEmployeesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Set the RSVP of the employee with the given meeting employee UUID
         *
         * @generated from rpc Scailo.MeetingsService.SetEmployeeRSVP
         */
        readonly setEmployeeRSVP: {
            readonly name: "SetEmployeeRSVP";
            readonly I: typeof MeetingsServiceSetRSVPRequest;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Import employees from team and returns the ID of the meeting
         *
         * @generated from rpc Scailo.MeetingsService.ImportFromTeam
         */
        readonly importFromTeam: {
            readonly name: "ImportFromTeam";
            readonly I: typeof MeetingsServiceImportEmployeesRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Import employees from department and returns the ID of the meeting
         *
         * @generated from rpc Scailo.MeetingsService.ImportFromDepartment
         */
        readonly importFromDepartment: {
            readonly name: "ImportFromDepartment";
            readonly I: typeof MeetingsServiceImportEmployeesRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an associate
         *
         * @generated from rpc Scailo.MeetingsService.AddAssociate
         */
        readonly addAssociate: {
            readonly name: "AddAssociate";
            readonly I: typeof MeetingsServiceAssociateCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an associate
         *
         * @generated from rpc Scailo.MeetingsService.DeleteAssociate
         */
        readonly deleteAssociate: {
            readonly name: "DeleteAssociate";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View an associate for the given ID
         *
         * @generated from rpc Scailo.MeetingsService.ViewAssociateByID
         */
        readonly viewAssociateByID: {
            readonly name: "ViewAssociateByID";
            readonly I: typeof Identifier;
            readonly O: typeof MeetingAssociate;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all associates for given meeting ID
         *
         * @generated from rpc Scailo.MeetingsService.ViewAssociates
         */
        readonly viewAssociates: {
            readonly name: "ViewAssociates";
            readonly I: typeof Identifier;
            readonly O: typeof MeetingAssociatesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Set the RSVP of the associate with the given meeting associate UUID
         *
         * @generated from rpc Scailo.MeetingsService.SetAssociateRSVP
         */
        readonly setAssociateRSVP: {
            readonly name: "SetAssociateRSVP";
            readonly I: typeof MeetingsServiceSetRSVPRequest;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.MeetingsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Meeting;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.MeetingsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof MeetingsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.MeetingsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof MeetingsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.MeetingsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof MeetingsServicePaginationReq;
            readonly O: typeof MeetingsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.MeetingsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof MeetingsServiceSearchAllReq;
            readonly O: typeof MeetingsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.MeetingsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof MeetingsServiceFilterReq;
            readonly O: typeof MeetingsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count all that match the given criteria
         *
         * @generated from rpc Scailo.MeetingsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof MeetingsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=meetings.scailo_connect.d.ts.map