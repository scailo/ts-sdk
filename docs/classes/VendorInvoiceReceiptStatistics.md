[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoiceReceiptStatistics

# Class: VendorInvoiceReceiptStatistics

Describes the receipt statistics of the vendor invoice

**`Generated`**

from message Scailo.VendorInvoiceReceiptStatistics

## Hierarchy

- `Message`\<[`VendorInvoiceReceiptStatistics`](VendorInvoiceReceiptStatistics.md)\>

  ↳ **`VendorInvoiceReceiptStatistics`**

## Table of contents

### Constructors

- [constructor](VendorInvoiceReceiptStatistics.md#constructor)

### Properties

- [familyId](VendorInvoiceReceiptStatistics.md#familyid)
- [invoicedQuantity](VendorInvoiceReceiptStatistics.md#invoicedquantity)
- [receiptQuantity](VendorInvoiceReceiptStatistics.md#receiptquantity)
- [fields](VendorInvoiceReceiptStatistics.md#fields)
- [runtime](VendorInvoiceReceiptStatistics.md#runtime)
- [typeName](VendorInvoiceReceiptStatistics.md#typename)

### Methods

- [clone](VendorInvoiceReceiptStatistics.md#clone)
- [equals](VendorInvoiceReceiptStatistics.md#equals)
- [fromBinary](VendorInvoiceReceiptStatistics.md#frombinary)
- [fromJson](VendorInvoiceReceiptStatistics.md#fromjson)
- [fromJsonString](VendorInvoiceReceiptStatistics.md#fromjsonstring)
- [getType](VendorInvoiceReceiptStatistics.md#gettype)
- [toBinary](VendorInvoiceReceiptStatistics.md#tobinary)
- [toJSON](VendorInvoiceReceiptStatistics.md#tojson)
- [toJson](VendorInvoiceReceiptStatistics.md#tojson-1)
- [toJsonString](VendorInvoiceReceiptStatistics.md#tojsonstring)
- [equals](VendorInvoiceReceiptStatistics.md#equals-1)
- [fromBinary](VendorInvoiceReceiptStatistics.md#frombinary-1)
- [fromJson](VendorInvoiceReceiptStatistics.md#fromjson-1)
- [fromJsonString](VendorInvoiceReceiptStatistics.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoiceReceiptStatistics**(`data?`): [`VendorInvoiceReceiptStatistics`](VendorInvoiceReceiptStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoiceReceiptStatistics`](VendorInvoiceReceiptStatistics.md)\> |

#### Returns

[`VendorInvoiceReceiptStatistics`](VendorInvoiceReceiptStatistics.md)

#### Overrides

Message\&lt;VendorInvoiceReceiptStatistics\&gt;.constructor

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2792](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2792)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the family

**`Generated`**

from field: uint64 family_id = 1;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2776](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2776)

___

### invoicedQuantity

• **invoicedQuantity**: `bigint` = `protoInt64.zero`

Stores the invoiced quantity

**`Generated`**

from field: uint64 invoiced_quantity = 2;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2783](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2783)

___

### receiptQuantity

• **receiptQuantity**: `bigint` = `protoInt64.zero`

Stores the receipt quantity

**`Generated`**

from field: uint64 receipt_quantity = 3;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2790](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2790)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2799](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2799)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2797](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2797)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoiceReceiptStatistics"``

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2798](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2798)

## Methods

### clone

▸ **clone**(): [`VendorInvoiceReceiptStatistics`](VendorInvoiceReceiptStatistics.md)

Create a deep copy.

#### Returns

[`VendorInvoiceReceiptStatistics`](VendorInvoiceReceiptStatistics.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoiceReceiptStatistics`](VendorInvoiceReceiptStatistics.md) \| `PlainMessage`\<[`VendorInvoiceReceiptStatistics`](VendorInvoiceReceiptStatistics.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoiceReceiptStatistics`](VendorInvoiceReceiptStatistics.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoiceReceiptStatistics`](VendorInvoiceReceiptStatistics.md)\>

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
| `a` | `undefined` \| [`VendorInvoiceReceiptStatistics`](VendorInvoiceReceiptStatistics.md) \| `PlainMessage`\<[`VendorInvoiceReceiptStatistics`](VendorInvoiceReceiptStatistics.md)\> |
| `b` | `undefined` \| [`VendorInvoiceReceiptStatistics`](VendorInvoiceReceiptStatistics.md) \| `PlainMessage`\<[`VendorInvoiceReceiptStatistics`](VendorInvoiceReceiptStatistics.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2817](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2817)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoiceReceiptStatistics`](VendorInvoiceReceiptStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoiceReceiptStatistics`](VendorInvoiceReceiptStatistics.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2805](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2805)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoiceReceiptStatistics`](VendorInvoiceReceiptStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoiceReceiptStatistics`](VendorInvoiceReceiptStatistics.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2809](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2809)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoiceReceiptStatistics`](VendorInvoiceReceiptStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoiceReceiptStatistics`](VendorInvoiceReceiptStatistics.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:2813](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L2813)
