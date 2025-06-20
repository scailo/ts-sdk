[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MeetingActionableHistoryRequest

# Class: MeetingActionableHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.MeetingActionableHistoryRequest

## Hierarchy

- `Message`\<[`MeetingActionableHistoryRequest`](MeetingActionableHistoryRequest.md)\>

  ↳ **`MeetingActionableHistoryRequest`**

## Table of contents

### Constructors

- [constructor](MeetingActionableHistoryRequest.md#constructor)

### Properties

- [meetingId](MeetingActionableHistoryRequest.md#meetingid)
- [title](MeetingActionableHistoryRequest.md#title)
- [fields](MeetingActionableHistoryRequest.md#fields)
- [runtime](MeetingActionableHistoryRequest.md#runtime)
- [typeName](MeetingActionableHistoryRequest.md#typename)

### Methods

- [clone](MeetingActionableHistoryRequest.md#clone)
- [equals](MeetingActionableHistoryRequest.md#equals)
- [fromBinary](MeetingActionableHistoryRequest.md#frombinary)
- [fromJson](MeetingActionableHistoryRequest.md#fromjson)
- [fromJsonString](MeetingActionableHistoryRequest.md#fromjsonstring)
- [getType](MeetingActionableHistoryRequest.md#gettype)
- [toBinary](MeetingActionableHistoryRequest.md#tobinary)
- [toJSON](MeetingActionableHistoryRequest.md#tojson)
- [toJson](MeetingActionableHistoryRequest.md#tojson-1)
- [toJsonString](MeetingActionableHistoryRequest.md#tojsonstring)
- [equals](MeetingActionableHistoryRequest.md#equals-1)
- [fromBinary](MeetingActionableHistoryRequest.md#frombinary-1)
- [fromJson](MeetingActionableHistoryRequest.md#fromjson-1)
- [fromJsonString](MeetingActionableHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new MeetingActionableHistoryRequest**(`data?`): [`MeetingActionableHistoryRequest`](MeetingActionableHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MeetingActionableHistoryRequest`](MeetingActionableHistoryRequest.md)\> |

#### Returns

[`MeetingActionableHistoryRequest`](MeetingActionableHistoryRequest.md)

#### Overrides

Message\&lt;MeetingActionableHistoryRequest\&gt;.constructor

#### Defined in

src/meetings.scailo_pb.ts:1704

## Properties

### meetingId

• **meetingId**: `bigint` = `protoInt64.zero`

Stores the meeting ID

**`Generated`**

from field: uint64 meeting_id = 10;

#### Defined in

src/meetings.scailo_pb.ts:1695

___

### title

• **title**: `string` = `""`

The title of the actionable

**`Generated`**

from field: string title = 11;

#### Defined in

src/meetings.scailo_pb.ts:1702

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/meetings.scailo_pb.ts:1711

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/meetings.scailo_pb.ts:1709

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MeetingActionableHistoryRequest"``

#### Defined in

src/meetings.scailo_pb.ts:1710

## Methods

### clone

▸ **clone**(): [`MeetingActionableHistoryRequest`](MeetingActionableHistoryRequest.md)

Create a deep copy.

#### Returns

[`MeetingActionableHistoryRequest`](MeetingActionableHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`MeetingActionableHistoryRequest`](MeetingActionableHistoryRequest.md) \| `PlainMessage`\<[`MeetingActionableHistoryRequest`](MeetingActionableHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`MeetingActionableHistoryRequest`](MeetingActionableHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MeetingActionableHistoryRequest`](MeetingActionableHistoryRequest.md)\>

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
| `a` | `undefined` \| [`MeetingActionableHistoryRequest`](MeetingActionableHistoryRequest.md) \| `PlainMessage`\<[`MeetingActionableHistoryRequest`](MeetingActionableHistoryRequest.md)\> |
| `b` | `undefined` \| [`MeetingActionableHistoryRequest`](MeetingActionableHistoryRequest.md) \| `PlainMessage`\<[`MeetingActionableHistoryRequest`](MeetingActionableHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/meetings.scailo_pb.ts:1728

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MeetingActionableHistoryRequest`](MeetingActionableHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MeetingActionableHistoryRequest`](MeetingActionableHistoryRequest.md)

#### Defined in

src/meetings.scailo_pb.ts:1716

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MeetingActionableHistoryRequest`](MeetingActionableHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingActionableHistoryRequest`](MeetingActionableHistoryRequest.md)

#### Defined in

src/meetings.scailo_pb.ts:1720

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MeetingActionableHistoryRequest`](MeetingActionableHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingActionableHistoryRequest`](MeetingActionableHistoryRequest.md)

#### Defined in

src/meetings.scailo_pb.ts:1724
