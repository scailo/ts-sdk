[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoiceItemProspectiveInfoRequest

# Class: ProformaInvoiceItemProspectiveInfoRequest

Describes the parameters that are required to retrieve the info of a prospective proforma invoice item

**`Generated`**

from message Scailo.ProformaInvoiceItemProspectiveInfoRequest

## Hierarchy

- `Message`\<[`ProformaInvoiceItemProspectiveInfoRequest`](ProformaInvoiceItemProspectiveInfoRequest.md)\>

  ↳ **`ProformaInvoiceItemProspectiveInfoRequest`**

## Table of contents

### Constructors

- [constructor](ProformaInvoiceItemProspectiveInfoRequest.md#constructor)

### Properties

- [familyId](ProformaInvoiceItemProspectiveInfoRequest.md#familyid)
- [proformaInvoiceId](ProformaInvoiceItemProspectiveInfoRequest.md#proformainvoiceid)
- [fields](ProformaInvoiceItemProspectiveInfoRequest.md#fields)
- [runtime](ProformaInvoiceItemProspectiveInfoRequest.md#runtime)
- [typeName](ProformaInvoiceItemProspectiveInfoRequest.md#typename)

### Methods

- [clone](ProformaInvoiceItemProspectiveInfoRequest.md#clone)
- [equals](ProformaInvoiceItemProspectiveInfoRequest.md#equals)
- [fromBinary](ProformaInvoiceItemProspectiveInfoRequest.md#frombinary)
- [fromJson](ProformaInvoiceItemProspectiveInfoRequest.md#fromjson)
- [fromJsonString](ProformaInvoiceItemProspectiveInfoRequest.md#fromjsonstring)
- [getType](ProformaInvoiceItemProspectiveInfoRequest.md#gettype)
- [toBinary](ProformaInvoiceItemProspectiveInfoRequest.md#tobinary)
- [toJSON](ProformaInvoiceItemProspectiveInfoRequest.md#tojson)
- [toJson](ProformaInvoiceItemProspectiveInfoRequest.md#tojson-1)
- [toJsonString](ProformaInvoiceItemProspectiveInfoRequest.md#tojsonstring)
- [equals](ProformaInvoiceItemProspectiveInfoRequest.md#equals-1)
- [fromBinary](ProformaInvoiceItemProspectiveInfoRequest.md#frombinary-1)
- [fromJson](ProformaInvoiceItemProspectiveInfoRequest.md#fromjson-1)
- [fromJsonString](ProformaInvoiceItemProspectiveInfoRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoiceItemProspectiveInfoRequest**(`data?`): [`ProformaInvoiceItemProspectiveInfoRequest`](ProformaInvoiceItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoiceItemProspectiveInfoRequest`](ProformaInvoiceItemProspectiveInfoRequest.md)\> |

#### Returns

[`ProformaInvoiceItemProspectiveInfoRequest`](ProformaInvoiceItemProspectiveInfoRequest.md)

#### Overrides

Message\&lt;ProformaInvoiceItemProspectiveInfoRequest\&gt;.constructor

#### Defined in

src/proforma_invoices.scailo_pb.ts:1442

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1440

___

### proformaInvoiceId

• **proformaInvoiceId**: `bigint` = `protoInt64.zero`

Stores the proforma invoice ID

**`Generated`**

from field: uint64 proforma_invoice_id = 10;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1433

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/proforma_invoices.scailo_pb.ts:1449

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/proforma_invoices.scailo_pb.ts:1447

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoiceItemProspectiveInfoRequest"``

#### Defined in

src/proforma_invoices.scailo_pb.ts:1448

## Methods

### clone

▸ **clone**(): [`ProformaInvoiceItemProspectiveInfoRequest`](ProformaInvoiceItemProspectiveInfoRequest.md)

Create a deep copy.

#### Returns

[`ProformaInvoiceItemProspectiveInfoRequest`](ProformaInvoiceItemProspectiveInfoRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProformaInvoiceItemProspectiveInfoRequest`](ProformaInvoiceItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`ProformaInvoiceItemProspectiveInfoRequest`](ProformaInvoiceItemProspectiveInfoRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProformaInvoiceItemProspectiveInfoRequest`](ProformaInvoiceItemProspectiveInfoRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoiceItemProspectiveInfoRequest`](ProformaInvoiceItemProspectiveInfoRequest.md)\>

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
| `a` | `undefined` \| [`ProformaInvoiceItemProspectiveInfoRequest`](ProformaInvoiceItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`ProformaInvoiceItemProspectiveInfoRequest`](ProformaInvoiceItemProspectiveInfoRequest.md)\> |
| `b` | `undefined` \| [`ProformaInvoiceItemProspectiveInfoRequest`](ProformaInvoiceItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`ProformaInvoiceItemProspectiveInfoRequest`](ProformaInvoiceItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/proforma_invoices.scailo_pb.ts:1466

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoiceItemProspectiveInfoRequest`](ProformaInvoiceItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoiceItemProspectiveInfoRequest`](ProformaInvoiceItemProspectiveInfoRequest.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:1454

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoiceItemProspectiveInfoRequest`](ProformaInvoiceItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoiceItemProspectiveInfoRequest`](ProformaInvoiceItemProspectiveInfoRequest.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:1458

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoiceItemProspectiveInfoRequest`](ProformaInvoiceItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoiceItemProspectiveInfoRequest`](ProformaInvoiceItemProspectiveInfoRequest.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:1462
