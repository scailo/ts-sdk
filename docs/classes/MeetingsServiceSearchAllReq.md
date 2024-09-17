[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MeetingsServiceSearchAllReq

# Class: MeetingsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.MeetingsServiceSearchAllReq

## Hierarchy

- `Message`\<[`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)\>

  ↳ **`MeetingsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](MeetingsServiceSearchAllReq.md#constructor)

### Properties

- [activityTagId](MeetingsServiceSearchAllReq.md#activitytagid)
- [associateId](MeetingsServiceSearchAllReq.md#associateid)
- [count](MeetingsServiceSearchAllReq.md#count)
- [employeeId](MeetingsServiceSearchAllReq.md#employeeid)
- [entityUuid](MeetingsServiceSearchAllReq.md#entityuuid)
- [isActive](MeetingsServiceSearchAllReq.md#isactive)
- [offset](MeetingsServiceSearchAllReq.md#offset)
- [searchKey](MeetingsServiceSearchAllReq.md#searchkey)
- [sortKey](MeetingsServiceSearchAllReq.md#sortkey)
- [sortOrder](MeetingsServiceSearchAllReq.md#sortorder)
- [status](MeetingsServiceSearchAllReq.md#status)
- [fields](MeetingsServiceSearchAllReq.md#fields)
- [runtime](MeetingsServiceSearchAllReq.md#runtime)
- [typeName](MeetingsServiceSearchAllReq.md#typename)

### Methods

- [clone](MeetingsServiceSearchAllReq.md#clone)
- [equals](MeetingsServiceSearchAllReq.md#equals)
- [fromBinary](MeetingsServiceSearchAllReq.md#frombinary)
- [fromJson](MeetingsServiceSearchAllReq.md#fromjson)
- [fromJsonString](MeetingsServiceSearchAllReq.md#fromjsonstring)
- [getType](MeetingsServiceSearchAllReq.md#gettype)
- [toBinary](MeetingsServiceSearchAllReq.md#tobinary)
- [toJSON](MeetingsServiceSearchAllReq.md#tojson)
- [toJson](MeetingsServiceSearchAllReq.md#tojson-1)
- [toJsonString](MeetingsServiceSearchAllReq.md#tojsonstring)
- [equals](MeetingsServiceSearchAllReq.md#equals-1)
- [fromBinary](MeetingsServiceSearchAllReq.md#frombinary-1)
- [fromJson](MeetingsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](MeetingsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new MeetingsServiceSearchAllReq**(`data?`): [`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)\> |

#### Returns

[`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)

#### Overrides

Message\&lt;MeetingsServiceSearchAllReq\&gt;.constructor

#### Defined in

src/meetings.scailo_pb.ts:1349

## Properties

### activityTagId

• **activityTagId**: `bigint` = `protoInt64.zero`

Return all the meetings that have the following activity tag as part of the actionables

**`Generated`**

from field: uint64 activity_tag_id = 42;

#### Defined in

src/meetings.scailo_pb.ts:1347

___

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

Return all the meetings that the given associate is a part of

**`Generated`**

from field: uint64 associate_id = 41;

#### Defined in

src/meetings.scailo_pb.ts:1340

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/meetings.scailo_pb.ts:1284

___

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

Return all the meetings that the given employee is a part of

**`Generated`**

from field: uint64 employee_id = 40;

#### Defined in

src/meetings.scailo_pb.ts:1333

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/meetings.scailo_pb.ts:1312

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/meetings.scailo_pb.ts:1277

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/meetings.scailo_pb.ts:1291

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/meetings.scailo_pb.ts:1326

___

### sortKey

• **sortKey**: [`MEETING_SORT_KEY`](../enums/MEETING_SORT_KEY.md) = `MEETING_SORT_KEY.MEETING_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.MEETING_SORT_KEY sort_key = 5;

#### Defined in

src/meetings.scailo_pb.ts:1305

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/meetings.scailo_pb.ts:1298

___

### status

• **status**: [`MEETING_LIFECYCLE`](../enums/MEETING_LIFECYCLE.md) = `MEETING_LIFECYCLE.MEETING_LIFECYCLE_ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.MEETING_LIFECYCLE status = 10;

#### Defined in

src/meetings.scailo_pb.ts:1319

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/meetings.scailo_pb.ts:1356

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/meetings.scailo_pb.ts:1354

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MeetingsServiceSearchAllReq"``

#### Defined in

src/meetings.scailo_pb.ts:1355

## Methods

### clone

▸ **clone**(): [`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md) \| `PlainMessage`\<[`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md) \| `PlainMessage`\<[`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md) \| `PlainMessage`\<[`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/meetings.scailo_pb.ts:1382

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)

#### Defined in

src/meetings.scailo_pb.ts:1370

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)

#### Defined in

src/meetings.scailo_pb.ts:1374

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsServiceSearchAllReq`](MeetingsServiceSearchAllReq.md)

#### Defined in

src/meetings.scailo_pb.ts:1378
