[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientStreamsList

# Class: ClientStreamsList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.ClientStreamsList

## Hierarchy

- `Message`\<[`ClientStreamsList`](ClientStreamsList.md)\>

  ↳ **`ClientStreamsList`**

## Table of contents

### Constructors

- [constructor](ClientStreamsList.md#constructor)

### Properties

- [list](ClientStreamsList.md#list)
- [fields](ClientStreamsList.md#fields)
- [runtime](ClientStreamsList.md#runtime)
- [typeName](ClientStreamsList.md#typename)

### Methods

- [clone](ClientStreamsList.md#clone)
- [equals](ClientStreamsList.md#equals)
- [fromBinary](ClientStreamsList.md#frombinary)
- [fromJson](ClientStreamsList.md#fromjson)
- [fromJsonString](ClientStreamsList.md#fromjsonstring)
- [getType](ClientStreamsList.md#gettype)
- [toBinary](ClientStreamsList.md#tobinary)
- [toJSON](ClientStreamsList.md#tojson)
- [toJson](ClientStreamsList.md#tojson-1)
- [toJsonString](ClientStreamsList.md#tojsonstring)
- [equals](ClientStreamsList.md#equals-1)
- [fromBinary](ClientStreamsList.md#frombinary-1)
- [fromJson](ClientStreamsList.md#fromjson-1)
- [fromJsonString](ClientStreamsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientStreamsList**(`data?`): [`ClientStreamsList`](ClientStreamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientStreamsList`](ClientStreamsList.md)\> |

#### Returns

[`ClientStreamsList`](ClientStreamsList.md)

#### Overrides

Message\&lt;ClientStreamsList\&gt;.constructor

#### Defined in

src/client_streams.scailo_pb.ts:727

## Properties

### list

• **list**: [`ClientStream`](ClientStream.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.ClientStream list = 1;

#### Defined in

src/client_streams.scailo_pb.ts:725

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/client_streams.scailo_pb.ts:734

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/client_streams.scailo_pb.ts:732

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientStreamsList"``

#### Defined in

src/client_streams.scailo_pb.ts:733

## Methods

### clone

▸ **clone**(): [`ClientStreamsList`](ClientStreamsList.md)

Create a deep copy.

#### Returns

[`ClientStreamsList`](ClientStreamsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientStreamsList`](ClientStreamsList.md) \| `PlainMessage`\<[`ClientStreamsList`](ClientStreamsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientStreamsList`](ClientStreamsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientStreamsList`](ClientStreamsList.md)\>

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
| `a` | `undefined` \| [`ClientStreamsList`](ClientStreamsList.md) \| `PlainMessage`\<[`ClientStreamsList`](ClientStreamsList.md)\> |
| `b` | `undefined` \| [`ClientStreamsList`](ClientStreamsList.md) \| `PlainMessage`\<[`ClientStreamsList`](ClientStreamsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/client_streams.scailo_pb.ts:750

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientStreamsList`](ClientStreamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientStreamsList`](ClientStreamsList.md)

#### Defined in

src/client_streams.scailo_pb.ts:738

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientStreamsList`](ClientStreamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamsList`](ClientStreamsList.md)

#### Defined in

src/client_streams.scailo_pb.ts:742

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientStreamsList`](ClientStreamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamsList`](ClientStreamsList.md)

#### Defined in

src/client_streams.scailo_pb.ts:746
