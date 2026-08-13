[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoicesServiceUpdateRequest

# Class: ProformaInvoicesServiceUpdateRequest

Request message for updating an existing Proforma Invoice record.
Only applicable for records in `DRAFT` or `REVISION` states.
This message allows for modifying the references, consignee & buyer, currency, project linkage, costs & discounts, payment terms, and other custom form fields
of an established Proforma Invoice.

**Note:** Only fields provided in the request will typically be updated.
The unique system ID is required to locate the target record.

**`Generated`**

from message Scailo.ProformaInvoicesServiceUpdateRequest

## Hierarchy

- `Message`\<[`ProformaInvoicesServiceUpdateRequest`](ProformaInvoicesServiceUpdateRequest.md)\>

  ↳ **`ProformaInvoicesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ProformaInvoicesServiceUpdateRequest.md#constructor)

### Properties

- [bankAccountId](ProformaInvoicesServiceUpdateRequest.md#bankaccountid)
- [cumulativeExcessTaxAmount](ProformaInvoicesServiceUpdateRequest.md#cumulativeexcesstaxamount)
- [cumulativeExcessTaxGroupId](ProformaInvoicesServiceUpdateRequest.md#cumulativeexcesstaxgroupid)
- [currencyId](ProformaInvoicesServiceUpdateRequest.md#currencyid)
- [formData](ProformaInvoicesServiceUpdateRequest.md#formdata)
- [id](ProformaInvoicesServiceUpdateRequest.md#id)
- [miscellaneousCost](ProformaInvoicesServiceUpdateRequest.md#miscellaneouscost)
- [notifyUsers](ProformaInvoicesServiceUpdateRequest.md#notifyusers)
- [overallDiscount](ProformaInvoicesServiceUpdateRequest.md#overalldiscount)
- [referenceId](ProformaInvoicesServiceUpdateRequest.md#referenceid)
- [roundOff](ProformaInvoicesServiceUpdateRequest.md#roundoff)
- [userComment](ProformaInvoicesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](ProformaInvoicesServiceUpdateRequest.md#vaultfolderid)
- [fields](ProformaInvoicesServiceUpdateRequest.md#fields)
- [runtime](ProformaInvoicesServiceUpdateRequest.md#runtime)
- [typeName](ProformaInvoicesServiceUpdateRequest.md#typename)

### Methods

- [clone](ProformaInvoicesServiceUpdateRequest.md#clone)
- [equals](ProformaInvoicesServiceUpdateRequest.md#equals)
- [fromBinary](ProformaInvoicesServiceUpdateRequest.md#frombinary)
- [fromJson](ProformaInvoicesServiceUpdateRequest.md#fromjson)
- [fromJsonString](ProformaInvoicesServiceUpdateRequest.md#fromjsonstring)
- [getType](ProformaInvoicesServiceUpdateRequest.md#gettype)
- [toBinary](ProformaInvoicesServiceUpdateRequest.md#tobinary)
- [toJSON](ProformaInvoicesServiceUpdateRequest.md#tojson)
- [toJson](ProformaInvoicesServiceUpdateRequest.md#tojson-1)
- [toJsonString](ProformaInvoicesServiceUpdateRequest.md#tojsonstring)
- [equals](ProformaInvoicesServiceUpdateRequest.md#equals-1)
- [fromBinary](ProformaInvoicesServiceUpdateRequest.md#frombinary-1)
- [fromJson](ProformaInvoicesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](ProformaInvoicesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoicesServiceUpdateRequest**(`data?`): [`ProformaInvoicesServiceUpdateRequest`](ProformaInvoicesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoicesServiceUpdateRequest`](ProformaInvoicesServiceUpdateRequest.md)\> |

#### Returns

[`ProformaInvoicesServiceUpdateRequest`](ProformaInvoicesServiceUpdateRequest.md)

#### Overrides

Message\&lt;ProformaInvoicesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/proforma_invoices.scailo_pb.ts:814](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L814)

## Properties

### bankAccountId

• `Optional` **bankAccountId**: `bigint`

**`Optional`**

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

from field: optional uint64 bank_account_id = 15;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:718](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L718)

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

[src/proforma_invoices.scailo_pb.ts:798](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L798)

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

[src/proforma_invoices.scailo_pb.ts:782](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L782)

___

### currencyId

• `Optional` **currencyId**: `bigint`

**`Optional`**

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

from field: optional uint64 currency_id = 14;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:702](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L702)

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

[src/proforma_invoices.scailo_pb.ts:812](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L812)

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

[src/proforma_invoices.scailo_pb.ts:642](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L642)

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

[src/proforma_invoices.scailo_pb.ts:734](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L734)

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

[src/proforma_invoices.scailo_pb.ts:654](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L654)

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

[src/proforma_invoices.scailo_pb.ts:750](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L750)

___

### referenceId

• `Optional` **referenceId**: `string`

**`Optional`**

**`Description`**

Updated alphanumeric reference ID. Must contain at least 1 character.

**`Example`**

```ts
"ABS-2023-001-REV"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: optional string reference_id = 10;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:686](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L686)

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

[src/proforma_invoices.scailo_pb.ts:766](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L766)

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

[src/proforma_invoices.scailo_pb.ts:626](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L626)

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

[src/proforma_invoices.scailo_pb.ts:670](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L670)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:821](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L821)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:819](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L819)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoicesServiceUpdateRequest"``

#### Defined in

[src/proforma_invoices.scailo_pb.ts:820](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L820)

## Methods

### clone

▸ **clone**(): [`ProformaInvoicesServiceUpdateRequest`](ProformaInvoicesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`ProformaInvoicesServiceUpdateRequest`](ProformaInvoicesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProformaInvoicesServiceUpdateRequest`](ProformaInvoicesServiceUpdateRequest.md) \| `PlainMessage`\<[`ProformaInvoicesServiceUpdateRequest`](ProformaInvoicesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProformaInvoicesServiceUpdateRequest`](ProformaInvoicesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoicesServiceUpdateRequest`](ProformaInvoicesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ProformaInvoicesServiceUpdateRequest`](ProformaInvoicesServiceUpdateRequest.md) \| `PlainMessage`\<[`ProformaInvoicesServiceUpdateRequest`](ProformaInvoicesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`ProformaInvoicesServiceUpdateRequest`](ProformaInvoicesServiceUpdateRequest.md) \| `PlainMessage`\<[`ProformaInvoicesServiceUpdateRequest`](ProformaInvoicesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:849](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L849)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoicesServiceUpdateRequest`](ProformaInvoicesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceUpdateRequest`](ProformaInvoicesServiceUpdateRequest.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:837](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L837)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoicesServiceUpdateRequest`](ProformaInvoicesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceUpdateRequest`](ProformaInvoicesServiceUpdateRequest.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:841](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L841)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoicesServiceUpdateRequest`](ProformaInvoicesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceUpdateRequest`](ProformaInvoicesServiceUpdateRequest.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:845](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/proforma_invoices.scailo_pb.ts#L845)
