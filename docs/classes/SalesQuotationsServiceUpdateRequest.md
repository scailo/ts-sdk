[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotationsServiceUpdateRequest

# Class: SalesQuotationsServiceUpdateRequest

Request message for updating an existing Sales Quotation record.
Only applicable for records in `DRAFT` or `REVISION` states.
This message allows for modifying the references, consignee & buyer, currency, project linkage, costs & discounts, payment terms, and other custom form fields
of an established Sales Quotation.

**Note:** Only fields provided in the request will typically be updated.
The unique system ID is required to locate the target record.

**`Generated`**

from message Scailo.SalesQuotationsServiceUpdateRequest

## Hierarchy

- `Message`\<[`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)\>

  ↳ **`SalesQuotationsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalesQuotationsServiceUpdateRequest.md#constructor)

### Properties

- [buyerClientId](SalesQuotationsServiceUpdateRequest.md#buyerclientid)
- [consigneeClientId](SalesQuotationsServiceUpdateRequest.md#consigneeclientid)
- [currencyId](SalesQuotationsServiceUpdateRequest.md#currencyid)
- [formData](SalesQuotationsServiceUpdateRequest.md#formdata)
- [id](SalesQuotationsServiceUpdateRequest.md#id)
- [miscellaneousCost](SalesQuotationsServiceUpdateRequest.md#miscellaneouscost)
- [notifyUsers](SalesQuotationsServiceUpdateRequest.md#notifyusers)
- [overallDiscount](SalesQuotationsServiceUpdateRequest.md#overalldiscount)
- [paymentAdvance](SalesQuotationsServiceUpdateRequest.md#paymentadvance)
- [paymentCycleInDays](SalesQuotationsServiceUpdateRequest.md#paymentcycleindays)
- [projectId](SalesQuotationsServiceUpdateRequest.md#projectid)
- [referenceId](SalesQuotationsServiceUpdateRequest.md#referenceid)
- [roundOff](SalesQuotationsServiceUpdateRequest.md#roundoff)
- [userComment](SalesQuotationsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](SalesQuotationsServiceUpdateRequest.md#vaultfolderid)
- [fields](SalesQuotationsServiceUpdateRequest.md#fields)
- [runtime](SalesQuotationsServiceUpdateRequest.md#runtime)
- [typeName](SalesQuotationsServiceUpdateRequest.md#typename)

### Methods

- [clone](SalesQuotationsServiceUpdateRequest.md#clone)
- [equals](SalesQuotationsServiceUpdateRequest.md#equals)
- [fromBinary](SalesQuotationsServiceUpdateRequest.md#frombinary)
- [fromJson](SalesQuotationsServiceUpdateRequest.md#fromjson)
- [fromJsonString](SalesQuotationsServiceUpdateRequest.md#fromjsonstring)
- [getType](SalesQuotationsServiceUpdateRequest.md#gettype)
- [toBinary](SalesQuotationsServiceUpdateRequest.md#tobinary)
- [toJSON](SalesQuotationsServiceUpdateRequest.md#tojson)
- [toJson](SalesQuotationsServiceUpdateRequest.md#tojson-1)
- [toJsonString](SalesQuotationsServiceUpdateRequest.md#tojsonstring)
- [equals](SalesQuotationsServiceUpdateRequest.md#equals-1)
- [fromBinary](SalesQuotationsServiceUpdateRequest.md#frombinary-1)
- [fromJson](SalesQuotationsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](SalesQuotationsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesQuotationsServiceUpdateRequest**(`data?`): [`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)\> |

#### Returns

[`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)

#### Overrides

Message\&lt;SalesQuotationsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/sales_quotations.scailo_pb.ts:911](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L911)

## Properties

### buyerClientId

• `Optional` **buyerClientId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the buyer client (the entity proposed to be financially responsible for the quotation).

**`Example`**

```ts
1051
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 buyer_client_id = 13;

#### Defined in

[src/sales_quotations.scailo_pb.ts:783](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L783)

___

### consigneeClientId

• `Optional` **consigneeClientId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the consignee client (the entity proposed to physically receive the goods or services).

**`Example`**

```ts
1050
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 consignee_client_id = 12;

#### Defined in

[src/sales_quotations.scailo_pb.ts:767](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L767)

___

### currencyId

• `Optional` **currencyId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the currency used for all financial calculations, billing, and pricing within this quotation.

**`Example`**

```ts
3
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 currency_id = 15;

#### Defined in

[src/sales_quotations.scailo_pb.ts:799](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L799)

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

[src/sales_quotations.scailo_pb.ts:909](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L909)

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

[src/sales_quotations.scailo_pb.ts:707](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L707)

___

### miscellaneousCost

• `Optional` **miscellaneousCost**: `bigint`

**`Optional`**

**`Description`**

Any additional miscellaneous costs (e.g., handling fees, freight charges) proposed for the quotation, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
1500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 miscellaneous_cost = 17;

#### Defined in

[src/sales_quotations.scailo_pb.ts:831](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L831)

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

[src/sales_quotations.scailo_pb.ts:719](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L719)

___

### overallDiscount

• `Optional` **overallDiscount**: `bigint`

**`Optional`**

**`Description`**

A flat discount amount applied across the entire quotation total, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 overall_discount = 18;

#### Defined in

[src/sales_quotations.scailo_pb.ts:847](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L847)

___

### paymentAdvance

• `Optional` **paymentAdvance**: `bigint`

**`Optional`**

**`Description`**

The monetary amount proposed to be paid in advance by the buyer upon conversion, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
10000
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 payment_advance = 20;

#### Defined in

[src/sales_quotations.scailo_pb.ts:879](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L879)

___

### paymentCycleInDays

• `Optional` **paymentCycleInDays**: `bigint`

**`Optional`**

**`Description`**

The proposed payment term or credit cycle duration, measured in days from the invoice date.

**`Example`**

```ts
30
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 payment_cycle_in_days = 21;

#### Defined in

[src/sales_quotations.scailo_pb.ts:895](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L895)

___

### projectId

• `Optional` **projectId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of an associated project, used to track potential sales revenue against specific long-term initiatives.

**`Example`**

```ts
88
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 project_id = 16;

#### Defined in

[src/sales_quotations.scailo_pb.ts:815](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L815)

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

^[0-9A-Za-z ]+$

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: optional string reference_id = 10;

#### Defined in

[src/sales_quotations.scailo_pb.ts:751](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L751)

___

### roundOff

• `Optional` **roundOff**: `bigint`

**`Optional`**

**`Description`**

The applicable rounding adjustment amount to align the final proposed total. Can be positive or negative, represented in the base currency subunit.

**`Example`**

```ts
-15
```

**`Regex`**

^-?[0-9]+$

**`Format`**

Signed 64-bit integer.

**`Generated`**

from field: optional int64 round_off = 19;

#### Defined in

[src/sales_quotations.scailo_pb.ts:863](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L863)

___

### userComment

• `Optional` **userComment**: `string`

**`Optional`**

**`Description`**

Audit log comment or justification for modifying this record. This is stored in the record's history for compliance purposes.

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

[src/sales_quotations.scailo_pb.ts:691](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L691)

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

[src/sales_quotations.scailo_pb.ts:735](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L735)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_quotations.scailo_pb.ts:918](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L918)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_quotations.scailo_pb.ts:916](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L916)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotationsServiceUpdateRequest"``

#### Defined in

[src/sales_quotations.scailo_pb.ts:917](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L917)

## Methods

### clone

▸ **clone**(): [`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_quotations.scailo_pb.ts:948](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L948)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:936](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L936)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:940](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L940)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:944](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L944)
