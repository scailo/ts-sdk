import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { VaultFile } from "./vault_files.scailo_pb.js";
import { VaultFolder } from "./vault_folders.scailo_pb.js";
/**
 *
 * Describes the message consisting of the list of vault resources
 *
 * @generated from message Scailo.VaultResourcesList
 */
export declare class VaultResourcesList extends Message<VaultResourcesList> {
    /**
     * List of files
     *
     * @generated from field: repeated Scailo.VaultFile files = 1;
     */
    files: VaultFile[];
    /**
     * List of folders
     *
     * @generated from field: repeated Scailo.VaultFolder folders = 2;
     */
    folders: VaultFolder[];
    constructor(data?: PartialMessage<VaultResourcesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultResourcesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultResourcesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultResourcesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultResourcesList;
    static equals(a: VaultResourcesList | PlainMessage<VaultResourcesList> | undefined, b: VaultResourcesList | PlainMessage<VaultResourcesList> | undefined): boolean;
}
/**
 *
 * Describes the message that stores the headers necessary for performing the RELAY request
 *
 * @generated from message Scailo.GiXRelayHeader
 */
export declare class GiXRelayHeader extends Message<GiXRelayHeader> {
    /**
     * The name of the header
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * The value of the header
     *
     * @generated from field: string value = 2;
     */
    value: string;
    constructor(data?: PartialMessage<GiXRelayHeader>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GiXRelayHeader";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GiXRelayHeader;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GiXRelayHeader;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GiXRelayHeader;
    static equals(a: GiXRelayHeader | PlainMessage<GiXRelayHeader> | undefined, b: GiXRelayHeader | PlainMessage<GiXRelayHeader> | undefined): boolean;
}
/**
 *
 * Describes the message that is required to execute a RELAY instruction for GET, DELETE and HEAD requests (without payload body)
 *
 * @generated from message Scailo.GiXRelayReqWithoutBody
 */
export declare class GiXRelayReqWithoutBody extends Message<GiXRelayReqWithoutBody> {
    /**
     * The UUID of the app execution
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * The content type header of the relay request (e.g., 'application/json', 'text/html')
     *
     * @generated from field: string relay_content_type_header = 4;
     */
    relayContentTypeHeader: string;
    /**
     * The accept header of the relay request (e.g., 'application/json', 'text/html')
     *
     * @generated from field: string relay_accept_header = 5;
     */
    relayAcceptHeader: string;
    /**
     * The list of additional headers that will be relayed to the remote URL
     *
     * @generated from field: repeated Scailo.GiXRelayHeader relay_headers = 10;
     */
    relayHeaders: GiXRelayHeader[];
    /**
     * The remote URL that needs to be accessed
     *
     * @generated from field: string url = 20;
     */
    url: string;
    constructor(data?: PartialMessage<GiXRelayReqWithoutBody>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GiXRelayReqWithoutBody";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GiXRelayReqWithoutBody;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GiXRelayReqWithoutBody;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GiXRelayReqWithoutBody;
    static equals(a: GiXRelayReqWithoutBody | PlainMessage<GiXRelayReqWithoutBody> | undefined, b: GiXRelayReqWithoutBody | PlainMessage<GiXRelayReqWithoutBody> | undefined): boolean;
}
/**
 *
 * Describes the message that is required to execute a RELAY instruction for POST, PUT and PATCH requests (with payload)
 *
 * @generated from message Scailo.GiXRelayReqWithBody
 */
export declare class GiXRelayReqWithBody extends Message<GiXRelayReqWithBody> {
    /**
     * The UUID of the app execution
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * The content type header of the relay request (e.g., 'application/json', 'text/html')
     *
     * @generated from field: string relay_content_type_header = 4;
     */
    relayContentTypeHeader: string;
    /**
     * The accept header of the relay request (e.g., 'application/json', 'text/html')
     *
     * @generated from field: string relay_accept_header = 5;
     */
    relayAcceptHeader: string;
    /**
     * The list of additional headers that will be relayed to the remote URL
     *
     * @generated from field: repeated Scailo.GiXRelayHeader relay_headers = 10;
     */
    relayHeaders: GiXRelayHeader[];
    /**
     * The remote URL that needs to be accessed
     *
     * @generated from field: string url = 20;
     */
    url: string;
    /**
     * The body that needs to be relayed
     *
     * @generated from field: bytes body = 30;
     */
    body: Uint8Array;
    constructor(data?: PartialMessage<GiXRelayReqWithBody>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GiXRelayReqWithBody";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GiXRelayReqWithBody;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GiXRelayReqWithBody;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GiXRelayReqWithBody;
    static equals(a: GiXRelayReqWithBody | PlainMessage<GiXRelayReqWithBody> | undefined, b: GiXRelayReqWithBody | PlainMessage<GiXRelayReqWithBody> | undefined): boolean;
}
/**
 *
 * Describes the payload that will be returned to the GiX Relay RPC
 *
 * @generated from message Scailo.GiXRelayResponse
 */
export declare class GiXRelayResponse extends Message<GiXRelayResponse> {
    /**
     * The UUID of the app execution
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * The response from the remote URL
     *
     * @generated from field: bytes body = 10;
     */
    body: Uint8Array;
    constructor(data?: PartialMessage<GiXRelayResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GiXRelayResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GiXRelayResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GiXRelayResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GiXRelayResponse;
    static equals(a: GiXRelayResponse | PlainMessage<GiXRelayResponse> | undefined, b: GiXRelayResponse | PlainMessage<GiXRelayResponse> | undefined): boolean;
}
//# sourceMappingURL=vault_services.scailo_pb.d.ts.map