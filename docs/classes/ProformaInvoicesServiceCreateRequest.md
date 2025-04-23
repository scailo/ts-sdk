[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoicesServiceCreateRequest

# Class: ProformaInvoicesServiceCreateRequest

Describes the parameters necessary to create a record

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

src/proforma_invoices.scailo_pb.ts:427

## Properties

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The associated ID of the bank account

**`Generated`**

from field: uint64 bank_account_id = 15;

#### Defined in

src/proforma_invoices.scailo_pb.ts:383

___

### cumulativeExcessTaxAmount

• **cumulativeExcessTaxAmount**: `bigint` = `protoInt64.zero`

The excess tax amount

**`Generated`**

from field: uint64 cumulative_excess_tax_amount = 20;

#### Defined in

src/proforma_invoices.scailo_pb.ts:418

___

### cumulativeExcessTaxGroupId

• **cumulativeExcessTaxGroupId**: `bigint` = `protoInt64.zero`

The excess tax group

**`Generated`**

from field: uint64 cumulative_excess_tax_group_id = 19;

#### Defined in

src/proforma_invoices.scailo_pb.ts:411

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated ID of the currency

**`Generated`**

from field: uint64 currency_id = 14;

#### Defined in

src/proforma_invoices.scailo_pb.ts:376

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/proforma_invoices.scailo_pb.ts:334

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/proforma_invoices.scailo_pb.ts:425

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

Any miscellaneous cost

**`Generated`**

from field: uint64 miscellaneous_cost = 16;

#### Defined in

src/proforma_invoices.scailo_pb.ts:390

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The optional discount amount

**`Generated`**

from field: uint64 overall_discount = 17;

#### Defined in

src/proforma_invoices.scailo_pb.ts:397

___

### refFrom

• **refFrom**: [`PROFORMA_INVOICE_REF_FROM`](../enums/PROFORMA_INVOICE_REF_FROM.md) = `PROFORMA_INVOICE_REF_FROM.PROFORMA_INVOICE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.PROFORMA_INVOICE_REF_FROM ref_from = 12;

#### Defined in

src/proforma_invoices.scailo_pb.ts:362

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/proforma_invoices.scailo_pb.ts:369

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the proforma invoice

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/proforma_invoices.scailo_pb.ts:355

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 18;

#### Defined in

src/proforma_invoices.scailo_pb.ts:404

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/proforma_invoices.scailo_pb.ts:341

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/proforma_invoices.scailo_pb.ts:348

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/proforma_invoices.scailo_pb.ts:434

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/proforma_invoices.scailo_pb.ts:432

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoicesServiceCreateRequest"``

#### Defined in

src/proforma_invoices.scailo_pb.ts:433

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

src/proforma_invoices.scailo_pb.ts:463

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

src/proforma_invoices.scailo_pb.ts:451

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

src/proforma_invoices.scailo_pb.ts:455

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

src/proforma_invoices.scailo_pb.ts:459
