[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / MeetingActionablesSearchRequest

# Class: MeetingActionablesSearchRequest

Describes the request payload to retrieve actionables.

**`Generated`**

from message Scailo.MeetingActionablesSearchRequest

## Hierarchy

- `Message`\<[`MeetingActionablesSearchRequest`](MeetingActionablesSearchRequest.md)\>

  ↳ **`MeetingActionablesSearchRequest`**

## Table of contents

### Constructors

- [constructor](MeetingActionablesSearchRequest.md#constructor)

### Properties

- [activityTagId](MeetingActionablesSearchRequest.md#activitytagid)
- [count](MeetingActionablesSearchRequest.md#count)
- [entityUuid](MeetingActionablesSearchRequest.md#entityuuid)
- [isActive](MeetingActionablesSearchRequest.md#isactive)
- [meetingId](MeetingActionablesSearchRequest.md#meetingid)
- [offset](MeetingActionablesSearchRequest.md#offset)
- [searchKey](MeetingActionablesSearchRequest.md#searchkey)
- [sortKey](MeetingActionablesSearchRequest.md#sortkey)
- [sortOrder](MeetingActionablesSearchRequest.md#sortorder)
- [fields](MeetingActionablesSearchRequest.md#fields)
- [runtime](MeetingActionablesSearchRequest.md#runtime)
- [typeName](MeetingActionablesSearchRequest.md#typename)

### Methods

- [clone](MeetingActionablesSearchRequest.md#clone)
- [equals](MeetingActionablesSearchRequest.md#equals)
- [fromBinary](MeetingActionablesSearchRequest.md#frombinary)
- [fromJson](MeetingActionablesSearchRequest.md#fromjson)
- [fromJsonString](MeetingActionablesSearchRequest.md#fromjsonstring)
- [getType](MeetingActionablesSearchRequest.md#gettype)
- [toBinary](MeetingActionablesSearchRequest.md#tobinary)
- [toJSON](MeetingActionablesSearchRequest.md#tojson)
- [toJson](MeetingActionablesSearchRequest.md#tojson-1)
- [toJsonString](MeetingActionablesSearchRequest.md#tojsonstring)
- [equals](MeetingActionablesSearchRequest.md#equals-1)
- [fromBinary](MeetingActionablesSearchRequest.md#frombinary-1)
- [fromJson](MeetingActionablesSearchRequest.md#fromjson-1)
- [fromJsonString](MeetingActionablesSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new MeetingActionablesSearchRequest**(`data?`): [`MeetingActionablesSearchRequest`](MeetingActionablesSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MeetingActionablesSearchRequest`](MeetingActionablesSearchRequest.md)\> |

#### Returns

[`MeetingActionablesSearchRequest`](MeetingActionablesSearchRequest.md)

#### Overrides

Message\&lt;MeetingActionablesSearchRequest\&gt;.constructor

#### Defined in

src/meetings.scailo_pb.ts:1787

## Properties

### activityTagId

• **activityTagId**: `bigint` = `protoInt64.zero`

Stores the optional activity tag ID

**`Generated`**

from field: uint64 activity_tag_id = 23;

#### Defined in

src/meetings.scailo_pb.ts:1778

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/meetings.scailo_pb.ts:1736

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/meetings.scailo_pb.ts:1764

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/meetings.scailo_pb.ts:1729

___

### meetingId

• **meetingId**: `bigint` = `protoInt64.zero`

The ID of the meeting

**`Generated`**

from field: uint64 meeting_id = 20;

#### Defined in

src/meetings.scailo_pb.ts:1771

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/meetings.scailo_pb.ts:1743

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

src/meetings.scailo_pb.ts:1785

___

### sortKey

• **sortKey**: [`MEETING_ACTIONABLE_SORT_KEY`](../enums/MEETING_ACTIONABLE_SORT_KEY.md) = `MEETING_ACTIONABLE_SORT_KEY.MEETING_ACTIONABLE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.MEETING_ACTIONABLE_SORT_KEY sort_key = 5;

#### Defined in

src/meetings.scailo_pb.ts:1757

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/meetings.scailo_pb.ts:1750

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/meetings.scailo_pb.ts:1794

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/meetings.scailo_pb.ts:1792

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MeetingActionablesSearchRequest"``

#### Defined in

src/meetings.scailo_pb.ts:1793

## Methods

### clone

▸ **clone**(): [`MeetingActionablesSearchRequest`](MeetingActionablesSearchRequest.md)

Create a deep copy.

#### Returns

[`MeetingActionablesSearchRequest`](MeetingActionablesSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`MeetingActionablesSearchRequest`](MeetingActionablesSearchRequest.md) \| `PlainMessage`\<[`MeetingActionablesSearchRequest`](MeetingActionablesSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`MeetingActionablesSearchRequest`](MeetingActionablesSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MeetingActionablesSearchRequest`](MeetingActionablesSearchRequest.md)\>

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
| `a` | `undefined` \| [`MeetingActionablesSearchRequest`](MeetingActionablesSearchRequest.md) \| `PlainMessage`\<[`MeetingActionablesSearchRequest`](MeetingActionablesSearchRequest.md)\> |
| `b` | `undefined` \| [`MeetingActionablesSearchRequest`](MeetingActionablesSearchRequest.md) \| `PlainMessage`\<[`MeetingActionablesSearchRequest`](MeetingActionablesSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/meetings.scailo_pb.ts:1818

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MeetingActionablesSearchRequest`](MeetingActionablesSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MeetingActionablesSearchRequest`](MeetingActionablesSearchRequest.md)

#### Defined in

src/meetings.scailo_pb.ts:1806

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MeetingActionablesSearchRequest`](MeetingActionablesSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingActionablesSearchRequest`](MeetingActionablesSearchRequest.md)

#### Defined in

src/meetings.scailo_pb.ts:1810

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MeetingActionablesSearchRequest`](MeetingActionablesSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingActionablesSearchRequest`](MeetingActionablesSearchRequest.md)

#### Defined in

src/meetings.scailo_pb.ts:1814
