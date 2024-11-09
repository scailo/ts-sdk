import { QCSample, QCSampleAncillaryParameters, QCSampleParameter, QCSampleParameterHistoryList, QCSampleParameterHistoryRequest, QCSampleParametersList, QCSampleParametersSearchRequest, QCSamplesList, QCSamplesServiceCountReq, QCSamplesServiceCreateRequest, QCSamplesServiceFilterReq, QCSamplesServicePaginatedParametersResponse, QCSamplesServicePaginationReq, QCSamplesServicePaginationResponse, QCSamplesServiceParameterUpdateRequest, QCSamplesServiceSearchAllReq, QCSamplesServiceUpdateRequest, QCSamplesWithMetadataList } from "./qc_samples.scailo_pb.js";
import { ActiveStatus, CountResponse, Identifier, IdentifierResponse, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each qc sample
 *
 * @generated from service Scailo.QCSamplesService
 */
export declare const QCSamplesService: {
    readonly typeName: "Scailo.QCSamplesService";
    readonly methods: {
        /**
         * Create
         *
         * @generated from rpc Scailo.QCSamplesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof QCSamplesServiceCreateRequest;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update
         *
         * @generated from rpc Scailo.QCSamplesService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof QCSamplesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Finish
         *
         * @generated from rpc Scailo.QCSamplesService.Finish
         */
        readonly finish: {
            readonly name: "Finish";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Accept
         *
         * @generated from rpc Scailo.QCSamplesService.Accept
         */
        readonly accept: {
            readonly name: "Accept";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Accept With Deviation
         *
         * @generated from rpc Scailo.QCSamplesService.AcceptWithDeviation
         */
        readonly acceptWithDeviation: {
            readonly name: "AcceptWithDeviation";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reject
         *
         * @generated from rpc Scailo.QCSamplesService.Reject
         */
        readonly reject: {
            readonly name: "Reject";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Cancel
         *
         * @generated from rpc Scailo.QCSamplesService.Cancel
         */
        readonly cancel: {
            readonly name: "Cancel";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reopen
         *
         * @generated from rpc Scailo.QCSamplesService.Reopen
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
         * @generated from rpc Scailo.QCSamplesService.CommentAdd
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
         * @generated from rpc Scailo.QCSamplesService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an parameter in a qc sample
         *
         * @generated from rpc Scailo.QCSamplesService.UpdateParameter
         */
        readonly updateParameter: {
            readonly name: "UpdateParameter";
            readonly I: typeof QCSamplesServiceParameterUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View QCSample Parameter by ID
         *
         * @generated from rpc Scailo.QCSamplesService.ViewParameterByID
         */
        readonly viewParameterByID: {
            readonly name: "ViewParameterByID";
            readonly I: typeof Identifier;
            readonly O: typeof QCSampleParameter;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all parameters for given qc sample UUID
         *
         * @generated from rpc Scailo.QCSamplesService.ViewParameters
         */
        readonly viewParameters: {
            readonly name: "ViewParameters";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QCSampleParametersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the qc sample parameter
         *
         * @generated from rpc Scailo.QCSamplesService.ViewParameterHistory
         */
        readonly viewParameterHistory: {
            readonly name: "ViewParameterHistory";
            readonly I: typeof QCSampleParameterHistoryRequest;
            readonly O: typeof QCSampleParameterHistoryList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View qc sample parameters for given qc sample ID with pagination
         *
         * @generated from rpc Scailo.QCSamplesService.ViewPaginatedParameters
         */
        readonly viewPaginatedParameters: {
            readonly name: "ViewPaginatedParameters";
            readonly I: typeof QCSampleParametersSearchRequest;
            readonly O: typeof QCSamplesServicePaginatedParametersResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through qc sample parameters with pagination
         *
         * @generated from rpc Scailo.QCSamplesService.SearchParametersWithPagination
         */
        readonly searchParametersWithPagination: {
            readonly name: "SearchParametersWithPagination";
            readonly I: typeof QCSampleParametersSearchRequest;
            readonly O: typeof QCSamplesServicePaginatedParametersResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.QCSamplesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof QCSample;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.QCSamplesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QCSample;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the ancillary parameters (UUIDs of the internal references) by UUID
         *
         * @generated from rpc Scailo.QCSamplesService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QCSampleAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.QCSamplesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof QCSamplesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.QCSamplesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QCSamplesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.QCSamplesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof QCSamplesServicePaginationReq;
            readonly O: typeof QCSamplesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.QCSamplesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof QCSamplesServiceSearchAllReq;
            readonly O: typeof QCSamplesWithMetadataList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.QCSamplesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof QCSamplesServiceFilterReq;
            readonly O: typeof QCSamplesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count all that match the given criteria
         *
         * @generated from rpc Scailo.QCSamplesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof QCSamplesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=qc_samples.scailo_connect.d.ts.map