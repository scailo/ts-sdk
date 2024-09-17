[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MeetingAssociate

# Class: MeetingAssociate

Describes the parameters that constitute a meeting associate

**`Generated`**

from message Scailo.MeetingAssociate

## Hierarchy

- `Message`\<[`MeetingAssociate`](MeetingAssociate.md)\>

  ↳ **`MeetingAssociate`**

## Table of contents

### Constructors

- [constructor](MeetingAssociate.md#constructor)

### Properties

- [associateId](MeetingAssociate.md#associateid)
- [entityUuid](MeetingAssociate.md#entityuuid)
- [meetingId](MeetingAssociate.md#meetingid)
- [metadata](MeetingAssociate.md#metadata)
- [rsvp](MeetingAssociate.md#rsvp)
- [userComment](MeetingAssociate.md#usercomment)
- [fields](MeetingAssociate.md#fields)
- [runtime](MeetingAssociate.md#runtime)
- [typeName](MeetingAssociate.md#typename)

### Methods

- [clone](MeetingAssociate.md#clone)
- [equals](MeetingAssociate.md#equals)
- [fromBinary](MeetingAssociate.md#frombinary)
- [fromJson](MeetingAssociate.md#fromjson)
- [fromJsonString](MeetingAssociate.md#fromjsonstring)
- [getType](MeetingAssociate.md#gettype)
- [toBinary](MeetingAssociate.md#tobinary)
- [toJSON](MeetingAssociate.md#tojson)
- [toJson](MeetingAssociate.md#tojson-1)
- [toJsonString](MeetingAssociate.md#tojsonstring)
- [equals](MeetingAssociate.md#equals-1)
- [fromBinary](MeetingAssociate.md#frombinary-1)
- [fromJson](MeetingAssociate.md#fromjson-1)
- [fromJsonString](MeetingAssociate.md#fromjsonstring-1)

## Constructors

### constructor

• **new MeetingAssociate**(`data?`): [`MeetingAssociate`](MeetingAssociate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MeetingAssociate`](MeetingAssociate.md)\> |

#### Returns

[`MeetingAssociate`](MeetingAssociate.md)

#### Overrides

Message\&lt;MeetingAssociate\&gt;.constructor

#### Defined in

src/meetings.scailo_pb.ts:2194

## Properties

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

Stores the associate ID

**`Generated`**

from field: uint64 associate_id = 11;

#### Defined in

src/meetings.scailo_pb.ts:2185

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/meetings.scailo_pb.ts:2157

___

### meetingId

• **meetingId**: `bigint` = `protoInt64.zero`

Stores the meeting ID

**`Generated`**

from field: uint64 meeting_id = 10;

#### Defined in

src/meetings.scailo_pb.ts:2178

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this meeting

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/meetings.scailo_pb.ts:2164

___

### rsvp

• **rsvp**: [`MEETING_RSVP`](../enums/MEETING_RSVP.md) = `MEETING_RSVP.MEETING_RSVP_ANY_UNSPECIFIED`

Stores the person's RSVP

**`Generated`**

from field: Scailo.MEETING_RSVP rsvp = 12;

#### Defined in

src/meetings.scailo_pb.ts:2192

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/meetings.scailo_pb.ts:2171

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/meetings.scailo_pb.ts:2201

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/meetings.scailo_pb.ts:2199

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MeetingAssociate"``

#### Defined in

src/meetings.scailo_pb.ts:2200

## Methods

### clone

▸ **clone**(): [`MeetingAssociate`](MeetingAssociate.md)

Create a deep copy.

#### Returns

[`MeetingAssociate`](MeetingAssociate.md)

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
| `other` | `undefined` \| ``null`` \| [`MeetingAssociate`](MeetingAssociate.md) \| `PlainMessage`\<[`MeetingAssociate`](MeetingAssociate.md)\> |

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

▸ **getType**(): `MessageType`\<[`MeetingAssociate`](MeetingAssociate.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MeetingAssociate`](MeetingAssociate.md)\>

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
| `a` | `undefined` \| [`MeetingAssociate`](MeetingAssociate.md) \| `PlainMessage`\<[`MeetingAssociate`](MeetingAssociate.md)\> |
| `b` | `undefined` \| [`MeetingAssociate`](MeetingAssociate.md) \| `PlainMessage`\<[`MeetingAssociate`](MeetingAssociate.md)\> |

#### Returns

`boolean`

#### Defined in

src/meetings.scailo_pb.ts:2222

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MeetingAssociate`](MeetingAssociate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MeetingAssociate`](MeetingAssociate.md)

#### Defined in

src/meetings.scailo_pb.ts:2210

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MeetingAssociate`](MeetingAssociate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingAssociate`](MeetingAssociate.md)

#### Defined in

src/meetings.scailo_pb.ts:2214

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MeetingAssociate`](MeetingAssociate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingAssociate`](MeetingAssociate.md)

#### Defined in

src/meetings.scailo_pb.ts:2218
