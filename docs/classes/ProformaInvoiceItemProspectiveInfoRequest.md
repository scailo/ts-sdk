[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoiceItemProspectiveInfoRequest

# Class: ProformaInvoiceItemProspectiveInfoRequest

Represents the request payload utilized to fetch the default, auto-populated configuration for a potential line item
before it is formally added to a Proforma Invoice.

**Note:** This is a critical templating operation utilized by frontend interfaces during the drafting phase.
By evaluating the provided invoice ID and family, the system cross-references the originating source
document (e.g., a Sales Order) to automatically determine the negotiated unit price, remaining unbilled quantities,
and applicable tax brackets, thereby minimizing manual data entry and ensuring financial consistency.

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

[src/proforma_invoices.scailo_pb.ts:2492](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L2492)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the family or catalog item being evaluated for addition to the invoice.

**`Example`**

```ts
505
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2490](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L2490)

___

### proformaInvoiceId

• **proformaInvoiceId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the parent proforma invoice that is currently being evaluated or constructed.

**`Example`**

```ts
1024
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 proforma_invoice_id = 10;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2474](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L2474)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2499](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L2499)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2497](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L2497)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoiceItemProspectiveInfoRequest"``

#### Defined in

[src/proforma_invoices.scailo_pb.ts:2498](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L2498)

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

[src/proforma_invoices.scailo_pb.ts:2516](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L2516)

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

[src/proforma_invoices.scailo_pb.ts:2504](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L2504)

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

[src/proforma_invoices.scailo_pb.ts:2508](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L2508)

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

[src/proforma_invoices.scailo_pb.ts:2512](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L2512)
