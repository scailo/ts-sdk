[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoicesServiceUpdateRequest

# Class: SalesInvoicesServiceUpdateRequest

Request message for updating an existing Sales Invoice record.
Only applicable for records in `DRAFT` or `REVISION` states.
This message allows for modifying the references, consignee & buyer, currency, project linkage, costs & discounts, payment terms, and other custom form fields
of an established Sales Invoice.

**Note:** Only fields provided in the request will typically be updated.
The unique system ID is required to locate the target record.

**`Generated`**

from message Scailo.SalesInvoicesServiceUpdateRequest

## Hierarchy

- `Message`\<[`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)\>

  ↳ **`SalesInvoicesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalesInvoicesServiceUpdateRequest.md#constructor)

### Properties

- [bankAccountId](SalesInvoicesServiceUpdateRequest.md#bankaccountid)
- [cumulativeExcessTaxAmount](SalesInvoicesServiceUpdateRequest.md#cumulativeexcesstaxamount)
- [cumulativeExcessTaxGroupId](SalesInvoicesServiceUpdateRequest.md#cumulativeexcesstaxgroupid)
- [currencyId](SalesInvoicesServiceUpdateRequest.md#currencyid)
- [formData](SalesInvoicesServiceUpdateRequest.md#formdata)
- [id](SalesInvoicesServiceUpdateRequest.md#id)
- [miscellaneousCost](SalesInvoicesServiceUpdateRequest.md#miscellaneouscost)
- [notifyUsers](SalesInvoicesServiceUpdateRequest.md#notifyusers)
- [overallDiscount](SalesInvoicesServiceUpdateRequest.md#overalldiscount)
- [referenceId](SalesInvoicesServiceUpdateRequest.md#referenceid)
- [roundOff](SalesInvoicesServiceUpdateRequest.md#roundoff)
- [userComment](SalesInvoicesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](SalesInvoicesServiceUpdateRequest.md#vaultfolderid)
- [fields](SalesInvoicesServiceUpdateRequest.md#fields)
- [runtime](SalesInvoicesServiceUpdateRequest.md#runtime)
- [typeName](SalesInvoicesServiceUpdateRequest.md#typename)

### Methods

- [clone](SalesInvoicesServiceUpdateRequest.md#clone)
- [equals](SalesInvoicesServiceUpdateRequest.md#equals)
- [fromBinary](SalesInvoicesServiceUpdateRequest.md#frombinary)
- [fromJson](SalesInvoicesServiceUpdateRequest.md#fromjson)
- [fromJsonString](SalesInvoicesServiceUpdateRequest.md#fromjsonstring)
- [getType](SalesInvoicesServiceUpdateRequest.md#gettype)
- [toBinary](SalesInvoicesServiceUpdateRequest.md#tobinary)
- [toJSON](SalesInvoicesServiceUpdateRequest.md#tojson)
- [toJson](SalesInvoicesServiceUpdateRequest.md#tojson-1)
- [toJsonString](SalesInvoicesServiceUpdateRequest.md#tojsonstring)
- [equals](SalesInvoicesServiceUpdateRequest.md#equals-1)
- [fromBinary](SalesInvoicesServiceUpdateRequest.md#frombinary-1)
- [fromJson](SalesInvoicesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](SalesInvoicesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoicesServiceUpdateRequest**(`data?`): [`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)\> |

#### Returns

[`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)

#### Overrides

Message\&lt;SalesInvoicesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/sales_invoices.scailo_pb.ts:777](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L777)

## Properties

### bankAccountId

• `Optional` **bankAccountId**: `bigint`

**`Optional`**

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

from field: optional uint64 bank_account_id = 15;

#### Defined in

[src/sales_invoices.scailo_pb.ts:681](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L681)

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

[src/sales_invoices.scailo_pb.ts:761](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L761)

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

[src/sales_invoices.scailo_pb.ts:745](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L745)

___

### currencyId

• `Optional` **currencyId**: `bigint`

**`Optional`**

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

from field: optional uint64 currency_id = 14;

#### Defined in

[src/sales_invoices.scailo_pb.ts:665](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L665)

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

[src/sales_invoices.scailo_pb.ts:775](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L775)

___

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target record that needs to be updated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/sales_invoices.scailo_pb.ts:605](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L605)

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

[src/sales_invoices.scailo_pb.ts:697](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L697)

___

### notifyUsers

• `Optional` **notifyUsers**: `boolean`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: optional bool notify_users = 3;

#### Defined in

[src/sales_invoices.scailo_pb.ts:617](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L617)

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

[src/sales_invoices.scailo_pb.ts:713](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L713)

___

### referenceId

• `Optional` **referenceId**: `string`

**`Optional`**

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

from field: optional string reference_id = 10;

#### Defined in

[src/sales_invoices.scailo_pb.ts:649](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L649)

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

[src/sales_invoices.scailo_pb.ts:729](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L729)

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

[src/sales_invoices.scailo_pb.ts:589](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L589)

___

### vaultFolderId

• `Optional` **vaultFolderId**: `bigint`

**`Optional`**

**`Description`**

Updated vault folder ID for documentation storage.

**`Example`**

```ts
15235
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 vault_folder_id = 9;

#### Defined in

[src/sales_invoices.scailo_pb.ts:633](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L633)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_invoices.scailo_pb.ts:784](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L784)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_invoices.scailo_pb.ts:782](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L782)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoicesServiceUpdateRequest"``

#### Defined in

[src/sales_invoices.scailo_pb.ts:783](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L783)

## Methods

### clone

▸ **clone**(): [`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_invoices.scailo_pb.ts:812](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L812)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:800](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L800)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:804](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L804)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:808](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L808)
