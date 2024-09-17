[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientStreamMessagesList

# Class: ClientStreamMessagesList

Describes the message consisting of the list of client stream messages

**`Generated`**

from message Scailo.ClientStreamMessagesList

## Hierarchy

- `Message`\<[`ClientStreamMessagesList`](ClientStreamMessagesList.md)\>

  ↳ **`ClientStreamMessagesList`**

## Table of contents

### Constructors

- [constructor](ClientStreamMessagesList.md#constructor)

### Properties

- [list](ClientStreamMessagesList.md#list)
- [fields](ClientStreamMessagesList.md#fields)
- [runtime](ClientStreamMessagesList.md#runtime)
- [typeName](ClientStreamMessagesList.md#typename)

### Methods

- [clone](ClientStreamMessagesList.md#clone)
- [equals](ClientStreamMessagesList.md#equals)
- [fromBinary](ClientStreamMessagesList.md#frombinary)
- [fromJson](ClientStreamMessagesList.md#fromjson)
- [fromJsonString](ClientStreamMessagesList.md#fromjsonstring)
- [getType](ClientStreamMessagesList.md#gettype)
- [toBinary](ClientStreamMessagesList.md#tobinary)
- [toJSON](ClientStreamMessagesList.md#tojson)
- [toJson](ClientStreamMessagesList.md#tojson-1)
- [toJsonString](ClientStreamMessagesList.md#tojsonstring)
- [equals](ClientStreamMessagesList.md#equals-1)
- [fromBinary](ClientStreamMessagesList.md#frombinary-1)
- [fromJson](ClientStreamMessagesList.md#fromjson-1)
- [fromJsonString](ClientStreamMessagesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientStreamMessagesList**(`data?`): [`ClientStreamMessagesList`](ClientStreamMessagesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientStreamMessagesList`](ClientStreamMessagesList.md)\> |

#### Returns

[`ClientStreamMessagesList`](ClientStreamMessagesList.md)

#### Overrides

Message\&lt;ClientStreamMessagesList\&gt;.constructor

#### Defined in

src/clientstreams.scailo_pb.ts:1568

## Properties

### list

• **list**: [`ClientStreamMessage`](ClientStreamMessage.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.ClientStreamMessage list = 1;

#### Defined in

src/clientstreams.scailo_pb.ts:1566

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/clientstreams.scailo_pb.ts:1575

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/clientstreams.scailo_pb.ts:1573

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientStreamMessagesList"``

#### Defined in

src/clientstreams.scailo_pb.ts:1574

## Methods

### clone

▸ **clone**(): [`ClientStreamMessagesList`](ClientStreamMessagesList.md)

Create a deep copy.

#### Returns

[`ClientStreamMessagesList`](ClientStreamMessagesList.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientStreamMessagesList`](ClientStreamMessagesList.md) \| `PlainMessage`\<[`ClientStreamMessagesList`](ClientStreamMessagesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientStreamMessagesList`](ClientStreamMessagesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientStreamMessagesList`](ClientStreamMessagesList.md)\>

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
| `a` | `undefined` \| [`ClientStreamMessagesList`](ClientStreamMessagesList.md) \| `PlainMessage`\<[`ClientStreamMessagesList`](ClientStreamMessagesList.md)\> |
| `b` | `undefined` \| [`ClientStreamMessagesList`](ClientStreamMessagesList.md) \| `PlainMessage`\<[`ClientStreamMessagesList`](ClientStreamMessagesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/clientstreams.scailo_pb.ts:1591

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientStreamMessagesList`](ClientStreamMessagesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientStreamMessagesList`](ClientStreamMessagesList.md)

#### Defined in

src/clientstreams.scailo_pb.ts:1579

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientStreamMessagesList`](ClientStreamMessagesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamMessagesList`](ClientStreamMessagesList.md)

#### Defined in

src/clientstreams.scailo_pb.ts:1583

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientStreamMessagesList`](ClientStreamMessagesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamMessagesList`](ClientStreamMessagesList.md)

#### Defined in

src/clientstreams.scailo_pb.ts:1587
