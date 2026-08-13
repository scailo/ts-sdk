[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoicesServiceCreateRequest

# Class: SalesInvoicesServiceCreateRequest

Request message for defining and creating a new Sales Invoice within the system.
This record serves as the formal billing document issued to a buyer, encapsulating
the financial demands for goods or services rendered based on a source operational record
(like a Sales Order). It establishes the currency, payment destination (bank account),
and overarching financial adjustments applied at the invoice level.

**`Generated`**

from message Scailo.SalesInvoicesServiceCreateRequest

## Hierarchy

- `Message`\<[`SalesInvoicesServiceCreateRequest`](SalesInvoicesServiceCreateRequest.md)\>

  ↳ **`SalesInvoicesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](SalesInvoicesServiceCreateRequest.md#constructor)

### Properties

- [bankAccountId](SalesInvoicesServiceCreateRequest.md#bankaccountid)
- [cumulativeExcessTaxAmount](SalesInvoicesServiceCreateRequest.md#cumulativeexcesstaxamount)
- [cumulativeExcessTaxGroupId](SalesInvoicesServiceCreateRequest.md#cumulativeexcesstaxgroupid)
- [currencyId](SalesInvoicesServiceCreateRequest.md#currencyid)
- [entityUuid](SalesInvoicesServiceCreateRequest.md#entityuuid)
- [formData](SalesInvoicesServiceCreateRequest.md#formdata)
- [miscellaneousCost](SalesInvoicesServiceCreateRequest.md#miscellaneouscost)
- [overallDiscount](SalesInvoicesServiceCreateRequest.md#overalldiscount)
- [refFrom](SalesInvoicesServiceCreateRequest.md#reffrom)
- [refId](SalesInvoicesServiceCreateRequest.md#refid)
- [referenceId](SalesInvoicesServiceCreateRequest.md#referenceid)
- [roundOff](SalesInvoicesServiceCreateRequest.md#roundoff)
- [userComment](SalesInvoicesServiceCreateRequest.md#usercomment)
- [vaultFolderId](SalesInvoicesServiceCreateRequest.md#vaultfolderid)
- [fields](SalesInvoicesServiceCreateRequest.md#fields)
- [runtime](SalesInvoicesServiceCreateRequest.md#runtime)
- [typeName](SalesInvoicesServiceCreateRequest.md#typename)

### Methods

- [clone](SalesInvoicesServiceCreateRequest.md#clone)
- [equals](SalesInvoicesServiceCreateRequest.md#equals)
- [fromBinary](SalesInvoicesServiceCreateRequest.md#frombinary)
- [fromJson](SalesInvoicesServiceCreateRequest.md#fromjson)
- [fromJsonString](SalesInvoicesServiceCreateRequest.md#fromjsonstring)
- [getType](SalesInvoicesServiceCreateRequest.md#gettype)
- [toBinary](SalesInvoicesServiceCreateRequest.md#tobinary)
- [toJSON](SalesInvoicesServiceCreateRequest.md#tojson)
- [toJson](SalesInvoicesServiceCreateRequest.md#tojson-1)
- [toJsonString](SalesInvoicesServiceCreateRequest.md#tojsonstring)
- [equals](SalesInvoicesServiceCreateRequest.md#equals-1)
- [fromBinary](SalesInvoicesServiceCreateRequest.md#frombinary-1)
- [fromJson](SalesInvoicesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](SalesInvoicesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoicesServiceCreateRequest**(`data?`): [`SalesInvoicesServiceCreateRequest`](SalesInvoicesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoicesServiceCreateRequest`](SalesInvoicesServiceCreateRequest.md)\> |

#### Returns

[`SalesInvoicesServiceCreateRequest`](SalesInvoicesServiceCreateRequest.md)

#### Overrides

Message\&lt;SalesInvoicesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/sales_invoices.scailo_pb.ts:521](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L521)

## Properties

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the organization's bank account designated to receive the payment for this invoice.

**`Example`**

```ts
15
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 bank_account_id = 15;

#### Defined in

[src/sales_invoices.scailo_pb.ts:425](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L425)

___

### cumulativeExcessTaxAmount

• `Optional` **cumulativeExcessTaxAmount**: `bigint`

**`Optional`**

**`Description`**

The monetary amount of the cumulative excess tax applied to the invoice, represented in the base currency subunit.

**`Example`**

```ts
1250
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 cumulative_excess_tax_amount = 20;

#### Defined in

[src/sales_invoices.scailo_pb.ts:505](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L505)

___

### cumulativeExcessTaxGroupId

• `Optional` **cumulativeExcessTaxGroupId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of an excess tax group applied at the cumulative/invoice level (e.g., for specialized regional surcharges or cumulative tax brackets).

**`Example`**

