[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / MeetingsServiceEmployeeCreateRequest

# Class: MeetingsServiceEmployeeCreateRequest

Describes the parameters necessary to create a meeting employee

**`Generated`**

from message Scailo.MeetingsServiceEmployeeCreateRequest

## Hierarchy

- `Message`\<[`MeetingsServiceEmployeeCreateRequest`](MeetingsServiceEmployeeCreateRequest.md)\>

  ↳ **`MeetingsServiceEmployeeCreateRequest`**

## Table of contents

### Constructors

- [constructor](MeetingsServiceEmployeeCreateRequest.md#constructor)

### Properties

- [employeeId](MeetingsServiceEmployeeCreateRequest.md#employeeid)
- [meetingId](MeetingsServiceEmployeeCreateRequest.md#meetingid)
- [rsvp](MeetingsServiceEmployeeCreateRequest.md#rsvp)
- [userComment](MeetingsServiceEmployeeCreateRequest.md#usercomment)
- [fields](MeetingsServiceEmployeeCreateRequest.md#fields)
- [runtime](MeetingsServiceEmployeeCreateRequest.md#runtime)
- [typeName](MeetingsServiceEmployeeCreateRequest.md#typename)

### Methods

- [clone](MeetingsServiceEmployeeCreateRequest.md#clone)
- [equals](MeetingsServiceEmployeeCreateRequest.md#equals)
- [fromBinary](MeetingsServiceEmployeeCreateRequest.md#frombinary)
- [fromJson](MeetingsServiceEmployeeCreateRequest.md#fromjson)
- [fromJsonString](MeetingsServiceEmployeeCreateRequest.md#fromjsonstring)
- [getType](MeetingsServiceEmployeeCreateRequest.md#gettype)
- [toBinary](MeetingsServiceEmployeeCreateRequest.md#tobinary)
- [toJSON](MeetingsServiceEmployeeCreateRequest.md#tojson)
- [toJson](MeetingsServiceEmployeeCreateRequest.md#tojson-1)
- [toJsonString](MeetingsServiceEmployeeCreateRequest.md#tojsonstring)
- [equals](MeetingsServiceEmployeeCreateRequest.md#equals-1)
- [fromBinary](MeetingsServiceEmployeeCreateRequest.md#frombinary-1)
- [fromJson](MeetingsServiceEmployeeCreateRequest.md#fromjson-1)
- [fromJsonString](MeetingsServiceEmployeeCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new MeetingsServiceEmployeeCreateRequest**(`data?`): [`MeetingsServiceEmployeeCreateRequest`](MeetingsServiceEmployeeCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MeetingsServiceEmployeeCreateRequest`](MeetingsServiceEmployeeCreateRequest.md)\> |

#### Returns

[`MeetingsServiceEmployeeCreateRequest`](MeetingsServiceEmployeeCreateRequest.md)

#### Overrides

Message\&lt;MeetingsServiceEmployeeCreateRequest\&gt;.constructor

#### Defined in

src/meetings.scailo_pb.ts:1924

## Properties

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

Stores the employee ID

**`Generated`**

from field: uint64 employee_id = 11;

#### Defined in

src/meetings.scailo_pb.ts:1915

___

### meetingId

• **meetingId**: `bigint` = `protoInt64.zero`

Stores the meeting ID

**`Generated`**

from field: uint64 meeting_id = 10;

#### Defined in

src/meetings.scailo_pb.ts:1908

___

### rsvp

• **rsvp**: [`MEETING_RSVP`](../enums/MEETING_RSVP.md) = `MEETING_RSVP.MEETING_RSVP_ANY_UNSPECIFIED`

Stores the person's RSVP

**`Generated`**

from field: Scailo.MEETING_RSVP rsvp = 12;

#### Defined in

src/meetings.scailo_pb.ts:1922

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/meetings.scailo_pb.ts:1901

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/meetings.scailo_pb.ts:1931

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/meetings.scailo_pb.ts:1929

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MeetingsServiceEmployeeCreateRequest"``

#### Defined in

src/meetings.scailo_pb.ts:1930

## Methods

### clone

▸ **clone**(): [`MeetingsServiceEmployeeCreateRequest`](MeetingsServiceEmployeeCreateRequest.md)

Create a deep copy.

#### Returns

[`MeetingsServiceEmployeeCreateRequest`](MeetingsServiceEmployeeCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`MeetingsServiceEmployeeCreateRequest`](MeetingsServiceEmployeeCreateRequest.md) \| `PlainMessage`\<[`MeetingsServiceEmployeeCreateRequest`](MeetingsServiceEmployeeCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`MeetingsServiceEmployeeCreateRequest`](MeetingsServiceEmployeeCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MeetingsServiceEmployeeCreateRequest`](MeetingsServiceEmployeeCreateRequest.md)\>

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
| `a` | `undefined` \| [`MeetingsServiceEmployeeCreateRequest`](MeetingsServiceEmployeeCreateRequest.md) \| `PlainMessage`\<[`MeetingsServiceEmployeeCreateRequest`](MeetingsServiceEmployeeCreateRequest.md)\> |
| `b` | `undefined` \| [`MeetingsServiceEmployeeCreateRequest`](MeetingsServiceEmployeeCreateRequest.md) \| `PlainMessage`\<[`MeetingsServiceEmployeeCreateRequest`](MeetingsServiceEmployeeCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/meetings.scailo_pb.ts:1950

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MeetingsServiceEmployeeCreateRequest`](MeetingsServiceEmployeeCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MeetingsServiceEmployeeCreateRequest`](MeetingsServiceEmployeeCreateRequest.md)

#### Defined in

src/meetings.scailo_pb.ts:1938

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MeetingsServiceEmployeeCreateRequest`](MeetingsServiceEmployeeCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsServiceEmployeeCreateRequest`](MeetingsServiceEmployeeCreateRequest.md)

#### Defined in

src/meetings.scailo_pb.ts:1942

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MeetingsServiceEmployeeCreateRequest`](MeetingsServiceEmployeeCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsServiceEmployeeCreateRequest`](MeetingsServiceEmployeeCreateRequest.md)

#### Defined in

src/meetings.scailo_pb.ts:1946
