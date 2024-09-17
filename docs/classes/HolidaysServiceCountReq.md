[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / HolidaysServiceCountReq

# Class: HolidaysServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.HolidaysServiceCountReq

## Hierarchy

- `Message`\<[`HolidaysServiceCountReq`](HolidaysServiceCountReq.md)\>

  ↳ **`HolidaysServiceCountReq`**

## Table of contents

### Constructors

- [constructor](HolidaysServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](HolidaysServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](HolidaysServiceCountReq.md#approvedonend)
- [approvedOnStart](HolidaysServiceCountReq.md#approvedonstart)
- [approverRoleId](HolidaysServiceCountReq.md#approverroleid)
- [completedOnEnd](HolidaysServiceCountReq.md#completedonend)
- [completedOnStart](HolidaysServiceCountReq.md#completedonstart)
- [creationTimestampEnd](HolidaysServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](HolidaysServiceCountReq.md#creationtimestampstart)
- [description](HolidaysServiceCountReq.md#description)
- [endOnEnd](HolidaysServiceCountReq.md#endonend)
- [endOnStart](HolidaysServiceCountReq.md#endonstart)
- [entityUuid](HolidaysServiceCountReq.md#entityuuid)
- [isActive](HolidaysServiceCountReq.md#isactive)
- [modificationTimestampEnd](HolidaysServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](HolidaysServiceCountReq.md#modificationtimestampstart)
- [startOnEnd](HolidaysServiceCountReq.md#startonend)
- [startOnStart](HolidaysServiceCountReq.md#startonstart)
- [status](HolidaysServiceCountReq.md#status)
- [title](HolidaysServiceCountReq.md#title)
- [fields](HolidaysServiceCountReq.md#fields)
- [runtime](HolidaysServiceCountReq.md#runtime)
- [typeName](HolidaysServiceCountReq.md#typename)

### Methods

- [clone](HolidaysServiceCountReq.md#clone)
- [equals](HolidaysServiceCountReq.md#equals)
- [fromBinary](HolidaysServiceCountReq.md#frombinary)
- [fromJson](HolidaysServiceCountReq.md#fromjson)
- [fromJsonString](HolidaysServiceCountReq.md#fromjsonstring)
- [getType](HolidaysServiceCountReq.md#gettype)
- [toBinary](HolidaysServiceCountReq.md#tobinary)
- [toJSON](HolidaysServiceCountReq.md#tojson)
- [toJson](HolidaysServiceCountReq.md#tojson-1)
- [toJsonString](HolidaysServiceCountReq.md#tojsonstring)
- [equals](HolidaysServiceCountReq.md#equals-1)
- [fromBinary](HolidaysServiceCountReq.md#frombinary-1)
- [fromJson](HolidaysServiceCountReq.md#fromjson-1)
- [fromJsonString](HolidaysServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new HolidaysServiceCountReq**(`data?`): [`HolidaysServiceCountReq`](HolidaysServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`HolidaysServiceCountReq`](HolidaysServiceCountReq.md)\> |

#### Returns

[`HolidaysServiceCountReq`](HolidaysServiceCountReq.md)

#### Overrides

Message\&lt;HolidaysServiceCountReq\&gt;.constructor

#### Defined in

src/holidays.scailo_pb.ts:1287

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/holidays.scailo_pb.ts:1222

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/holidays.scailo_pb.ts:1215

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/holidays.scailo_pb.ts:1208

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/holidays.scailo_pb.ts:1229

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/holidays.scailo_pb.ts:1243

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/holidays.scailo_pb.ts:1236

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/holidays.scailo_pb.ts:1173

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/holidays.scailo_pb.ts:1166

___

### description

• **description**: `string` = `""`

The description of the holiday

**`Generated`**

from field: string description = 21;

#### Defined in

src/holidays.scailo_pb.ts:1257

___

### endOnEnd

• **endOnEnd**: `bigint` = `protoInt64.zero`

The end range of end timestamp

**`Generated`**

from field: uint64 end_on_end = 25;

#### Defined in

src/holidays.scailo_pb.ts:1285

___

### endOnStart

• **endOnStart**: `bigint` = `protoInt64.zero`

The start range of end timestamp

**`Generated`**

from field: uint64 end_on_start = 24;

#### Defined in

src/holidays.scailo_pb.ts:1278

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/holidays.scailo_pb.ts:1194

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/holidays.scailo_pb.ts:1159

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/holidays.scailo_pb.ts:1187

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/holidays.scailo_pb.ts:1180

___

### startOnEnd

• **startOnEnd**: `bigint` = `protoInt64.zero`

The end range of start timestamp

**`Generated`**

from field: uint64 start_on_end = 23;

#### Defined in

src/holidays.scailo_pb.ts:1271

___

### startOnStart

• **startOnStart**: `bigint` = `protoInt64.zero`

The start range of start timestamp

**`Generated`**

from field: uint64 start_on_start = 22;

#### Defined in

src/holidays.scailo_pb.ts:1264

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this shift group

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/holidays.scailo_pb.ts:1201

___

### title

• **title**: `string` = `""`

The title of the holiday

**`Generated`**

from field: string title = 20;

#### Defined in

src/holidays.scailo_pb.ts:1250

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/holidays.scailo_pb.ts:1294

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/holidays.scailo_pb.ts:1292

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.HolidaysServiceCountReq"``

#### Defined in

src/holidays.scailo_pb.ts:1293

## Methods

### clone

▸ **clone**(): [`HolidaysServiceCountReq`](HolidaysServiceCountReq.md)

Create a deep copy.

#### Returns

[`HolidaysServiceCountReq`](HolidaysServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`HolidaysServiceCountReq`](HolidaysServiceCountReq.md) \| `PlainMessage`\<[`HolidaysServiceCountReq`](HolidaysServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`HolidaysServiceCountReq`](HolidaysServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`HolidaysServiceCountReq`](HolidaysServiceCountReq.md)\>

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
| `a` | `undefined` \| [`HolidaysServiceCountReq`](HolidaysServiceCountReq.md) \| `PlainMessage`\<[`HolidaysServiceCountReq`](HolidaysServiceCountReq.md)\> |
| `b` | `undefined` \| [`HolidaysServiceCountReq`](HolidaysServiceCountReq.md) \| `PlainMessage`\<[`HolidaysServiceCountReq`](HolidaysServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/holidays.scailo_pb.ts:1328

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`HolidaysServiceCountReq`](HolidaysServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`HolidaysServiceCountReq`](HolidaysServiceCountReq.md)

#### Defined in

src/holidays.scailo_pb.ts:1316

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`HolidaysServiceCountReq`](HolidaysServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceCountReq`](HolidaysServiceCountReq.md)

#### Defined in

src/holidays.scailo_pb.ts:1320

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`HolidaysServiceCountReq`](HolidaysServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceCountReq`](HolidaysServiceCountReq.md)

#### Defined in

src/holidays.scailo_pb.ts:1324
