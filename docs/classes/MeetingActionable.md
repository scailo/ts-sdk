[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MeetingActionable

# Class: MeetingActionable

Describes the parameters that constitute an actionable associated to a meeting

**`Generated`**

from message Scailo.MeetingActionable

## Hierarchy

- `Message`\<[`MeetingActionable`](MeetingActionable.md)\>

  ↳ **`MeetingActionable`**

## Table of contents

### Constructors

- [constructor](MeetingActionable.md#constructor)

### Properties

- [activityTagId](MeetingActionable.md#activitytagid)
- [content](MeetingActionable.md#content)
- [entityUuid](MeetingActionable.md#entityuuid)
- [meetingId](MeetingActionable.md#meetingid)
- [metadata](MeetingActionable.md#metadata)
- [title](MeetingActionable.md#title)
- [userComment](MeetingActionable.md#usercomment)
- [fields](MeetingActionable.md#fields)
- [runtime](MeetingActionable.md#runtime)
- [typeName](MeetingActionable.md#typename)

### Methods

- [clone](MeetingActionable.md#clone)
- [equals](MeetingActionable.md#equals)
- [fromBinary](MeetingActionable.md#frombinary)
- [fromJson](MeetingActionable.md#fromjson)
- [fromJsonString](MeetingActionable.md#fromjsonstring)
- [getType](MeetingActionable.md#gettype)
- [toBinary](MeetingActionable.md#tobinary)
- [toJSON](MeetingActionable.md#tojson)
- [toJson](MeetingActionable.md#tojson-1)
- [toJsonString](MeetingActionable.md#tojsonstring)
- [equals](MeetingActionable.md#equals-1)
- [fromBinary](MeetingActionable.md#frombinary-1)
- [fromJson](MeetingActionable.md#fromjson-1)
- [fromJsonString](MeetingActionable.md#fromjsonstring-1)

## Constructors

### constructor

• **new MeetingActionable**(`data?`): [`MeetingActionable`](MeetingActionable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MeetingActionable`](MeetingActionable.md)\> |

#### Returns

[`MeetingActionable`](MeetingActionable.md)

#### Overrides

Message\&lt;MeetingActionable\&gt;.constructor

#### Defined in

src/meetings.scailo_pb.ts:1607

## Properties

### activityTagId

• **activityTagId**: `bigint` = `protoInt64.zero`

Stores the optional activity tag ID

**`Generated`**

from field: uint64 activity_tag_id = 13;

#### Defined in

src/meetings.scailo_pb.ts:1605

___

### content

• **content**: `string` = `""`

The content of the actionable

**`Generated`**

from field: string content = 12;

#### Defined in

src/meetings.scailo_pb.ts:1598

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/meetings.scailo_pb.ts:1563

___

### meetingId

• **meetingId**: `bigint` = `protoInt64.zero`

Stores the meeting ID

**`Generated`**

from field: uint64 meeting_id = 10;

#### Defined in

src/meetings.scailo_pb.ts:1584

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this meeting

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/meetings.scailo_pb.ts:1570

___

### title

• **title**: `string` = `""`

The title of the actionable

**`Generated`**

from field: string title = 11;

#### Defined in

src/meetings.scailo_pb.ts:1591

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/meetings.scailo_pb.ts:1577

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/meetings.scailo_pb.ts:1614

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/meetings.scailo_pb.ts:1612

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MeetingActionable"``

#### Defined in

src/meetings.scailo_pb.ts:1613

## Methods

### clone

▸ **clone**(): [`MeetingActionable`](MeetingActionable.md)

Create a deep copy.

#### Returns

[`MeetingActionable`](MeetingActionable.md)

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
| `other` | `undefined` \| ``null`` \| [`MeetingActionable`](MeetingActionable.md) \| `PlainMessage`\<[`MeetingActionable`](MeetingActionable.md)\> |

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

▸ **getType**(): `MessageType`\<[`MeetingActionable`](MeetingActionable.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MeetingActionable`](MeetingActionable.md)\>

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
| `a` | `undefined` \| [`MeetingActionable`](MeetingActionable.md) \| `PlainMessage`\<[`MeetingActionable`](MeetingActionable.md)\> |
| `b` | `undefined` \| [`MeetingActionable`](MeetingActionable.md) \| `PlainMessage`\<[`MeetingActionable`](MeetingActionable.md)\> |

#### Returns

`boolean`

#### Defined in

src/meetings.scailo_pb.ts:1636

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MeetingActionable`](MeetingActionable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MeetingActionable`](MeetingActionable.md)

#### Defined in

src/meetings.scailo_pb.ts:1624

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MeetingActionable`](MeetingActionable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingActionable`](MeetingActionable.md)

#### Defined in

src/meetings.scailo_pb.ts:1628

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MeetingActionable`](MeetingActionable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingActionable`](MeetingActionable.md)

#### Defined in

src/meetings.scailo_pb.ts:1632
