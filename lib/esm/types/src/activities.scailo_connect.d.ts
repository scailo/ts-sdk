import { ActivitiesList, ActivitiesServiceActionCreateRequest, ActivitiesServiceActionUpdateRequest, ActivitiesServiceActionWithTimerCreateRequest, ActivitiesServiceActivityTagAssociationCreateRequest, ActivitiesServiceCountReq, ActivitiesServiceCreateRequest, ActivitiesServiceFilterReq, ActivitiesServiceImportOwnersRequest, ActivitiesServiceOwnerCreateRequest, ActivitiesServicePaginatedActionsResponse, ActivitiesServicePaginatedTimersResponse, ActivitiesServicePaginationReq, ActivitiesServicePaginationResponse, ActivitiesServiceSearchAllReq, ActivitiesServiceSupervisorCreateRequest, ActivitiesServiceTimerCreateRequest, ActivitiesServiceTimerEndRequest, ActivitiesServiceUpdateRequest, Activity, ActivityAction, ActivityActionHistoryRequest, ActivityActionsList, ActivityActionsSearchRequest, ActivityActionStatistics, ActivityOwner, ActivityOwnersList, ActivityStatistics, ActivitySupervisor, ActivitySupervisorsList, ActivityTagAssociation, ActivityTagAssociationsList, ActivityTimer, ActivityTimersList, ActivityTimersSearchRequest } from "./activities.scailo_pb.js";
import { ActiveStatus, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithUserComment, ReorderItemsRequest, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each activity
 *
 * @generated from service Scailo.ActivitiesService
 */
export declare const ActivitiesService: {
    readonly typeName: "Scailo.ActivitiesService";
    readonly methods: {
        /**
         * Create
         *
         * @generated from rpc Scailo.ActivitiesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof ActivitiesServiceCreateRequest;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update
         *
         * @generated from rpc Scailo.ActivitiesService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof ActivitiesServiceUpdateRequest;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Cancel
         *
         * @generated from rpc Scailo.ActivitiesService.Cancel
         */
        readonly cancel: {
            readonly name: "Cancel";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Complete
         *
         * @generated from rpc Scailo.ActivitiesService.Complete
         */
        readonly complete: {
            readonly name: "Complete";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reopen
         *
         * @generated from rpc Scailo.ActivitiesService.Reopen
         */
        readonly reopen: {
            readonly name: "Reopen";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Repeat
         *
         * @generated from rpc Scailo.ActivitiesService.Repeat
         */
        readonly repeat: {
            readonly name: "Repeat";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add comment
         *
         * @generated from rpc Scailo.ActivitiesService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send Email
         *
         * @generated from rpc Scailo.ActivitiesService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an action to an activity
         *
         * @generated from rpc Scailo.ActivitiesService.AddAction
         */
        readonly addAction: {
            readonly name: "AddAction";
            readonly I: typeof ActivitiesServiceActionCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an action with an activity timer to an activity
         *
         * @generated from rpc Scailo.ActivitiesService.AddActionWithTimer
         */
        readonly addActionWithTimer: {
            readonly name: "AddActionWithTimer";
            readonly I: typeof ActivitiesServiceActionWithTimerCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an action in an activity
         *
         * @generated from rpc Scailo.ActivitiesService.ModifyAction
         */
        readonly modifyAction: {
            readonly name: "ModifyAction";
            readonly I: typeof ActivitiesServiceActionUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an action in an activity
         *
         * @generated from rpc Scailo.ActivitiesService.DeleteAction
         */
        readonly deleteAction: {
            readonly name: "DeleteAction";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder actions in an activity
         *
         * @generated from rpc Scailo.ActivitiesService.ReorderActions
         */
        readonly reorderActions: {
            readonly name: "ReorderActions";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Activity Action by ID
         *
         * @generated from rpc Scailo.ActivitiesService.ViewActionByID
         */
        readonly viewActionByID: {
            readonly name: "ViewActionByID";
            readonly I: typeof Identifier;
            readonly O: typeof ActivityAction;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Statistics of Activity Action by ID
         *
         * @generated from rpc Scailo.ActivitiesService.ViewActionStatistics
         */
        readonly viewActionStatistics: {
            readonly name: "ViewActionStatistics";
            readonly I: typeof Identifier;
            readonly O: typeof ActivityActionStatistics;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all actions for given activity ID
         *
         * @generated from rpc Scailo.ActivitiesService.ViewActions
         */
        readonly viewActions: {
            readonly name: "ViewActions";
            readonly I: typeof Identifier;
            readonly O: typeof ActivityActionsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the activity action
         *
         * @generated from rpc Scailo.ActivitiesService.ViewActionHistory
         */
        readonly viewActionHistory: {
            readonly name: "ViewActionHistory";
            readonly I: typeof ActivityActionHistoryRequest;
            readonly O: typeof ActivityActionsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View activity actions for given activity ID with pagination
         *
         * @generated from rpc Scailo.ActivitiesService.ViewPaginatedActions
         */
        readonly viewPaginatedActions: {
            readonly name: "ViewPaginatedActions";
            readonly I: typeof ActivityActionsSearchRequest;
            readonly O: typeof ActivitiesServicePaginatedActionsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through activity actions with pagination
         *
         * @generated from rpc Scailo.ActivitiesService.SearchActionsWithPagination
         */
        readonly searchActionsWithPagination: {
            readonly name: "SearchActionsWithPagination";
            readonly I: typeof ActivityActionsSearchRequest;
            readonly O: typeof ActivitiesServicePaginatedActionsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that could be used to upload actions from the filled CSV file. The same file can also be used as a template when there are no existing records
         *
         * @generated from rpc Scailo.ActivitiesService.DownloadActionsAsCSV
         */
        readonly downloadActionsAsCSV: {
            readonly name: "DownloadActionsAsCSV";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Upload actions using a CSV file. This is an idempotent operation. All the existing items are deleted before adding the items from the file.
         *
         * @generated from rpc Scailo.ActivitiesService.UploadActivityActions
         */
        readonly uploadActivityActions: {
            readonly name: "UploadActivityActions";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an activity tag
         *
         * @generated from rpc Scailo.ActivitiesService.AddActivityTagAssociation
         */
        readonly addActivityTagAssociation: {
            readonly name: "AddActivityTagAssociation";
            readonly I: typeof ActivitiesServiceActivityTagAssociationCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an activity tag
         *
         * @generated from rpc Scailo.ActivitiesService.DeleteActivityTagAssociation
         */
        readonly deleteActivityTagAssociation: {
            readonly name: "DeleteActivityTagAssociation";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View activity tag for the given ID
         *
         * @generated from rpc Scailo.ActivitiesService.ViewActivityTagAssociationByID
         */
        readonly viewActivityTagAssociationByID: {
            readonly name: "ViewActivityTagAssociationByID";
            readonly I: typeof Identifier;
            readonly O: typeof ActivityTagAssociation;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all activities tags for given activity ID
         *
         * @generated from rpc Scailo.ActivitiesService.ViewActivityTagAssociations
         */
        readonly viewActivityTagAssociations: {
            readonly name: "ViewActivityTagAssociations";
            readonly I: typeof Identifier;
            readonly O: typeof ActivityTagAssociationsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an owner
         *
         * @generated from rpc Scailo.ActivitiesService.AddOwner
         */
        readonly addOwner: {
            readonly name: "AddOwner";
            readonly I: typeof ActivitiesServiceOwnerCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an owner
         *
         * @generated from rpc Scailo.ActivitiesService.DeleteOwner
         */
        readonly deleteOwner: {
            readonly name: "DeleteOwner";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View an owner for the given ID
         *
         * @generated from rpc Scailo.ActivitiesService.ViewOwnerByID
         */
        readonly viewOwnerByID: {
            readonly name: "ViewOwnerByID";
            readonly I: typeof Identifier;
            readonly O: typeof ActivityOwner;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all owners for given activity ID
         *
         * @generated from rpc Scailo.ActivitiesService.ViewOwners
         */
        readonly viewOwners: {
            readonly name: "ViewOwners";
            readonly I: typeof Identifier;
            readonly O: typeof ActivityOwnersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Import employees as owners from team and returns the ID of the activity
         *
         * @generated from rpc Scailo.ActivitiesService.ImportOwnersFromTeam
         */
        readonly importOwnersFromTeam: {
            readonly name: "ImportOwnersFromTeam";
            readonly I: typeof ActivitiesServiceImportOwnersRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Import employees as owners from department and returns the ID of the activity
         *
         * @generated from rpc Scailo.ActivitiesService.ImportOwnersFromDepartment
         */
        readonly importOwnersFromDepartment: {
            readonly name: "ImportOwnersFromDepartment";
            readonly I: typeof ActivitiesServiceImportOwnersRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a supervisor
         *
         * @generated from rpc Scailo.ActivitiesService.AddSupervisor
         */
        readonly addSupervisor: {
            readonly name: "AddSupervisor";
            readonly I: typeof ActivitiesServiceSupervisorCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a supervisor
         *
         * @generated from rpc Scailo.ActivitiesService.DeleteSupervisor
         */
        readonly deleteSupervisor: {
            readonly name: "DeleteSupervisor";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View supervisor for the given ID
         *
         * @generated from rpc Scailo.ActivitiesService.ViewSupervisorByID
         */
        readonly viewSupervisorByID: {
            readonly name: "ViewSupervisorByID";
            readonly I: typeof Identifier;
            readonly O: typeof ActivitySupervisor;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all supervisors for given activity ID
         *
         * @generated from rpc Scailo.ActivitiesService.ViewSupervisors
         */
        readonly viewSupervisors: {
            readonly name: "ViewSupervisors";
            readonly I: typeof Identifier;
            readonly O: typeof ActivitySupervisorsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a timer
         *
         * @generated from rpc Scailo.ActivitiesService.AddTimer
         */
        readonly addTimer: {
            readonly name: "AddTimer";
            readonly I: typeof ActivitiesServiceTimerCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * End a timer
         *
         * @generated from rpc Scailo.ActivitiesService.EndTimer
         */
        readonly endTimer: {
            readonly name: "EndTimer";
            readonly I: typeof ActivitiesServiceTimerEndRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View a timer for the given ID
         *
         * @generated from rpc Scailo.ActivitiesService.ViewTimerByID
         */
        readonly viewTimerByID: {
            readonly name: "ViewTimerByID";
            readonly I: typeof Identifier;
            readonly O: typeof ActivityTimer;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all timers for given activity ID
         *
         * @generated from rpc Scailo.ActivitiesService.ViewTimers
         */
        readonly viewTimers: {
            readonly name: "ViewTimers";
            readonly I: typeof Identifier;
            readonly O: typeof ActivityTimersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View activity timers for given activity ID with pagination
         *
         * @generated from rpc Scailo.ActivitiesService.ViewPaginatedTimers
         */
        readonly viewPaginatedTimers: {
            readonly name: "ViewPaginatedTimers";
            readonly I: typeof ActivityTimersSearchRequest;
            readonly O: typeof ActivitiesServicePaginatedTimersResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through activity timers with pagination
         *
         * @generated from rpc Scailo.ActivitiesService.SearchTimersWithPagination
         */
        readonly searchTimersWithPagination: {
            readonly name: "SearchTimersWithPagination";
            readonly I: typeof ActivityTimersSearchRequest;
            readonly O: typeof ActivitiesServicePaginatedTimersResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that could be used to upload timers from the filled CSV file. The same file can also be used as a template when there are no existing records
         *
         * Upload timers using a CSV file. This is not an idempotent operation.
         * rpc UploadActivityTimers(IdentifierUUIDWithFile) returns (IdentifiersList);
         *
         * @generated from rpc Scailo.ActivitiesService.DownloadTimersAsCSV
         */
        readonly downloadTimersAsCSV: {
            readonly name: "DownloadTimersAsCSV";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.ActivitiesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Activity;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.ActivitiesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Activity;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.ActivitiesService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof Activity;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.ActivitiesService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Activity;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.ActivitiesService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof ActivitiesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.ActivitiesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof ActivitiesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.ActivitiesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ActivitiesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.ActivitiesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof ActivitiesServicePaginationReq;
            readonly O: typeof ActivitiesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Statistics of Activity
         *
         * @generated from rpc Scailo.ActivitiesService.ViewStatistics
         */
        readonly viewStatistics: {
            readonly name: "ViewStatistics";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ActivityStatistics;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.ActivitiesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof ActivitiesServiceSearchAllReq;
            readonly O: typeof ActivitiesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.ActivitiesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof ActivitiesServiceFilterReq;
            readonly O: typeof ActivitiesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count all that match the given criteria
         *
         * @generated from rpc Scailo.ActivitiesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof ActivitiesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.ActivitiesService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof ActivitiesServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Import records using a CSV file (duplicate codes will be skipped)
         *
         * @generated from rpc Scailo.ActivitiesService.ImportFromCSV
         */
        readonly importFromCSV: {
            readonly name: "ImportFromCSV";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=activities.scailo_connect.d.ts.map