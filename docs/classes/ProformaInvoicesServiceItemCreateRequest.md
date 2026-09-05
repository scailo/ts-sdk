[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoicesServiceItemCreateRequest

# Class: ProformaInvoicesServiceItemCreateRequest

Request message for appending a preliminary line item to an existing Proforma Invoice.
This payload defines the specific family, estimated quantities mapped between internal
and client-specific units of measure, and the anticipated commercial terms (price, tax, round-offs)
presented to the buyer in advance of actual fulfillment or final billing.

**`Generated`**

from message Scailo.ProformaInvoicesServiceItemCreateRequest

## Hierarchy

- `Message`\<[`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)\>

  ↳ **`ProformaInvoicesServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](ProformaInvoicesServiceItemCreateRequest.md#constructor)

### Properties

- [clientFamilyCode](ProformaInvoicesServiceItemCreateRequest.md#clientfamilycode)
- [clientQuantity](ProformaInvoicesServiceItemCreateRequest.md#clientquantity)
- [clientUomId](ProformaInvoicesServiceItemCreateRequest.md#clientuomid)
- [familyId](ProformaInvoicesServiceItemCreateRequest.md#familyid)
- [internalQuantity](ProformaInvoicesServiceItemCreateRequest.md#internalquantity)
- [proformaInvoiceId](ProformaInvoicesServiceItemCreateRequest.md#proformainvoiceid)
- [roundOff](ProformaInvoicesServiceItemCreateRequest.md#roundoff)
- [specifications](ProformaInvoicesServiceItemCreateRequest.md#specifications)
- [taxGroupId](ProformaInvoicesServiceItemCreateRequest.md#taxgroupid)
- [unitPrice](ProformaInvoicesServiceItemCreateRequest.md#unitprice)
- [userComment](ProformaInvoicesServiceItemCreateRequest.md#usercomment)
- [fields](ProformaInvoicesServiceItemCreateRequest.md#fields)
- [runtime](ProformaInvoicesServiceItemCreateRequest.md#runtime)
- [typeName](ProformaInvoicesServiceItemCreateRequest.md#typename)

### Methods

- [clone](ProformaInvoicesServiceItemCreateRequest.md#clone)
- [equals](ProformaInvoicesServiceItemCreateRequest.md#equals)
- [fromBinary](ProformaInvoicesServiceItemCreateRequest.md#frombinary)
- [fromJson](ProformaInvoicesServiceItemCreateRequest.md#fromjson)
- [fromJsonString](ProformaInvoicesServiceItemCreateRequest.md#fromjsonstring)
- [getType](ProformaInvoicesServiceItemCreateRequest.md#gettype)
- [toBinary](ProformaInvoicesServiceItemCreateRequest.md#tobinary)
- [toJSON](ProformaInvoicesServiceItemCreateRequest.md#tojson)
- [toJson](ProformaInvoicesServiceItemCreateRequest.md#tojson-1)
- [toJsonString](ProformaInvoicesServiceItemCreateRequest.md#tojsonstring)
- [equals](ProformaInvoicesServiceItemCreateRequest.md#equals-1)
- [fromBinary](ProformaInvoicesServiceItemCreateRequest.md#frombinary-1)
- [fromJson](ProformaInvoicesServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](ProformaInvoicesServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoicesServiceItemCreateRequest**(`data?`): [`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)\> |

#### Returns

[`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)

#### Overrides

Message\&lt;ProformaInvoicesServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1480](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1480)

## Properties

### clientFamilyCode

• `Optional` **clientFamilyCode**: `string`

**`Optional`**

**`Description`**

The client's specific alphanumeric part number, SKU, or family code used for their internal referencing of this item.

**`Example`**

```ts
"CLI-SKU-992"
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string client_family_code = 15;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1414](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1414)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The estimated quantity represented in the client's specific unit of measure. Stored in subunits (cents) to maintain fractional precision.

**`Example`**

```ts
5000
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 client_quantity = 14;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1398](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1398)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the Unit of Measure (UOM) requested by the client for this estimated item.

**`Example`**

```ts
12
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 client_uom_id = 13;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1382](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1382)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the family or catalog item being estimated in this proforma invoice.

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

[src/proforma_invoices.scailo_pb.ts:1350](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1350)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The estimated quantity represented in the system's internal base unit of measure. Stored in subunits (cents) to maintain fractional precision.

**`Example`**

```ts
10000
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1366](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1366)

___

### proformaInvoiceId

• **proformaInvoiceId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the parent proforma invoice to which this preliminary item will be attached.

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

[src/proforma_invoices.scailo_pb.ts:1334](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1334)

___

### roundOff

• `Optional` **roundOff**: `bigint`

**`Optional`**

**`Description`**

The applicable rounding adjustment amount for this specific item's estimated financial total. Can be positive or negative, represented in the base currency subunit.

**`Example`**

```ts
-15
```

**`Regex`**

^-?[0-9]+$

**`Format`**

Signed 64-bit integer.

**`Generated`**

from field: optional int64 round_off = 18;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1462](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1462)

___

### specifications

• `Optional` **specifications**: `string`

**`Optional`**

**`Description`**

Additional custom textual requirements, notes, or specifications associated with this preliminary item.

**`Example`**

```ts
"Estimated based on current freight rates."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string specifications = 19;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1478](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1478)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the tax group or tax bracket anticipated for this specific line item.

**`Example`**

```ts
4
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 tax_group_id = 17;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1446](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1446)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The estimated price per unit for this item, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
2500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 unit_price = 16;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1430](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1430)

___

### userComment

• `Optional` **userComment**: `string`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string user_comment = 1;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1318](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1318)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1487](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1487)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1485](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1485)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoicesServiceItemCreateRequest"``

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1486](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1486)

## Methods

### clone

▸ **clone**(): [`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md) \| `PlainMessage`\<[`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md) \| `PlainMessage`\<[`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md) \| `PlainMessage`\<[`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1513](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1513)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1501](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1501)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1505](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1505)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceItemCreateRequest`](ProformaInvoicesServiceItemCreateRequest.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1509](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1509)
