[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MeetingEmployee

# Class: MeetingEmployee

Describes the parameters that constitute a meeting employee

**`Generated`**

from message Scailo.MeetingEmployee

## Hierarchy

- `Message`\<[`MeetingEmployee`](MeetingEmployee.md)\>

  ↳ **`MeetingEmployee`**

## Table of contents

### Constructors

- [constructor](MeetingEmployee.md#constructor)

### Properties

- [employeeId](MeetingEmployee.md#employeeid)
- [entityUuid](MeetingEmployee.md#entityuuid)
- [meetingId](MeetingEmployee.md#meetingid)
- [metadata](MeetingEmployee.md#metadata)
- [rsvp](MeetingEmployee.md#rsvp)
- [userComment](MeetingEmployee.md#usercomment)
- [fields](MeetingEmployee.md#fields)
- [runtime](MeetingEmployee.md#runtime)
- [typeName](MeetingEmployee.md#typename)

### Methods

- [clone](MeetingEmployee.md#clone)
- [equals](MeetingEmployee.md#equals)
- [fromBinary](MeetingEmployee.md#frombinary)
- [fromJson](MeetingEmployee.md#fromjson)
- [fromJsonString](MeetingEmployee.md#fromjsonstring)
- [getType](MeetingEmployee.md#gettype)
- [toBinary](MeetingEmployee.md#tobinary)
- [toJSON](MeetingEmployee.md#tojson)
- [toJson](MeetingEmployee.md#tojson-1)
- [toJsonString](MeetingEmployee.md#tojsonstring)
- [equals](MeetingEmployee.md#equals-1)
- [fromBinary](MeetingEmployee.md#frombinary-1)
- [fromJson](MeetingEmployee.md#fromjson-1)
- [fromJsonString](MeetingEmployee.md#fromjsonstring-1)

## Constructors

### constructor

• **new MeetingEmployee**(`data?`): [`MeetingEmployee`](MeetingEmployee.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MeetingEmployee`](MeetingEmployee.md)\> |

#### Returns

[`MeetingEmployee`](MeetingEmployee.md)

#### Overrides

Message\&lt;MeetingEmployee\&gt;.constructor

#### Defined in

src/meetings.scailo_pb.ts:2004

## Properties

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

Stores the employee ID

**`Generated`**

from field: uint64 employee_id = 11;

#### Defined in

src/meetings.scailo_pb.ts:1995

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/meetings.scailo_pb.ts:1967

___

### meetingId

• **meetingId**: `bigint` = `protoInt64.zero`

Stores the meeting ID

**`Generated`**

from field: uint64 meeting_id = 10;

#### Defined in

src/meetings.scailo_pb.ts:1988

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this meeting

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/meetings.scailo_pb.ts:1974

___

### rsvp

• **rsvp**: [`MEETING_RSVP`](../enums/MEETING_RSVP.md) = `MEETING_RSVP.MEETING_RSVP_ANY_UNSPECIFIED`

Stores the person's RSVP

**`Generated`**

from field: Scailo.MEETING_RSVP rsvp = 12;

#### Defined in

src/meetings.scailo_pb.ts:2002

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/meetings.scailo_pb.ts:1981

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/meetings.scailo_pb.ts:2011

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/meetings.scailo_pb.ts:2009

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MeetingEmployee"``

#### Defined in

src/meetings.scailo_pb.ts:2010

## Methods

### clone

▸ **clone**(): [`MeetingEmployee`](MeetingEmployee.md)

Create a deep copy.

#### Returns

[`MeetingEmployee`](MeetingEmployee.md)

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
| `other` | `undefined` \| ``null`` \| [`MeetingEmployee`](MeetingEmployee.md) \| `PlainMessage`\<[`MeetingEmployee`](MeetingEmployee.md)\> |

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

▸ **getType**(): `MessageType`\<[`MeetingEmployee`](MeetingEmployee.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MeetingEmployee`](MeetingEmployee.md)\>

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
| `a` | `undefined` \| [`MeetingEmployee`](MeetingEmployee.md) \| `PlainMessage`\<[`MeetingEmployee`](MeetingEmployee.md)\> |
| `b` | `undefined` \| [`MeetingEmployee`](MeetingEmployee.md) \| `PlainMessage`\<[`MeetingEmployee`](MeetingEmployee.md)\> |

#### Returns

`boolean`

#### Defined in

src/meetings.scailo_pb.ts:2032

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MeetingEmployee`](MeetingEmployee.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MeetingEmployee`](MeetingEmployee.md)

#### Defined in

src/meetings.scailo_pb.ts:2020

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MeetingEmployee`](MeetingEmployee.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingEmployee`](MeetingEmployee.md)

#### Defined in

src/meetings.scailo_pb.ts:2024

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MeetingEmployee`](MeetingEmployee.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingEmployee`](MeetingEmployee.md)

#### Defined in

src/meetings.scailo_pb.ts:2028
