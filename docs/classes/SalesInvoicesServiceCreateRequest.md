[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoicesServiceCreateRequest

# Class: SalesInvoicesServiceCreateRequest

Describes the parameters necessary to create a record

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

src/sales_invoices.scailo_pb.ts:365

## Properties

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The associated ID of the bank account

**`Generated`**

from field: uint64 bank_account_id = 15;

#### Defined in

src/sales_invoices.scailo_pb.ts:321

___

### cumulativeExcessTaxAmount

• **cumulativeExcessTaxAmount**: `bigint` = `protoInt64.zero`

The excess tax amount

**`Generated`**

from field: uint64 cumulative_excess_tax_amount = 20;

#### Defined in

src/sales_invoices.scailo_pb.ts:356

___

### cumulativeExcessTaxGroupId

• **cumulativeExcessTaxGroupId**: `bigint` = `protoInt64.zero`

The excess tax group

**`Generated`**

from field: uint64 cumulative_excess_tax_group_id = 19;

#### Defined in

src/sales_invoices.scailo_pb.ts:349

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated ID of the currency

**`Generated`**

from field: uint64 currency_id = 14;

#### Defined in

src/sales_invoices.scailo_pb.ts:314

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/sales_invoices.scailo_pb.ts:272

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/sales_invoices.scailo_pb.ts:363

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

Any miscellaneous cost

**`Generated`**

from field: uint64 miscellaneous_cost = 16;

#### Defined in

src/sales_invoices.scailo_pb.ts:328

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The optional discount amount

**`Generated`**

from field: uint64 overall_discount = 17;

#### Defined in

src/sales_invoices.scailo_pb.ts:335

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 12;

#### Defined in

src/sales_invoices.scailo_pb.ts:300

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/sales_invoices.scailo_pb.ts:307

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the sales invoice

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/sales_invoices.scailo_pb.ts:293

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 18;

#### Defined in

src/sales_invoices.scailo_pb.ts:342

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/sales_invoices.scailo_pb.ts:279

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/sales_invoices.scailo_pb.ts:286

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_invoices.scailo_pb.ts:372

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_invoices.scailo_pb.ts:370

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoicesServiceCreateRequest"``

#### Defined in

src/sales_invoices.scailo_pb.ts:371

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

src/sales_invoices.scailo_pb.ts:401

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

src/sales_invoices.scailo_pb.ts:389

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

src/sales_invoices.scailo_pb.ts:393

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

src/sales_invoices.scailo_pb.ts:397
