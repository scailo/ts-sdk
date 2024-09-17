[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientStreamInternalSubscribersList

# Class: ClientStreamInternalSubscribersList

Describes the message consisting of the list of internal subscribers

**`Generated`**

from message Scailo.ClientStreamInternalSubscribersList

## Hierarchy

- `Message`\<[`ClientStreamInternalSubscribersList`](ClientStreamInternalSubscribersList.md)\>

  ↳ **`ClientStreamInternalSubscribersList`**

## Table of contents

### Constructors

- [constructor](ClientStreamInternalSubscribersList.md#constructor)

### Properties

- [list](ClientStreamInternalSubscribersList.md#list)
- [fields](ClientStreamInternalSubscribersList.md#fields)
- [runtime](ClientStreamInternalSubscribersList.md#runtime)
- [typeName](ClientStreamInternalSubscribersList.md#typename)

### Methods

- [clone](ClientStreamInternalSubscribersList.md#clone)
- [equals](ClientStreamInternalSubscribersList.md#equals)
- [fromBinary](ClientStreamInternalSubscribersList.md#frombinary)
- [fromJson](ClientStreamInternalSubscribersList.md#fromjson)
- [fromJsonString](ClientStreamInternalSubscribersList.md#fromjsonstring)
- [getType](ClientStreamInternalSubscribersList.md#gettype)
- [toBinary](ClientStreamInternalSubscribersList.md#tobinary)
- [toJSON](ClientStreamInternalSubscribersList.md#tojson)
- [toJson](ClientStreamInternalSubscribersList.md#tojson-1)
- [toJsonString](ClientStreamInternalSubscribersList.md#tojsonstring)
- [equals](ClientStreamInternalSubscribersList.md#equals-1)
- [fromBinary](ClientStreamInternalSubscribersList.md#frombinary-1)
- [fromJson](ClientStreamInternalSubscribersList.md#fromjson-1)
- [fromJsonString](ClientStreamInternalSubscribersList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientStreamInternalSubscribersList**(`data?`): [`ClientStreamInternalSubscribersList`](ClientStreamInternalSubscribersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientStreamInternalSubscribersList`](ClientStreamInternalSubscribersList.md)\> |

#### Returns

[`ClientStreamInternalSubscribersList`](ClientStreamInternalSubscribersList.md)

#### Overrides

Message\&lt;ClientStreamInternalSubscribersList\&gt;.constructor

#### Defined in

src/clientstreams.scailo_pb.ts:2054

## Properties

### list

• **list**: [`ClientStreamInternalSubscriber`](ClientStreamInternalSubscriber.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.ClientStreamInternalSubscriber list = 1;

#### Defined in

src/clientstreams.scailo_pb.ts:2052

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/clientstreams.scailo_pb.ts:2061

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/clientstreams.scailo_pb.ts:2059

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientStreamInternalSubscribersList"``

#### Defined in

src/clientstreams.scailo_pb.ts:2060

## Methods

### clone

▸ **clone**(): [`ClientStreamInternalSubscribersList`](ClientStreamInternalSubscribersList.md)

Create a deep copy.

#### Returns

[`ClientStreamInternalSubscribersList`](ClientStreamInternalSubscribersList.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientStreamInternalSubscribersList`](ClientStreamInternalSubscribersList.md) \| `PlainMessage`\<[`ClientStreamInternalSubscribersList`](ClientStreamInternalSubscribersList.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientStreamInternalSubscribersList`](ClientStreamInternalSubscribersList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientStreamInternalSubscribersList`](ClientStreamInternalSubscribersList.md)\>

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
| `a` | `undefined` \| [`ClientStreamInternalSubscribersList`](ClientStreamInternalSubscribersList.md) \| `PlainMessage`\<[`ClientStreamInternalSubscribersList`](ClientStreamInternalSubscribersList.md)\> |
| `b` | `undefined` \| [`ClientStreamInternalSubscribersList`](ClientStreamInternalSubscribersList.md) \| `PlainMessage`\<[`ClientStreamInternalSubscribersList`](ClientStreamInternalSubscribersList.md)\> |

#### Returns

`boolean`

#### Defined in

src/clientstreams.scailo_pb.ts:2077

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientStreamInternalSubscribersList`](ClientStreamInternalSubscribersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientStreamInternalSubscribersList`](ClientStreamInternalSubscribersList.md)

#### Defined in

src/clientstreams.scailo_pb.ts:2065

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientStreamInternalSubscribersList`](ClientStreamInternalSubscribersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamInternalSubscribersList`](ClientStreamInternalSubscribersList.md)

#### Defined in

src/clientstreams.scailo_pb.ts:2069

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientStreamInternalSubscribersList`](ClientStreamInternalSubscribersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamInternalSubscribersList`](ClientStreamInternalSubscribersList.md)

#### Defined in

src/clientstreams.scailo_pb.ts:2073
