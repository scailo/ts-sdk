[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientsList

# Class: ClientsList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.ClientsList

## Hierarchy

- `Message`\<[`ClientsList`](ClientsList.md)\>

  ↳ **`ClientsList`**

## Table of contents

### Constructors

- [constructor](ClientsList.md#constructor)

### Properties

- [list](ClientsList.md#list)
- [fields](ClientsList.md#fields)
- [runtime](ClientsList.md#runtime)
- [typeName](ClientsList.md#typename)

### Methods

- [clone](ClientsList.md#clone)
- [equals](ClientsList.md#equals)
- [fromBinary](ClientsList.md#frombinary)
- [fromJson](ClientsList.md#fromjson)
- [fromJsonString](ClientsList.md#fromjsonstring)
- [getType](ClientsList.md#gettype)
- [toBinary](ClientsList.md#tobinary)
- [toJSON](ClientsList.md#tojson)
- [toJson](ClientsList.md#tojson-1)
- [toJsonString](ClientsList.md#tojsonstring)
- [equals](ClientsList.md#equals-1)
- [fromBinary](ClientsList.md#frombinary-1)
- [fromJson](ClientsList.md#fromjson-1)
- [fromJsonString](ClientsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientsList**(`data?`): [`ClientsList`](ClientsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientsList`](ClientsList.md)\> |

#### Returns

[`ClientsList`](ClientsList.md)

#### Overrides

Message\&lt;ClientsList\&gt;.constructor

#### Defined in

src/clients.scailo_pb.ts:477

## Properties

### list

• **list**: [`Client`](Client.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.Client list = 1;

#### Defined in

src/clients.scailo_pb.ts:475

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/clients.scailo_pb.ts:484

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/clients.scailo_pb.ts:482

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientsList"``

#### Defined in

src/clients.scailo_pb.ts:483

## Methods

### clone

▸ **clone**(): [`ClientsList`](ClientsList.md)

Create a deep copy.

#### Returns

[`ClientsList`](ClientsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientsList`](ClientsList.md) \| `PlainMessage`\<[`ClientsList`](ClientsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientsList`](ClientsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientsList`](ClientsList.md)\>

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
| `a` | `undefined` \| [`ClientsList`](ClientsList.md) \| `PlainMessage`\<[`ClientsList`](ClientsList.md)\> |
| `b` | `undefined` \| [`ClientsList`](ClientsList.md) \| `PlainMessage`\<[`ClientsList`](ClientsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/clients.scailo_pb.ts:500

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientsList`](ClientsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientsList`](ClientsList.md)

#### Defined in

src/clients.scailo_pb.ts:488

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientsList`](ClientsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsList`](ClientsList.md)

#### Defined in

src/clients.scailo_pb.ts:492

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientsList`](ClientsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsList`](ClientsList.md)

#### Defined in

src/clients.scailo_pb.ts:496
