[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientStreamClientSubscribersList

# Class: ClientStreamClientSubscribersList

Describes the message consisting of the list of client stream client subscribers

**`Generated`**

from message Scailo.ClientStreamClientSubscribersList

## Hierarchy

- `Message`\<[`ClientStreamClientSubscribersList`](ClientStreamClientSubscribersList.md)\>

  ↳ **`ClientStreamClientSubscribersList`**

## Table of contents

### Constructors

- [constructor](ClientStreamClientSubscribersList.md#constructor)

### Properties

- [list](ClientStreamClientSubscribersList.md#list)
- [fields](ClientStreamClientSubscribersList.md#fields)
- [runtime](ClientStreamClientSubscribersList.md#runtime)
- [typeName](ClientStreamClientSubscribersList.md#typename)

### Methods

- [clone](ClientStreamClientSubscribersList.md#clone)
- [equals](ClientStreamClientSubscribersList.md#equals)
- [fromBinary](ClientStreamClientSubscribersList.md#frombinary)
- [fromJson](ClientStreamClientSubscribersList.md#fromjson)
- [fromJsonString](ClientStreamClientSubscribersList.md#fromjsonstring)
- [getType](ClientStreamClientSubscribersList.md#gettype)
- [toBinary](ClientStreamClientSubscribersList.md#tobinary)
- [toJSON](ClientStreamClientSubscribersList.md#tojson)
- [toJson](ClientStreamClientSubscribersList.md#tojson-1)
- [toJsonString](ClientStreamClientSubscribersList.md#tojsonstring)
- [equals](ClientStreamClientSubscribersList.md#equals-1)
- [fromBinary](ClientStreamClientSubscribersList.md#frombinary-1)
- [fromJson](ClientStreamClientSubscribersList.md#fromjson-1)
- [fromJsonString](ClientStreamClientSubscribersList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientStreamClientSubscribersList**(`data?`): [`ClientStreamClientSubscribersList`](ClientStreamClientSubscribersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientStreamClientSubscribersList`](ClientStreamClientSubscribersList.md)\> |

#### Returns

[`ClientStreamClientSubscribersList`](ClientStreamClientSubscribersList.md)

#### Overrides

Message\&lt;ClientStreamClientSubscribersList\&gt;.constructor

#### Defined in

src/clientstreams.scailo_pb.ts:2262

## Properties

### list

• **list**: [`ClientStreamClientSubscriber`](ClientStreamClientSubscriber.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.ClientStreamClientSubscriber list = 1;

#### Defined in

src/clientstreams.scailo_pb.ts:2260

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/clientstreams.scailo_pb.ts:2269

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/clientstreams.scailo_pb.ts:2267

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientStreamClientSubscribersList"``

#### Defined in

src/clientstreams.scailo_pb.ts:2268

## Methods

### clone

▸ **clone**(): [`ClientStreamClientSubscribersList`](ClientStreamClientSubscribersList.md)

Create a deep copy.

#### Returns

[`ClientStreamClientSubscribersList`](ClientStreamClientSubscribersList.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientStreamClientSubscribersList`](ClientStreamClientSubscribersList.md) \| `PlainMessage`\<[`ClientStreamClientSubscribersList`](ClientStreamClientSubscribersList.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientStreamClientSubscribersList`](ClientStreamClientSubscribersList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientStreamClientSubscribersList`](ClientStreamClientSubscribersList.md)\>

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
| `a` | `undefined` \| [`ClientStreamClientSubscribersList`](ClientStreamClientSubscribersList.md) \| `PlainMessage`\<[`ClientStreamClientSubscribersList`](ClientStreamClientSubscribersList.md)\> |
| `b` | `undefined` \| [`ClientStreamClientSubscribersList`](ClientStreamClientSubscribersList.md) \| `PlainMessage`\<[`ClientStreamClientSubscribersList`](ClientStreamClientSubscribersList.md)\> |

#### Returns

`boolean`

#### Defined in

src/clientstreams.scailo_pb.ts:2285

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientStreamClientSubscribersList`](ClientStreamClientSubscribersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientStreamClientSubscribersList`](ClientStreamClientSubscribersList.md)

#### Defined in

src/clientstreams.scailo_pb.ts:2273

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientStreamClientSubscribersList`](ClientStreamClientSubscribersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamClientSubscribersList`](ClientStreamClientSubscribersList.md)

#### Defined in

src/clientstreams.scailo_pb.ts:2277

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientStreamClientSubscribersList`](ClientStreamClientSubscribersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamClientSubscribersList`](ClientStreamClientSubscribersList.md)

#### Defined in

src/clientstreams.scailo_pb.ts:2281
