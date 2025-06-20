[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoicesServiceReferenceCreateRequest

# Class: VendorInvoicesServiceReferenceCreateRequest

Describes the parameters necessary to create a vendor invoice reference

**`Generated`**

from message Scailo.VendorInvoicesServiceReferenceCreateRequest

## Hierarchy

- `Message`\<[`VendorInvoicesServiceReferenceCreateRequest`](VendorInvoicesServiceReferenceCreateRequest.md)\>

  ↳ **`VendorInvoicesServiceReferenceCreateRequest`**

## Table of contents

### Constructors

- [constructor](VendorInvoicesServiceReferenceCreateRequest.md#constructor)

### Properties

- [goodsReceiptId](VendorInvoicesServiceReferenceCreateRequest.md#goodsreceiptid)
- [userComment](VendorInvoicesServiceReferenceCreateRequest.md#usercomment)
- [vendorInvoiceId](VendorInvoicesServiceReferenceCreateRequest.md#vendorinvoiceid)
- [fields](VendorInvoicesServiceReferenceCreateRequest.md#fields)
- [runtime](VendorInvoicesServiceReferenceCreateRequest.md#runtime)
- [typeName](VendorInvoicesServiceReferenceCreateRequest.md#typename)

### Methods

- [clone](VendorInvoicesServiceReferenceCreateRequest.md#clone)
- [equals](VendorInvoicesServiceReferenceCreateRequest.md#equals)
- [fromBinary](VendorInvoicesServiceReferenceCreateRequest.md#frombinary)
- [fromJson](VendorInvoicesServiceReferenceCreateRequest.md#fromjson)
- [fromJsonString](VendorInvoicesServiceReferenceCreateRequest.md#fromjsonstring)
- [getType](VendorInvoicesServiceReferenceCreateRequest.md#gettype)
- [toBinary](VendorInvoicesServiceReferenceCreateRequest.md#tobinary)
- [toJSON](VendorInvoicesServiceReferenceCreateRequest.md#tojson)
- [toJson](VendorInvoicesServiceReferenceCreateRequest.md#tojson-1)
- [toJsonString](VendorInvoicesServiceReferenceCreateRequest.md#tojsonstring)
- [equals](VendorInvoicesServiceReferenceCreateRequest.md#equals-1)
- [fromBinary](VendorInvoicesServiceReferenceCreateRequest.md#frombinary-1)
- [fromJson](VendorInvoicesServiceReferenceCreateRequest.md#fromjson-1)
- [fromJsonString](VendorInvoicesServiceReferenceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoicesServiceReferenceCreateRequest**(`data?`): [`VendorInvoicesServiceReferenceCreateRequest`](VendorInvoicesServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoicesServiceReferenceCreateRequest`](VendorInvoicesServiceReferenceCreateRequest.md)\> |

#### Returns

[`VendorInvoicesServiceReferenceCreateRequest`](VendorInvoicesServiceReferenceCreateRequest.md)

#### Overrides

Message\&lt;VendorInvoicesServiceReferenceCreateRequest\&gt;.constructor

#### Defined in

src/vendor_invoices.scailo_pb.ts:2362

## Properties

### goodsReceiptId

• **goodsReceiptId**: `bigint` = `protoInt64.zero`

Stores the goods receipt ID

**`Generated`**

from field: uint64 goods_receipt_id = 11;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2360

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2346

___

### vendorInvoiceId

• **vendorInvoiceId**: `bigint` = `protoInt64.zero`

Stores the vendor invoice ID

**`Generated`**

from field: uint64 vendor_invoice_id = 10;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2353

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendor_invoices.scailo_pb.ts:2369

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendor_invoices.scailo_pb.ts:2367

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoicesServiceReferenceCreateRequest"``

#### Defined in

src/vendor_invoices.scailo_pb.ts:2368

## Methods

### clone

▸ **clone**(): [`VendorInvoicesServiceReferenceCreateRequest`](VendorInvoicesServiceReferenceCreateRequest.md)

Create a deep copy.

#### Returns

[`VendorInvoicesServiceReferenceCreateRequest`](VendorInvoicesServiceReferenceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoicesServiceReferenceCreateRequest`](VendorInvoicesServiceReferenceCreateRequest.md) \| `PlainMessage`\<[`VendorInvoicesServiceReferenceCreateRequest`](VendorInvoicesServiceReferenceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoicesServiceReferenceCreateRequest`](VendorInvoicesServiceReferenceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoicesServiceReferenceCreateRequest`](VendorInvoicesServiceReferenceCreateRequest.md)\>

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
| `a` | `undefined` \| [`VendorInvoicesServiceReferenceCreateRequest`](VendorInvoicesServiceReferenceCreateRequest.md) \| `PlainMessage`\<[`VendorInvoicesServiceReferenceCreateRequest`](VendorInvoicesServiceReferenceCreateRequest.md)\> |
| `b` | `undefined` \| [`VendorInvoicesServiceReferenceCreateRequest`](VendorInvoicesServiceReferenceCreateRequest.md) \| `PlainMessage`\<[`VendorInvoicesServiceReferenceCreateRequest`](VendorInvoicesServiceReferenceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendor_invoices.scailo_pb.ts:2387

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoicesServiceReferenceCreateRequest`](VendorInvoicesServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoicesServiceReferenceCreateRequest`](VendorInvoicesServiceReferenceCreateRequest.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:2375

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoicesServiceReferenceCreateRequest`](VendorInvoicesServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceReferenceCreateRequest`](VendorInvoicesServiceReferenceCreateRequest.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:2379

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoicesServiceReferenceCreateRequest`](VendorInvoicesServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceReferenceCreateRequest`](VendorInvoicesServiceReferenceCreateRequest.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:2383
