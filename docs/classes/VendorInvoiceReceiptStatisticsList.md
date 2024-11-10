[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoiceReceiptStatisticsList

# Class: VendorInvoiceReceiptStatisticsList

Describes the list of receipt statistics of the vendor invoice

**`Generated`**

from message Scailo.VendorInvoiceReceiptStatisticsList

## Hierarchy

- `Message`\<[`VendorInvoiceReceiptStatisticsList`](VendorInvoiceReceiptStatisticsList.md)\>

  ↳ **`VendorInvoiceReceiptStatisticsList`**

## Table of contents

### Constructors

- [constructor](VendorInvoiceReceiptStatisticsList.md#constructor)

### Properties

- [list](VendorInvoiceReceiptStatisticsList.md#list)
- [fields](VendorInvoiceReceiptStatisticsList.md#fields)
- [runtime](VendorInvoiceReceiptStatisticsList.md#runtime)
- [typeName](VendorInvoiceReceiptStatisticsList.md#typename)

### Methods

- [clone](VendorInvoiceReceiptStatisticsList.md#clone)
- [equals](VendorInvoiceReceiptStatisticsList.md#equals)
- [fromBinary](VendorInvoiceReceiptStatisticsList.md#frombinary)
- [fromJson](VendorInvoiceReceiptStatisticsList.md#fromjson)
- [fromJsonString](VendorInvoiceReceiptStatisticsList.md#fromjsonstring)
- [getType](VendorInvoiceReceiptStatisticsList.md#gettype)
- [toBinary](VendorInvoiceReceiptStatisticsList.md#tobinary)
- [toJSON](VendorInvoiceReceiptStatisticsList.md#tojson)
- [toJson](VendorInvoiceReceiptStatisticsList.md#tojson-1)
- [toJsonString](VendorInvoiceReceiptStatisticsList.md#tojsonstring)
- [equals](VendorInvoiceReceiptStatisticsList.md#equals-1)
- [fromBinary](VendorInvoiceReceiptStatisticsList.md#frombinary-1)
- [fromJson](VendorInvoiceReceiptStatisticsList.md#fromjson-1)
- [fromJsonString](VendorInvoiceReceiptStatisticsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoiceReceiptStatisticsList**(`data?`): [`VendorInvoiceReceiptStatisticsList`](VendorInvoiceReceiptStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoiceReceiptStatisticsList`](VendorInvoiceReceiptStatisticsList.md)\> |

#### Returns

[`VendorInvoiceReceiptStatisticsList`](VendorInvoiceReceiptStatisticsList.md)

#### Overrides

Message\&lt;VendorInvoiceReceiptStatisticsList\&gt;.constructor

#### Defined in

src/vendor_invoices.scailo_pb.ts:2791

## Properties

### list

• **list**: [`VendorInvoiceReceiptStatistics`](VendorInvoiceReceiptStatistics.md)[] = `[]`

**`Generated`**

from field: repeated Scailo.VendorInvoiceReceiptStatistics list = 1;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2789

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendor_invoices.scailo_pb.ts:2798

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendor_invoices.scailo_pb.ts:2796

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoiceReceiptStatisticsList"``

#### Defined in

src/vendor_invoices.scailo_pb.ts:2797

## Methods

### clone

▸ **clone**(): [`VendorInvoiceReceiptStatisticsList`](VendorInvoiceReceiptStatisticsList.md)

Create a deep copy.

#### Returns

[`VendorInvoiceReceiptStatisticsList`](VendorInvoiceReceiptStatisticsList.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoiceReceiptStatisticsList`](VendorInvoiceReceiptStatisticsList.md) \| `PlainMessage`\<[`VendorInvoiceReceiptStatisticsList`](VendorInvoiceReceiptStatisticsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoiceReceiptStatisticsList`](VendorInvoiceReceiptStatisticsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoiceReceiptStatisticsList`](VendorInvoiceReceiptStatisticsList.md)\>

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
| `a` | `undefined` \| [`VendorInvoiceReceiptStatisticsList`](VendorInvoiceReceiptStatisticsList.md) \| `PlainMessage`\<[`VendorInvoiceReceiptStatisticsList`](VendorInvoiceReceiptStatisticsList.md)\> |
| `b` | `undefined` \| [`VendorInvoiceReceiptStatisticsList`](VendorInvoiceReceiptStatisticsList.md) \| `PlainMessage`\<[`VendorInvoiceReceiptStatisticsList`](VendorInvoiceReceiptStatisticsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendor_invoices.scailo_pb.ts:2814

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoiceReceiptStatisticsList`](VendorInvoiceReceiptStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoiceReceiptStatisticsList`](VendorInvoiceReceiptStatisticsList.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:2802

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoiceReceiptStatisticsList`](VendorInvoiceReceiptStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoiceReceiptStatisticsList`](VendorInvoiceReceiptStatisticsList.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:2806

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoiceReceiptStatisticsList`](VendorInvoiceReceiptStatisticsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoiceReceiptStatisticsList`](VendorInvoiceReceiptStatisticsList.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:2810
