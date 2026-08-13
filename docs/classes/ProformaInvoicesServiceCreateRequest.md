[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoicesServiceCreateRequest

# Class: ProformaInvoicesServiceCreateRequest

Request message for defining and creating a new Proforma Invoice within the system.
This record serves as a preliminary bill of sale or estimated invoice sent to a buyer in advance
of a shipment or final delivery. It encapsulates the anticipated financial demands for goods or services
(based on a source document like a Sales Order) and is frequently used to secure advance payments,
facilitate customs declarations, or secure internal purchasing approvals on the buyer's end.

**`Generated`**

from message Scailo.ProformaInvoicesServiceCreateRequest

## Hierarchy

- `Message`\<[`ProformaInvoicesServiceCreateRequest`](ProformaInvoicesServiceCreateRequest.md)\>

  ↳ **`ProformaInvoicesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](ProformaInvoicesServiceCreateRequest.md#constructor)

### Properties

- [bankAccountId](ProformaInvoicesServiceCreateRequest.md#bankaccountid)
- [cumulativeExcessTaxAmount](ProformaInvoicesServiceCreateRequest.md#cumulativeexcesstaxamount)
- [cumulativeExcessTaxGroupId](ProformaInvoicesServiceCreateRequest.md#cumulativeexcesstaxgroupid)
- [currencyId](ProformaInvoicesServiceCreateRequest.md#currencyid)
- [entityUuid](ProformaInvoicesServiceCreateRequest.md#entityuuid)
- [formData](ProformaInvoicesServiceCreateRequest.md#formdata)
- [miscellaneousCost](ProformaInvoicesServiceCreateRequest.md#miscellaneouscost)
- [overallDiscount](ProformaInvoicesServiceCreateRequest.md#overalldiscount)
- [refFrom](ProformaInvoicesServiceCreateRequest.md#reffrom)
- [refId](ProformaInvoicesServiceCreateRequest.md#refid)
- [referenceId](ProformaInvoicesServiceCreateRequest.md#referenceid)
- [roundOff](ProformaInvoicesServiceCreateRequest.md#roundoff)
- [userComment](ProformaInvoicesServiceCreateRequest.md#usercomment)
- [vaultFolderId](ProformaInvoicesServiceCreateRequest.md#vaultfolderid)
- [fields](ProformaInvoicesServiceCreateRequest.md#fields)
- [runtime](ProformaInvoicesServiceCreateRequest.md#runtime)
- [typeName](ProformaInvoicesServiceCreateRequest.md#typename)

### Methods

- [clone](ProformaInvoicesServiceCreateRequest.md#clone)
- [equals](ProformaInvoicesServiceCreateRequest.md#equals)
- [fromBinary](ProformaInvoicesServiceCreateRequest.md#frombinary)
- [fromJson](ProformaInvoicesServiceCreateRequest.md#fromjson)
- [fromJsonString](ProformaInvoicesServiceCreateRequest.md#fromjsonstring)
- [getType](ProformaInvoicesServiceCreateRequest.md#gettype)
- [toBinary](ProformaInvoicesServiceCreateRequest.md#tobinary)
- [toJSON](ProformaInvoicesServiceCreateRequest.md#tojson)
- [toJson](ProformaInvoicesServiceCreateRequest.md#tojson-1)
- [toJsonString](ProformaInvoicesServiceCreateRequest.md#tojsonstring)
- [equals](ProformaInvoicesServiceCreateRequest.md#equals-1)
- [fromBinary](ProformaInvoicesServiceCreateRequest.md#frombinary-1)
- [fromJson](ProformaInvoicesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](ProformaInvoicesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoicesServiceCreateRequest**(`data?`): [`ProformaInvoicesServiceCreateRequest`](ProformaInvoicesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoicesServiceCreateRequest`](ProformaInvoicesServiceCreateRequest.md)\> |

#### Returns

[`ProformaInvoicesServiceCreateRequest`](ProformaInvoicesServiceCreateRequest.md)

#### Overrides

Message\&lt;ProformaInvoicesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/proforma_invoices.scailo_pb.ts:558](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L558)

## Properties

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the organization's bank account designated to receive advance payments based on this proforma invoice.

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

[src/proforma_invoices.scailo_pb.ts:462](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L462)

___

### cumulativeExcessTaxAmount

• `Optional` **cumulativeExcessTaxAmount**: `bigint`

**`Optional`**

**`Description`**

The anticipated monetary amount of the cumulative excess tax applied to the proforma invoice, represented in the base currency subunit.

**`Example`**

