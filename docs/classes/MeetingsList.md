[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / MeetingsList

# Class: MeetingsList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.MeetingsList

## Hierarchy

- `Message`\<[`MeetingsList`](MeetingsList.md)\>

  ↳ **`MeetingsList`**

## Table of contents

### Constructors

- [constructor](MeetingsList.md#constructor)

### Properties

- [list](MeetingsList.md#list)
- [fields](MeetingsList.md#fields)
- [runtime](MeetingsList.md#runtime)
- [typeName](MeetingsList.md#typename)

### Methods

- [clone](MeetingsList.md#clone)
- [equals](MeetingsList.md#equals)
- [fromBinary](MeetingsList.md#frombinary)
- [fromJson](MeetingsList.md#fromjson)
- [fromJsonString](MeetingsList.md#fromjsonstring)
- [getType](MeetingsList.md#gettype)
- [toBinary](MeetingsList.md#tobinary)
- [toJSON](MeetingsList.md#tojson)
- [toJson](MeetingsList.md#tojson-1)
- [toJsonString](MeetingsList.md#tojsonstring)
- [equals](MeetingsList.md#equals-1)
- [fromBinary](MeetingsList.md#frombinary-1)
- [fromJson](MeetingsList.md#fromjson-1)
- [fromJsonString](MeetingsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new MeetingsList**(`data?`): [`MeetingsList`](MeetingsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MeetingsList`](MeetingsList.md)\> |

#### Returns

[`MeetingsList`](MeetingsList.md)

#### Overrides

Message\&lt;MeetingsList\&gt;.constructor

#### Defined in

src/meetings.scailo_pb.ts:701

## Properties

### list

• **list**: [`Meeting`](Meeting.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.Meeting list = 1;

#### Defined in

src/meetings.scailo_pb.ts:699

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/meetings.scailo_pb.ts:708

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/meetings.scailo_pb.ts:706

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MeetingsList"``

#### Defined in

src/meetings.scailo_pb.ts:707

## Methods

### clone

▸ **clone**(): [`MeetingsList`](MeetingsList.md)

Create a deep copy.

#### Returns

[`MeetingsList`](MeetingsList.md)

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
| `other` | `undefined` \| ``null`` \| [`MeetingsList`](MeetingsList.md) \| `PlainMessage`\<[`MeetingsList`](MeetingsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`MeetingsList`](MeetingsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MeetingsList`](MeetingsList.md)\>

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
| `a` | `undefined` \| [`MeetingsList`](MeetingsList.md) \| `PlainMessage`\<[`MeetingsList`](MeetingsList.md)\> |
| `b` | `undefined` \| [`MeetingsList`](MeetingsList.md) \| `PlainMessage`\<[`MeetingsList`](MeetingsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/meetings.scailo_pb.ts:724

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MeetingsList`](MeetingsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MeetingsList`](MeetingsList.md)

#### Defined in

src/meetings.scailo_pb.ts:712

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MeetingsList`](MeetingsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsList`](MeetingsList.md)

#### Defined in

src/meetings.scailo_pb.ts:716

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MeetingsList`](MeetingsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsList`](MeetingsList.md)

#### Defined in

src/meetings.scailo_pb.ts:720
