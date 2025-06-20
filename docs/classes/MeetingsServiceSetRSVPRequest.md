[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MeetingsServiceSetRSVPRequest

# Class: MeetingsServiceSetRSVPRequest

Describes the data model that sets the RSVP of either an associate or an employee

**`Generated`**

from message Scailo.MeetingsServiceSetRSVPRequest

## Hierarchy

- `Message`\<[`MeetingsServiceSetRSVPRequest`](MeetingsServiceSetRSVPRequest.md)\>

  ↳ **`MeetingsServiceSetRSVPRequest`**

## Table of contents

### Constructors

- [constructor](MeetingsServiceSetRSVPRequest.md#constructor)

### Properties

- [rsvp](MeetingsServiceSetRSVPRequest.md#rsvp)
- [userComment](MeetingsServiceSetRSVPRequest.md#usercomment)
- [uuid](MeetingsServiceSetRSVPRequest.md#uuid)
- [fields](MeetingsServiceSetRSVPRequest.md#fields)
- [runtime](MeetingsServiceSetRSVPRequest.md#runtime)
- [typeName](MeetingsServiceSetRSVPRequest.md#typename)

### Methods

- [clone](MeetingsServiceSetRSVPRequest.md#clone)
- [equals](MeetingsServiceSetRSVPRequest.md#equals)
- [fromBinary](MeetingsServiceSetRSVPRequest.md#frombinary)
- [fromJson](MeetingsServiceSetRSVPRequest.md#fromjson)
- [fromJsonString](MeetingsServiceSetRSVPRequest.md#fromjsonstring)
- [getType](MeetingsServiceSetRSVPRequest.md#gettype)
- [toBinary](MeetingsServiceSetRSVPRequest.md#tobinary)
- [toJSON](MeetingsServiceSetRSVPRequest.md#tojson)
- [toJson](MeetingsServiceSetRSVPRequest.md#tojson-1)
- [toJsonString](MeetingsServiceSetRSVPRequest.md#tojsonstring)
- [equals](MeetingsServiceSetRSVPRequest.md#equals-1)
- [fromBinary](MeetingsServiceSetRSVPRequest.md#frombinary-1)
- [fromJson](MeetingsServiceSetRSVPRequest.md#fromjson-1)
- [fromJsonString](MeetingsServiceSetRSVPRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new MeetingsServiceSetRSVPRequest**(`data?`): [`MeetingsServiceSetRSVPRequest`](MeetingsServiceSetRSVPRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MeetingsServiceSetRSVPRequest`](MeetingsServiceSetRSVPRequest.md)\> |

#### Returns

[`MeetingsServiceSetRSVPRequest`](MeetingsServiceSetRSVPRequest.md)

#### Overrides

Message\&lt;MeetingsServiceSetRSVPRequest\&gt;.constructor

#### Defined in

src/meetings.scailo_pb.ts:2379

## Properties

### rsvp

• **rsvp**: [`MEETING_RSVP`](../enums/MEETING_RSVP.md) = `MEETING_RSVP.MEETING_RSVP_ANY_UNSPECIFIED`

Stores the person's RSVP

**`Generated`**

from field: Scailo.MEETING_RSVP rsvp = 11;

#### Defined in

src/meetings.scailo_pb.ts:2377

___

### userComment

• **userComment**: `string` = `""`

The comment entered by the user

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/meetings.scailo_pb.ts:2363

___

### uuid

• **uuid**: `string` = `""`

The UUID of the resource

**`Generated`**

from field: string uuid = 10;

#### Defined in

src/meetings.scailo_pb.ts:2370

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/meetings.scailo_pb.ts:2386

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/meetings.scailo_pb.ts:2384

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MeetingsServiceSetRSVPRequest"``

#### Defined in

src/meetings.scailo_pb.ts:2385

## Methods

### clone

▸ **clone**(): [`MeetingsServiceSetRSVPRequest`](MeetingsServiceSetRSVPRequest.md)

Create a deep copy.

#### Returns

[`MeetingsServiceSetRSVPRequest`](MeetingsServiceSetRSVPRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`MeetingsServiceSetRSVPRequest`](MeetingsServiceSetRSVPRequest.md) \| `PlainMessage`\<[`MeetingsServiceSetRSVPRequest`](MeetingsServiceSetRSVPRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`MeetingsServiceSetRSVPRequest`](MeetingsServiceSetRSVPRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MeetingsServiceSetRSVPRequest`](MeetingsServiceSetRSVPRequest.md)\>

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
| `a` | `undefined` \| [`MeetingsServiceSetRSVPRequest`](MeetingsServiceSetRSVPRequest.md) \| `PlainMessage`\<[`MeetingsServiceSetRSVPRequest`](MeetingsServiceSetRSVPRequest.md)\> |
| `b` | `undefined` \| [`MeetingsServiceSetRSVPRequest`](MeetingsServiceSetRSVPRequest.md) \| `PlainMessage`\<[`MeetingsServiceSetRSVPRequest`](MeetingsServiceSetRSVPRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/meetings.scailo_pb.ts:2404

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MeetingsServiceSetRSVPRequest`](MeetingsServiceSetRSVPRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MeetingsServiceSetRSVPRequest`](MeetingsServiceSetRSVPRequest.md)

#### Defined in

src/meetings.scailo_pb.ts:2392

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MeetingsServiceSetRSVPRequest`](MeetingsServiceSetRSVPRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsServiceSetRSVPRequest`](MeetingsServiceSetRSVPRequest.md)

#### Defined in

src/meetings.scailo_pb.ts:2396

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MeetingsServiceSetRSVPRequest`](MeetingsServiceSetRSVPRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsServiceSetRSVPRequest`](MeetingsServiceSetRSVPRequest.md)

#### Defined in

src/meetings.scailo_pb.ts:2400
