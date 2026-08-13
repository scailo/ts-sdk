[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoicesServiceItemCreateRequest

# Class: SalesInvoicesServiceItemCreateRequest

Request message for appending a billable line item to an existing Sales Invoice.
This payload defines the specific family, quantities mapped between internal
and client-specific units of measure, and the final commercial terms (price, tax, round-offs)
for which the buyer is being formally billed.

**`Generated`**

from message Scailo.SalesInvoicesServiceItemCreateRequest

## Hierarchy

- `Message`\<[`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)\>

  ↳ **`SalesInvoicesServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](SalesInvoicesServiceItemCreateRequest.md#constructor)

### Properties

- [clientFamilyCode](SalesInvoicesServiceItemCreateRequest.md#clientfamilycode)
- [clientQuantity](SalesInvoicesServiceItemCreateRequest.md#clientquantity)
- [clientUomId](SalesInvoicesServiceItemCreateRequest.md#clientuomid)
- [familyId](SalesInvoicesServiceItemCreateRequest.md#familyid)
- [internalQuantity](SalesInvoicesServiceItemCreateRequest.md#internalquantity)
- [roundOff](SalesInvoicesServiceItemCreateRequest.md#roundoff)
- [salesInvoiceId](SalesInvoicesServiceItemCreateRequest.md#salesinvoiceid)
- [specifications](SalesInvoicesServiceItemCreateRequest.md#specifications)
- [taxGroupId](SalesInvoicesServiceItemCreateRequest.md#taxgroupid)
- [unitPrice](SalesInvoicesServiceItemCreateRequest.md#unitprice)
- [userComment](SalesInvoicesServiceItemCreateRequest.md#usercomment)
- [fields](SalesInvoicesServiceItemCreateRequest.md#fields)
- [runtime](SalesInvoicesServiceItemCreateRequest.md#runtime)
- [typeName](SalesInvoicesServiceItemCreateRequest.md#typename)

### Methods

- [clone](SalesInvoicesServiceItemCreateRequest.md#clone)
- [equals](SalesInvoicesServiceItemCreateRequest.md#equals)
- [fromBinary](SalesInvoicesServiceItemCreateRequest.md#frombinary)
- [fromJson](SalesInvoicesServiceItemCreateRequest.md#fromjson)
- [fromJsonString](SalesInvoicesServiceItemCreateRequest.md#fromjsonstring)
- [getType](SalesInvoicesServiceItemCreateRequest.md#gettype)
- [toBinary](SalesInvoicesServiceItemCreateRequest.md#tobinary)
- [toJSON](SalesInvoicesServiceItemCreateRequest.md#tojson)
- [toJson](SalesInvoicesServiceItemCreateRequest.md#tojson-1)
- [toJsonString](SalesInvoicesServiceItemCreateRequest.md#tojsonstring)
- [equals](SalesInvoicesServiceItemCreateRequest.md#equals-1)
- [fromBinary](SalesInvoicesServiceItemCreateRequest.md#frombinary-1)
- [fromJson](SalesInvoicesServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](SalesInvoicesServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoicesServiceItemCreateRequest**(`data?`): [`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)\> |

#### Returns

[`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)

#### Overrides

Message\&lt;SalesInvoicesServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/sales_invoices.scailo_pb.ts:1441](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1441)

## Properties

### clientFamilyCode

• `Optional` **clientFamilyCode**: `string`

**`Optional`**

**`Description`**

The client's specific alphanumeric part number, SKU, or family code used for their internal referencing.

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

[src/sales_invoices.scailo_pb.ts:1375](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1375)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The invoiced quantity represented in the client's specific unit of measure. Stored in subunits (cents) to maintain fractional precision.

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

[src/sales_invoices.scailo_pb.ts:1359](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1359)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the Unit of Measure (UOM) requested by the client for this item.

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

[src/sales_invoices.scailo_pb.ts:1343](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1343)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the family or catalog item being invoiced.

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

[src/sales_invoices.scailo_pb.ts:1311](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1311)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The invoiced quantity represented in the system's internal base unit of measure. Stored in subunits (cents) to maintain fractional precision.

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

[src/sales_invoices.scailo_pb.ts:1327](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1327)

___

### roundOff

• `Optional` **roundOff**: `bigint`

**`Optional`**

**`Description`**

The applicable rounding adjustment amount for this specific item's financial total. Can be positive or negative, represented in the base currency subunit.

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

[src/sales_invoices.scailo_pb.ts:1423](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1423)

___

### salesInvoiceId

• **salesInvoiceId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the parent sales invoice to which this item will be attached.

**`Example`**

```ts
1024
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 sales_invoice_id = 10;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1295](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1295)

___

### specifications

• `Optional` **specifications**: `string`

**`Optional`**

**`Description`**

Additional custom textual requirements, notes, or specifications associated with this billed item.

**`Example`**

```ts
"Billed per expedited shipping agreement."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string specifications = 19;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1439](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1439)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the tax group or tax bracket applicable to this specific line item.

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

[src/sales_invoices.scailo_pb.ts:1407](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1407)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The invoiced price per unit for this item, represented in the base currency subunit (e.g., cents).

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

[src/sales_invoices.scailo_pb.ts:1391](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1391)

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

[src/sales_invoices.scailo_pb.ts:1279](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1279)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_invoices.scailo_pb.ts:1448](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1448)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_invoices.scailo_pb.ts:1446](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1446)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoicesServiceItemCreateRequest"``

#### Defined in

[src/sales_invoices.scailo_pb.ts:1447](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1447)

## Methods

### clone

▸ **clone**(): [`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_invoices.scailo_pb.ts:1474](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1474)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:1462](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1462)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:1466](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1466)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceItemCreateRequest`](SalesInvoicesServiceItemCreateRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:1470](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1470)
