[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorStreamInternalSubscribersList

# Class: VendorStreamInternalSubscribersList

Describes the message consisting of the list of internal subscribers

**`Generated`**

from message Scailo.VendorStreamInternalSubscribersList

## Hierarchy

- `Message`\<[`VendorStreamInternalSubscribersList`](VendorStreamInternalSubscribersList.md)\>

  ↳ **`VendorStreamInternalSubscribersList`**

## Table of contents

### Constructors

- [constructor](VendorStreamInternalSubscribersList.md#constructor)

### Properties

- [list](VendorStreamInternalSubscribersList.md#list)
- [fields](VendorStreamInternalSubscribersList.md#fields)
- [runtime](VendorStreamInternalSubscribersList.md#runtime)
- [typeName](VendorStreamInternalSubscribersList.md#typename)

### Methods

- [clone](VendorStreamInternalSubscribersList.md#clone)
- [equals](VendorStreamInternalSubscribersList.md#equals)
- [fromBinary](VendorStreamInternalSubscribersList.md#frombinary)
- [fromJson](VendorStreamInternalSubscribersList.md#fromjson)
- [fromJsonString](VendorStreamInternalSubscribersList.md#fromjsonstring)
- [getType](VendorStreamInternalSubscribersList.md#gettype)
- [toBinary](VendorStreamInternalSubscribersList.md#tobinary)
- [toJSON](VendorStreamInternalSubscribersList.md#tojson)
- [toJson](VendorStreamInternalSubscribersList.md#tojson-1)
- [toJsonString](VendorStreamInternalSubscribersList.md#tojsonstring)
- [equals](VendorStreamInternalSubscribersList.md#equals-1)
- [fromBinary](VendorStreamInternalSubscribersList.md#frombinary-1)
- [fromJson](VendorStreamInternalSubscribersList.md#fromjson-1)
- [fromJsonString](VendorStreamInternalSubscribersList.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorStreamInternalSubscribersList**(`data?`): [`VendorStreamInternalSubscribersList`](VendorStreamInternalSubscribersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorStreamInternalSubscribersList`](VendorStreamInternalSubscribersList.md)\> |

#### Returns

[`VendorStreamInternalSubscribersList`](VendorStreamInternalSubscribersList.md)

#### Overrides

Message\&lt;VendorStreamInternalSubscribersList\&gt;.constructor

#### Defined in

src/vendorstreams.scailo_pb.ts:2006

## Properties

### list

• **list**: [`VendorStreamInternalSubscriber`](VendorStreamInternalSubscriber.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.VendorStreamInternalSubscriber list = 1;

#### Defined in

src/vendorstreams.scailo_pb.ts:2004

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendorstreams.scailo_pb.ts:2013

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendorstreams.scailo_pb.ts:2011

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorStreamInternalSubscribersList"``

#### Defined in

src/vendorstreams.scailo_pb.ts:2012

## Methods

### clone

▸ **clone**(): [`VendorStreamInternalSubscribersList`](VendorStreamInternalSubscribersList.md)

Create a deep copy.

#### Returns

[`VendorStreamInternalSubscribersList`](VendorStreamInternalSubscribersList.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorStreamInternalSubscribersList`](VendorStreamInternalSubscribersList.md) \| `PlainMessage`\<[`VendorStreamInternalSubscribersList`](VendorStreamInternalSubscribersList.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorStreamInternalSubscribersList`](VendorStreamInternalSubscribersList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorStreamInternalSubscribersList`](VendorStreamInternalSubscribersList.md)\>

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
| `a` | `undefined` \| [`VendorStreamInternalSubscribersList`](VendorStreamInternalSubscribersList.md) \| `PlainMessage`\<[`VendorStreamInternalSubscribersList`](VendorStreamInternalSubscribersList.md)\> |
| `b` | `undefined` \| [`VendorStreamInternalSubscribersList`](VendorStreamInternalSubscribersList.md) \| `PlainMessage`\<[`VendorStreamInternalSubscribersList`](VendorStreamInternalSubscribersList.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendorstreams.scailo_pb.ts:2029

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorStreamInternalSubscribersList`](VendorStreamInternalSubscribersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorStreamInternalSubscribersList`](VendorStreamInternalSubscribersList.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:2017

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorStreamInternalSubscribersList`](VendorStreamInternalSubscribersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamInternalSubscribersList`](VendorStreamInternalSubscribersList.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:2021

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorStreamInternalSubscribersList`](VendorStreamInternalSubscribersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamInternalSubscribersList`](VendorStreamInternalSubscribersList.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:2025
