[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoiceReference

# Class: VendorInvoiceReference

Describes the parameters that constitute a vendor invoice reference

**`Generated`**

from message Scailo.VendorInvoiceReference

## Hierarchy

- `Message`\<[`VendorInvoiceReference`](VendorInvoiceReference.md)\>

  ↳ **`VendorInvoiceReference`**

## Table of contents

### Constructors

- [constructor](VendorInvoiceReference.md#constructor)

### Properties

- [approvalMetadata](VendorInvoiceReference.md#approvalmetadata)
- [entityUuid](VendorInvoiceReference.md#entityuuid)
- [goodsReceiptId](VendorInvoiceReference.md#goodsreceiptid)
- [metadata](VendorInvoiceReference.md#metadata)
- [needApproval](VendorInvoiceReference.md#needapproval)
- [userComment](VendorInvoiceReference.md#usercomment)
- [vendorInvoiceId](VendorInvoiceReference.md#vendorinvoiceid)
- [fields](VendorInvoiceReference.md#fields)
- [runtime](VendorInvoiceReference.md#runtime)
- [typeName](VendorInvoiceReference.md#typename)

### Methods

- [clone](VendorInvoiceReference.md#clone)
- [equals](VendorInvoiceReference.md#equals)
- [fromBinary](VendorInvoiceReference.md#frombinary)
- [fromJson](VendorInvoiceReference.md#fromjson)
- [fromJsonString](VendorInvoiceReference.md#fromjsonstring)
- [getType](VendorInvoiceReference.md#gettype)
- [toBinary](VendorInvoiceReference.md#tobinary)
- [toJSON](VendorInvoiceReference.md#tojson)
- [toJson](VendorInvoiceReference.md#tojson-1)
- [toJsonString](VendorInvoiceReference.md#tojsonstring)
- [equals](VendorInvoiceReference.md#equals-1)
- [fromBinary](VendorInvoiceReference.md#frombinary-1)
- [fromJson](VendorInvoiceReference.md#fromjson-1)
- [fromJsonString](VendorInvoiceReference.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoiceReference**(`data?`): [`VendorInvoiceReference`](VendorInvoiceReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoiceReference`](VendorInvoiceReference.md)\> |

#### Returns

[`VendorInvoiceReference`](VendorInvoiceReference.md)

#### Overrides

Message\&lt;VendorInvoiceReference\&gt;.constructor

#### Defined in

src/vendor_invoices.scailo_pb.ts:2386

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2356

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2342

___

### goodsReceiptId

• **goodsReceiptId**: `bigint` = `protoInt64.zero`

Stores the goods receipt ID

**`Generated`**

from field: uint64 goods_receipt_id = 11;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2384

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this vendor invoice

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2349

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2363

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2370

___

### vendorInvoiceId

• **vendorInvoiceId**: `bigint` = `protoInt64.zero`

Stores the vendor invoice ID

**`Generated`**

from field: uint64 vendor_invoice_id = 10;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2377

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendor_invoices.scailo_pb.ts:2393

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendor_invoices.scailo_pb.ts:2391

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoiceReference"``

#### Defined in

src/vendor_invoices.scailo_pb.ts:2392

## Methods

### clone

▸ **clone**(): [`VendorInvoiceReference`](VendorInvoiceReference.md)

Create a deep copy.

#### Returns

[`VendorInvoiceReference`](VendorInvoiceReference.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoiceReference`](VendorInvoiceReference.md) \| `PlainMessage`\<[`VendorInvoiceReference`](VendorInvoiceReference.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoiceReference`](VendorInvoiceReference.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoiceReference`](VendorInvoiceReference.md)\>

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
| `a` | `undefined` \| [`VendorInvoiceReference`](VendorInvoiceReference.md) \| `PlainMessage`\<[`VendorInvoiceReference`](VendorInvoiceReference.md)\> |
| `b` | `undefined` \| [`VendorInvoiceReference`](VendorInvoiceReference.md) \| `PlainMessage`\<[`VendorInvoiceReference`](VendorInvoiceReference.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendor_invoices.scailo_pb.ts:2415

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoiceReference`](VendorInvoiceReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoiceReference`](VendorInvoiceReference.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:2403

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoiceReference`](VendorInvoiceReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoiceReference`](VendorInvoiceReference.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:2407

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoiceReference`](VendorInvoiceReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoiceReference`](VendorInvoiceReference.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:2411
