[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MeetingAssociatesList

# Class: MeetingAssociatesList

Describes the message consisting of the list of meeting associates

**`Generated`**

from message Scailo.MeetingAssociatesList

## Hierarchy

- `Message`\<[`MeetingAssociatesList`](MeetingAssociatesList.md)\>

  ↳ **`MeetingAssociatesList`**

## Table of contents

### Constructors

- [constructor](MeetingAssociatesList.md#constructor)

### Properties

- [list](MeetingAssociatesList.md#list)
- [fields](MeetingAssociatesList.md#fields)
- [runtime](MeetingAssociatesList.md#runtime)
- [typeName](MeetingAssociatesList.md#typename)

### Methods

- [clone](MeetingAssociatesList.md#clone)
- [equals](MeetingAssociatesList.md#equals)
- [fromBinary](MeetingAssociatesList.md#frombinary)
- [fromJson](MeetingAssociatesList.md#fromjson)
- [fromJsonString](MeetingAssociatesList.md#fromjsonstring)
- [getType](MeetingAssociatesList.md#gettype)
- [toBinary](MeetingAssociatesList.md#tobinary)
- [toJSON](MeetingAssociatesList.md#tojson)
- [toJson](MeetingAssociatesList.md#tojson-1)
- [toJsonString](MeetingAssociatesList.md#tojsonstring)
- [equals](MeetingAssociatesList.md#equals-1)
- [fromBinary](MeetingAssociatesList.md#frombinary-1)
- [fromJson](MeetingAssociatesList.md#fromjson-1)
- [fromJsonString](MeetingAssociatesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new MeetingAssociatesList**(`data?`): [`MeetingAssociatesList`](MeetingAssociatesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MeetingAssociatesList`](MeetingAssociatesList.md)\> |

#### Returns

[`MeetingAssociatesList`](MeetingAssociatesList.md)

#### Overrides

Message\&lt;MeetingAssociatesList\&gt;.constructor

#### Defined in

src/meetings.scailo_pb.ts:2257

## Properties

### list

• **list**: [`MeetingAssociate`](MeetingAssociate.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.MeetingAssociate list = 1;

#### Defined in

src/meetings.scailo_pb.ts:2255

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/meetings.scailo_pb.ts:2264

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/meetings.scailo_pb.ts:2262

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MeetingAssociatesList"``

#### Defined in

src/meetings.scailo_pb.ts:2263

## Methods

### clone

▸ **clone**(): [`MeetingAssociatesList`](MeetingAssociatesList.md)

Create a deep copy.

#### Returns

[`MeetingAssociatesList`](MeetingAssociatesList.md)

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
| `other` | `undefined` \| ``null`` \| [`MeetingAssociatesList`](MeetingAssociatesList.md) \| `PlainMessage`\<[`MeetingAssociatesList`](MeetingAssociatesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`MeetingAssociatesList`](MeetingAssociatesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MeetingAssociatesList`](MeetingAssociatesList.md)\>

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
| `a` | `undefined` \| [`MeetingAssociatesList`](MeetingAssociatesList.md) \| `PlainMessage`\<[`MeetingAssociatesList`](MeetingAssociatesList.md)\> |
| `b` | `undefined` \| [`MeetingAssociatesList`](MeetingAssociatesList.md) \| `PlainMessage`\<[`MeetingAssociatesList`](MeetingAssociatesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/meetings.scailo_pb.ts:2280

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MeetingAssociatesList`](MeetingAssociatesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MeetingAssociatesList`](MeetingAssociatesList.md)

#### Defined in

src/meetings.scailo_pb.ts:2268

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MeetingAssociatesList`](MeetingAssociatesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingAssociatesList`](MeetingAssociatesList.md)

#### Defined in

src/meetings.scailo_pb.ts:2272

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MeetingAssociatesList`](MeetingAssociatesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingAssociatesList`](MeetingAssociatesList.md)

#### Defined in

src/meetings.scailo_pb.ts:2276
