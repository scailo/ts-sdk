[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorStreamVendorSubscribersList

# Class: VendorStreamVendorSubscribersList

Describes the message consisting of the list of vendor stream vendor subscribers

**`Generated`**

from message Scailo.VendorStreamVendorSubscribersList

## Hierarchy

- `Message`\<[`VendorStreamVendorSubscribersList`](VendorStreamVendorSubscribersList.md)\>

  ↳ **`VendorStreamVendorSubscribersList`**

## Table of contents

### Constructors

- [constructor](VendorStreamVendorSubscribersList.md#constructor)

### Properties

- [list](VendorStreamVendorSubscribersList.md#list)
- [fields](VendorStreamVendorSubscribersList.md#fields)
- [runtime](VendorStreamVendorSubscribersList.md#runtime)
- [typeName](VendorStreamVendorSubscribersList.md#typename)

### Methods

- [clone](VendorStreamVendorSubscribersList.md#clone)
- [equals](VendorStreamVendorSubscribersList.md#equals)
- [fromBinary](VendorStreamVendorSubscribersList.md#frombinary)
- [fromJson](VendorStreamVendorSubscribersList.md#fromjson)
- [fromJsonString](VendorStreamVendorSubscribersList.md#fromjsonstring)
- [getType](VendorStreamVendorSubscribersList.md#gettype)
- [toBinary](VendorStreamVendorSubscribersList.md#tobinary)
- [toJSON](VendorStreamVendorSubscribersList.md#tojson)
- [toJson](VendorStreamVendorSubscribersList.md#tojson-1)
- [toJsonString](VendorStreamVendorSubscribersList.md#tojsonstring)
- [equals](VendorStreamVendorSubscribersList.md#equals-1)
- [fromBinary](VendorStreamVendorSubscribersList.md#frombinary-1)
- [fromJson](VendorStreamVendorSubscribersList.md#fromjson-1)
- [fromJsonString](VendorStreamVendorSubscribersList.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorStreamVendorSubscribersList**(`data?`): [`VendorStreamVendorSubscribersList`](VendorStreamVendorSubscribersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorStreamVendorSubscribersList`](VendorStreamVendorSubscribersList.md)\> |

#### Returns

[`VendorStreamVendorSubscribersList`](VendorStreamVendorSubscribersList.md)

#### Overrides

Message\&lt;VendorStreamVendorSubscribersList\&gt;.constructor

#### Defined in

src/vendor_streams.scailo_pb.ts:2294

## Properties

### list

• **list**: [`VendorStreamVendorSubscriber`](VendorStreamVendorSubscriber.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.VendorStreamVendorSubscriber list = 1;

#### Defined in

src/vendor_streams.scailo_pb.ts:2292

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendor_streams.scailo_pb.ts:2301

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendor_streams.scailo_pb.ts:2299

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorStreamVendorSubscribersList"``

#### Defined in

src/vendor_streams.scailo_pb.ts:2300

## Methods

### clone

▸ **clone**(): [`VendorStreamVendorSubscribersList`](VendorStreamVendorSubscribersList.md)

Create a deep copy.

#### Returns

[`VendorStreamVendorSubscribersList`](VendorStreamVendorSubscribersList.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorStreamVendorSubscribersList`](VendorStreamVendorSubscribersList.md) \| `PlainMessage`\<[`VendorStreamVendorSubscribersList`](VendorStreamVendorSubscribersList.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorStreamVendorSubscribersList`](VendorStreamVendorSubscribersList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorStreamVendorSubscribersList`](VendorStreamVendorSubscribersList.md)\>

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
| `a` | `undefined` \| [`VendorStreamVendorSubscribersList`](VendorStreamVendorSubscribersList.md) \| `PlainMessage`\<[`VendorStreamVendorSubscribersList`](VendorStreamVendorSubscribersList.md)\> |
| `b` | `undefined` \| [`VendorStreamVendorSubscribersList`](VendorStreamVendorSubscribersList.md) \| `PlainMessage`\<[`VendorStreamVendorSubscribersList`](VendorStreamVendorSubscribersList.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendor_streams.scailo_pb.ts:2317

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorStreamVendorSubscribersList`](VendorStreamVendorSubscribersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorStreamVendorSubscribersList`](VendorStreamVendorSubscribersList.md)

#### Defined in

src/vendor_streams.scailo_pb.ts:2305

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorStreamVendorSubscribersList`](VendorStreamVendorSubscribersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamVendorSubscribersList`](VendorStreamVendorSubscribersList.md)

#### Defined in

src/vendor_streams.scailo_pb.ts:2309

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorStreamVendorSubscribersList`](VendorStreamVendorSubscribersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamVendorSubscribersList`](VendorStreamVendorSubscribersList.md)

#### Defined in

src/vendor_streams.scailo_pb.ts:2313
