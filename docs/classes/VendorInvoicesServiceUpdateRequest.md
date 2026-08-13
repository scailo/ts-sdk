[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoicesServiceUpdateRequest

# Class: VendorInvoicesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.VendorInvoicesServiceUpdateRequest

## Hierarchy

- `Message`\<[`VendorInvoicesServiceUpdateRequest`](VendorInvoicesServiceUpdateRequest.md)\>

  ↳ **`VendorInvoicesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](VendorInvoicesServiceUpdateRequest.md#constructor)

### Properties

- [cumulativeExcessTaxAmount](VendorInvoicesServiceUpdateRequest.md#cumulativeexcesstaxamount)
- [cumulativeExcessTaxGroupId](VendorInvoicesServiceUpdateRequest.md#cumulativeexcesstaxgroupid)
- [currencyId](VendorInvoicesServiceUpdateRequest.md#currencyid)
- [formData](VendorInvoicesServiceUpdateRequest.md#formdata)
- [id](VendorInvoicesServiceUpdateRequest.md#id)
- [miscellaneousCost](VendorInvoicesServiceUpdateRequest.md#miscellaneouscost)
- [notifyUsers](VendorInvoicesServiceUpdateRequest.md#notifyusers)
- [overallDiscount](VendorInvoicesServiceUpdateRequest.md#overalldiscount)
- [referenceId](VendorInvoicesServiceUpdateRequest.md#referenceid)
- [roundOff](VendorInvoicesServiceUpdateRequest.md#roundoff)
- [userComment](VendorInvoicesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](VendorInvoicesServiceUpdateRequest.md#vaultfolderid)
- [vendorBillDate](VendorInvoicesServiceUpdateRequest.md#vendorbilldate)
- [vendorBillNo](VendorInvoicesServiceUpdateRequest.md#vendorbillno)
- [fields](VendorInvoicesServiceUpdateRequest.md#fields)
- [runtime](VendorInvoicesServiceUpdateRequest.md#runtime)
- [typeName](VendorInvoicesServiceUpdateRequest.md#typename)

### Methods

- [clone](VendorInvoicesServiceUpdateRequest.md#clone)
- [equals](VendorInvoicesServiceUpdateRequest.md#equals)
- [fromBinary](VendorInvoicesServiceUpdateRequest.md#frombinary)
- [fromJson](VendorInvoicesServiceUpdateRequest.md#fromjson)
- [fromJsonString](VendorInvoicesServiceUpdateRequest.md#fromjsonstring)
- [getType](VendorInvoicesServiceUpdateRequest.md#gettype)
- [toBinary](VendorInvoicesServiceUpdateRequest.md#tobinary)
- [toJSON](VendorInvoicesServiceUpdateRequest.md#tojson)
- [toJson](VendorInvoicesServiceUpdateRequest.md#tojson-1)
- [toJsonString](VendorInvoicesServiceUpdateRequest.md#tojsonstring)
- [equals](VendorInvoicesServiceUpdateRequest.md#equals-1)
- [fromBinary](VendorInvoicesServiceUpdateRequest.md#frombinary-1)
- [fromJson](VendorInvoicesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](VendorInvoicesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoicesServiceUpdateRequest**(`data?`): [`VendorInvoicesServiceUpdateRequest`](VendorInvoicesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoicesServiceUpdateRequest`](VendorInvoicesServiceUpdateRequest.md)\> |

#### Returns

[`VendorInvoicesServiceUpdateRequest`](VendorInvoicesServiceUpdateRequest.md)

#### Overrides