```ts
6
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 cumulative_excess_tax_group_id = 19;

#### Defined in

[src/sales_invoices.scailo_pb.ts:489](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L489)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the currency used for all financial calculations and billing within this invoice.

**`Example`**

```ts
3
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 currency_id = 14;

#### Defined in

[src/sales_invoices.scailo_pb.ts:409](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L409)

___

### entityUuid

• `Optional` **entityUuid**: `string`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: optional string entity_uuid = 1;

#### Defined in

[src/sales_invoices.scailo_pb.ts:313](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L313)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

**`Optional`**

**`Description`**

A collection of dynamic form fields for organization-specific data.

**`Example`**

```ts
[]
```

**`Format`**

An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/sales_invoices.scailo_pb.ts:519](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L519)

___

### miscellaneousCost

• `Optional` **miscellaneousCost**: `bigint`

**`Optional`**

**`Description`**

Any additional miscellaneous costs (e.g., late fees, freight charges) applied to the invoice, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
1500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 miscellaneous_cost = 16;

#### Defined in

[src/sales_invoices.scailo_pb.ts:441](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L441)

___

### overallDiscount

• `Optional` **overallDiscount**: `bigint`

**`Optional`**

**`Description`**

A flat discount amount applied across the entire invoice total, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 overall_discount = 17;

#### Defined in

[src/sales_invoices.scailo_pb.ts:457](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L457)

___

### refFrom

• **refFrom**: [`SALES_INVOICE_REF_FROM`](../enums/SALES_INVOICE_REF_FROM.md) = `SALES_INVOICE_REF_FROM.SALES_INVOICE_REF_FROM_ANY_UNSPECIFIED`

**`Mandatory`**

**`Description`**

The specific module or record type from which this invoice originates (e.g., Sales Order).

**`Example`**

```ts
"SALES_INVOICE_REF_FROM_SALES_ORDER"
```

**`Regex`**

^[A-Z_]+$

**`Format`**

Valid SALES_INVOICE_REF_FROM enum value. Cannot be unspecified (0).

**`Generated`**

from field: Scailo.SALES_INVOICE_REF_FROM ref_from = 12;

#### Defined in

[src/sales_invoices.scailo_pb.ts:377](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L377)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the specific referenced source document (e.g., the ID of the actual Sales Order being billed).

**`Example`**

```ts
1024
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/sales_invoices.scailo_pb.ts:393](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L393)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

**`Description`**

A unique external reference ID for the record. Must be alphanumeric (spaces allowed). Used for cross-referencing with external systems.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/sales_invoices.scailo_pb.ts:361](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L361)

___

### roundOff

• `Optional` **roundOff**: `bigint`

**`Optional`**

**`Description`**

The applicable rounding adjustment amount to align the final invoice total. Can be positive or negative, represented in the base currency subunit.

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

[src/sales_invoices.scailo_pb.ts:473](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L473)

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

from field: optional string user_comment = 2;

#### Defined in

[src/sales_invoices.scailo_pb.ts:329](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L329)

___

### vaultFolderId

• `Optional` **vaultFolderId**: `bigint`

**`Optional`**

**`Description`**

The ID of the associated vault folder for storing documents. Defaults to 0 if no specific folder is assigned.

**`Example`**

```ts
15234
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 vault_folder_id = 9;

#### Defined in

[src/sales_invoices.scailo_pb.ts:345](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L345)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_invoices.scailo_pb.ts:528](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L528)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_invoices.scailo_pb.ts:526](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L526)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoicesServiceCreateRequest"``

#### Defined in

[src/sales_invoices.scailo_pb.ts:527](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L527)

## Methods

### clone

▸ **clone**(): [`SalesInvoicesServiceCreateRequest`](SalesInvoicesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`SalesInvoicesServiceCreateRequest`](SalesInvoicesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoicesServiceCreateRequest`](SalesInvoicesServiceCreateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceCreateRequest`](SalesInvoicesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoicesServiceCreateRequest`](SalesInvoicesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoicesServiceCreateRequest`](SalesInvoicesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`SalesInvoicesServiceCreateRequest`](SalesInvoicesServiceCreateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceCreateRequest`](SalesInvoicesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`SalesInvoicesServiceCreateRequest`](SalesInvoicesServiceCreateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceCreateRequest`](SalesInvoicesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_invoices.scailo_pb.ts:557](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L557)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoicesServiceCreateRequest`](SalesInvoicesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoicesServiceCreateRequest`](SalesInvoicesServiceCreateRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:545](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L545)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoicesServiceCreateRequest`](SalesInvoicesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceCreateRequest`](SalesInvoicesServiceCreateRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:549](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L549)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoicesServiceCreateRequest`](SalesInvoicesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceCreateRequest`](SalesInvoicesServiceCreateRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:553](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L553)
