[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorStreamMessageReceiptsList

# Class: VendorStreamMessageReceiptsList

Describes the message consisting of the list of vendor stream message receipts

**`Generated`**

from message Scailo.VendorStreamMessageReceiptsList

## Hierarchy

- `Message`\<[`VendorStreamMessageReceiptsList`](VendorStreamMessageReceiptsList.md)\>

  ↳ **`VendorStreamMessageReceiptsList`**

## Table of contents

### Constructors

- [constructor](VendorStreamMessageReceiptsList.md#constructor)

### Properties

- [list](VendorStreamMessageReceiptsList.md#list)
- [fields](VendorStreamMessageReceiptsList.md#fields)
- [runtime](VendorStreamMessageReceiptsList.md#runtime)
- [typeName](VendorStreamMessageReceiptsList.md#typename)

### Methods

- [clone](VendorStreamMessageReceiptsList.md#clone)
- [equals](VendorStreamMessageReceiptsList.md#equals)
- [fromBinary](VendorStreamMessageReceiptsList.md#frombinary)
- [fromJson](VendorStreamMessageReceiptsList.md#fromjson)
- [fromJsonString](VendorStreamMessageReceiptsList.md#fromjsonstring)
- [getType](VendorStreamMessageReceiptsList.md#gettype)
- [toBinary](VendorStreamMessageReceiptsList.md#tobinary)
- [toJSON](VendorStreamMessageReceiptsList.md#tojson)
- [toJson](VendorStreamMessageReceiptsList.md#tojson-1)
- [toJsonString](VendorStreamMessageReceiptsList.md#tojsonstring)
- [equals](VendorStreamMessageReceiptsList.md#equals-1)
- [fromBinary](VendorStreamMessageReceiptsList.md#frombinary-1)
- [fromJson](VendorStreamMessageReceiptsList.md#fromjson-1)
- [fromJsonString](VendorStreamMessageReceiptsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorStreamMessageReceiptsList**(`data?`): [`VendorStreamMessageReceiptsList`](VendorStreamMessageReceiptsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorStreamMessageReceiptsList`](VendorStreamMessageReceiptsList.md)\> |

#### Returns

[`VendorStreamMessageReceiptsList`](VendorStreamMessageReceiptsList.md)

#### Overrides

Message\&lt;VendorStreamMessageReceiptsList\&gt;.constructor

#### Defined in

src/vendorstreams.scailo_pb.ts:1856

## Properties

### list

• **list**: [`VendorStreamMessageReceipt`](VendorStreamMessageReceipt.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.VendorStreamMessageReceipt list = 1;

#### Defined in

src/vendorstreams.scailo_pb.ts:1854

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendorstreams.scailo_pb.ts:1863

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendorstreams.scailo_pb.ts:1861

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorStreamMessageReceiptsList"``

#### Defined in

src/vendorstreams.scailo_pb.ts:1862

## Methods

### clone

▸ **clone**(): [`VendorStreamMessageReceiptsList`](VendorStreamMessageReceiptsList.md)

Create a deep copy.

#### Returns

[`VendorStreamMessageReceiptsList`](VendorStreamMessageReceiptsList.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorStreamMessageReceiptsList`](VendorStreamMessageReceiptsList.md) \| `PlainMessage`\<[`VendorStreamMessageReceiptsList`](VendorStreamMessageReceiptsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorStreamMessageReceiptsList`](VendorStreamMessageReceiptsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorStreamMessageReceiptsList`](VendorStreamMessageReceiptsList.md)\>

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
| `a` | `undefined` \| [`VendorStreamMessageReceiptsList`](VendorStreamMessageReceiptsList.md) \| `PlainMessage`\<[`VendorStreamMessageReceiptsList`](VendorStreamMessageReceiptsList.md)\> |
| `b` | `undefined` \| [`VendorStreamMessageReceiptsList`](VendorStreamMessageReceiptsList.md) \| `PlainMessage`\<[`VendorStreamMessageReceiptsList`](VendorStreamMessageReceiptsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendorstreams.scailo_pb.ts:1879

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorStreamMessageReceiptsList`](VendorStreamMessageReceiptsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorStreamMessageReceiptsList`](VendorStreamMessageReceiptsList.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:1867

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorStreamMessageReceiptsList`](VendorStreamMessageReceiptsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamMessageReceiptsList`](VendorStreamMessageReceiptsList.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:1871

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorStreamMessageReceiptsList`](VendorStreamMessageReceiptsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamMessageReceiptsList`](VendorStreamMessageReceiptsList.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:1875