```ts
1250
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer. Defaults to 0.

**`Generated`**

from field: optional uint64 cumulative_excess_tax_amount = 20;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:542](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L542)

___

### cumulativeExcessTaxGroupId

• `Optional` **cumulativeExcessTaxGroupId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of an excess tax group anticipated at the cumulative/invoice level (e.g., for specialized regional surcharges).

**`Example`**

```ts
6
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer. Defaults to 0.

**`Generated`**

from field: optional uint64 cumulative_excess_tax_group_id = 19;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:526](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L526)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the currency used for all financial estimations within this proforma invoice.

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

[src/proforma_invoices.scailo_pb.ts:446](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L446)

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

[src/proforma_invoices.scailo_pb.ts:350](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L350)

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

[src/proforma_invoices.scailo_pb.ts:556](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L556)

___

### miscellaneousCost

• `Optional` **miscellaneousCost**: `bigint`

**`Optional`**

**`Description`**

Any estimated additional miscellaneous costs (e.g., anticipated freight charges) applied to the proforma invoice, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
1500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer. Defaults to 0.

**`Generated`**

from field: optional uint64 miscellaneous_cost = 16;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:478](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L478)

___

### overallDiscount

• `Optional` **overallDiscount**: `bigint`

**`Optional`**

**`Description`**

A flat estimated discount amount applied across the entire proforma invoice total, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer. Defaults to 0.

**`Generated`**

from field: optional uint64 overall_discount = 17;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:494](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L494)

___

### refFrom

• **refFrom**: [`PROFORMA_INVOICE_REF_FROM`](../enums/PROFORMA_INVOICE_REF_FROM.md) = `PROFORMA_INVOICE_REF_FROM.PROFORMA_INVOICE_REF_FROM_ANY_UNSPECIFIED`

**`Mandatory`**

**`Description`**

The specific module or record type from which this preliminary invoice originates (e.g., Sales Order).

**`Example`**

```ts
"PROFORMA_INVOICE_REF_FROM_SALES_ORDER"
```

**`Regex`**

^[A-Z_]+$

**`Format`**

Valid PROFORMA_INVOICE_REF_FROM enum value.

**`Generated`**

from field: Scailo.PROFORMA_INVOICE_REF_FROM ref_from = 12;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:414](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L414)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the specific referenced source document (e.g., the ID of the actual Sales Order being estimated).

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

[src/proforma_invoices.scailo_pb.ts:430](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L430)

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

[src/proforma_invoices.scailo_pb.ts:398](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L398)

___

### roundOff

• `Optional` **roundOff**: `bigint`

**`Optional`**

**`Description`**

The estimated rounding adjustment amount to align the anticipated final invoice total. Can be positive or negative, represented in the base currency subunit.

**`Example`**

```ts
-15
```

**`Regex`**

^-?[0-9]+$

**`Format`**

Signed 64-bit integer. Defaults to 0.

**`Generated`**

from field: optional int64 round_off = 18;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:510](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L510)

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

[src/proforma_invoices.scailo_pb.ts:366](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L366)

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

[src/proforma_invoices.scailo_pb.ts:382](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L382)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:565](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L565)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:563](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L563)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoicesServiceCreateRequest"``

#### Defined in

[src/proforma_invoices.scailo_pb.ts:564](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L564)

## Methods

### clone

▸ **clone**(): [`ProformaInvoicesServiceCreateRequest`](ProformaInvoicesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`ProformaInvoicesServiceCreateRequest`](ProformaInvoicesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProformaInvoicesServiceCreateRequest`](ProformaInvoicesServiceCreateRequest.md) \| `PlainMessage`\<[`ProformaInvoicesServiceCreateRequest`](ProformaInvoicesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProformaInvoicesServiceCreateRequest`](ProformaInvoicesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoicesServiceCreateRequest`](ProformaInvoicesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`ProformaInvoicesServiceCreateRequest`](ProformaInvoicesServiceCreateRequest.md) \| `PlainMessage`\<[`ProformaInvoicesServiceCreateRequest`](ProformaInvoicesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`ProformaInvoicesServiceCreateRequest`](ProformaInvoicesServiceCreateRequest.md) \| `PlainMessage`\<[`ProformaInvoicesServiceCreateRequest`](ProformaInvoicesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:594](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L594)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoicesServiceCreateRequest`](ProformaInvoicesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceCreateRequest`](ProformaInvoicesServiceCreateRequest.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:582](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L582)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoicesServiceCreateRequest`](ProformaInvoicesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceCreateRequest`](ProformaInvoicesServiceCreateRequest.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:586](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L586)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoicesServiceCreateRequest`](ProformaInvoicesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceCreateRequest`](ProformaInvoicesServiceCreateRequest.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:590](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L590)
