[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeavesRequestsServiceSearchAllReq

# Class: LeavesRequestsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.LeavesRequestsServiceSearchAllReq

## Hierarchy

- `Message`\<[`LeavesRequestsServiceSearchAllReq`](LeavesRequestsServiceSearchAllReq.md)\>

  ↳ **`LeavesRequestsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](LeavesRequestsServiceSearchAllReq.md#constructor)

### Properties

- [count](LeavesRequestsServiceSearchAllReq.md#count)
- [entityUuid](LeavesRequestsServiceSearchAllReq.md#entityuuid)
- [isActive](LeavesRequestsServiceSearchAllReq.md#isactive)
- [offset](LeavesRequestsServiceSearchAllReq.md#offset)
- [searchKey](LeavesRequestsServiceSearchAllReq.md#searchkey)
- [sortKey](LeavesRequestsServiceSearchAllReq.md#sortkey)
- [sortOrder](LeavesRequestsServiceSearchAllReq.md#sortorder)
- [status](LeavesRequestsServiceSearchAllReq.md#status)
- [userId](LeavesRequestsServiceSearchAllReq.md#userid)
- [fields](LeavesRequestsServiceSearchAllReq.md#fields)
- [runtime](LeavesRequestsServiceSearchAllReq.md#runtime)
- [typeName](LeavesRequestsServiceSearchAllReq.md#typename)

### Methods

- [clone](LeavesRequestsServiceSearchAllReq.md#clone)
- [equals](LeavesRequestsServiceSearchAllReq.md#equals)
- [fromBinary](LeavesRequestsServiceSearchAllReq.md#frombinary)
- [fromJson](LeavesRequestsServiceSearchAllReq.md#fromjson)
- [fromJsonString](LeavesRequestsServiceSearchAllReq.md#fromjsonstring)
- [getType](LeavesRequestsServiceSearchAllReq.md#gettype)
- [toBinary](LeavesRequestsServiceSearchAllReq.md#tobinary)
- [toJSON](LeavesRequestsServiceSearchAllReq.md#tojson)
- [toJson](LeavesRequestsServiceSearchAllReq.md#tojson-1)
- [toJsonString](LeavesRequestsServiceSearchAllReq.md#tojsonstring)
- [equals](LeavesRequestsServiceSearchAllReq.md#equals-1)
- [fromBinary](LeavesRequestsServiceSearchAllReq.md#frombinary-1)
- [fromJson](LeavesRequestsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](LeavesRequestsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesRequestsServiceSearchAllReq**(`data?`): [`LeavesRequestsServiceSearchAllReq`](LeavesRequestsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeavesRequestsServiceSearchAllReq`](LeavesRequestsServiceSearchAllReq.md)\> |

#### Returns

[`LeavesRequestsServiceSearchAllReq`](LeavesRequestsServiceSearchAllReq.md)

#### Overrides

Message\&lt;LeavesRequestsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/leaves_requests.scailo_pb.ts:1220](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1220)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1169](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1169)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1197](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1197)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1162](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1162)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1176](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1176)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1211](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1211)

___

### sortKey

• **sortKey**: [`LEAVE_REQUEST_SORT_KEY`](../enums/LEAVE_REQUEST_SORT_KEY.md) = `LEAVE_REQUEST_SORT_KEY.LEAVE_REQUEST_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.LEAVE_REQUEST_SORT_KEY sort_key = 5;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1190](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1190)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1183](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1183)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1204](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1204)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for leave

**`Generated`**

from field: uint64 user_id = 22;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1218](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1218)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_requests.scailo_pb.ts:1227](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1227)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_requests.scailo_pb.ts:1225](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1225)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesRequestsServiceSearchAllReq"``

#### Defined in

[src/leaves_requests.scailo_pb.ts:1226](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1226)

## Methods

### clone

▸ **clone**(): [`LeavesRequestsServiceSearchAllReq`](LeavesRequestsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`LeavesRequestsServiceSearchAllReq`](LeavesRequestsServiceSearchAllReq.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`LeavesRequestsServiceSearchAllReq`](LeavesRequestsServiceSearchAllReq.md) \| `PlainMessage`\<[`LeavesRequestsServiceSearchAllReq`](LeavesRequestsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`LeavesRequestsServiceSearchAllReq`](LeavesRequestsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeavesRequestsServiceSearchAllReq`](LeavesRequestsServiceSearchAllReq.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`LeavesRequestsServiceSearchAllReq`](LeavesRequestsServiceSearchAllReq.md) \| `PlainMessage`\<[`LeavesRequestsServiceSearchAllReq`](LeavesRequestsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`LeavesRequestsServiceSearchAllReq`](LeavesRequestsServiceSearchAllReq.md) \| `PlainMessage`\<[`LeavesRequestsServiceSearchAllReq`](LeavesRequestsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_requests.scailo_pb.ts:1251](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1251)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesRequestsServiceSearchAllReq`](LeavesRequestsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeavesRequestsServiceSearchAllReq`](LeavesRequestsServiceSearchAllReq.md)

#### Defined in

[src/leaves_requests.scailo_pb.ts:1239](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1239)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesRequestsServiceSearchAllReq`](LeavesRequestsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesRequestsServiceSearchAllReq`](LeavesRequestsServiceSearchAllReq.md)

#### Defined in

[src/leaves_requests.scailo_pb.ts:1243](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1243)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesRequestsServiceSearchAllReq`](LeavesRequestsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesRequestsServiceSearchAllReq`](LeavesRequestsServiceSearchAllReq.md)

#### Defined in

[src/leaves_requests.scailo_pb.ts:1247](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1247)
