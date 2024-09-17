[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GeneralStreamInternalSubscribersList

# Class: GeneralStreamInternalSubscribersList

Describes the message consisting of the list of internal subscribers

**`Generated`**

from message Scailo.GeneralStreamInternalSubscribersList

## Hierarchy

- `Message`\<[`GeneralStreamInternalSubscribersList`](GeneralStreamInternalSubscribersList.md)\>

  ↳ **`GeneralStreamInternalSubscribersList`**

## Table of contents

### Constructors

- [constructor](GeneralStreamInternalSubscribersList.md#constructor)

### Properties

- [list](GeneralStreamInternalSubscribersList.md#list)
- [fields](GeneralStreamInternalSubscribersList.md#fields)
- [runtime](GeneralStreamInternalSubscribersList.md#runtime)
- [typeName](GeneralStreamInternalSubscribersList.md#typename)

### Methods

- [clone](GeneralStreamInternalSubscribersList.md#clone)
- [equals](GeneralStreamInternalSubscribersList.md#equals)
- [fromBinary](GeneralStreamInternalSubscribersList.md#frombinary)
- [fromJson](GeneralStreamInternalSubscribersList.md#fromjson)
- [fromJsonString](GeneralStreamInternalSubscribersList.md#fromjsonstring)
- [getType](GeneralStreamInternalSubscribersList.md#gettype)
- [toBinary](GeneralStreamInternalSubscribersList.md#tobinary)
- [toJSON](GeneralStreamInternalSubscribersList.md#tojson)
- [toJson](GeneralStreamInternalSubscribersList.md#tojson-1)
- [toJsonString](GeneralStreamInternalSubscribersList.md#tojsonstring)
- [equals](GeneralStreamInternalSubscribersList.md#equals-1)
- [fromBinary](GeneralStreamInternalSubscribersList.md#frombinary-1)
- [fromJson](GeneralStreamInternalSubscribersList.md#fromjson-1)
- [fromJsonString](GeneralStreamInternalSubscribersList.md#fromjsonstring-1)

## Constructors

### constructor

• **new GeneralStreamInternalSubscribersList**(`data?`): [`GeneralStreamInternalSubscribersList`](GeneralStreamInternalSubscribersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GeneralStreamInternalSubscribersList`](GeneralStreamInternalSubscribersList.md)\> |

#### Returns

[`GeneralStreamInternalSubscribersList`](GeneralStreamInternalSubscribersList.md)

#### Overrides

Message\&lt;GeneralStreamInternalSubscribersList\&gt;.constructor

#### Defined in

src/generalstreams.scailo_pb.ts:1802

## Properties

### list

• **list**: [`GeneralStreamInternalSubscriber`](GeneralStreamInternalSubscriber.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.GeneralStreamInternalSubscriber list = 1;

#### Defined in

src/generalstreams.scailo_pb.ts:1800

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/generalstreams.scailo_pb.ts:1809

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/generalstreams.scailo_pb.ts:1807

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GeneralStreamInternalSubscribersList"``

#### Defined in

src/generalstreams.scailo_pb.ts:1808

## Methods

### clone

▸ **clone**(): [`GeneralStreamInternalSubscribersList`](GeneralStreamInternalSubscribersList.md)

Create a deep copy.

#### Returns

[`GeneralStreamInternalSubscribersList`](GeneralStreamInternalSubscribersList.md)

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
| `other` | `undefined` \| ``null`` \| [`GeneralStreamInternalSubscribersList`](GeneralStreamInternalSubscribersList.md) \| `PlainMessage`\<[`GeneralStreamInternalSubscribersList`](GeneralStreamInternalSubscribersList.md)\> |

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

▸ **getType**(): `MessageType`\<[`GeneralStreamInternalSubscribersList`](GeneralStreamInternalSubscribersList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GeneralStreamInternalSubscribersList`](GeneralStreamInternalSubscribersList.md)\>

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
| `a` | `undefined` \| [`GeneralStreamInternalSubscribersList`](GeneralStreamInternalSubscribersList.md) \| `PlainMessage`\<[`GeneralStreamInternalSubscribersList`](GeneralStreamInternalSubscribersList.md)\> |
| `b` | `undefined` \| [`GeneralStreamInternalSubscribersList`](GeneralStreamInternalSubscribersList.md) \| `PlainMessage`\<[`GeneralStreamInternalSubscribersList`](GeneralStreamInternalSubscribersList.md)\> |

#### Returns

`boolean`

#### Defined in

src/generalstreams.scailo_pb.ts:1825

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GeneralStreamInternalSubscribersList`](GeneralStreamInternalSubscribersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GeneralStreamInternalSubscribersList`](GeneralStreamInternalSubscribersList.md)

#### Defined in

src/generalstreams.scailo_pb.ts:1813

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GeneralStreamInternalSubscribersList`](GeneralStreamInternalSubscribersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamInternalSubscribersList`](GeneralStreamInternalSubscribersList.md)

#### Defined in

src/generalstreams.scailo_pb.ts:1817

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GeneralStreamInternalSubscribersList`](GeneralStreamInternalSubscribersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamInternalSubscribersList`](GeneralStreamInternalSubscribersList.md)

#### Defined in

src/generalstreams.scailo_pb.ts:1821
