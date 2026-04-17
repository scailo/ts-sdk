[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoicesServiceCreateRequest

# Class: VendorInvoicesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.VendorInvoicesServiceCreateRequest

## Hierarchy

- `Message`\<[`VendorInvoicesServiceCreateRequest`](VendorInvoicesServiceCreateRequest.md)\>

  ↳ **`VendorInvoicesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](VendorInvoicesServiceCreateRequest.md#constructor)

### Properties

- [cumulativeExcessTaxAmount](VendorInvoicesServiceCreateRequest.md#cumulativeexcesstaxamount)
- [cumulativeExcessTaxGroupId](VendorInvoicesServiceCreateRequest.md#cumulativeexcesstaxgroupid)
- [currencyId](VendorInvoicesServiceCreateRequest.md#currencyid)
- [entityUuid](VendorInvoicesServiceCreateRequest.md#entityuuid)
- [formData](VendorInvoicesServiceCreateRequest.md#formdata)
- [miscellaneousCost](VendorInvoicesServiceCreateRequest.md#miscellaneouscost)
- [overallDiscount](VendorInvoicesServiceCreateRequest.md#overalldiscount)
- [refFrom](VendorInvoicesServiceCreateRequest.md#reffrom)
- [refId](VendorInvoicesServiceCreateRequest.md#refid)
- [referenceId](VendorInvoicesServiceCreateRequest.md#referenceid)
- [roundOff](VendorInvoicesServiceCreateRequest.md#roundoff)
- [userComment](VendorInvoicesServiceCreateRequest.md#usercomment)
- [vaultFolderId](VendorInvoicesServiceCreateRequest.md#vaultfolderid)
- [vendorBillDate](VendorInvoicesServiceCreateRequest.md#vendorbilldate)
- [vendorBillNo](VendorInvoicesServiceCreateRequest.md#vendorbillno)
- [fields](VendorInvoicesServiceCreateRequest.md#fields)
- [runtime](VendorInvoicesServiceCreateRequest.md#runtime)
- [typeName](VendorInvoicesServiceCreateRequest.md#typename)

### Methods

- [clone](VendorInvoicesServiceCreateRequest.md#clone)
- [equals](VendorInvoicesServiceCreateRequest.md#equals)
- [fromBinary](VendorInvoicesServiceCreateRequest.md#frombinary)
- [fromJson](VendorInvoicesServiceCreateRequest.md#fromjson)
- [fromJsonString](VendorInvoicesServiceCreateRequest.md#fromjsonstring)
- [getType](VendorInvoicesServiceCreateRequest.md#gettype)
- [toBinary](VendorInvoicesServiceCreateRequest.md#tobinary)
- [toJSON](VendorInvoicesServiceCreateRequest.md#tojson)
- [toJson](VendorInvoicesServiceCreateRequest.md#tojson-1)
- [toJsonString](VendorInvoicesServiceCreateRequest.md#tojsonstring)
- [equals](VendorInvoicesServiceCreateRequest.md#equals-1)
- [fromBinary](VendorInvoicesServiceCreateRequest.md#frombinary-1)
- [fromJson](VendorInvoicesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](VendorInvoicesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoicesServiceCreateRequest**(`data?`): [`VendorInvoicesServiceCreateRequest`](VendorInvoicesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoicesServiceCreateRequest`](VendorInvoicesServiceCreateRequest.md)\> |

#### Returns

[`VendorInvoicesServiceCreateRequest`](VendorInvoicesServiceCreateRequest.md)

#### Overrides

Message\&lt;VendorInvoicesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/vendor_invoices.scailo_pb.ts:410](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L410)

## Properties

### cumulativeExcessTaxAmount

• **cumulativeExcessTaxAmount**: `bigint` = `protoInt64.zero`

The excess tax amount

**`Generated`**

from field: uint64 cumulative_excess_tax_amount = 21;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:401](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L401)

___

### cumulativeExcessTaxGroupId

• **cumulativeExcessTaxGroupId**: `bigint` = `protoInt64.zero`

The excess tax group

**`Generated`**

from field: uint64 cumulative_excess_tax_group_id = 20;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:394](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L394)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated ID of the currency

**`Generated`**

from field: uint64 currency_id = 14;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:352](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L352)

___

### entityUuid

• **entityUuid**: `string` = `""`

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

from field: string entity_uuid = 1;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:292](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L292)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:408](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L408)

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

Any miscellaneous cost

**`Generated`**

from field: uint64 miscellaneous_cost = 17;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:373](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L373)

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The optional discount amount

**`Generated`**

from field: uint64 overall_discount = 18;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:380](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L380)

___

### refFrom

• **refFrom**: [`VENDOR_INVOICE_REF_FROM`](../enums/VENDOR_INVOICE_REF_FROM.md) = `VENDOR_INVOICE_REF_FROM.VENDOR_INVOICE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.VENDOR_INVOICE_REF_FROM ref_from = 12;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:338](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L338)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:345](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L345)

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

[src/vendor_invoices.scailo_pb.ts:331](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L331)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 19;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:387](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L387)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:299](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L299)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

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

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:315](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L315)

___

### vendorBillDate

• **vendorBillDate**: `string` = `""`

The date on which the bill was raised by the vendor

**`Generated`**

from field: string vendor_bill_date = 16;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:366](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L366)

___

### vendorBillNo

• **vendorBillNo**: `string` = `""`

The vendor's bill number

**`Generated`**

from field: string vendor_bill_no = 15;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:359](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L359)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:417](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L417)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:415](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L415)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoicesServiceCreateRequest"``

#### Defined in

[src/vendor_invoices.scailo_pb.ts:416](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L416)

## Methods

### clone

▸ **clone**(): [`VendorInvoicesServiceCreateRequest`](VendorInvoicesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`VendorInvoicesServiceCreateRequest`](VendorInvoicesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoicesServiceCreateRequest`](VendorInvoicesServiceCreateRequest.md) \| `PlainMessage`\<[`VendorInvoicesServiceCreateRequest`](VendorInvoicesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoicesServiceCreateRequest`](VendorInvoicesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoicesServiceCreateRequest`](VendorInvoicesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`VendorInvoicesServiceCreateRequest`](VendorInvoicesServiceCreateRequest.md) \| `PlainMessage`\<[`VendorInvoicesServiceCreateRequest`](VendorInvoicesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`VendorInvoicesServiceCreateRequest`](VendorInvoicesServiceCreateRequest.md) \| `PlainMessage`\<[`VendorInvoicesServiceCreateRequest`](VendorInvoicesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:447](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L447)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoicesServiceCreateRequest`](VendorInvoicesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoicesServiceCreateRequest`](VendorInvoicesServiceCreateRequest.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:435](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L435)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoicesServiceCreateRequest`](VendorInvoicesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceCreateRequest`](VendorInvoicesServiceCreateRequest.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:439](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L439)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoicesServiceCreateRequest`](VendorInvoicesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceCreateRequest`](VendorInvoicesServiceCreateRequest.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:443](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L443)
