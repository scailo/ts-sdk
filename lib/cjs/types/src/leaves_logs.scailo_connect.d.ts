import { LeavesLogsCountEmployeeLeavesRequest, LeavesLogsList, LeavesLogsServiceCountReq, LeavesLogsServiceFilterReq } from "./leaves_logs.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { CountResponse } from "./base.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each record
 *
 * Create and send for verification
 * rpc Create (LeavesLogsServiceCreateRequest) returns (IdentifierResponse);
 *
 * @generated from service Scailo.LeavesLogsService
 */
export declare const LeavesLogsService: {
    readonly typeName: "Scailo.LeavesLogsService";
    readonly methods: {
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.LeavesLogsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof LeavesLogsServiceFilterReq;
            readonly O: typeof LeavesLogsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count leaves of employee
         *
         * @generated from rpc Scailo.LeavesLogsService.CountEmployeeLeaves
         */
        readonly countEmployeeLeaves: {
            readonly name: "CountEmployeeLeaves";
            readonly I: typeof LeavesLogsCountEmployeeLeavesRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count all that match the given criteria
         *
         * @generated from rpc Scailo.LeavesLogsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof LeavesLogsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=leaves_logs.scailo_connect.d.ts.map