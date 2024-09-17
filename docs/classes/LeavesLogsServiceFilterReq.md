[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeavesLogsServiceFilterReq

# Class: LeavesLogsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.LeavesLogsServiceFilterReq

## Hierarchy

- `Message`\<[`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)\>

  ↳ **`LeavesLogsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](LeavesLogsServiceFilterReq.md#constructor)

### Properties

- [count](LeavesLogsServiceFilterReq.md#count)
- [creationTimestampEnd](LeavesLogsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](LeavesLogsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](LeavesLogsServiceFilterReq.md#entityuuid)
- [isActive](LeavesLogsServiceFilterReq.md#isactive)
- [leaveTypeId](LeavesLogsServiceFilterReq.md#leavetypeid)
- [modificationTimestampEnd](LeavesLogsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](LeavesLogsServiceFilterReq.md#modificationtimestampstart)
- [offset](LeavesLogsServiceFilterReq.md#offset)
- [quantityMax](LeavesLogsServiceFilterReq.md#quantitymax)
- [quantityMin](LeavesLogsServiceFilterReq.md#quantitymin)
- [refFrom](LeavesLogsServiceFilterReq.md#reffrom)
- [refId](LeavesLogsServiceFilterReq.md#refid)
- [sortKey](LeavesLogsServiceFilterReq.md#sortkey)
- [sortOrder](LeavesLogsServiceFilterReq.md#sortorder)
- [uomId](LeavesLogsServiceFilterReq.md#uomid)
- [userId](LeavesLogsServiceFilterReq.md#userid)
- [fields](LeavesLogsServiceFilterReq.md#fields)
- [runtime](LeavesLogsServiceFilterReq.md#runtime)
- [typeName](LeavesLogsServiceFilterReq.md#typename)

### Methods

- [clone](LeavesLogsServiceFilterReq.md#clone)
- [equals](LeavesLogsServiceFilterReq.md#equals)
- [fromBinary](LeavesLogsServiceFilterReq.md#frombinary)
- [fromJson](LeavesLogsServiceFilterReq.md#fromjson)
- [fromJsonString](LeavesLogsServiceFilterReq.md#fromjsonstring)
- [getType](LeavesLogsServiceFilterReq.md#gettype)
- [toBinary](LeavesLogsServiceFilterReq.md#tobinary)
- [toJSON](LeavesLogsServiceFilterReq.md#tojson)
- [toJson](LeavesLogsServiceFilterReq.md#tojson-1)
- [toJsonString](LeavesLogsServiceFilterReq.md#tojsonstring)
- [equals](LeavesLogsServiceFilterReq.md#equals-1)
- [fromBinary](LeavesLogsServiceFilterReq.md#frombinary-1)
- [fromJson](LeavesLogsServiceFilterReq.md#fromjson-1)
- [fromJsonString](LeavesLogsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesLogsServiceFilterReq**(`data?`): [`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)\> |

#### Returns

[`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)

#### Overrides

Message\&lt;LeavesLogsServiceFilterReq\&gt;.constructor

#### Defined in

src/leaves_logs.scailo_pb.ts:491

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/leaves_logs.scailo_pb.ts:384

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/leaves_logs.scailo_pb.ts:419

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/leaves_logs.scailo_pb.ts:412

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/leaves_logs.scailo_pb.ts:440

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/leaves_logs.scailo_pb.ts:377

___

### leaveTypeId

• **leaveTypeId**: `bigint` = `protoInt64.zero`

The leave type ID

**`Generated`**

from field: uint64 leave_type_id = 14;

#### Defined in

src/leaves_logs.scailo_pb.ts:475

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/leaves_logs.scailo_pb.ts:433

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/leaves_logs.scailo_pb.ts:426

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/leaves_logs.scailo_pb.ts:391

___

### quantityMax

• **quantityMax**: `bigint` = `protoInt64.zero`

The maximum quantity of leaves (in cents)

**`Generated`**

from field: uint64 quantity_max = 16;

#### Defined in

src/leaves_logs.scailo_pb.ts:489

___

### quantityMin

• **quantityMin**: `bigint` = `protoInt64.zero`

The minimum quantity of leaves (in cents)

**`Generated`**

from field: uint64 quantity_min = 15;

#### Defined in

src/leaves_logs.scailo_pb.ts:482

___

### refFrom

• **refFrom**: `string` = `""`

The reference on the basis of which this record is created

**`Generated`**

from field: string ref_from = 12;

#### Defined in

src/leaves_logs.scailo_pb.ts:461

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The corresponding reference ID

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/leaves_logs.scailo_pb.ts:468

___

### sortKey

• **sortKey**: [`LEAVE_LOG_SORT_KEY`](../enums/LEAVE_LOG_SORT_KEY.md) = `LEAVE_LOG_SORT_KEY.LEAVE_LOG_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.LEAVE_LOG_SORT_KEY sort_key = 5;

#### Defined in

src/leaves_logs.scailo_pb.ts:405

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/leaves_logs.scailo_pb.ts:398

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the uom

**`Generated`**

from field: uint64 uom_id = 11;

#### Defined in

src/leaves_logs.scailo_pb.ts:454

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user for whom this log needs to be made

**`Generated`**

from field: uint64 user_id = 10;

#### Defined in

src/leaves_logs.scailo_pb.ts:447

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/leaves_logs.scailo_pb.ts:498

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/leaves_logs.scailo_pb.ts:496

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesLogsServiceFilterReq"``

#### Defined in

src/leaves_logs.scailo_pb.ts:497

## Methods

### clone

▸ **clone**(): [`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md) \| `PlainMessage`\<[`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md) \| `PlainMessage`\<[`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md) \| `PlainMessage`\<[`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/leaves_logs.scailo_pb.ts:530

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)

#### Defined in

src/leaves_logs.scailo_pb.ts:518

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)

#### Defined in

src/leaves_logs.scailo_pb.ts:522

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)

#### Defined in

src/leaves_logs.scailo_pb.ts:526