Message\&lt;VendorInvoicesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/vendor_invoices.scailo_pb.ts:621](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendor_invoices.scailo_pb.ts#L621)

## Properties

### cumulativeExcessTaxAmount

• **cumulativeExcessTaxAmount**: `bigint` = `protoInt64.zero`

The excess tax amount

**`Generated`**

from field: uint64 cumulative_excess_tax_amount = 21;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:605](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendor_invoices.scailo_pb.ts#L605)

___

### cumulativeExcessTaxGroupId

• **cumulativeExcessTaxGroupId**: `bigint` = `protoInt64.zero`

The excess tax group

**`Generated`**

from field: uint64 cumulative_excess_tax_group_id = 20;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:598](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendor_invoices.scailo_pb.ts#L598)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated ID of the currency

**`Generated`**

from field: uint64 currency_id = 14;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:556](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendor_invoices.scailo_pb.ts#L556)

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

[src/vendor_invoices.scailo_pb.ts:619](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendor_invoices.scailo_pb.ts#L619)

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

[src/vendor_invoices.scailo_pb.ts:505](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendor_invoices.scailo_pb.ts#L505)

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

Any miscellaneous cost

**`Generated`**

from field: uint64 miscellaneous_cost = 17;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:577](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendor_invoices.scailo_pb.ts#L577)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:517](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendor_invoices.scailo_pb.ts#L517)

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The optional discount amount

**`Generated`**

from field: uint64 overall_discount = 18;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:584](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendor_invoices.scailo_pb.ts#L584)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

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

from field: string reference_id = 10;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:549](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendor_invoices.scailo_pb.ts#L549)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 19;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:591](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendor_invoices.scailo_pb.ts#L591)

___

### userComment

• **userComment**: `string` = `""`

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

from field: string user_comment = 1;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:489](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendor_invoices.scailo_pb.ts#L489)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

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

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:533](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendor_invoices.scailo_pb.ts#L533)

___

### vendorBillDate

• **vendorBillDate**: `string` = `""`

The date on which the bill was raised by the vendor

**`Generated`**

from field: string vendor_bill_date = 16;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:570](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendor_invoices.scailo_pb.ts#L570)

___

### vendorBillNo

• **vendorBillNo**: `string` = `""`

The vendor's bill number

**`Generated`**

from field: string vendor_bill_no = 15;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:563](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendor_invoices.scailo_pb.ts#L563)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:628](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendor_invoices.scailo_pb.ts#L628)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:626](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendor_invoices.scailo_pb.ts#L626)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoicesServiceUpdateRequest"``

#### Defined in

[src/vendor_invoices.scailo_pb.ts:627](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendor_invoices.scailo_pb.ts#L627)

## Methods

### clone

▸ **clone**(): [`VendorInvoicesServiceUpdateRequest`](VendorInvoicesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`VendorInvoicesServiceUpdateRequest`](VendorInvoicesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoicesServiceUpdateRequest`](VendorInvoicesServiceUpdateRequest.md) \| `PlainMessage`\<[`VendorInvoicesServiceUpdateRequest`](VendorInvoicesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoicesServiceUpdateRequest`](VendorInvoicesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoicesServiceUpdateRequest`](VendorInvoicesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`VendorInvoicesServiceUpdateRequest`](VendorInvoicesServiceUpdateRequest.md) \| `PlainMessage`\<[`VendorInvoicesServiceUpdateRequest`](VendorInvoicesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`VendorInvoicesServiceUpdateRequest`](VendorInvoicesServiceUpdateRequest.md) \| `PlainMessage`\<[`VendorInvoicesServiceUpdateRequest`](VendorInvoicesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:657](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendor_invoices.scailo_pb.ts#L657)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoicesServiceUpdateRequest`](VendorInvoicesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoicesServiceUpdateRequest`](VendorInvoicesServiceUpdateRequest.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:645](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendor_invoices.scailo_pb.ts#L645)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoicesServiceUpdateRequest`](VendorInvoicesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceUpdateRequest`](VendorInvoicesServiceUpdateRequest.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:649](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendor_invoices.scailo_pb.ts#L649)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoicesServiceUpdateRequest`](VendorInvoicesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceUpdateRequest`](VendorInvoicesServiceUpdateRequest.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:653](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendor_invoices.scailo_pb.ts#L653)
