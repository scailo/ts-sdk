[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeavesRequestsServiceCountReq

# Class: LeavesRequestsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.LeavesRequestsServiceCountReq

## Hierarchy

- `Message`\<[`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)\>

  ↳ **`LeavesRequestsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](LeavesRequestsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](LeavesRequestsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](LeavesRequestsServiceCountReq.md#approvedonend)
- [approvedOnStart](LeavesRequestsServiceCountReq.md#approvedonstart)
- [approverRoleId](LeavesRequestsServiceCountReq.md#approverroleid)
- [completedOnEnd](LeavesRequestsServiceCountReq.md#completedonend)
- [completedOnStart](LeavesRequestsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](LeavesRequestsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](LeavesRequestsServiceCountReq.md#creationtimestampstart)
- [entityUuid](LeavesRequestsServiceCountReq.md#entityuuid)
- [finalRefNumber](LeavesRequestsServiceCountReq.md#finalrefnumber)
- [formData](LeavesRequestsServiceCountReq.md#formdata)
- [fromTimestampEnd](LeavesRequestsServiceCountReq.md#fromtimestampend)
- [fromTimestampStart](LeavesRequestsServiceCountReq.md#fromtimestampstart)
- [isActive](LeavesRequestsServiceCountReq.md#isactive)
- [leaveTypeId](LeavesRequestsServiceCountReq.md#leavetypeid)
- [modificationTimestampEnd](LeavesRequestsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](LeavesRequestsServiceCountReq.md#modificationtimestampstart)
- [referenceId](LeavesRequestsServiceCountReq.md#referenceid)
- [status](LeavesRequestsServiceCountReq.md#status)
- [toTimestampEnd](LeavesRequestsServiceCountReq.md#totimestampend)
- [toTimestampStart](LeavesRequestsServiceCountReq.md#totimestampstart)
- [userId](LeavesRequestsServiceCountReq.md#userid)
- [fields](LeavesRequestsServiceCountReq.md#fields)
- [runtime](LeavesRequestsServiceCountReq.md#runtime)
- [typeName](LeavesRequestsServiceCountReq.md#typename)

### Methods

- [clone](LeavesRequestsServiceCountReq.md#clone)
- [equals](LeavesRequestsServiceCountReq.md#equals)
- [fromBinary](LeavesRequestsServiceCountReq.md#frombinary)
- [fromJson](LeavesRequestsServiceCountReq.md#fromjson)
- [fromJsonString](LeavesRequestsServiceCountReq.md#fromjsonstring)
- [getType](LeavesRequestsServiceCountReq.md#gettype)
- [toBinary](LeavesRequestsServiceCountReq.md#tobinary)
- [toJSON](LeavesRequestsServiceCountReq.md#tojson)
- [toJson](LeavesRequestsServiceCountReq.md#tojson-1)
- [toJsonString](LeavesRequestsServiceCountReq.md#tojsonstring)
- [equals](LeavesRequestsServiceCountReq.md#equals-1)
- [fromBinary](LeavesRequestsServiceCountReq.md#frombinary-1)
- [fromJson](LeavesRequestsServiceCountReq.md#fromjson-1)
- [fromJsonString](LeavesRequestsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesRequestsServiceCountReq**(`data?`): [`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)\> |

#### Returns

[`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)

#### Overrides

Message\&lt;LeavesRequestsServiceCountReq\&gt;.constructor

#### Defined in

[src/leaves_requests.scailo_pb.ts:1101](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1101)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1015](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1015)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1008](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1008)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1001](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1001)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1022](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1022)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1036](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1036)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1029](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1029)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/leaves_requests.scailo_pb.ts:966](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L966)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/leaves_requests.scailo_pb.ts:959](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L959)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/leaves_requests.scailo_pb.ts:987](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L987)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1050](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1050)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1099](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1099)

___

### fromTimestampEnd

• **fromTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "from timestamp"

**`Generated`**

from field: uint64 from_timestamp_end = 25;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1078](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1078)

___

### fromTimestampStart

• **fromTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "from timestamp"

**`Generated`**

from field: uint64 from_timestamp_start = 24;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1071](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1071)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/leaves_requests.scailo_pb.ts:952](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L952)

___

### leaveTypeId

• **leaveTypeId**: `bigint` = `protoInt64.zero`

The ID of the corresponding leave type

**`Generated`**

from field: uint64 leave_type_id = 23;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1064](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1064)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/leaves_requests.scailo_pb.ts:980](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L980)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/leaves_requests.scailo_pb.ts:973](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L973)

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the leave request

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1043](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1043)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this leave request

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/leaves_requests.scailo_pb.ts:994](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L994)

___

### toTimestampEnd

• **toTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "to timestamp"

**`Generated`**

from field: uint64 to_timestamp_end = 27;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1092](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1092)

___

### toTimestampStart

• **toTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "to timestamp"

**`Generated`**

from field: uint64 to_timestamp_start = 26;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1085](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1085)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for leave

**`Generated`**

from field: uint64 user_id = 22;

#### Defined in

[src/leaves_requests.scailo_pb.ts:1057](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1057)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_requests.scailo_pb.ts:1108](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1108)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_requests.scailo_pb.ts:1106](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1106)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesRequestsServiceCountReq"``

#### Defined in

[src/leaves_requests.scailo_pb.ts:1107](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1107)

## Methods

### clone

▸ **clone**(): [`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)

Create a deep copy.

#### Returns

[`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md) \| `PlainMessage`\<[`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md) \| `PlainMessage`\<[`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)\> |
| `b` | `undefined` \| [`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md) \| `PlainMessage`\<[`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_requests.scailo_pb.ts:1145](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1145)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)

#### Defined in

[src/leaves_requests.scailo_pb.ts:1133](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1133)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)

#### Defined in

[src/leaves_requests.scailo_pb.ts:1137](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1137)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesRequestsServiceCountReq`](LeavesRequestsServiceCountReq.md)

#### Defined in

[src/leaves_requests.scailo_pb.ts:1141](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_requests.scailo_pb.ts#L1141)
