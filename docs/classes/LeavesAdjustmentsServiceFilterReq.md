[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeavesAdjustmentsServiceFilterReq

# Class: LeavesAdjustmentsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.LeavesAdjustmentsServiceFilterReq

## Hierarchy

- `Message`\<[`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)\>

  ↳ **`LeavesAdjustmentsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](LeavesAdjustmentsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](LeavesAdjustmentsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](LeavesAdjustmentsServiceFilterReq.md#approvedonend)
- [approvedOnStart](LeavesAdjustmentsServiceFilterReq.md#approvedonstart)
- [approverRoleId](LeavesAdjustmentsServiceFilterReq.md#approverroleid)
- [completedOnEnd](LeavesAdjustmentsServiceFilterReq.md#completedonend)
- [completedOnStart](LeavesAdjustmentsServiceFilterReq.md#completedonstart)
- [count](LeavesAdjustmentsServiceFilterReq.md#count)
- [creationTimestampEnd](LeavesAdjustmentsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](LeavesAdjustmentsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](LeavesAdjustmentsServiceFilterReq.md#entityuuid)
- [finalRefNumber](LeavesAdjustmentsServiceFilterReq.md#finalrefnumber)
- [isActive](LeavesAdjustmentsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](LeavesAdjustmentsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](LeavesAdjustmentsServiceFilterReq.md#modificationtimestampstart)
- [offset](LeavesAdjustmentsServiceFilterReq.md#offset)
- [referenceId](LeavesAdjustmentsServiceFilterReq.md#referenceid)
- [sortKey](LeavesAdjustmentsServiceFilterReq.md#sortkey)
- [sortOrder](LeavesAdjustmentsServiceFilterReq.md#sortorder)
- [status](LeavesAdjustmentsServiceFilterReq.md#status)
- [userId](LeavesAdjustmentsServiceFilterReq.md#userid)
- [fields](LeavesAdjustmentsServiceFilterReq.md#fields)
- [runtime](LeavesAdjustmentsServiceFilterReq.md#runtime)
- [typeName](LeavesAdjustmentsServiceFilterReq.md#typename)

### Methods

- [clone](LeavesAdjustmentsServiceFilterReq.md#clone)
- [equals](LeavesAdjustmentsServiceFilterReq.md#equals)
- [fromBinary](LeavesAdjustmentsServiceFilterReq.md#frombinary)
- [fromJson](LeavesAdjustmentsServiceFilterReq.md#fromjson)
- [fromJsonString](LeavesAdjustmentsServiceFilterReq.md#fromjsonstring)
- [getType](LeavesAdjustmentsServiceFilterReq.md#gettype)
- [toBinary](LeavesAdjustmentsServiceFilterReq.md#tobinary)
- [toJSON](LeavesAdjustmentsServiceFilterReq.md#tojson)
- [toJson](LeavesAdjustmentsServiceFilterReq.md#tojson-1)
- [toJsonString](LeavesAdjustmentsServiceFilterReq.md#tojsonstring)
- [equals](LeavesAdjustmentsServiceFilterReq.md#equals-1)
- [fromBinary](LeavesAdjustmentsServiceFilterReq.md#frombinary-1)
- [fromJson](LeavesAdjustmentsServiceFilterReq.md#fromjson-1)
- [fromJsonString](LeavesAdjustmentsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesAdjustmentsServiceFilterReq**(`data?`): [`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)\> |

#### Returns

[`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)

#### Overrides

Message\&lt;LeavesAdjustmentsServiceFilterReq\&gt;.constructor

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1210

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1166

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1159

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1152

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1173

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1187

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1180

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1082

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1117

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1110

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1138

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1201

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1075

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1131

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1124

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1089

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the leave adjustment

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1194

___

### sortKey

• **sortKey**: [`LEAVE_ADJUSTMENT_SORT_KEY`](../enums/LEAVE_ADJUSTMENT_SORT_KEY.md) = `LEAVE_ADJUSTMENT_SORT_KEY.LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.LEAVE_ADJUSTMENT_SORT_KEY sort_key = 5;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1103

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1096

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this record

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1145

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user for whom this adjustment needs to be made

**`Generated`**

from field: uint64 user_id = 22;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1208

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1217

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1215

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesAdjustmentsServiceFilterReq"``

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1216

## Methods

### clone

▸ **clone**(): [`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md) \| `PlainMessage`\<[`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md) \| `PlainMessage`\<[`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md) \| `PlainMessage`\<[`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1252

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1240

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1244

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceFilterReq`](LeavesAdjustmentsServiceFilterReq.md)

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1248
