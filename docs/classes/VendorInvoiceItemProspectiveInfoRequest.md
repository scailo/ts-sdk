[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoiceItemProspectiveInfoRequest

# Class: VendorInvoiceItemProspectiveInfoRequest

Describes the parameters that are required to retrieve the info of a prospective vendor invoice item

**`Generated`**

from message Scailo.VendorInvoiceItemProspectiveInfoRequest

## Hierarchy

- `Message`\<[`VendorInvoiceItemProspectiveInfoRequest`](VendorInvoiceItemProspectiveInfoRequest.md)\>

  ↳ **`VendorInvoiceItemProspectiveInfoRequest`**

## Table of contents

### Constructors

- [constructor](VendorInvoiceItemProspectiveInfoRequest.md#constructor)

### Properties

- [familyId](VendorInvoiceItemProspectiveInfoRequest.md#familyid)
- [vendorInvoiceId](VendorInvoiceItemProspectiveInfoRequest.md#vendorinvoiceid)
- [fields](VendorInvoiceItemProspectiveInfoRequest.md#fields)
- [runtime](VendorInvoiceItemProspectiveInfoRequest.md#runtime)
- [typeName](VendorInvoiceItemProspectiveInfoRequest.md#typename)

### Methods

- [clone](VendorInvoiceItemProspectiveInfoRequest.md#clone)
- [equals](VendorInvoiceItemProspectiveInfoRequest.md#equals)
- [fromBinary](VendorInvoiceItemProspectiveInfoRequest.md#frombinary)
- [fromJson](VendorInvoiceItemProspectiveInfoRequest.md#fromjson)
- [fromJsonString](VendorInvoiceItemProspectiveInfoRequest.md#fromjsonstring)
- [getType](VendorInvoiceItemProspectiveInfoRequest.md#gettype)
- [toBinary](VendorInvoiceItemProspectiveInfoRequest.md#tobinary)
- [toJSON](VendorInvoiceItemProspectiveInfoRequest.md#tojson)
- [toJson](VendorInvoiceItemProspectiveInfoRequest.md#tojson-1)
- [toJsonString](VendorInvoiceItemProspectiveInfoRequest.md#tojsonstring)
- [equals](VendorInvoiceItemProspectiveInfoRequest.md#equals-1)
- [fromBinary](VendorInvoiceItemProspectiveInfoRequest.md#frombinary-1)
- [fromJson](VendorInvoiceItemProspectiveInfoRequest.md#fromjson-1)
- [fromJsonString](VendorInvoiceItemProspectiveInfoRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoiceItemProspectiveInfoRequest**(`data?`): [`VendorInvoiceItemProspectiveInfoRequest`](VendorInvoiceItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoiceItemProspectiveInfoRequest`](VendorInvoiceItemProspectiveInfoRequest.md)\> |

#### Returns

[`VendorInvoiceItemProspectiveInfoRequest`](VendorInvoiceItemProspectiveInfoRequest.md)

#### Overrides

Message\&lt;VendorInvoiceItemProspectiveInfoRequest\&gt;.constructor

#### Defined in

src/vendor_invoices.scailo_pb.ts:1402

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1400

___

### vendorInvoiceId

• **vendorInvoiceId**: `bigint` = `protoInt64.zero`

Stores the vendor invoice ID

**`Generated`**

from field: uint64 vendor_invoice_id = 10;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1393

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendor_invoices.scailo_pb.ts:1409

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendor_invoices.scailo_pb.ts:1407

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoiceItemProspectiveInfoRequest"``

#### Defined in

src/vendor_invoices.scailo_pb.ts:1408

## Methods

### clone

▸ **clone**(): [`VendorInvoiceItemProspectiveInfoRequest`](VendorInvoiceItemProspectiveInfoRequest.md)

Create a deep copy.

#### Returns

[`VendorInvoiceItemProspectiveInfoRequest`](VendorInvoiceItemProspectiveInfoRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoiceItemProspectiveInfoRequest`](VendorInvoiceItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`VendorInvoiceItemProspectiveInfoRequest`](VendorInvoiceItemProspectiveInfoRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoiceItemProspectiveInfoRequest`](VendorInvoiceItemProspectiveInfoRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoiceItemProspectiveInfoRequest`](VendorInvoiceItemProspectiveInfoRequest.md)\>

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
| `a` | `undefined` \| [`VendorInvoiceItemProspectiveInfoRequest`](VendorInvoiceItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`VendorInvoiceItemProspectiveInfoRequest`](VendorInvoiceItemProspectiveInfoRequest.md)\> |
| `b` | `undefined` \| [`VendorInvoiceItemProspectiveInfoRequest`](VendorInvoiceItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`VendorInvoiceItemProspectiveInfoRequest`](VendorInvoiceItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendor_invoices.scailo_pb.ts:1426

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoiceItemProspectiveInfoRequest`](VendorInvoiceItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoiceItemProspectiveInfoRequest`](VendorInvoiceItemProspectiveInfoRequest.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:1414

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoiceItemProspectiveInfoRequest`](VendorInvoiceItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoiceItemProspectiveInfoRequest`](VendorInvoiceItemProspectiveInfoRequest.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:1418

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoiceItemProspectiveInfoRequest`](VendorInvoiceItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoiceItemProspectiveInfoRequest`](VendorInvoiceItemProspectiveInfoRequest.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:1422
